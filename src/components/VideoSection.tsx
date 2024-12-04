"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface VideoSectionProps {
  language: 'ru' | 'kg';
}

const VideoSection = ({ language }: VideoSectionProps) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const translations = {
    ru: {
      section: "Видео",
      title: "Узнайте больше об ОСАГО",
      description: "Полезные видеоматериалы о страховании ОСАГО",
      video1Title: "Что такое ОСАГО?",
      video1Description: "Базовая информация об обязательном страховании",
      video2Title: "Как оформить ОСАГО?",
      video2Description: "Пошаговая инструкция оформления",
      watchVideo: "Смотреть видео",
      close: "Закрыть"
    },
    kg: {
      section: "Видео",
      title: "ОСАГО жөнүндө көбүрөөк билиңиз",
      description: "ОСАГО камсыздандыруу боюнча пайдалуу видеолор",
      video1Title: "ОСАГО деген эмне?",
      video1Description: "Милдеттүү камсыздандыруу жөнүндө негизги маалымат",
      video2Title: "ОСАГО кантип алса болот?",
      video2Description: "Кадам-кадам менен көрсөтмө",
      watchVideo: "Видеону көрүү",
      close: "Жабуу"
    }
  };

  const videos = {
    video1: "YxWqQHiPjJU",
    video2: "0sHxZgvY-zk"
  };

  const t = translations[language];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-blue-800">
      {/* Декоративный фон */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-blue-600/20 mix-blend-overlay"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white/10 to-transparent"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              {t.title}
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              {t.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Видео 1 */}
            <div className="group">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl ring-1 ring-white/20 hover:ring-white/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent 
                              group-hover:from-white/[0.1] transition-colors duration-200"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={() => setActiveVideo(videos.video1)}
                    className="relative group/play transform transition-all duration-200 hover:scale-105"
                  >
                    {/* Круг вокруг кнопки */}
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover/play:bg-white/30 transition-all duration-200"></div>
                    {/* Кнопка воспроизведения */}
                    <div className="relative bg-white rounded-full p-4 group-hover/play:bg-blue-50 transition-colors duration-200">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                </div>
                <Image 
                  src="/video-thumbnail-1.jpg" 
                  alt={t.video1Title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-200"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mt-6 space-y-2">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-100 transition-colors duration-200">
                  {t.video1Title}
                </h3>
                <p className="text-indigo-100">
                  {t.video1Description}
                </p>
                <button 
                  onClick={() => setActiveVideo(videos.video1)}
                  className="inline-flex items-center text-blue-200 hover:text-blue-100 transition-colors duration-200"
                >
                  <span>{t.watchVideo}</span>
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Видео 2 */}
            <div className="group">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl ring-1 ring-white/20 hover:ring-white/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent 
                              group-hover:from-white/[0.1] transition-colors duration-200"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={() => setActiveVideo(videos.video2)}
                    className="relative group/play transform transition-all duration-200 hover:scale-105"
                  >
                    {/* Круг вокруг кнопки */}
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover/play:bg-white/30 transition-all duration-200"></div>
                    {/* Кнопка воспроизведения */}
                    <div className="relative bg-white rounded-full p-4 group-hover/play:bg-blue-50 transition-colors duration-200">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                </div>
                <Image 
                  src="/video-thumbnail-2.jpg" 
                  alt={t.video2Title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-200"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mt-6 space-y-2">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-100 transition-colors duration-200">
                  {t.video2Title}
                </h3>
                <p className="text-indigo-100">
                  {t.video2Description}
                </p>
                <button 
                  onClick={() => setActiveVideo(videos.video2)}
                  className="inline-flex items-center text-blue-200 hover:text-blue-100 transition-colors duration-200"
                >
                  <span>{t.watchVideo}</span>
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно с видео */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm 
                      animate-[fadeIn_0.2s_ease-out]">
          <div className="relative w-full max-w-5xl mx-auto animate-[slideUp_0.3s_ease-out]">
            {/* Кнопка закрытия */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-blue-200 transition-colors duration-200"
            >
              <span className="sr-only">{t.close}</span>
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Контейнер для видео */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
