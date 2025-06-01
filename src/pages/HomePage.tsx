import { PageTransition } from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <PageTransition>
      <div className="h-[calc(100lvh-120px)] flex items-center justify-center p-3 sm:p-4">
        <Card className="w-full max-w-md bg-pine-dark border-forest-mid/80 shadow-lg rounded-2xl sm:rounded-3xl">
          <div className="p-5 sm:p-8 text-center space-y-4 sm:space-y-6">
            {/* Profile Picture */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="/src/assets/profile.jpeg"
                  alt="Zahid S. Sakib"
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-3 sm:border-4 border-spring/20 shadow-lg object-cover"
                />
                <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-6 h-6 sm:w-8 sm:h-8 bg-spring rounded-full border-3 sm:border-4 border-pine-dark flex items-center justify-center">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-forest-deep rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-xl sm:text-2xl font-bold text-snow font-title">
                Zahid S. Sakib
              </h1>
              <p className="text-sm sm:text-base text-mist font-medium">
                Full Stack Developer
              </p>
              <div className="flex items-center justify-center gap-1 text-xs sm:text-sm text-mist/80">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Bio */}
            <p className="text-xs sm:text-sm text-mist/90 leading-relaxed px-1 sm:px-2">
              Passionate about creating beautiful, functional, and user-friendly applications. 
              Always learning and exploring new technologies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 py-3 sm:py-4 border-t border-b border-forest-mid/40">
              <div className="text-center">
                <div className="text-base sm:text-lg font-semibold text-snow">5+</div>
                <div className="text-xs text-mist/80">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-lg font-semibold text-snow">1+</div>
                <div className="text-xs text-mist/80">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-lg font-semibold text-snow">10+</div>
                <div className="text-xs text-mist/80">Technologies</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 sm:space-y-3 pt-1 sm:pt-2">
              <Link to="/contact" className="block">
                <Button variant="default" size="sm" className="w-full h-8 sm:h-9 text-xs sm:text-sm">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                  Contact Me
                </Button>
              </Link>
              
              <Button 
                variant="secondary" 
                size="sm"
                className="w-full h-8 sm:h-9 text-xs sm:text-sm"
                onClick={() => window.open('https://drive.google.com/file/d/1PpLO1TvHij0ShDWReaabwCssVqOiRZRB/view?usp=drive_link', '_blank')}
              >
                <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </PageTransition>
  );
}
