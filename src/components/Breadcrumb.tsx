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
    <nav className="flex items-center space-x-2 text-sm text-mist mb-6">
      <Link 
        to="/" 
        className="flex items-center hover:text-spring transition-colors"
      >
        <Home className="w-4 h-4" />
      </Link>
      
      {pathnames.map((pathname, index) => {
        const isLast = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const displayName = breadcrumbNameMap[pathname] || pathname;

        return (
          <div key={pathname} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4 text-stone" />
            {isLast ? (
              <span className="text-snow font-medium">{displayName}</span>
            ) : (
              <Link 
                to={to} 
                className="hover:text-spring transition-colors"
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
