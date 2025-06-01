import { cn } from "@/lib/utils";
import {
  // Briefcase,
  Code,
  ExternalLink,
  FileText,
  Github,
  Home,
  Linkedin,
  Menu,
  Palette,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const navigationItems = [
  { path: "/", label: "Home", icon: Home },
  // { path: '/experience', label: 'Experience', icon: Briefcase },
  { path: "/projects", label: "Projects", icon: Code },
  { path: "/colors", label: "Colors", icon: Palette },
  { path: "/blog", label: "Blog", icon: FileText },
];

const socialLinks = [
  { href: "https://github.com/zsnahid", label: "GitHub", icon: Github },
  {
    href: "https://www.linkedin.com/in/zahidsadmansakib/",
    label: "LinkedIn",
    icon: Linkedin,
  },
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
      <div
        className={cn(
          "lg:hidden fixed left-0 top-0 h-full w-72 bg-pine-dark border-r border-forest-mid/80 z-50 transform transition-transform duration-300 ease-in-out shadow-2xl",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col pt-20">
          {/* Header */}
          <div className="px-5.5 py-5 border-b border-forest-mid/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-spring to-mist text-forest-deep font-bold text-base shadow-md ring-2 ring-spring/20">
                  ZS
                </div>
                <div className="min-w-0">
                  <h2 className="text-base font-semibold text-snow leading-tight tracking-wide">
                    Zahid S. Sakib
                  </h2>
                  <p className="text-sm text-mist/80 leading-relaxed mt-0.5">
                    Full Stack Developer
                  </p>
                </div>
              </div>
              <div className="ml-2">
                <ThemeToggle />
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
                        ? "bg-gradient-to-r from-spring to-mist text-forest-deep font-medium glow-spring"
                        : "text-mist hover:bg-forest-mid/60 hover:text-snow hover:shadow-sm"
                    )}
                  >
                    <Icon
                      className={cn(
                        "transition-all duration-200 flex-shrink-0",
                        "h-5 w-5",
                        isActive ? "text-forest-deep" : "group-hover:scale-110"
                      )}
                    />
                    <span className="text-sm font-medium tracking-wide leading-none whitespace-nowrap">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Social Links */}
          <div className="border-t border-forest-mid/80 px-5 py-4">
            {/* Social Links Container */}
            <div className="flex justify-center gap-3.5">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center rounded-lg transition-all duration-300 hover:shadow-md w-9 h-9 text-mist/80 hover:bg-forest-mid/60 hover:text-spring hover:scale-105"
                    title={link.label}
                  >
                    <Icon className="h-4.5 w-4.5 transition-transform duration-200 group-hover:scale-110" />
                    <ExternalLink className="h-3 w-3 transition-all duration-300 ml-1.5 opacity-60 group-hover:opacity-100" />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-center border-t border-forest-mid/40 pt-3.5 mt-4">
              <p className="text-xs text-moss/70 leading-relaxed tracking-wide">
                © 2025 Zahid S. Sakib
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
