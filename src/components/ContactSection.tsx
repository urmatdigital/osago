'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface ContactSectionProps {
  language: 'ru' | 'kg';
}

const translations = {
  ru: {
    title: "Свяжитесь с нами",
    description: "Мы готовы ответить на все ваши вопросы о страховании ОСАГО",
    address: "ул. Киевская 218, Бишкек",
    email: "info@osago.kg",
    phone: "+996 (312) 900 900",
    form: {
      name: "Ваше имя",
      email: "Электронная почта",
      message: "Сообщение",
      send: "Отправить сообщение"
    }
  },
  kg: {
    title: "Биз менен байланышыңыз",
    description: "ОСАГО камсыздандыруу боюнча бардык суроолоруңузга жооп берүүгө даярбыз",
    address: "Киев көч. 218, Бишкек",
    email: "info@osago.kg",
    phone: "+996 (312) 900 900",
    form: {
      name: "Сиздин атыңыз",
      email: "Электрондук почта",
      message: "Билдирүү",
      send: "Билдирүү жөнөтүү"
    }
  }
};

const ContactSection = ({ language }: ContactSectionProps) => {
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

        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="grid gap-8">
              {/* Address Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <MapPinIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {language === 'ru' ? 'Адрес' : 'Дарек'}
                    </h3>
                    <p className="text-gray-600">{t.address}</p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <EnvelopeIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600">{t.email}</p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <PhoneIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {language === 'ru' ? 'Телефон' : 'Телефон'}
                    </h3>
                    <p className="text-gray-600">{t.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg border border-gray-100"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.form.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-200"
              >
                {t.form.send}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
