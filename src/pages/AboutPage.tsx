import { AnimatedContainer, AnimatedItem, PageTransition } from '@/components/PageTransition';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <PageTransition>
      <AnimatedContainer>
        <div className="space-y-8">
          <AnimatedItem>
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold text-snow font-title">About Me</h1>
              <p className="text-lg text-mist max-w-3xl mx-auto">
                Learn more about my background, skills, and passion for technology.
              </p>
            </div>
          </AnimatedItem>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatedItem>
              <div className="lg:col-span-1">
                <Card className="p-6 bg-pine-dark border-forest-mid text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-4">
                    <AvatarFallback className="text-2xl bg-spring text-forest-deep">ZS</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-semibold text-snow font-title">Zahid S. Sakib</h2>
                  <p className="text-mist">Full Stack Developer</p>
                </Card>
              </div>
            </AnimatedItem>

            <div className="lg:col-span-2 space-y-6">
              <AnimatedItem>
                <Card className="p-6 bg-pine-dark border-forest-mid">
                  <h3 className="text-xl font-semibold text-snow mb-4 font-title">My Story</h3>
                  <div className="space-y-4 text-mist">
                    <p>
                      I'm a passionate full-stack developer with a love for creating innovative solutions 
                      that make a difference. My journey in technology started with curiosity and has 
                      evolved into a career focused on building scalable, user-friendly applications.
                    </p>
                    <p>
                      With expertise in modern web technologies, I enjoy working on projects that 
                      challenge me to learn and grow while delivering exceptional user experiences.
                    </p>
                  </div>
                </Card>
              </AnimatedItem>

              <AnimatedItem>
                <Card className="p-6 bg-pine-dark border-forest-mid">
                  <h3 className="text-xl font-semibold text-snow mb-4 font-title">Skills & Technologies</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
                      'AWS', 'Docker', 'Git', 'Linux', 'Tailwind CSS', 'Next.js'
                    ].map((skill) => (
                      <div key={skill} className="bg-forest-mid px-3 py-2 rounded-lg text-center">
                        <span className="text-snow text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </AnimatedItem>
            </div>
          </div>
        </div>
      </AnimatedContainer>
    </PageTransition>
  );
}
