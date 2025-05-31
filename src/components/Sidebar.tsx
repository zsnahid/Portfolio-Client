import { cn } from '@/lib/utils';
import {
  // Briefcase,
  ChevronLeft,
  ChevronRight,
  Code,
  ExternalLink,
  FileText,
  Github,
  Home,
  Linkedin,
  Mail,
  Palette,
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
  // { path: '/experience', label: 'Experience', icon: Briefcase },
  { path: '/projects', label: 'Projects', icon: Code },
  { path: '/colors', label: 'Colors', icon: Palette },
  { path: '/blog', label: 'Blog', icon: FileText },
  { path: '/contact', label: 'Contact', icon: Mail },
];

const socialLinks = [
  { href: 'https://github.com/zsnahid', label: 'GitHub', icon: Github },
  { href: 'https://www.linkedin.com/in/zahidsadmansakib/', label: 'LinkedIn', icon: Linkedin },
];

export function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div 
      className={cn(
        "relative h-screen bg-pine-dark border-r border-forest-mid transition-all duration-500 ease-in-out",
        isCollapsed ? "w-16" : "w-64",
        className
      )}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-[66px] z-50 flex h-6.5 w-6.5 items-center justify-center rounded-full bg-forest-mid border border-stone hover:bg-sage hover:border-mist transition-all duration-200 shadow-lg "
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? (
          <ChevronRight className="h-3.5 w-3.5 text-snow" />
        ) : (
          <ChevronLeft className="h-3.5 w-3.5 text-snow" />
        )}
      </button>

      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="border-b border-forest-mid/80 px-3 py-5">
          <div className="flex items-center justify-between">
            <div className={cn(
              "flex items-center transition-all duration-500",
              isCollapsed ? "w-full justify-center" : "space-x-3.5"
            )}>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-spring to-mist text-forest-deep font-bold text-sm shadow-md ring-2 ring-spring/20">
                ZS
              </div>
              <div className={cn(
                "min-w-0 transition-all duration-500 overflow-hidden",
                isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
              )}>
                <h2 className="font-title text-sm font-semibold text-snow leading-tight tracking-wide whitespace-nowrap">Zahid Sadman</h2>
                <p className="text-xs text-mist/80 leading-relaxed mt-0.5 whitespace-nowrap">Full Stack Developer</p>
              </div>
            </div>
            <div className={cn(
              "ml-2 transition-all duration-500 overflow-hidden",
              isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
            )}>
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3">
          <div className="flex flex-col gap-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "sidebar-nav-item group flex items-center rounded-xl transition-all duration-500 relative",
                    isCollapsed 
                      ? "justify-center h-10 w-10 mx-auto" 
                      : "px-3.5 py-2.5",
                    isActive 
                      ? "bg-gradient-to-r from-spring to-mist text-forest-deep font-medium nav-glow" 
                      : "text-mist hover:bg-forest-mid/60 hover:text-snow hover:shadow-sm"
                  )}
                  title={isCollapsed ? item.label : undefined}
                >
                  <Icon className={cn(
                    "transition-all duration-500 flex-shrink-0",
                    isCollapsed ? "h-5 w-5" : "h-4.5 w-4.5",
                    isActive ? "text-forest-deep" : ""
                  )} />
                  <span className={cn(
                    "text-sm font-medium tracking-wide leading-none whitespace-nowrap transition-all duration-500 overflow-hidden ml-3.5",
                    isCollapsed ? "opacity-0 w-0 ml-0" : "opacity-100 w-auto"
                  )}>
                    {item.label}
                  </span>
                  {/* Active indicator for collapsed state */}
                  {isActive && isCollapsed && (
                    <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-1 h-5 bg-spring rounded-full shadow-sm"></div>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Social Links */}
        <div className="border-t border-forest-mid/80 px-3 py-4">
          {/* Social Links Container */}
          <div className={cn("flex justify-center gap-3.5", isCollapsed ? "flex-col" : "flex-row")}>
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center rounded-lg transition-all duration-500 hover:shadow-md w-10 h-9 p-1 text-mist/80 hover:bg-forest-mid/60 hover:text-spring sidebar-nav-item"
                  title={link.label}
                >
                  <Icon className="h-4.5 w-4.5 transition-transform duration-200" />
                  <ExternalLink className="h-3 w-3 transition-all duration-500 overflow-hidden ml-1.5" />
                </a>
              );
            })}
          </div>
          
          {/* Copyright */}
          <div className={cn(
            "text-center border-t border-forest-mid/40 transition-all duration-500 overflow-hidden",
            isCollapsed ? "pt-0 mt-0 max-h-0 opacity-0" : "pt-3.5 mt-4 max-h-20 opacity-100"
          )}>
            <p className="text-xs text-moss/70 leading-relaxed tracking-wide whitespace-nowrap">
              © 2025 Zahid Sadman
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
