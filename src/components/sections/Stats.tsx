
import React from "react";
import { Users, GraduationCap, Award, BookOpen } from "lucide-react";

const stats = [
  { label: "Active Students", value: "1,200+", icon: Users },
  { label: "Successful Alumni", value: "5,000+", icon: GraduationCap },
  { label: "Hafiz Graduates", value: "850+", icon: Award },
  { label: "Research Papers", value: "120+", icon: BookOpen },
];

export default function Stats() {
  return (
    <section className="py-20 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 glass-card rounded-2xl transition-transform hover:-translate-y-2 duration-300"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/20 text-accent mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2 headline text-white">{stat.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
