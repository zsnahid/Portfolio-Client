import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      image: 'https://via.placeholder.com/400x200',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: 'https://via.placeholder.com/400x200',
      technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with forecasts, maps, and location-based weather alerts.',
      image: 'https://via.placeholder.com/400x200',
      technologies: ['Vue.js', 'JavaScript', 'Weather API', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false
    },
    {
      title: 'Blog Platform',
      description: 'A modern blog platform with markdown support, commenting system, and SEO optimization.',
      image: 'https://via.placeholder.com/400x200',
      technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-snow font-title">Projects</h1>
        <p className="text-lg text-mist max-w-3xl mx-auto">
          A showcase of my recent work and side projects that demonstrate my skills and passion for development.
        </p>
      </div>

      {/* Featured Projects */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-snow font-title">Featured Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-pine-dark border-forest-mid hover:border-spring transition-colors group">
              <div className="aspect-video bg-forest-mid flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-snow font-title">{project.title}</h3>
                <p className="text-mist">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-forest-mid text-snow border-stone">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-4 pt-2">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-mist hover:text-spring transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-mist hover:text-spring transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-snow font-title">Other Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <Card key={index} className="p-6 bg-pine-dark border-forest-mid hover:border-spring transition-colors">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-snow font-title">{project.title}</h3>
                <p className="text-mist text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-forest-mid text-snow border-stone text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-mist hover:text-spring transition-colors text-sm"
                  >
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-mist hover:text-spring transition-colors text-sm"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
