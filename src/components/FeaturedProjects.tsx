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
    image: "/api/placeholder/300/200",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/zsnahid/task-manager",
    liveUrl: "https://tasks.zsnahid.com",
    image: "/api/placeholder/300/200",
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
              className="group p-3 sm:p-4 bg-forest-mid/30 rounded-xl border border-forest-mid/40 hover:border-spring/40 transition-all duration-300 hover:bg-forest-mid/40"
            >
              <div className="flex flex-col space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-snow text-sm sm:text-base group-hover:text-spring transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mist hover:text-spring transition-colors duration-300"
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mist hover:text-spring transition-colors duration-300"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-mist/80 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 sm:gap-2 mt-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-forest-mid/60 text-mist rounded-md border border-forest-mid/40"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-forest-mid/60 text-mist/60 rounded-md border border-forest-mid/40">
                      +{project.technologies.length - 3}
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
