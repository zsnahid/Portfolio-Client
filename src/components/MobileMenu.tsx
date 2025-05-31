import { cn } from '@/lib/utils';
import { Briefcase, Code, FileText, Home, Mail, Menu, User, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navigationItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/about', label: 'About', icon: User },
  { path: '/experience', label: 'Experience', icon: Briefcase },
  { path: '/projects', label: 'Projects', icon: Code },
  { path: '/blog', label: 'Blog', icon: FileText },
  { path: '/contact', label: 'Contact', icon: Mail },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden fixed top-5 left-5 z-50 flex items-center justify-center w-11 h-11 bg-pine-dark border border-forest-mid/80 rounded-xl shadow-lg hover:bg-forest-mid hover:border-mist transition-all duration-200"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-snow transition-transform duration-200" />
        ) : (
          <Menu className="w-5 h-5 text-snow transition-transform duration-200" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden fixed left-0 top-0 h-full w-72 bg-pine-dark border-r border-forest-mid/80 z-50 transform transition-transform duration-300 ease-in-out shadow-2xl",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-full flex-col pt-20">
          {/* Header */}
          <div className="px-5.5 py-5.5 border-b border-forest-mid/80">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-spring to-mist text-forest-deep font-bold text-base shadow-md ring-2 ring-spring/20">
                ZS
              </div>
              <div className="min-w-0">
                <h2 className="text-base font-semibold text-snow leading-tight tracking-wide">Zahid Sadman</h2>
                <p className="text-sm text-mist/80 leading-relaxed mt-0.5">Full Stack Developer</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 pt-6 pb-4 px-5">
            <div className="flex flex-col gap-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className={cn(
                      "group flex items-center gap-4 rounded-xl px-4.5 py-3.5 transition-all duration-200 relative sidebar-nav-item",
                      isActive 
                        ? "bg-gradient-to-r from-spring to-mist text-forest-deep font-medium shadow-md ring-1 ring-spring/30" 
                        : "text-mist hover:bg-forest-mid/60 hover:text-snow hover:shadow-sm"
                    )}
                  >
                    <Icon className={cn(
                      "transition-all duration-200 flex-shrink-0",
                      "h-5 w-5",
                      isActive ? "text-forest-deep" : "group-hover:scale-110"
                    )} />
                    <span className="text-sm font-medium tracking-wide leading-none whitespace-nowrap">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="px-5 pt-4 pb-5 border-t border-forest-mid/80">
            <div className="text-center">
              <p className="text-xs text-moss/70 leading-relaxed tracking-wide">
                © 2025 Zahid Sadman
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
