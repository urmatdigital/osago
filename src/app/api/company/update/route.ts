import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { supabase } from '@/lib/supabase';
import { verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function PUT(request: NextRequest) {
  try {
    const token = request.cookies.get('auth_token');
    if (!token) {
      return NextResponse.json({ error: 'Не авторизован' }, { status: 401 });
    }

    const decoded = verify(token.value, JWT_SECRET) as { companyId: string };
    const updateData = await request.json();

    // Удаляем чувствительные поля из обновления
    delete updateData.password;
    delete updateData.role;
    delete updateData.id;
    delete updateData.username;

    const { data: company, error } = await supabase
      .from('companies')
      .update({
        name: updateData.name,
        description: updateData.description,
        address: updateData.address,
        phone: updateData.phone,
        working_hours: updateData.workingHours,
        features: updateData.features,
        updated_at: new Date().toISOString(),
      })
      .eq('id', decoded.companyId)
      .select()
      .single();

    if (error) {
      console.error('Error updating company:', error);
      return NextResponse.json(
        { error: 'Ошибка при обновлении данных' },
        { status: 500 }
      );
    }

    // Удаляем чувствительные данные перед отправкой
    delete company.password_hash;

    return NextResponse.json(company);
  } catch (error) {
    console.error('Error updating company:', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}
