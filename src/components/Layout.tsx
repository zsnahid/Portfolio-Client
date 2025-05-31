import { Breadcrumb } from '@/components/Breadcrumb';
import { MobileMenu } from '@/components/MobileMenu';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Sidebar } from '@/components/Sidebar';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="flex h-screen bg-forest-deep">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu />
      
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-6 py-7 max-w-6xl lg:pl-7 pl-16">
          <Breadcrumb />
          <div className="mt-4">
            <Outlet />
          </div>
        </div>
        <ScrollToTop />
      </main>
    </div>
  );
}
