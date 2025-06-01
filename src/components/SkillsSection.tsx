import Express from "@/assets/icons/express.svg?react";
import Javascript from "@/assets/icons/javascript.svg?react";
import Mongodb from "@/assets/icons/mongodb.svg?react";
import Mysql from "@/assets/icons/mysql.svg?react";
import Nextdotjs from "@/assets/icons/nextdotjs.svg?react";
import Nodedotjs from "@/assets/icons/nodedotjs.svg?react";
import ReactIcon from "@/assets/icons/react.svg?react";
import Typescript from "@/assets/icons/typescript.svg?react";
import { Card } from "@/components/ui/card";

const skills = [
  { name: "JavaScript", icon: Javascript, color: "hover:text-yellow-400" },
  { name: "TypeScript", icon: Typescript, color: "hover:text-blue-400" },
  { name: "React", icon: ReactIcon, color: "hover:text-cyan-400" },
  { name: "Next.js", icon: Nextdotjs, color: "hover:text-white" },
  { name: "Node.js", icon: Nodedotjs, color: "hover:text-green-400" },
  { name: "Express", icon: Express, color: "hover:text-gray-300" },
  { name: "MongoDB", icon: Mongodb, color: "hover:text-green-500" },
  { name: "MySQL", icon: Mysql, color: "hover:text-blue-500" },
];

export function SkillsSection() {
  return (
    <Card className="bg-pine-dark border-forest-mid/80 shadow-lg rounded-2xl h-full">
      <div className="p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-bold text-snow font-title mb-4">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className={`group flex flex-col items-center p-3 sm:p-4 bg-forest-mid/30 rounded-xl border border-forest-mid/40 hover:border-current transition-all duration-300 hover:bg-forest-mid/40 hover:scale-105 ${skill.color}`}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className="flex-shrink-0 relative mb-2">
                  <div className="absolute inset-0 rounded-full bg-current/10 scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <IconComponent className="relative w-6 h-6 sm:w-8 sm:h-8 text-mist group-hover:scale-110 transition-all duration-300 group-hover:text-current" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-mist group-hover:text-current transition-colors duration-300 text-center">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
