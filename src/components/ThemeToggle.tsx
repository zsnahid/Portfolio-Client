import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check if user has a preference stored
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (stored) {
      setIsDark(stored === 'dark');
    } else {
      setIsDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Update document class and localStorage
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="flex items-center justify-center w-8 h-8 rounded-lg bg-forest-mid hover:bg-sage transition-colors hover:scale-105 hover:shadow-sm active:scale-95"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-4.5 w-4.5 text-snow transition-transform duration-200" />
      ) : (
        <Moon className="h-4.5 w-4.5 text-snow transition-transform duration-200" />
      )}
    </button>
  );
}
