"use client";

import React, { useState } from 'react';

interface Branch {
  id: number;
  address: string;
  phone: string;
  workHours: string;
}

interface InsuranceCompany {
  id: number;
  name: string;
  license: string;
  website: string;
  description: string;
  regions: {
    [key: string]: Branch[];
  };
}

interface CompaniesTableProps {
  companies: InsuranceCompany[];
  language: 'ru' | 'kg';
}

const CompaniesTable = ({ companies, language }: CompaniesTableProps) => {
  const [expandedCompany, setExpandedCompany] = useState<number | null>(null);

  const toggleCompany = (companyId: number) => {
    setExpandedCompany(expandedCompany === companyId ? null : companyId);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="table-header">
              {language === 'ru' ? 'Компания' : 'Компания'}
            </th>
            <th className="table-header">
              {language === 'ru' ? 'Филиалы' : 'Филиалдар'}
            </th>
            <th className="table-header">
              {language === 'ru' ? 'Действия' : 'Аракеттер'}
            </th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <tr className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="table-cell">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-gray-700 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {company.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {language === 'ru' ? 'Лицензия:' : 'Лицензия:'} {company.license}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="table-cell">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {Object.values(company.regions).flat().length}
                    </span>
                  </div>
                </td>
                <td className="table-cell">
                  <button
                    onClick={() => toggleCompany(company.id)}
                    className="btn-secondary text-sm"
                  >
                    {expandedCompany === company.id
                      ? (language === 'ru' ? 'Скрыть' : 'Жашыруу')
                      : (language === 'ru' ? 'Показать' : 'Көрсөтүү')}
                  </button>
                </td>
              </tr>
              {expandedCompany === company.id && (
                <tr>
                  <td colSpan={3} className="p-0">
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-8">
                      <div className="grid gap-8">
                        {Object.entries(company.regions).map(([region, branches]) => (
                          <div key={region} className="space-y-4">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                              <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {region}
                            </h4>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                              {branches.map((branch, index) => (
                                <div
                                  key={index}
                                  className="glass-card p-4 hover-lift"
                                >
                                  <div className="glass-effect"></div>
                                  <div className="space-y-3">
                                    <div className="flex items-start">
                                      <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                      </svg>
                                      <span className="text-gray-700 dark:text-gray-300">
                                        {branch.address}
                                      </span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                      </svg>
                                      {branch.phone}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                      {branch.workHours}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompaniesTable;
