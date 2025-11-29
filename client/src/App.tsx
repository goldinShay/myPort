import * as React from 'react';
import { PersonalInfoCard } from '@/components/PersonalInfoCard';
import { Biography } from '@/components/Biography';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ResumeSection } from '@/components/ResumeSection';
import { ContactSection } from '@/components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-emerald-50/30 to-background dark:via-emerald-900/30">
      <div className="container mx-auto px-4 py-8 space-y-12">
        <PersonalInfoCard />
        <Biography />
        <ProjectsSection />
        <SkillsSection />
        <ResumeSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
