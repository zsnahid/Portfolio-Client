import { Card } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-snow">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-mist max-w-2xl mx-auto">
          Full Stack Developer passionate about creating beautiful, functional, and user-friendly applications.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6 bg-pine-dark border-forest-mid hover:border-spring transition-colors">
          <h3 className="text-lg font-semibold text-snow mb-2">Frontend</h3>
          <p className="text-mist">React, TypeScript, Tailwind CSS, Next.js</p>
        </Card>
        
        <Card className="p-6 bg-pine-dark border-forest-mid hover:border-spring transition-colors">
          <h3 className="text-lg font-semibold text-snow mb-2">Backend</h3>
          <p className="text-mist">Node.js, Express, Python, PostgreSQL</p>
        </Card>
        
        <Card className="p-6 bg-pine-dark border-forest-mid hover:border-spring transition-colors">
          <h3 className="text-lg font-semibold text-snow mb-2">Tools</h3>
          <p className="text-mist">Git, Docker, AWS, Linux</p>
        </Card>
      </div>
    </div>
  );
}
