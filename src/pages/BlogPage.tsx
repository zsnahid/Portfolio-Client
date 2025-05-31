import { AnimatedContainer, AnimatedItem, PageTransition } from '@/components/PageTransition';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export default function BlogPage() {
  const posts = [
    {
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn best practices for structuring large React applications with TypeScript, including component organization, state management, and testing strategies.',
      date: '2025-05-25',
      readTime: '8 min read',
      tags: ['React', 'TypeScript', 'Architecture'],
      featured: true
    },
    {
      title: 'Modern CSS Techniques for Better User Interfaces',
      excerpt: 'Explore modern CSS features like Grid, Flexbox, and custom properties to create beautiful and responsive user interfaces.',
      date: '2025-05-20',
      readTime: '6 min read',
      tags: ['CSS', 'UI/UX', 'Frontend'],
      featured: true
    },
    {
      title: 'Getting Started with Node.js and Express',
      excerpt: 'A comprehensive guide to building RESTful APIs with Node.js and Express, including authentication, validation, and error handling.',
      date: '2025-05-15',
      readTime: '10 min read',
      tags: ['Node.js', 'Express', 'Backend'],
      featured: false
    },
    {
      title: 'Database Design Best Practices',
      excerpt: 'Learn essential database design principles for building efficient and scalable database schemas.',
      date: '2025-05-10',
      readTime: '7 min read',
      tags: ['Database', 'PostgreSQL', 'Design'],
      featured: false
    },
    {
      title: 'Deploying Applications with Docker and AWS',
      excerpt: 'Step-by-step guide to containerizing applications with Docker and deploying them to AWS for scalable cloud hosting.',
      date: '2025-05-05',
      readTime: '12 min read',
      tags: ['Docker', 'AWS', 'DevOps'],
      featured: false
    }
  ];

  const featuredPosts = posts.filter(p => p.featured);
  const recentPosts = posts.filter(p => !p.featured);

  return (
    <PageTransition>
      <AnimatedContainer>
        <div className="space-y-8">
          <AnimatedItem>
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold text-snow font-title">Blog</h1>
              <p className="text-lg text-mist max-w-3xl mx-auto">
                Thoughts, tutorials, and insights about web development, technology, and programming best practices.
              </p>
            </div>
          </AnimatedItem>

          {/* Featured Posts */}
          <div className="space-y-6">
            <AnimatedItem>
              <h2 className="text-2xl font-semibold text-snow font-title">Featured Posts</h2>
            </AnimatedItem>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredPosts.map((post, index) => (
                <AnimatedItem key={index}>
                  <Card className="p-6 bg-pine-dark border-forest-mid hover:border-spring transition-all duration-200 group cursor-pointer">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 text-sm text-mist">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-snow group-hover:text-spring transition-colors font-title">
                        {post.title}
                      </h3>
                      
                      <p className="text-mist leading-relaxed">{post.excerpt}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-forest-mid text-snow border-stone">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-spring text-sm font-medium group-hover:translate-x-1 transition-transform">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Card>
                </AnimatedItem>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="space-y-6">
            <AnimatedItem>
              <h2 className="text-2xl font-semibold text-snow font-title">Recent Posts</h2>
            </AnimatedItem>
            <div className="space-y-4">
              {recentPosts.map((post, index) => (
                <AnimatedItem key={index}>
                  <Card className="p-6 bg-pine-dark border-forest-mid hover:border-spring transition-all duration-200 group cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex-1 space-y-2">
                        <h3 className="text-lg font-semibold text-snow group-hover:text-spring transition-colors font-title">
                          {post.title}
                        </h3>
                        <p className="text-mist text-sm">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-forest-mid text-snow border-stone text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="md:ml-6 mt-4 md:mt-0 flex flex-col md:items-end space-y-2">
                        <div className="flex items-center text-sm text-mist">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center text-sm text-mist">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </Card>
                </AnimatedItem>
              ))}
            </div>
          </div>
        </div>
      </AnimatedContainer>
    </PageTransition>
  );
}
