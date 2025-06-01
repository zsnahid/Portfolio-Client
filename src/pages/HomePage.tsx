import { CurrentlyLearning } from "@/components/CurrentlyLearning";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { PageTransition } from "@/components/PageTransition";
import ProfileCard from "@/components/ProfileCard";
import { SkillsSection } from "@/components/SkillsSection";

export default function HomePage() {
  return (
    <PageTransition>
      <div className="min-h-[calc(100lvh-120px)] p-3 sm:p-4 space-y-6">
        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
          <ProfileCard />
          <FeaturedProjects />
          <SkillsSection />
          <CurrentlyLearning />
        </div>
      </div>
    </PageTransition>
  );
}
