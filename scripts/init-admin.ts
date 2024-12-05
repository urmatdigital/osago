import dbConnect from '../src/lib/db';
import Company from '../src/models/Company';
import bcrypt from 'bcryptjs';

async function createAdmin() {
  try {
    await dbConnect();

    // Проверяем, существует ли уже админ
    const existingAdmin = await Company.findOne({ role: 'admin' });
    if (existingAdmin) {
      console.log('Администратор уже существует');
      process.exit(0);
    }

    // Создаем админа
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const admin = new Company({
      name: 'Администратор',
      email: 'admin@example.com',
      password: hashedPassword,
      role: 'admin',
      description: 'Администратор системы',
      address: '-',
      phone: '-',
      workingHours: '-',
      features: [],
    });

    await admin.save();
    console.log('Администратор успешно создан');
    console.log('Email: admin@example.com');
    console.log('Пароль: admin123');
  } catch (error) {
    console.error('Ошибка при создании администратора:', error);
  } finally {
    process.exit(0);
  }
}

createAdmin();
