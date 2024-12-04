"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface Branch {
  city: string;
  address: string;
  phone: string[];
}

interface InsuranceCompany {
  id: number;
  name: string;
  phones: string[];
  mainOffice: string;
  branches: Branch[];
  website: string;
}

interface InsuranceCompaniesProps {
  language: 'ru' | 'kg';
}

const insuranceCompanies: InsuranceCompany[] = [
  {
    id: 1,
    name: "ОАО «Государственная Страховая Организация»",
    phones: ["0(312) 65-08-53", "0(312) 65-08-51", "0(312) 65-08-52"],
    mainOffice: "г. Бишкек, ул. Киевская, 218 (пересекает ул. Калыка Акиева)",
    branches: [
      {
        city: "Ош",
        address: "ул. Ленина 221, каб.62,64",
        phone: ["0 (3222) 5-52-31"]
      },
      {
        city: "Каракол",
        address: "ул. Московская, 120 А",
        phone: ["0 (3922) 5-49-10"]
      },
      {
        city: "Талас",
        address: "ул. Бердике-Баатыра 287",
        phone: ["0 (3422) 5-20-60"]
      },
      {
        city: "Джалал-Абад",
        address: "ул. Эркиндик 11",
        phone: ["0 (3722) 2-41-01"]
      },
      {
        city: "Нарын",
        address: "ул. Ленина 76",
        phone: ["0 (3522) 5-71-01"]
      },
      {
        city: "Кадамжай",
        address: "ул. Орозбекова 1",
        phone: ["0 (3655) 5-15-58"]
      }
    ],
    website: "https://gos.kg"
  },
  {
    id: 2,
    name: "ЗАО «НСК»",
    phones: ["0(312) 64-45-55", "0(312) 64-63-80"],
    mainOffice: "г. Бишкек, пер. Клубный, 16",
    branches: [
      {
        city: "Ош",
        address: "ул. Ленина, 302",
        phone: ["+996 (3222) 72 355", "+996 555 838 222", "+996 777 838 222"]
      },
      {
        city: "Бишкек",
        address: "ул. Боконбаева, 158/Исанова",
        phone: ["+996 777 904 888"]
      },
      {
        city: "Бишкек",
        address: "ул. Ахунбаева, 165",
        phone: ["+996 555 641 888"]
      },
      {
        city: "Бишкек",
        address: "ул. Ибраимова, 108",
        phone: ["+996 995 888 180", "+996 312 888 180"]
      }
    ],
    website: "https://nsc.kg"
  },
  {
    id: 3,
    name: "ЗАО СК «Кыргызстан»",
    phones: ["0(312) 38-31-31"],
    mainOffice: "г. Бишкек, ул. Московская, 37 а (пересекает ул. Гоголя)",
    branches: [
      {
        city: "Нарын",
        address: "ул. Ленина 78, 3 этаж 304",
        phone: ["+ 996 707 71 99 62", "+996 3522 5 71 71"]
      },
      {
        city: "Ош",
        address: "ул. Ленина 289 а",
        phone: ["+996 550 04 43 93", "+996 03222 7 05 30", "+996 03222 7 03 63"]
      },
      {
        city: "Талас",
        address: "ул. Бердике-Баатыра 287",
        phone: ["+996 774 61 11 18", "+996 3422 5 64 44", "+996 554 61 11 18"]
      }
    ],
    website: "https://insurance.kg"
  },
  {
    id: 4,
    name: "ЗАО СК «Аю Гарант»",
    phones: ["0(312) 66-17-84", "0 (312) 299 009", "+996 550 29 90 09", "+996 776 29 90 09"],
    mainOffice: "г. Бишкек, ул. Токтогула, 126 (между ул. Логвиненко и Панфилова)",
    branches: [
      {
        city: "Ош",
        address: "ул. Ленина 272/1",
        phone: ["+996 (772) 52 90 09"]
      },
      {
        city: "Талас",
        address: "ул. Сарыгулова 12",
        phone: ["+996 (706) 441 158", "+996 (550) 755 807"]
      },
      {
        city: "Нарын",
        address: "автовокзал",
        phone: ["+996 550 29 90 09"]
      }
    ],
    website: "https://aiugarant.kg"
  },
  {
    id: 5,
    name: "ЗАО «Jubilee Kyrgyzstan Insurance Company»",
    phones: ["0(312) 66-00-44", "0(312) 54-13-73"],
    mainOffice: "г. Бишкек, ул. Панфилова, 178 (между пр. Чуй и ул. Киевская)",
    branches: [
      {
        city: "Ош",
        address: "ул. Разакова 48/а",
        phone: ["+996 553 07-98-81"]
      },
      {
        city: "Бишкек",
        address: "бульвар Эркиндик 21",
        phone: ["+996 312 97-67-97", "+996 555 66-04-50"]
      }
    ],
    website: "https://jubilee.kg"
  },
  {
    id: 6,
    name: "ЗАО СК «Алма Иншуренс»",
    phones: ["0(312) 43-33-33", "+996 509 372037"],
    mainOffice: "г. Бишкек, ул. Огонбаева, 222 (пересекает ул. Ибраимова)",
    branches: [],
    website: "https://alma.kg"
  },
  {
    id: 7,
    name: "ЗАО СК «АТН Полис»",
    phones: ["0(312) 34-37-30", "+996 552 255-999"],
    mainOffice: "г. Бишкек, ул. Токтогула, 230 (пересекает ул. Тимирязева)",
    branches: [
      {
        city: "Ош",
        address: "ул. Курманжан-Датка 244/3",
        phone: ["+996 (3222) 77-027", "+996 555 255-289"]
      }
    ],
    website: "https://atn.kg"
  },
  {
    id: 8,
    name: "ЗАО СК «Арсеналъ-Кыргызстан»",
    phones: ["0(312) 39-82-78", "0(312) 39 82 24", "+996 706 98 56 56", "+996 999 12 21 36"],
    mainOffice: "г. Бишкек, ул. Орозбекова, 26 (пересекает ул. Московская)",
    branches: [],
    website: "https://arsenal.kg"
  },
  {
    id: 9,
    name: "ЗАО «САКБОЛ»",
    phones: ["0(312) 31-66-01", "0(312) 31-66-02"],
    mainOffice: "г. Бишкек, ул. Исанова, 1/5, 7 этаж (пересекает ул. Боконбаева)",
    branches: [],
    website: "https://sakbol.kg"
  },
  {
    id: 10,
    name: "ЗАО СК «А Плюс»",
    phones: ["0(312) 90-15-33", "+996 704 93 73 78", "+996 555 93 73 78"],
    mainOffice: "г. Бишкек, ул. Абдрахманова 176/1 (пересекает ул. Киевская)",
    branches: [],
    website: "https://a-plus.kg"
  },
  {
    id: 11,
    name: "ЗАО СК «Али-Гарант»",
    phones: ["996 558 90 05 22"],
    mainOffice: "г. Бишкек, ул. Жумабека 105/1",
    branches: [],
    website: "https://ali-garant.kg"
  },
  {
    id: 12,
    name: "ЗАО СК «Здоровье»",
    phones: ["996 770 70 11 71"],
    mainOffice: "г. Бишкек, ул. Тыныстанова 138",
    branches: [],
    website: "https://zdorovye.kg"
  },
  {
    id: 13,
    name: "ЗАО «Дордой-Страхование»",
    phones: ["996 709 06 07 09"],
    mainOffice: "г. Бишкек, Кожевенная 1",
    branches: [],
    website: "https://dordoi.kg"
  },
  {
    id: 14,
    name: "ЗАО «Ингосстрах»",
    phones: ["996 (312) 98 67 68"],
    mainOffice: "г. Бишкек, пр. Чуй 219",
    branches: [],
    website: "https://ingosstrakh.kg"
  },
  {
    id: 15,
    name: "ЗАО «Бакай Иншуренс»",
    phones: ["996 555 301 530"],
    mainOffice: "г. Бишкек, ул. Турусбекова 109/1, 1-Этаж, 116-Офис",
    branches: [],
    website: "https://bakai.kg"
  }
];

const translations = {
  ru: {
    title: "Страховые компании",
    description: "Выберите надежную страховую компанию для оформления ОСАГО",
  },
  kg: {
    title: "Камсыздандыруу компаниялары",
    description: "ОСАГО камсыздандыруу үчүн ишенимдүү камсыздандыруу компанияны тандаңыз",
  }
};

const InsuranceCompanies = ({ language }: InsuranceCompaniesProps) => {
  const [expandedCompany, setExpandedCompany] = useState<number | null>(null);
  const t = translations[language];

  // Сортируем компании по количеству филиалов (по убыванию)
  const sortedCompanies = [...insuranceCompanies].sort((a, b) => b.branches.length - a.branches.length);

  const toggleCompany = (id: number) => {
    setExpandedCompany(expandedCompany === id ? null : id);
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sortedCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex flex-col mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {company.name}
                    </h3>
                    {company.branches.length > 0 && (
                      <button
                        onClick={() => toggleCompany(company.id)}
                        className="p-2 rounded-full hover:bg-blue-50 transition-colors duration-300"
                      >
                        <ChevronDownIcon
                          className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${
                            expandedCompany === company.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <a
                      href={`https://www.google.com/maps/search/${encodeURIComponent(company.mainOffice + ', Бишкек, Кыргызстан')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {company.mainOffice}
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {company.phones.map((phone, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a
                          href={`tel:${phone.replace(/[^\d+]/g, '')}`}
                          className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        >
                          {phone}
                        </a>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2 mb-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm">{company.website.replace('https://', '')}</a>
                  </div>

                  {company.branches.length > 0 && (
                    <div className="mt-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span>
                          {language === 'ru' ? 'Филиалов' : 'Филиалдар'}: {company.branches.length}
                        </span>
                      </div>
                    </div>
                  )}

                  <AnimatePresence>
                    {expandedCompany === company.id && company.branches.length > 0 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <h4 className="font-semibold text-gray-900 mb-3">
                            {language === 'ru' ? 'Филиалы' : 'Филиалдар'}:
                          </h4>
                          <div className="space-y-3">
                            {company.branches.map((branch, idx) => (
                              <div key={idx} className="pl-4 border-l-2 border-blue-100">
                                <div className="font-medium text-gray-900">{branch.city}</div>
                                <div className="text-sm text-gray-600">{branch.address}</div>
                                <div className="text-sm text-gray-500">
                                  {branch.phone.join(', ')}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceCompanies;
