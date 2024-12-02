"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface DocumentsSectionProps {
  language: 'ru' | 'kg';
}

const DocumentsSection = ({ language }: DocumentsSectionProps) => {
  const translations = {
    ru: {
      title: "Необходимые документы",
      description: "Для оформления полиса ОСАГО вам потребуются следующие документы:",
      personalDocs: {
        title: "Личные документы",
        items: [
          "Паспорт владельца транспортного средства",
          "Водительское удостоверение",
          "ИНН владельца"
        ]
      },
      vehicleDocs: {
        title: "Документы на автомобиль",
        items: [
          "Свидетельство о регистрации ТС",
          "Технический паспорт автомобиля",
          "Предыдущий полис ОСАГО (при наличии)"
        ]
      }
    },
    kg: {
      title: "Керектүү документтер",
      description: "ОСАГО полисин тариздөө үчүн төмөнкү документтер талап кылынат:",
      personalDocs: {
        title: "Жеке документтер",
        items: [
          "Унаа ээсинин паспорту",
          "Айдоочулук күбөлүк",
          "Унаа ээсинин ИНН",
        ]
      },
      vehicleDocs: {
        title: "Унаа документтери",
        items: [
          "Унааны каттоо күбөлүгү",
          "Унаанын техникалык паспорту",
          "Мурунку ОСАГО полиси (бар болсо)"
        ]
      }
    }
  };

  const t = translations[language];

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

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Personal Documents Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 mr-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {t.personalDocs.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {t.personalDocs.items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Vehicle Documents Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group"
          >
            <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 mr-4 rounded-full bg-indigo-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {t.vehicleDocs.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {t.vehicleDocs.items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
