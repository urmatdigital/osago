'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface CompanyInfo {
  id: string;
  name: string;
  description: string;
  address: string;
  phone: string;
  workingHours: string;
  features: string[];
}

export default function DashboardPage() {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetchCompanyData();
  }, []);

  const fetchCompanyData = async () => {
    try {
      const response = await fetch('/api/company/info');
      if (response.ok) {
        const data = await response.json();
        setCompanyInfo(data);
      } else {
        const error = await response.json();
        setError(error.message || 'Ошибка при загрузке данных');
      }
    } catch (error) {
      setError('Ошибка при загрузке данных');
    }
  };

  const handleSave = async (updatedInfo: CompanyInfo) => {
    try {
      const response = await fetch('/api/company/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedInfo),
      });

      if (response.ok) {
        setCompanyInfo(updatedInfo);
        setIsEditing(false);
        setSuccess('Данные успешно сохранены');
        setTimeout(() => setSuccess(''), 3000);
      } else {
        const error = await response.json();
        setError(error.message || 'Ошибка при сохранении');
      }
    } catch (error) {
      setError('Ошибка при сохранении');
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (error) {
      setError('Ошибка при выходе');
    }
  };

  if (!companyInfo) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl">Загрузка...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Личный кабинет</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="ml-4 px-4 py-2 text-sm text-red-600 hover:text-red-800"
              >
                Выйти
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
            {success}
          </div>
        )}
        
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Информация о компании
              </h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                {isEditing ? 'Отменить' : 'Редактировать'}
              </button>
            </div>

            {isEditing ? (
              <CompanyEditForm
                companyInfo={companyInfo}
                onSave={handleSave}
                onCancel={() => setIsEditing(false)}
              />
            ) : (
              <CompanyInfoDisplay companyInfo={companyInfo} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function CompanyInfoDisplay({ companyInfo }: { companyInfo: CompanyInfo }) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium text-gray-900">Название компании</h3>
        <p className="mt-1 text-gray-600">{companyInfo.name}</p>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">Описание</h3>
        <p className="mt-1 text-gray-600">{companyInfo.description}</p>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">Адрес</h3>
        <p className="mt-1 text-gray-600">{companyInfo.address}</p>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">Телефон</h3>
        <p className="mt-1 text-gray-600">{companyInfo.phone}</p>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">Часы работы</h3>
        <p className="mt-1 text-gray-600">{companyInfo.workingHours}</p>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">Особенности</h3>
        <ul className="mt-1 list-disc list-inside text-gray-600">
          {companyInfo.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CompanyEditForm({
  companyInfo,
  onSave,
  onCancel,
}: {
  companyInfo: CompanyInfo;
  onSave: (info: CompanyInfo) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState(companyInfo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    if (index === newFeatures.length - 1 && value) {
      newFeatures.push('');
    }
    setFormData({ ...formData, features: newFeatures.filter(f => f.trim()) });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Название компании
        </label>
        <input
          type="text"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Описание
        </label>
        <textarea
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          rows={4}
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Адрес
        </label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Телефон
        </label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Часы работы
        </label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.workingHours}
          onChange={(e) =>
            setFormData({ ...formData, workingHours: e.target.value })
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Особенности
        </label>
        <div className="space-y-2">
          {[...formData.features, ''].map((feature, index) => (
            <input
              key={index}
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={feature}
              onChange={(e) => handleFeatureChange(index, e.target.value)}
              placeholder={
                index === formData.features.length ? 'Добавить особенность' : ''
              }
            />
          ))}
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Отменить
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          Сохранить
        </button>
      </div>
    </form>
  );
}
