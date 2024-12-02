'use client';

import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeaderProps {
  language: 'ru' | 'kg';
  onLanguageChange: () => void;
}

const translations = {
  ru: {
    calculator: 'Калькулятор ОСАГО',
    companies: 'Страховые компании',
    about: 'О системе',
    contacts: 'Контакты',
    langButton: 'KG'
  },
  kg: {
    calculator: 'ОСАГО калькулятору',
    companies: 'Камсыздандыруу компаниялары',
    about: 'Система жөнүндө',
    contacts: 'Байланыштар',
    langButton: 'RU'
  }
};

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center space-x-3 group" onClick={handleNavClick}>
              <div className="w-8 h-8 relative">
                <Image
                  src="/logo.svg"
                  alt="OSAGO.KG"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              <span className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                OSAGO.KG
              </span>
            </Link>
          </motion.div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-8"
            >
              <a
                href="#calculator"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                onClick={handleNavClick}
              >
                {t.calculator}
              </a>
              <a
                href="#companies"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                onClick={handleNavClick}
              >
                {t.companies}
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                onClick={handleNavClick}
              >
                {t.about}
              </a>
              <a
                href="#contacts"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                onClick={handleNavClick}
              >
                {t.contacts}
              </a>
              <button
                onClick={onLanguageChange}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 hover:shadow-lg"
              >
                {t.langButton}
              </button>
            </motion.div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.2 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            <a
              href="#calculator"
              className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 cursor-pointer"
              onClick={handleNavClick}
            >
              {t.calculator}
            </a>
            <a
              href="#companies"
              className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 cursor-pointer"
              onClick={handleNavClick}
            >
              {t.companies}
            </a>
            <a
              href="#about"
              className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 cursor-pointer"
              onClick={handleNavClick}
            >
              {t.about}
            </a>
            <a
              href="#contacts"
              className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 cursor-pointer"
              onClick={handleNavClick}
            >
              {t.contacts}
            </a>
            <button
              onClick={() => {
                onLanguageChange();
                handleNavClick();
              }}
              className="w-full px-4 py-2 text-center bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors duration-200"
            >
              {t.langButton}
            </button>
          </div>
        </motion.div>
      </div>
    </header>
  );
}