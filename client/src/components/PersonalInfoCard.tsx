import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Mail, Phone, Github, Linkedin, Download } from 'lucide-react';

// 👇 Import your actual profile image
import profilePic from '@/assets/GoldenGoldin.jpg';

export function PersonalInfoCard() {
  return (
    <Card className="overflow-hidden bg-gradient-to-r from-emerald-800/10 via-background to-emerald-700/10 border-2 border-emerald-800/20 hover:shadow-2xl hover:shadow-emerald-800/20 transition-all duration-500">
      <CardContent className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-800 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img
                src={profilePic}
                alt="Shay GoldenGoldin"
                className="relative w-48 h-48 rounded-full object-cover border-4 border-emerald-700 shadow-xl"
              />
            </div>
          </div>

          <div className="lg:col-span-2 text-center lg:text-left space-y-4">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-800 bg-clip-text text-transparent">
                Shay Goldin
              </h1>
              <p className="text-xl text-muted-foreground mt-2">Java Developer</p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              <Badge variant="secondary" className="text-sm bg-emerald-100 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100">Java</Badge>
              <Badge variant="secondary" className="text-sm bg-emerald-100 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100">Spring Boot 4</Badge>
              <Badge variant="secondary" className="text-sm bg-emerald-100 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100">PostgreSQL</Badge>
              <Badge variant="secondary" className="text-sm bg-emerald-100 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100">Thymeleaf</Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <MapPin className="h-4 w-4 text-emerald-700" />
                <span>Leiden, the Netherlands</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Mail className="h-4 w-4 text-emerald-700" />
                <span>goldinshay@gmail.com</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Phone className="h-4 w-4 text-emerald-700" />
                <span>06-000000</span>
              </div>
              <div className="flex justify-center lg:justify-start gap-3">
                <a
                  href="https://github.com/goldinshay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" variant="outline" className="p-2 border-emerald-700 hover:bg-emerald-700 hover:text-white">
                    <Github className="h-4 w-4" />
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/shay-goldin-a0429a21b/?originalSubdomain=nl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" variant="outline" className="p-2 border-emerald-700 hover:bg-emerald-700 hover:text-white">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </a>
                <Button size="sm" className="gap-2 bg-emerald-700 text-white hover:bg-emerald-800">
                  <Download className="h-4 w-4" />
                  Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}