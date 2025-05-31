import { Breadcrumb } from '@/components/Breadcrumb';
import { MobileMenu } from '@/components/MobileMenu';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Sidebar } from '@/components/Sidebar';
import { AnimatePresence } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';

export function Layout() {
  const location = useLocation();
  
  return (
    <div className="flex h-screen bg-forest-deep">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu />
      
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto p-6 max-w-6xl">
          <Breadcrumb />
          <div className="mt-4">
            <AnimatePresence mode="wait" initial={false}>
              <div key={location.pathname}>
                <Outlet />
              </div>
            </AnimatePresence>
          </div>
        </div>
        <ScrollToTop />
      </main>
    </div>
  );
}
