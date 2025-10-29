import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

// ****HERE YOU CAN CHANGE YOUR BIOGRAPHY TEXT****
export function Biography() {
  return (
    <Card className="hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <User className="h-6 w-6 text-primary" />
          About Me
        </CardTitle>
      </CardHeader>
      <CardContent className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-2xl font-extrabold italic text-center text-primary drop-shadow-lg py-4">
          Full-Stack Developer & DevOps Engineer — Bridging Broadcast Precision
          with Modern Cloud Mastery. (Also knows how to make bread)
        </p>
        <p className="text-base leading-relaxed mt-4">
          I'm a full‑stack developer and DevOps engineer with a rare blend of 20
          years’ live broadcast expertise and sharp, modern cloud engineering
          skills. From directing Champions League matches under intense
          deadlines to building secure, production‑grade Java and Spring Boot
          applications on GCP, I thrive where precision, pressure, and
          collaboration meet. Resilient, fast‑thinking, and always learning, I
          turn complex problems into elegant, scalable solutions.
        </p>
        <p className="text-base leading-relaxed mt-4">
          When I'm not coding, you'll find me outside with the kids, or making
          my own bread. I also like to fix things around the house and
          occasionally tinker with home automation.
          Also, I'm currently learning Dutch! Isn't that neat?!
        </p>
      </CardContent>
    </Card>
  );
}
