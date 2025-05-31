import { AnimatedContainer, AnimatedItem, PageTransition } from '@/components/PageTransition';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';

export default function ExperiencePage() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      location: 'Remote',
      period: '2023 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.',
      technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'PostgreSQL']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      location: 'Dhaka, Bangladesh',
      period: '2022 - 2023',
      description: 'Developed responsive web applications and collaborated with design teams to create exceptional user experiences.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Next.js']
    },
    {
      title: 'Junior Developer',
      company: 'Startup Inc.',
      location: 'Dhaka, Bangladesh',
      period: '2021 - 2022',
      description: 'Built and maintained web applications while learning modern development practices and tools.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'MongoDB']
    }
  ];

  return (
    <PageTransition>
      <AnimatedContainer>
        <div className="space-y-8">
          <AnimatedItem>
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold text-snow font-title">Experience</h1>
              <p className="text-lg text-mist max-w-3xl mx-auto">
                My professional journey and the experiences that have shaped my career.
              </p>
            </div>
          </AnimatedItem>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <AnimatedItem key={index}>
                <Card className="p-6 bg-pine-dark border-forest-mid hover:border-spring transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-snow font-title">{exp.title}</h3>
                      <p className="text-spring font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end space-y-1 mt-2 md:mt-0">
                      <div className="flex items-center text-mist text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-mist text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-mist mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-forest-mid text-snow border-stone">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedContainer>
    </PageTransition>
  );
}
