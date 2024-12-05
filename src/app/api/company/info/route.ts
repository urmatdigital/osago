import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { supabase } from '@/lib/supabase';
import { verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('auth_token');
    if (!token) {
      return NextResponse.json({ error: 'Не авторизован' }, { status: 401 });
    }

    const decoded = verify(token.value, JWT_SECRET) as { companyId: string };
    
    // Получаем данные компании из Supabase
    const { data: company, error } = await supabase
      .from('companies')
      .select('*')
      .eq('id', decoded.companyId)
      .single();
    
    if (error || !company) {
      return NextResponse.json({ error: 'Компания не найдена' }, { status: 404 });
    }

    // Удаляем чувствительные данные
    delete company.password;

    return NextResponse.json(company);
  } catch (error) {
    console.error('Error fetching company info:', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}
