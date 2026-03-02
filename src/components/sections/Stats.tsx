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
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-8 bg-card rounded-[2rem] shadow-2xl border-none transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-black mb-2 headline text-card-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}