import Cplusplus from "@/assets/icons/cplusplus.svg?react";
import Git from "@/assets/icons/git.svg?react";
import Linux from "@/assets/icons/linux.svg?react";
import Python from "@/assets/icons/python.svg?react";
import { Card } from "@/components/ui/card";

const currentlyLearning = [
  {
    name: "Python",
    icon: Python,
    color: "hover:text-yellow-300",
    progress: 75,
  },
  { name: "C++", icon: Cplusplus, color: "hover:text-blue-400", progress: 60 },
  { name: "Git", icon: Git, color: "hover:text-orange-400", progress: 85 },
  { name: "Linux", icon: Linux, color: "hover:text-yellow-400", progress: 70 },
];

export function CurrentlyLearning() {
  return (
    <Card className="bg-pine-dark border-forest-mid/80 shadow-lg rounded-2xl h-full">
      <div className="p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-bold text-snow font-title mb-4">
          Currently Learning
        </h2>

        <div className="space-y-3 sm:space-y-4">
          {currentlyLearning.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.name}
                className={`group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-forest-mid/30 rounded-xl border border-forest-mid/40 hover:border-current transition-all duration-300 hover:bg-forest-mid/40 ${item.color}`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 rounded-full bg-current/10 scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <IconComponent className="relative w-6 h-6 sm:w-8 sm:h-8 text-mist group-hover:scale-110 transition-all duration-300 group-hover:text-current" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm sm:text-base font-medium text-snow group-hover:text-current transition-colors duration-300">
                      {item.name}
                    </span>
                    <span className="text-xs sm:text-sm text-mist/80 group-hover:text-current/80 transition-colors duration-300">
                      {item.progress}%
                    </span>
                  </div>

                  <div className="w-full bg-forest-mid/60 rounded-full h-1.5 sm:h-2">
                    <div
                      className="bg-spring group-hover:bg-current h-1.5 sm:h-2 rounded-full transition-all duration-500 ease-out"
                      style={{
                        width: `${item.progress}%`,
                        transitionDelay: `${index * 100 + 200}ms`,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 pt-3 border-t border-forest-mid/40">
          <div className="flex items-center justify-center gap-2 text-xs text-mist/70">
            <div className="w-2 h-2 bg-spring rounded-full animate-pulse" />
            <span>Always learning and growing</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
