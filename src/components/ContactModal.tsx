import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink, Github, Linkedin, Mail, X } from "lucide-react";

interface ContactModalProps {
  children: React.ReactNode;
}

const socialMediaLinks = [
  {
    name: "Email",
    href: "mailto:zahidsadmannahid@gmail.com",
    icon: Mail,
    username: "zahidsadmannahid@gmail.com",
    description: "Send me a direct message",
    color: "hover:text-spring hover:bg-spring/10",
  },
  {
    name: "GitHub",
    href: "https://github.com/zsnahid",
    icon: Github,
    username: "@zsnahid",
    description: "View my code and projects",
    color: "hover:text-mist hover:bg-mist/10",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/zahidsadmansakib/",
    icon: Linkedin,
    username: "zahidsadmansakib",
    description: "Let's connect professionally",
    color: "hover:text-blue-400 hover:bg-blue-400/10",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/zsnahid",
    icon: X,
    username: "@zsnahid",
    description: "Follow me for updates",
    color: "hover:text-bloom hover:bg-bloom/10",
  },
];

export function ContactModal({ children }: ContactModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md animate-in fade-in-0 zoom-in-95 duration-300">
        <DialogHeader className="text-center space-y-3">
          <div className="mx-auto w-12 h-12 bg-gradient-to-br from-spring to-mist rounded-full flex items-center justify-center">
            <Mail className="w-6 h-6 text-forest-deep" />
          </div>
          <DialogTitle className="text-xl">Get In Touch</DialogTitle>
          <DialogDescription className="text-base leading-relaxed">
            I'd love to hear from you! Connect with me through any of these
            platforms and let's start a conversation.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          {socialMediaLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 p-4 rounded-xl bg-forest-mid/50 border border-forest-mid/60 transition-all duration-300 ${social.color} hover:border-current hover:shadow-lg hover:shadow-current/20 hover:scale-[1.02] transform-gpu`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 rounded-full bg-current/10 scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <IconComponent className="relative w-6 h-6 text-mist group-hover:scale-110 transition-all duration-300 group-hover:text-current" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-snow group-hover:text-current transition-colors duration-300 font-title">
                      {social.name}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-mist/60 group-hover:text-current group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <p className="text-sm text-mist/80 group-hover:text-current/80 transition-colors duration-300 font-mono">
                    {social.username}
                  </p>
                  <p className="text-xs text-mist/60 group-hover:text-current/70 transition-colors duration-300">
                    {social.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-6 pt-4 border-t border-forest-mid/40">
          <div className="flex items-center justify-center gap-2 text-xs text-mist/70">
            <div className="w-2 h-2 bg-spring rounded-full animate-pulse" />
            <span>Usually responds within 24 hours</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
