"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { translations } from '../data/translations';

interface InfoAboutOsagoProps {
  language: 'ru' | 'kg';
}

const InfoAboutOsago: React.FC<InfoAboutOsagoProps> = ({ language }) => {
  const t = translations[language];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Основная информация об ОСАГО */}
        <motion.div
          {...fadeInUp}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.whatIsOsago.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t.whatIsOsago.description}
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {t.whyNeeded.title}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.whyNeeded.description}
            </p>
          </div>
        </motion.div>

        {/* Риски */}
        <motion.div
          {...fadeInUp}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t.risks.title}
            </h2>
            <ul className="list-none text-lg text-gray-700 space-y-4">
              {t.risks.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-amber-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Документы */}
        <motion.div
          {...fadeInUp}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-r-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t.documents.title}
            </h2>
            <ul className="list-none text-lg text-gray-700 space-y-4">
              {t.documents.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Штрафы */}
        <motion.div
          {...fadeInUp}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t.penalty.title}
            </h2>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-lg text-red-700 leading-relaxed">
                {t.penalty.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Онлайн оформление */}
        <motion.div
          {...fadeInUp}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t.onlineRegistration.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t.onlineRegistration.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.mbank.kg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                MBANK
              </a>
              <a
                href="https://www.megapay.kg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                MegaPay
              </a>
            </div>
          </div>
        </motion.div>

        {/* Контакты */}
        <motion.div
          {...fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t.contacts.title}
            </h2>
            <div className="bg-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {t.contacts.subtitle}
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {t.contacts.staff.map((person, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {person.name}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    {person.position}
                  </p>
                  <a
                    href={`tel:${person.phone.replace(/[^\d+]/g, '')}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {person.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoAboutOsago;
