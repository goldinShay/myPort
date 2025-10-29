import * as React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Briefcase, GraduationCap, Download, Eye, Calendar } from 'lucide-react';

const experience = [
  {
    title: 'Junior Full Stack Developer',
    company: 'Informiz.org',
    period: '2024 - Present',
    location: 'Leiden, the Netherlands',
    description:
      'Investigate and fix bugs in both the front-end and back-end of our software. Implement, test, and deploy code to Test/Prod environments on GKE. Configure roles and permissions for cloud services, following security best practices. Develop PubSub systems for security and backup. Troubleshoot deployment issues of Kubernetes pods, including access to image registries. Solve DevOps challenges using documentation and community forums. Use both web UI and command-line tools to analyze logs and system behavior.',
    achievements: [
      'Investigated and resolved bugs across the full stack (front-end and back-end)',
      'Implemented, tested, and deployed code to GKE environments',
      'Configured cloud roles and permissions with a focus on security',
      'Developed PubSub systems for security and backup',
      'Troubleshot Kubernetes pod deployment and registry access issues',
      'Solved DevOps problems using documentation and community resources',
      'Utilized web UI and CLI tools to analyze logs and system health'
    ],
    tech: ['Java', 'Spring Boot', 'GKE', 'Kubernetes', 'PubSub', 'DevOps', 'Cloud Roles', 'Frontend', 'Backend', 'Testing', 'CI/CD']
  },
  {
    title: 'Junior Java Developer',
    company: 'Informiz.org',
    period: '2023 - 2024',
    location: 'Leiden, the Netherlands',
    description:
      'As a Java developer, I maintain, test, and enhance our Spring Boot web application. I work on both backend and frontend features and bug fixes, and have quickly adapted to new technologies through self-learning and mentorship. My work includes writing hundreds of tests, shipping features and bug fixes to production, and deepening my understanding of validation groups, roles, REST APIs, controllers, and MySQL.',
    achievements: [
      'Maintained and enhanced a production-grade Spring Boot web application',
      'Implemented and shipped new features and bug fixes to production',
      'Wrote hundreds of unit and integration tests to ensure code quality',
      'Worked across both backend and frontend codebases',
      'Quickly adapted to new technologies through self-learning and mentorship',
      'Gained hands-on experience with validation groups, roles, REST APIs, controllers, and MySQL'
    ],
    tech: ['Java', 'Spring Boot', 'MySQL', 'REST API', 'Validation', 'Testing', 'Frontend', 'Backend']
  },
  {
    title: 'TV DIRECTOR',
    company: 'Freelance',
    period: '2003 - 2023',
    location: 'Israel',
    description: 'Highly technical position, in all major TV studios in Israel.',
    achievements: [
      'Live coverage of developing news',
      'Live coverage of developing sports e.g CHAMPIONS LEAGUE matches'
    ],
    tech: []
  }
];

const education = [
  {
    degree: 'Master of Computer Science',
    school: 'Stanford University',
    period: '2015 - 2017',
    gpa: '3.8/4.0',
    focus: 'Distributed Systems & Software Engineering'
  },
  {
    degree: 'Bachelor of Computer Engineering',
    school: 'UC Berkeley',
    period: '2011 - 2015',
    gpa: '3.6/4.0',
    focus: 'Computer Systems & Programming Languages'
  }
];

export function ResumeSection() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
          Professional Journey
        </h2>
        <p className="text-muted-foreground mb-6">My career progression and educational background</p>
        <div className="flex justify-center gap-4">
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Download Resume
          </Button>
          <Button variant="outline" className="gap-2">
            <Eye className="h-4 w-4" />
            View Online
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Work Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="relative">
                  {index !== experience.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-full bg-border"></div>
                  )}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{job.title}</h3>
                          <p className="text-primary font-medium">{job.company}</p>
                          <p className="text-sm text-muted-foreground">{job.location}</p>
                        </div>
                        <Badge variant="secondary">{job.period}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{job.description}</p>
                      <ul className="list-disc list-inside space-y-1 text-sm mb-3">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted-foreground">{achievement}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1">
                        {job.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="space-y-2">
                  <div>
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <p className="text-primary text-sm">{edu.school}</p>
                    <p className="text-xs text-muted-foreground">{edu.period}</p>
                  </div>
                  <div className="text-sm space-y-1">
                    <p><span className="font-medium">GPA:</span> {edu.gpa}</p>
                    <p><span className="font-medium">Focus:</span> {edu.focus}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}