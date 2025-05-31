import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap: Record<string, string> = {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    blog: 'Blog',
    contact: 'Contact',
  };

  return (
    <nav className="flex items-center gap-2.5 text-sm text-mist mb-5 pl-12 lg:pl-0">
      <Link 
        to="/" 
        className="flex items-center hover:text-spring transition-colors p-1 rounded-md hover:bg-forest-mid/30"
      >
        <Home className="w-4.5 h-4.5" />
      </Link>
      
      {pathnames.map((pathname, index) => {
        const isLast = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const displayName = breadcrumbNameMap[pathname] || pathname;

        return (
          <div key={pathname} className="flex items-center gap-2.5">
            <ChevronRight className="w-3.5 h-3.5 text-stone/70" />
            {isLast ? (
              <span className="text-snow font-medium tracking-wide">{displayName}</span>
            ) : (
              <Link 
                to={to} 
                className="hover:text-spring transition-colors px-1.5 py-0.5 rounded-md hover:bg-forest-mid/30"
              >
                {displayName}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
