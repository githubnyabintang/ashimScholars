
import React from "react";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4 headline">Get in <span className="text-accent">Touch</span></h2>
              <p className="text-muted-foreground">Our admissions office is here to help you with any questions about our programs or campus life.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-accent">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone Number</p>
                  <p className="font-bold text-white">+234 (0) 803 123 4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Address</p>
                  <p className="font-bold text-white">admissions@ashimscholars.edu</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Campus Location</p>
                  <p className="font-bold text-white">KM 12, Ashim Way, Zaria, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 rounded-3xl overflow-hidden glass-card min-h-[400px] relative">
            {/* Simulated Interactive Map */}
            <div className="absolute inset-0 bg-[#0c120a]">
              <div className="absolute inset-0 opacity-20 pointer-events-none" 
                   style={{backgroundImage: 'radial-gradient(#4A862D 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <MapPin className="w-8 h-8 text-background fill-current" />
                </div>
                <h4 className="text-xl font-bold mb-2">Ashim Scholars Main Campus</h4>
                <p className="text-muted-foreground text-sm">Interactive Map Integration Service Placeholder</p>
              </div>
              
              <div className="absolute bottom-6 left-6 p-4 glass-card rounded-xl">
                <div className="flex items-center gap-3 text-sm text-white">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
                </div>
              </div>
              
              <div className="absolute top-6 right-6 p-2 glass-card rounded-lg flex flex-col gap-2">
                <button className="p-2 hover:bg-accent/20 rounded-md transition-colors"><Globe className="w-5 h-5 text-accent" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
