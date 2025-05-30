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
        className="lg:hidden fixed top-4 left-4 z-50 flex items-center justify-center w-10 h-10 bg-pine-dark border border-forest-mid rounded-lg"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-snow" />
        ) : (
          <Menu className="w-5 h-5 text-snow" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden fixed left-0 top-0 h-full w-64 bg-pine-dark border-r border-forest-mid z-50 transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-full flex-col pt-16">
          {/* Header */}
          <div className="p-6 border-b border-forest-mid">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-spring text-forest-deep font-bold text-sm">
                ZS
              </div>
              <div>
                <h2 className="text-sm font-semibold text-snow">Zahid Sadman</h2>
                <p className="text-xs text-mist">Full Stack Developer</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={cn(
                    "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm transition-all duration-200",
                    isActive 
                      ? "bg-spring text-forest-deep font-medium" 
                      : "text-mist hover:bg-forest-mid hover:text-snow"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
