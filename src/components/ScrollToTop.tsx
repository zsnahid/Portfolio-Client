import { cn } from '@/lib/utils';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={cn(
        "fixed bottom-7 right-7 z-50 flex items-center justify-center w-11 h-11 bg-gradient-to-r from-spring to-mist text-forest-deep rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl ring-2 ring-spring/20 hover:ring-spring/40",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      )}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
