import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('companies')
      .select('id')
      .limit(1);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Подключение к Supabase успешно!' });
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка подключения к базе данных' }, { status: 500 });
  }
}
