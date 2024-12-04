import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  language: 'ru' | 'kg';
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const handleCalculatorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#calculator');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const content = {
    ru: {
      title: "Страхование ОСАГО",
      subtitle: "Защитите себя и свой автомобиль с обязательным страхованием ОСАГО",
      cta: "Рассчитать стоимость",
      features: [
        {
          title: "Быстрое оформление",
          description: "Оформление полиса за 15 минут",
          icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          )
        },
        {
          title: "Надежная защита",
          description: "Гарантированные страховые выплаты",
          icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          )
        },
        {
          title: "Круглосуточная поддержка",
          description: "Поддержка 24/7 по всем вопросам",
          icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          )
        }
      ]
    },
    kg: {
      title: "ОСАГО камсыздандыруу",
      subtitle: "Өзүңүздү жана унааңызды ОСАГО милдеттүү камсыздандыруу менен коргоңуз",
      cta: "Наркын эсептөө",
      features: [
        {
          title: "Тез тариздөө",
          description: "15 мүнөттүн ичинде полисти тариздөө",
          icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          )
        },
        {
          title: "Ишенимдүү коргоо",
          description: "Кепилденген камсыздандыруу төлөмдөрү",
          icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          )
        },
        {
          title: "24/7 колдоо",
          description: "Бардык суроолор боюнча күнү-түнү колдоо",
          icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          )
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      {/* Декоративные элементы */}
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-blue-500/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-800/10"></div>
        
        {/* Анимированные круги */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-blob"></div>
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
          <div className="w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-12">
            {/* Заголовок и подзаголовок */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                {t.title}
              </h1>
              <p className="mx-auto max-w-3xl text-xl text-blue-100 sm:text-2xl">
                {t.subtitle}
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 flex justify-center"
              >
                <a
                  href="#calculator"
                  onClick={handleCalculatorClick}
                  className="rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  {t.cta}
                </a>
              </motion.div>
            </motion.div>

            {/* Преимущества */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {t.features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative rounded-2xl bg-white/10 backdrop-blur-lg p-8 shadow-lg hover:bg-white/[0.15] transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500 text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                      <p className="mt-2 text-blue-100">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;