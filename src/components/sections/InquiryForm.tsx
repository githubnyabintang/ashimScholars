
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
    <section id="apply" className="py-24 bg-card/40 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              <span>Admissions 2024-25</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 headline">Begin Your <span className="text-accent">Application</span></h2>
            <p className="text-muted-foreground text-lg mb-8">
              Take the first step towards an enriching academic journey. Fill out the inquiry form or download the official prospectus to learn more about our requirements.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 glass-card rounded-xl">
                <div className="bg-primary/20 p-2 rounded-lg text-accent">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Undergraduate Prospectus</h4>
                  <p className="text-sm text-muted-foreground mb-3">Download the comprehensive guide for degree programs.</p>
                  <Button variant="link" className="p-0 h-auto text-accent">Download PDF (4.2 MB)</Button>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 glass-card rounded-xl">
                <div className="bg-primary/20 p-2 rounded-lg text-accent">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">International Student Guide</h4>
                  <p className="text-sm text-muted-foreground mb-3">Everything you need to know about visas and accommodation.</p>
                  <Button variant="link" className="p-0 h-auto text-accent">Download PDF (2.8 MB)</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8 relative">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    className="bg-background/50" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-background/50"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="program">Program of Interest</Label>
                <Select onValueChange={(val) => setFormData({...formData, program: val})}>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tahfiz">Tahfizul Quran</SelectItem>
                    <SelectItem value="arabic">Arabic Linguistics</SelectItem>
                    <SelectItem value="fiqh">Islamic Jurisprudence</SelectItem>
                    <SelectItem value="history">Islamic History</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 relative">
                <div className="flex justify-between items-center">
                  <Label htmlFor="message">Your Inquiry</Label>
                  <Button 
                    type="button"
                    variant="ghost" 
                    size="sm" 
                    onClick={handleAiAssistance}
                    disabled={loadingAi}
                    className="text-accent hover:text-accent/80 hover:bg-accent/10 h-8 px-2 gap-1"
                  >
                    {loadingAi ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                    Get AI Advice
                  </Button>
                </div>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your background and what you're looking for..." 
                  className="min-h-[120px] bg-background/50"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
                
                {aiResult && (
                  <div className="mt-4 p-4 rounded-xl bg-primary/20 border border-primary/30 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="flex items-center gap-2 text-accent font-bold mb-3 text-sm">
                      <Sparkles className="w-4 h-4" /> AI Suggestions
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{aiResult.suggestedImprovements}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-accent/80">Try Asking:</span>
                        <ul className="text-xs text-muted-foreground space-y-1 mt-1 list-disc pl-4">
                          {aiResult.relevantQuestions.slice(0, 3).map((q, i) => <li key={i}>{q}</li>)}
                        </ul>
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-accent/80">Include:</span>
                        <ul className="text-xs text-muted-foreground space-y-1 mt-1 list-disc pl-4">
                          {aiResult.essentialInformationToInclude.slice(0, 3).map((info, i) => <li key={i}>{info}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Button className="w-full bg-accent text-background hover:bg-accent/90 py-6 text-lg">
                Submit Inquiry <Send className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
