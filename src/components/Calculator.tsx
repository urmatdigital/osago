"use client";

import { useState } from 'react';
import {
  BASE_PREMIUM,
  VEHICLE_COEFFICIENTS,
  AGE_EXPERIENCE_COEFFICIENTS,
  DIAGNOSTIC_CARD_COEFFICIENT,
  INSURANCE_PERIOD_COEFFICIENTS,
  TAX_RATE
} from '../utils/calculatorConstants';

interface CalculatorProps {
  language: 'ru' | 'kg';
}

export default function Calculator({ language }: CalculatorProps) {
  const [vehicleType, setVehicleType] = useState('car_up_to_2000');
  const [ageExperience, setAgeExperience] = useState('adult_experienced');
  const [diagnosticCard, setDiagnosticCard] = useState('yes');
  const [insurancePeriod, setInsurancePeriod] = useState('months_9_12');
  const [premium, setPremium] = useState<number | null>(null);

  const translations = {
    ru: {
      title: "Калькулятор ОСАГО",
      description: "Рассчитайте стоимость страховки онлайн",
      vehicleType: "Тип транспортного средства",
      ageExperience: "Возраст и стаж водителя",
      diagnosticCard: "Диагностическая карта",
      insurancePeriod: "Срок страхования",
      calculate: "Рассчитать",
      result: "Сумма страховой премии:",
      som: "сом",
      tax: "включая 3% налог на продажу"
    },
    kg: {
      title: "ОСАГО калькулятору",
      description: "Камсыздандыруу наркын онлайн эсептеңиз",
      vehicleType: "Унаанын түрү",
      ageExperience: "Айдоочунун жашы жана стажы",
      diagnosticCard: "Диагностикалык карта",
      insurancePeriod: "Камсыздандыруу мөөнөтү",
      calculate: "Эсептөө",
      result: "Камсыздандыруу сыйлыгынын суммасы:",
      som: "сом",
      tax: "3% сатуу салыгын кошкондо"
    }
  };

  const t = translations[language];

  const calculatePremium = () => {
    const typeCoefficient = VEHICLE_COEFFICIENTS[vehicleType as keyof typeof VEHICLE_COEFFICIENTS].value;
    const ageExpCoefficient = AGE_EXPERIENCE_COEFFICIENTS[ageExperience as keyof typeof AGE_EXPERIENCE_COEFFICIENTS].value;
    const diagCardCoefficient = DIAGNOSTIC_CARD_COEFFICIENT[diagnosticCard as keyof typeof DIAGNOSTIC_CARD_COEFFICIENT].value;
    const periodCoefficient = INSURANCE_PERIOD_COEFFICIENTS[insurancePeriod as keyof typeof INSURANCE_PERIOD_COEFFICIENTS].value;

    const basePremium = BASE_PREMIUM * typeCoefficient * ageExpCoefficient * diagCardCoefficient * periodCoefficient;
    const finalPremium = basePremium + (basePremium * TAX_RATE);

    setPremium(Math.round(finalPremium));
  };

  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Декоративный фон */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 opacity-50"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-blue-100 to-transparent dark:from-blue-900/20 dark:to-transparent"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
              {t.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t.description}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 backdrop-blur-lg bg-opacity-50 dark:bg-opacity-50 border border-gray-200 dark:border-gray-700">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t.vehicleType}
                  </label>
                  <select
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 
                             rounded-lg text-gray-900 dark:text-white shadow-sm focus:ring-2 focus:ring-blue-500 
                             focus:border-blue-500 transition-colors duration-200"
                  >
                    {Object.entries(VEHICLE_COEFFICIENTS).map(([key, { ru, kg }]) => (
                      <option key={key} value={key}>
                        {language === 'ru' ? ru : kg}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t.ageExperience}
                  </label>
                  <select
                    value={ageExperience}
                    onChange={(e) => setAgeExperience(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 
                             rounded-lg text-gray-900 dark:text-white shadow-sm focus:ring-2 focus:ring-blue-500 
                             focus:border-blue-500 transition-colors duration-200"
                  >
                    {Object.entries(AGE_EXPERIENCE_COEFFICIENTS).map(([key, { ru, kg }]) => (
                      <option key={key} value={key}>
                        {language === 'ru' ? ru : kg}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t.diagnosticCard}
                  </label>
                  <select
                    value={diagnosticCard}
                    onChange={(e) => setDiagnosticCard(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 
                             rounded-lg text-gray-900 dark:text-white shadow-sm focus:ring-2 focus:ring-blue-500 
                             focus:border-blue-500 transition-colors duration-200"
                  >
                    {Object.entries(DIAGNOSTIC_CARD_COEFFICIENT).map(([key, { ru, kg }]) => (
                      <option key={key} value={key}>
                        {language === 'ru' ? ru : kg}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t.insurancePeriod}
                  </label>
                  <select
                    value={insurancePeriod}
                    onChange={(e) => setInsurancePeriod(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 
                             rounded-lg text-gray-900 dark:text-white shadow-sm focus:ring-2 focus:ring-blue-500 
                             focus:border-blue-500 transition-colors duration-200"
                  >
                    {Object.entries(INSURANCE_PERIOD_COEFFICIENTS).map(([key, { ru, kg }]) => (
                      <option key={key} value={key}>
                        {language === 'ru' ? ru : kg}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-6 pt-6">
                <button
                  type="button"
                  onClick={calculatePremium}
                  className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium 
                           rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:ring-4 
                           focus:ring-blue-500/50"
                >
                  {t.calculate}
                </button>

                {premium !== null && (
                  <div className="w-full text-center space-y-2 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                    <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
                      {t.result}
                    </p>
                    <p className="text-4xl font-bold text-gray-900 dark:text-white">
                      {premium.toLocaleString()} {t.som}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {t.tax}
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
