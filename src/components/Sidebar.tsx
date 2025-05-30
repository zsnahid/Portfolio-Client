import { cn } from '@/lib/utils';
import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Code,
  ExternalLink,
  FileText,
  Github,
  Home,
  Linkedin,
  Mail,
  User
} from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

interface SidebarProps {
  className?: string;
}

const navigationItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/about', label: 'About', icon: User },
  { path: '/experience', label: 'Experience', icon: Briefcase },
  { path: '/projects', label: 'Projects', icon: Code },
  { path: '/blog', label: 'Blog', icon: FileText },
  { path: '/contact', label: 'Contact', icon: Mail },
];

const socialLinks = [
  { href: 'https://github.com', label: 'GitHub', icon: Github },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: Linkedin },
];

export function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div 
      className={cn(
        "relative h-screen bg-pine-dark border-r border-forest-mid transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-64",
        className
      )}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-forest-mid border border-stone hover:bg-sage transition-colors"
      >
        {isCollapsed ? (
          <ChevronRight className="h-3 w-3 text-snow" />
        ) : (
          <ChevronLeft className="h-3 w-3 text-snow" />
        )}
      </button>

      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="p-6 border-b border-forest-mid">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-spring text-forest-deep font-bold text-sm">
                ZS
              </div>
              {!isCollapsed && (
                <div>
                  <h2 className="text-sm font-semibold text-snow">Zahid Sadman</h2>
                  <p className="text-xs text-mist">Full Stack Developer</p>
                </div>
              )}
            </div>
            {!isCollapsed && <ThemeToggle />}
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
                className={cn(
                  "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm transition-all duration-200",
                  isActive 
                    ? "bg-spring text-forest-deep font-medium" 
                    : "text-mist hover:bg-forest-mid hover:text-snow",
                  isCollapsed && "justify-center"
                )}
              >
                <Icon className={cn("h-4 w-4", isCollapsed ? "h-5 w-5" : "")} />
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Social Links */}
        <div className="p-4 border-t border-forest-mid">
          <div className={cn(
            "flex space-x-2",
            isCollapsed ? "flex-col space-x-0 space-y-2" : "justify-center"
          )}>
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center justify-center rounded-lg p-2 text-mist hover:bg-forest-mid hover:text-spring transition-colors",
                    isCollapsed ? "w-full" : "w-8 h-8"
                  )}
                  title={link.label}
                >
                  <Icon className="h-4 w-4" />
                  {!isCollapsed && <ExternalLink className="ml-1 h-3 w-3" />}
                </a>
              );
            })}
          </div>
          
          {!isCollapsed && (
            <div className="mt-4 text-center">
              <p className="text-xs text-moss">© 2025 Zahid Sadman</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
