import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with a form service like Formspree, Netlify Forms, etc.
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'zahid@example.com',
      href: 'mailto:zahid@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+880 XXX XXX XXXX',
      href: 'tel:+880XXXXXXXXX'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      username: '@zahidsadman'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      username: 'zahid-sadman-sakib'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="font-title text-3xl font-bold text-snow">Get In Touch</h1>
        <p className="text-lg text-mist max-w-3xl mx-auto">
          I'm always interested in new opportunities and collaborations. Let's connect and discuss how we can work together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card className="p-6 bg-pine-dark border-forest-mid">
          <h2 className="font-title text-xl font-semibold text-snow mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-snow mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-forest-mid border border-stone rounded-lg text-snow placeholder-moss focus:outline-none focus:ring-2 focus:ring-spring focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-snow mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-forest-mid border border-stone rounded-lg text-snow placeholder-moss focus:outline-none focus:ring-2 focus:ring-spring focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-snow mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-forest-mid border border-stone rounded-lg text-snow placeholder-moss focus:outline-none focus:ring-2 focus:ring-spring focus:border-transparent"
                placeholder="What's this about?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-snow mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-3 py-2 bg-forest-mid border border-stone rounded-lg text-snow placeholder-moss focus:outline-none focus:ring-2 focus:ring-spring focus:border-transparent resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </div>
            
            <Button 
              type="submit" 
              variant="gradient"
              className="w-full"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card className="p-6 bg-pine-dark border-forest-mid">
            <h2 className="font-title text-xl font-semibold text-snow mb-6">Contact Information</h2>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-forest-mid rounded-lg">
                      <Icon className="w-5 h-5 text-spring" />
                    </div>
                    <div>
                      <p className="text-sm text-mist">{info.label}</p>
                      {info.href === '#' ? (
                        <p className="text-snow">{info.value}</p>
                      ) : (
                        <a 
                          href={info.href}
                          className="text-snow hover:text-spring transition-colors"
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card className="p-6 bg-pine-dark border-forest-mid">
            <h2 className="font-title text-xl font-semibold text-snow mb-6">Follow Me</h2>
            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-forest-mid rounded-lg hover:bg-sage transition-colors group"
                  >
                    <Icon className="w-5 h-5 text-spring group-hover:scale-110 transition-transform" />
                    <div className="flex-1">
                      <p className="text-snow font-medium">{social.label}</p>
                      <p className="text-mist text-sm">{social.username}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-mist group-hover:text-spring transition-colors" />
                  </a>
                );
              })}
            </div>
          </Card>

          <Card className="p-6 bg-pine-dark border-forest-mid">
            <h2 className="font-title text-xl font-semibold text-snow mb-4">Let's Collaborate</h2>
            <p className="text-mist mb-4">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <ul className="space-y-2 text-mist text-sm">
              <li>• Full-stack web development</li>
              <li>• UI/UX design consultation</li>
              <li>• Technical mentoring</li>
              <li>• Open source contributions</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
