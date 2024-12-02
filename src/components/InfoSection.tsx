"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface InfoSectionProps {
  language: 'ru' | 'kg';
}

const InfoSection = ({ language }: InfoSectionProps) => {
  const translations = {
    ru: {
      title: "Что такое ОСАГО?",
      description: "ОСАГО — это сокращенное название Обязательного Страхования Гражданско-Правовой Ответственности Владельцев Транспортных Средств. С помощью данного полиса водители страхуют свою ответственность на дороге перед третьими лицами.",
      whyNeeded: {
        title: "Зачем это нужно?",
        description: "ОСАГО защищает пострадавших в ДТП, покрывая расходы на лечение и восстановление имущества, а также снижает финансовую нагрузку на виновника аварии. Наличие полиса ОСАГО - это обязательное требование в Кыргызстане, которое повышает безопасность на дорогах и снижает конфликтные ситуации."
      },
      risks: {
        title: "Какие риски покрывает ОСАГО?",
        items: [
          "Ущерб имуществу третьих лиц (автомобили, здания и др.)",
          "Вред здоровью и жизни пострадавших (лечение, компенсации)"
        ]
      }
    },
    kg: {
      title: "ОСАГО деген эмне?",
      description: "ОСАГО – бул Транспорт каражаттарынын ээлеринин Жарандык-укуктук Жоопкерчилигин Милдеттүү камсыздандыруунун кыскартылган аталышы. Бул полистин жардамы менен айдоочулар үчүнчү жактардын алдында жолдогу жоопкерчилигин камсыздандырышат.",
      whyNeeded: {
        title: "Бул эмне үчүн керек?",
        description: "ОСАГО жол кырсыгынан жабыркагандарды дарылоого жана мүлктү калыбына келтирүүгө кеткен чыгымдарды жабуу менен коргойт, ошондой эле кырсыкка себепкердин финансылык жүгүн жеңилдетет. ОСАГО'нун полисин тариздөө - Кыргызстандагы милдеттүү талап, ал жолдордогу коопсуздукту жогорулатып, чыр-чатактарды азайтат."
      },
      risks: {
        title: "ОСАГО кандай коркунучтарды камтыйт?",
        items: [
          "Үчүнчү жактардын мүлкүнө келтирилген зыян (автомобилдер, имараттар ж.б.)",
          "Жабыр тарткандардын ден соолугуна жана өмүрүнө зыян (дарылоо, компенсациялар)"
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
          {/* Why Needed Card */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {t.whyNeeded.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {t.whyNeeded.description}
              </p>
            </div>
          </motion.div>

          {/* Risks Card */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {t.risks.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {t.risks.items.map((item, index) => (
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

export default InfoSection;
