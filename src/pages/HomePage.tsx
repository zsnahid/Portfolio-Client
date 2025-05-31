import { Card } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="space-y-8 relative">
      {/* Weather Widget - Minimal and unobtrusive */}
      {/* <div className="fixed top-20 right-4 z-10 w-40">
        <WeatherWidget />
      </div> */}

      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-snow font-title">
          This Portfolio is under construction
        </h1>
        <p className="text-xl text-mist font-body max-w-2xl mx-auto">
          Full Stack Developer passionate about creating beautiful, functional, and user-friendly applications.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6 bg-pine-dark border-forest-mid hover:border-spring transition-colors">
          <h3 className="text-lg font-semibold text-snow mb-2 font-title">Frontend</h3>
          <p className="text-mist">React, TypeScript, Tailwind CSS, Next.js</p>
        </Card>
        
        <Card className="p-6 bg-pine-dark border-forest-mid hover:border-spring transition-colors">
          <h3 className="text-lg font-semibold text-snow mb-2 font-title">Backend</h3>
          <p className="text-mist">Node.js, Express, Python, PostgreSQL</p>
        </Card>
        
        <Card className="p-6 bg-pine-dark border-forest-mid hover:border-spring transition-colors">
          <h3 className="text-lg font-semibold text-snow mb-2 font-title">Tools</h3>
          <p className="text-mist">Git, Docker, AWS, Linux</p>
        </Card>
      </div>
    </div>
  );
}
