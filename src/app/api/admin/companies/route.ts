import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { supabase } from '@/lib/supabase';
import { verify } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Создание новой компании
export async function POST(request: NextRequest) {
  try {
    // Проверяем токен админа
    const token = request.cookies.get('auth_token');
    if (!token) {
      return NextResponse.json({ error: 'Не авторизован' }, { status: 401 });
    }

    const decoded = verify(token.value, JWT_SECRET) as { role: string };
    if (decoded.role !== 'admin') {
      return NextResponse.json({ error: 'Нет доступа' }, { status: 403 });
    }

    const { username, password, name, description, address, phone, workingHours, features } = await request.json();

    // Хешируем пароль
    const passwordHash = await bcrypt.hash(password, 10);

    // Создаем новую компанию
    const { data: company, error } = await supabase
      .from('companies')
      .insert([
        {
          username,
          password_hash: passwordHash,
          name,
          description,
          address,
          phone,
          working_hours: workingHours,
          features,
          role: 'company'
        }
      ])
      .select('id, username, name, role')
      .single();

    if (error) {
      if (error.code === '23505') { // Unique violation
        return NextResponse.json({ error: 'Логин уже занят' }, { status: 400 });
      }
      throw error;
    }

    return NextResponse.json(company);
  } catch (error) {
    console.error('Error creating company:', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}

// Получение списка всех компаний
export async function GET(request: NextRequest) {
  try {
    // Проверяем токен админа
    const token = request.cookies.get('auth_token');
    if (!token) {
      return NextResponse.json({ error: 'Не авторизован' }, { status: 401 });
    }

    const decoded = verify(token.value, JWT_SECRET) as { role: string };
    if (decoded.role !== 'admin') {
      return NextResponse.json({ error: 'Нет доступа' }, { status: 403 });
    }

    const { data: companies, error } = await supabase
      .from('companies')
      .select('id, username, name, role, created_at')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return NextResponse.json(companies);
  } catch (error) {
    console.error('Error fetching companies:', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}
