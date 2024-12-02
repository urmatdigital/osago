'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FAQItem {
  id: number;
  question: {
    ru: string;
    kg: string;
  };
  answer: {
    ru: string;
    kg: string;
  };
}

interface FAQSectionProps {
  language: 'ru' | 'kg';
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: {
      ru: "Что такое ОСАГО?",
      kg: "ОСАГО деген эмне?"
    },
    answer: {
      ru: "ОСАГО - это обязательное страхование автогражданской ответственности. Этот полис защищает вас от финансовых потерь в случае ДТП, если вы стали виновником аварии.",
      kg: "ОСАГО - бул милдеттүү автожарандык жоопкерчиликти камсыздандыруу. Бул полис сизди кырсыктын күнөөкөрү болсоңуз, финансылык жоготуулардан коргойт."
    }
  },
  {
    id: 2,
    question: {
      ru: "Как оформить ОСАГО?",
      kg: "ОСАГО кантип алса болот?"
    },
    answer: {
      ru: "Для оформления ОСАГО необходимо предоставить: паспорт, водительское удостоверение, свидетельство о регистрации ТС или ПТС, диагностическую карту (для автомобилей старше 3 лет).",
      kg: "ОСАГО алуу үчүн керек: паспорт, айдоочунун күбөлүгү, унаанын каттоо күбөлүгү же ПТС, диагностикалык карта (3 жылдан ашык унаалар үчүн)."
    }
  },
  {
    id: 3,
    question: {
      ru: "Сколько стоит ОСАГО?",
      kg: "ОСАГО канча турат?"
    },
    answer: {
      ru: "Стоимость ОСАГО рассчитывается индивидуально и зависит от многих факторов: мощности двигателя, возраста и стажа водителя, региона использования ТС и других параметров.",
      kg: "ОСАГО баасы жеке эсептелет жана көптөгөн факторлорго көз каранды: кыймылдаткычтын күчү, айдоочунун жашы жана тажрыйбасы, унааны пайдалануу аймагы жана башка параметрлер."
    }
  }
];

const translations = {
  ru: {
    title: "Часто задаваемые вопросы",
    description: "Ответы на самые популярные вопросы о страховании ОСАГО"
  },
  kg: {
    title: "Көп берилүүчү суроолор",
    description: "ОСАГО камсыздандыруу боюнча эң популярдуу суроолорго жооптор"
  }
};

const FAQSection = ({ language }: FAQSectionProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const t = translations[language];

  const toggleQuestion = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
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
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {item.question[language]}
                    </h3>
                    <button
                      onClick={() => toggleQuestion(item.id)}
                      className="p-2 rounded-full hover:bg-blue-50 transition-colors duration-300"
                    >
                      <ChevronDownIcon
                        className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${
                          expandedId === item.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>

                  <AnimatePresence>
                    {expandedId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-gray-600 leading-relaxed">
                            {item.answer[language]}
                          </p>
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

export default FAQSection;
