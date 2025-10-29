import * as React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Cloud, BookOpen } from 'lucide-react';

const experienceSkills = [
  { name: 'Cloud & DevOps', level: 92 },
  { name: 'Backend & Programming', level: 90 },
  { name: 'GCP', level: 85 },
  { name: 'Kubernetes', level: 80 },
  { name: 'IAM Roles/Permissions', level: 78 },
  { name: 'CI/CD', level: 88 },
  { name: 'Docker', level: 87 },
  { name: 'GitHub', level: 90 },
  { name: 'Unit Testing', level: 82 },
  { name: 'Linux', level: 86 }
];

const techStackSkills = [
  { name: 'Java 17', level: 95 },
  { name: 'Spring Boot 3', level: 93 },
  { name: 'MySQL', level: 89 },
  { name: 'Thymeleaf', level: 80 }
];

const currentlyLearning = [
  'Spring AI',
  'GraalVM',
  'Reactive Programming',
  'Event Sourcing',
  'CQRS Pattern',
  'Machine Learning with Java'
];

function SkillBar({ skill, filled }: { skill: { name: string; level: number }, filled: boolean }) {
  const [animatedLevel, setAnimatedLevel] = React.useState(0);
  React.useEffect(() => {
    if (filled) {
      setAnimatedLevel(skill.level);
    } else {
      setAnimatedLevel(0);
    }
  }, [filled, skill.level]);
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <Progress value={animatedLevel} className="h-2 transition-all duration-1000" />
    </div>
  );
}

export function SkillsSection() {
  const total = experienceSkills.length + techStackSkills.length;
  const [filledBars, setFilledBars] = React.useState(Array(total).fill(false));
  const [hasAnimated, setHasAnimated] = React.useState(false);

  const startSequentialFill = () => {
    if (hasAnimated) return; 
    setHasAnimated(true);
    let i = 0;
    const ANIM_MS = 1000; 
    const STAGGER_MS = ANIM_MS + 200;
    const fillNext = () => {
      setFilledBars((prev) => {
        const updated = [...prev];
        updated[i] = true;
        return updated;
      });
      i++;
      if (i < total) {
        setTimeout(fillNext, STAGGER_MS);
      }
    };
    setFilledBars(Array(total).fill(false));
    setTimeout(fillNext, 100); 
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-800 bg-clip-text text-transparent mb-2">
          Skills & Expertise
        </h2>
        <p className="text-muted-foreground">My technical proficiency</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card
          className="hover:shadow-lg hover:shadow-emerald-800/20 transition-all duration-300 border-emerald-800/20"
          onMouseEnter={startSequentialFill}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-emerald-700" />
              Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-emerald-700 mb-2">Experience</h3>
              {experienceSkills.map((skill, idx) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  filled={filledBars[idx]}
                />
              ))}
            </div>
            <div>
              <h3 className="text-lg font-bold text-emerald-700 mb-2">Tech Stack</h3>
              {techStackSkills.map((skill, idx) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  filled={filledBars[experienceSkills.length + idx]}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="hover:shadow-lg hover:shadow-emerald-800/20 transition-all duration-300 border-emerald-800/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-emerald-600" />
                Currently Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {currentlyLearning.map((item) => (
                  <Badge key={item} variant="outline" className="animate-pulse border-emerald-700 text-emerald-800 dark:text-emerald-300">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg hover:shadow-emerald-800/20 transition-all duration-300 border-emerald-800/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-emerald-700" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                <div className="font-medium">Oracle Certified Professional</div>
                <div className="text-sm text-muted-foreground">Java SE 11 Developer</div>
              </div>
              <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                <div className="font-medium">AWS Certified Developer</div>
                <div className="text-sm text-muted-foreground">Associate Level</div>
              </div>
              <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                <div className="font-medium">Spring Professional</div>
                <div className="text-sm text-muted-foreground">VMware Certified</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}