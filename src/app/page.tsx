"use client";

import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection';
import InfoSection from '../components/InfoSection';
import DocumentsSection from '../components/DocumentsSection';
import Calculator from '../components/Calculator';
import InsuranceCompanies from '../components/InsuranceCompanies';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  const [language, setLanguage] = useState<'ru' | 'kg'>('ru');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ru' ? 'kg' : 'ru');
  };

  return (
    <main className="min-h-screen bg-fixed">
      <div className="background-overlay" />
      <div className="section-pattern" />
      <Header language={language} onLanguageChange={toggleLanguage} />
      <div className="sections-container">
        <div id="hero" className="section-base">
          <div className="section-glow" />
          <div className="section-content">
            <Hero language={language} />
          </div>
        </div>
        <div id="video" className="section-base">
          <div className="section-glow" />
          <div className="section-content">
            <VideoSection language={language} />
          </div>
        </div>
        <div id="calculator" className="section-base">
          <div className="section-glow" />
          <div className="section-content">
            <Calculator language={language} />
          </div>
        </div>
        <div id="companies" className="section-base">
          <div className="section-glow" />
          <div className="section-content">
            <InsuranceCompanies language={language} />
          </div>
        </div>
        <div id="about" className="section-base">
          <div className="section-glow" />
          <div className="section-content">
            <InfoSection language={language} />
            <DocumentsSection language={language} />
            <FAQSection language={language} />
          </div>
        </div>
        <div id="contacts" className="section-base">
          <div className="section-glow" />
          <div className="section-content">
            <ContactSection language={language} />
          </div>
        </div>
      </div>
    </main>
  );
}