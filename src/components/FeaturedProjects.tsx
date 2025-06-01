import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/zsnahid/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.zsnahid.com",
    image: "/src/assets/Screenshot from 2025-05-30 16-59-03.png",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/zsnahid/task-manager",
    liveUrl: "https://tasks.zsnahid.com",
    image: "/src/assets/Screenshot from 2025-05-15 09-36-08.png",
  },
];

export function FeaturedProjects() {
  return (
    <Card className="bg-pine-dark border-forest-mid/80 shadow-xl rounded-2xl h-full">
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-snow font-title">
            Featured Projects
          </h2>
          <Link to="/projects">
            <Button
              variant="ghost"
              size="sm"
              className="text-xs sm:text-sm text-mist hover:text-spring"
            >
              See More
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-forest-mid/30 rounded-xl border border-forest-mid/40 hover:border-spring/40 transition-all duration-300 hover:bg-forest-mid/40 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-32 sm:h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-mid/80 via-transparent to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-snow text-base sm:text-lg group-hover:text-spring transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Action Links */}
                  <div className="flex gap-2 ml-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mist hover:text-spring transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mist hover:text-spring transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-mist/80 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-forest-mid/60 text-mist rounded-md border border-forest-mid/40"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-forest-mid/60 text-mist/60 rounded-md border border-forest-mid/40">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
