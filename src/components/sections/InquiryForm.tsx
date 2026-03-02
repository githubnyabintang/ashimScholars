"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Send, Download, HelpCircle, Loader2 } from "lucide-react";
import { assistInquiry, type InquiryAssistantOutput } from "@/ai/flows/ai-inquiry-assistant-flow";
import { toast } from "@/hooks/use-toast";

export default function InquiryForm() {
  const [loadingAi, setLoadingAi] = useState(false);
  const [aiResult, setAiResult] = useState<InquiryAssistantOutput | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    program: "",
    message: ""
  });

  const handleAiAssistance = async () => {
    if (!formData.message) {
      toast({
        title: "Message Required",
        description: "Please write a draft message first for the AI to analyze.",
        variant: "destructive"
      });
      return;
    }

    setLoadingAi(true);
    try {
      const result = await assistInquiry({
        initialInquiry: formData.message,
        programOfInterest: formData.program
      });
      setAiResult(result);
    } catch (error) {
      console.error(error);
      toast({
        title: "AI Error",
        description: "Failed to generate suggestions. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setLoadingAi(false);
    }
  };

  return (
    <section id="apply" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold mb-6">
              <HelpCircle className="w-4 h-4" />
              <span>Admissions Open 2024-25</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 headline text-white">Begin Your <br /><span className="text-accent">Success Story</span></h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Take the first step towards an enriching academic journey. Fill out the inquiry form or download our prospectus to explore our legacy.
            </p>
            
            <div className="grid gap-4">
              <div className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl">
                <div className="bg-primary/20 p-2 rounded-lg text-accent">
                  <Download className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Undergraduate Prospectus</h4>
                  <p className="text-sm text-muted-foreground mb-3">Comprehensive guide for degree programs.</p>
                  <Button variant="link" className="p-0 h-auto text-accent font-bold">Download PDF (4.2 MB)</Button>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl">
                <div className="bg-primary/20 p-2 rounded-lg text-accent">
                  <Download className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">International Guide</h4>
                  <p className="text-sm text-muted-foreground mb-3">Visa and accommodation assistance.</p>
                  <Button variant="link" className="p-0 h-auto text-accent font-bold">Download PDF (2.8 MB)</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-[3rem] p-8 md:p-12 shadow-3xl border-none">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-card-foreground font-bold">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Enter your name" 
                    className="h-12 border-muted bg-muted/5 text-card-foreground placeholder:text-muted-foreground/50" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-card-foreground font-bold">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="example@mail.com" 
                    className="h-12 border-muted bg-muted/5 text-card-foreground placeholder:text-muted-foreground/50"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="program" className="text-card-foreground font-bold">Program of Interest</Label>
                <Select onValueChange={(val) => setFormData({...formData, program: val})}>
                  <SelectTrigger className="h-12 border-muted bg-muted/5 text-card-foreground">
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent className="bg-card text-card-foreground">
                    <SelectItem value="tahfiz">Tahfizul Quran</SelectItem>
                    <SelectItem value="arabic">Arabic Linguistics</SelectItem>
                    <SelectItem value="fiqh">Islamic Jurisprudence</SelectItem>
                    <SelectItem value="history">Islamic History</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 relative">
                <div className="flex justify-between items-center mb-2">
                  <Label htmlFor="message" className="text-card-foreground font-bold">Your Inquiry</Label>
                  <Button 
                    type="button"
                    variant="ghost" 
                    size="sm" 
                    onClick={handleAiAssistance}
                    disabled={loadingAi}
                    className="text-primary hover:text-primary/80 hover:bg-primary/5 h-8 px-3 gap-2 font-bold"
                  >
                    {loadingAi ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                    AI Assistant
                  </Button>
                </div>
                <Textarea 
                  id="message" 
                  placeholder="Ask about admissions, fees, or course details..." 
                  className="min-h-[140px] border-muted bg-muted/5 text-card-foreground placeholder:text-muted-foreground/50 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
                
                {aiResult && (
                  <div className="mt-6 p-6 rounded-2xl bg-primary/5 border border-primary/20 animate-in fade-in slide-in-from-top-2">
                    <div className="flex items-center gap-2 text-primary font-black mb-4 text-sm">
                      <Sparkles className="w-4 h-4 text-accent" /> AI SUGGESTIONS
                    </div>
                    <p className="text-sm text-card-foreground font-medium mb-5">{aiResult.suggestedImprovements}</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">Try Asking:</span>
                        <ul className="text-xs text-card-foreground/70 space-y-2 list-none">
                          {aiResult.relevantQuestions.slice(0, 2).map((q, i) => (
                            <li key={i} className="flex gap-2"><span className="text-accent font-bold">•</span>{q}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">Include:</span>
                        <ul className="text-xs text-card-foreground/70 space-y-2 list-none">
                          {aiResult.essentialInformationToInclude.slice(0, 2).map((info, i) => (
                            <li key={i} className="flex gap-2"><span className="text-accent font-bold">•</span>{info}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-7 text-lg font-black shadow-xl rounded-xl transition-all active:scale-[0.98]">
                Submit Inquiry <Send className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}