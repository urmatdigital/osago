"use client";

import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed bottom-5 right-5 p-2 rounded-lg bg-card
                border border-input shadow-lg 
                hover:bg-accent 
                focus:outline-none focus:ring-2 focus:ring-primary
                transition-all duration-200"
      aria-label="Переключить тему"
    >
      {theme === 'dark' ? (
        <SunIcon className="h-5 w-5 text-primary" />
      ) : (
        <MoonIcon className="h-5 w-5 text-primary" />
      )}
    </button>
  );
}
