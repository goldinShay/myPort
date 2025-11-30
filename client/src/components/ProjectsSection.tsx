import * as React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, CheckCircle, Lightbulb, ExternalLink, Github } from 'lucide-react';

const currentProjects = [
  {
    title: 'E-commerce Microservices Platform',
    description: 'Building a scalable microservices architecture for a large e-commerce platform.',
    tech: ['Java 17', 'Spring Boot', 'MongoDB', 'Redis', 'Docker'],
    status: 'In Progress',
    progress: 75
  },
  {
    title: 'Payment Gateway Integration',
    description: 'Developing secure payment processing system with multiple gateway support.',
    tech: ['Spring Security', 'PostgreSQL', 'REST APIs'],
    status: 'Planning',
    progress: 25
  }
];

const futureProjects = [
  {
    title: 'AI-Powered Code Review Tool',
    description: 'Planning to build an intelligent code review system using machine learning.',
    tech: ['Java', 'Python', 'TensorFlow', 'Spring AI'],
    status: 'Concept',
    progress: 0
  },
  {
    title: 'Blockchain Supply Chain',
    description: 'Exploring blockchain implementation for supply chain transparency.',
    tech: ['Java', 'Hyperledger', 'Smart Contracts'],
    status: 'Research',
    progress: 10
  }
];

const formerProjects = [
  {
    title: 'Banking Transaction System',
    description: 'Built high-frequency transaction processing system for major bank.',
    tech: ['Java 11', 'Spring Boot', 'Oracle DB', 'Apache Kafka'],
    status: 'Completed',
    link: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
      title: 'E-rrig Secured Greenhouse Management System',
      description: 'Live telemetry, history and control in a secured environment.',
      tech: ['Java', 'Spring Boot', 'PostgreSQL', 'OAuth 2.0', 'JPA'],
      status: 'Completed',
      link: 'https://github.com',
      demo: 'https://demo.com'
    },
  {
    title: 'Hospital Management System',
    description: 'Developed comprehensive HMS with patient records and appointment scheduling.',
    tech: ['Java', 'JSF', 'MySQL', 'JPA'],
    status: 'Completed',
    link: 'https://github.com',
    demo: 'https://demo.com'
  }
];

function ProjectCard({ project, type }: { project: any; type: 'current' | 'future' | 'former' }) {
  const getIcon = () => {
    switch (type) {
      case 'current': return <Clock className="h-5 w-5 text-emerald-700" />;
      case 'future': return <Lightbulb className="h-5 w-5 text-emerald-600" />;
      case 'former': return <CheckCircle className="h-5 w-5 text-emerald-800" />;
    }
  };

  return (
    <Card className="h-full hover:shadow-2xl hover:shadow-emerald-800/20 transition-all duration-700 hover:scale-110 hover:rotate-12 transform-gpu cursor-pointer border-emerald-800/20">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {getIcon()}
          <h3 className="font-semibold text-lg">{project.title}</h3>
        </div>
        
        <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech.map((tech: string) => (
            <Badge key={tech} variant="secondary" className="text-xs bg-emerald-100 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100">
              {tech}
            </Badge>
          ))}
        </div>
        
        {type === 'current' || type === 'future' ? (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{project.status}</span>
              <span>{project.progress}%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div
                className="bg-emerald-700 h-2 rounded-full transition-all duration-300"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="flex-1 border-emerald-700 hover:bg-emerald-700 hover:text-white">
              <Github className="h-4 w-4 mr-2" />
              Code
            </Button>
            <Button size="sm" className="flex-1 bg-emerald-700 text-white hover:bg-emerald-800">
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function ProjectsSection() {
  return (
    <div className="space-y-8">
      <div className="text-center animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-800 bg-clip-text text-transparent mb-2">
          My Projects
        </h2>
        <p className="text-muted-foreground">A showcase of my work across different stages</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="animate-in fade-in-0 slide-in-from-left-8 duration-1000 delay-200">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-emerald-700" />
            Current Projects
          </h3>
          <div className="space-y-4">
            {currentProjects.map((project, index) => (
              <div key={index} className="animate-in fade-in-0 slide-in-from-left-6 duration-700" style={{ animationDelay: `${400 + index * 200}ms` }}>
                <ProjectCard project={project} type="current" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-400">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-emerald-600" />
            Future Projects
          </h3>
          <div className="space-y-4">
            {futureProjects.map((project, index) => (
              <div key={index} className="animate-in fade-in-0 slide-in-from-bottom-6 duration-700" style={{ animationDelay: `${600 + index * 200}ms` }}>
                <ProjectCard project={project} type="future" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="animate-in fade-in-0 slide-in-from-right-8 duration-1000 delay-600">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-800" />
            Former Projects
          </h3>
          <div className="space-y-4">
            {formerProjects.map((project, index) => (
              <div key={index} className="animate-in fade-in-0 slide-in-from-right-6 duration-700" style={{ animationDelay: `${800 + index * 200}ms` }}>
                <ProjectCard project={project} type="former" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}