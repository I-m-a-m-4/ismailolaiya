'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  projectType: z.string({ required_error: "Please select a project type." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { firstName: "", lastName: "", email: "", phone: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. Your business developer will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="relative py-32 bg-secondary/30 dark:bg-secondary/30 light:bg-gray-50 overflow-hidden" style={{'--animation-delay': '0.6s'} as React.CSSProperties}>
        <div className="absolute inset-0 opacity-20 dark:opacity-20 light:opacity-100">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-indigo-500/20 dark:to-purple-500/20 light:from-indigo-100 light:to-purple-100 blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-green-500/20 dark:to-blue-500/20 light:from-green-100 light:to-blue-100 blur-3xl"></div>
        </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="anim d-2">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tighter mb-6">
              Ready to Scale? Contact a Leading <span className="font-semibold text-primary">Business Developer</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Let’s simplify your strategy, remove confusion, and position your brand for sustainable growth—all in line with your Deen. Reach out to a premier business consultant for Muslims.
            </p>
            
            <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4 p-4 rounded-2xl light:bg-white light:shadow-sm light:hover:shadow-md transition-all dark:glass-card">
                  <div className="w-14 h-14 rounded-xl light:bg-blue-100 light:text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 grid place-items-center flex-shrink-0">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">WhatsApp</h4>
                    <a href="tel:+2348100985574" className="text-primary font-medium hover:underline">+234 810 098 5574</a>
                    <div className="text-muted-foreground text-sm">Monday - Friday, 9AM - 6PM</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-2xl light:bg-white light:shadow-sm light:hover:shadow-md transition-all dark:glass-card">
                  <div className="w-14 h-14 rounded-xl light:bg-purple-100 light:text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 grid place-items-center flex-shrink-0">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email Me</h4>
                    <a href="mailto:talktome@ismailolaiya.com" className="text-primary font-medium hover:underline">talktome@ismailolaiya.com</a>
                    <div className="text-muted-foreground text-sm">I'll respond within 24 hours</div>
                  </div>
                </div>
            </div>
          </div>
          
          {/* Right Form */}
          <div className="anim d-3 light:bg-white dark:glass-card rounded-3xl p-8 light:shadow-xl light:border light:border-gray-100">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2">Start Your Project with a Brand Strategist</h3>
              <p className="text-muted-foreground">Tell me about your vision, and this business strategist will help bring it to life.</p>
            </div>
             <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Abdullah" {...field} className="light:bg-white light:border-gray-200 dark:bg-white/5 dark:border-border focus:border-primary focus:ring-4 focus:ring-primary/20"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Ibn Abbas" {...field} className="light:bg-white light:border-gray-200 dark:bg-white/5 dark:border-border focus:border-primary focus:ring-4 focus:ring-primary/20"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="abdullah@email.com" {...field} className="light:bg-white light:border-gray-200 dark:bg-white/5 dark:border-border focus:border-primary focus:ring-4 focus:ring-primary/20"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service from a Business Consultant *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="light:bg-white light:border-gray-200 dark:bg-white/5 dark:border-border focus:border-primary focus:ring-4 focus:ring-primary/20">
                                <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                              <SelectItem value="one-on-one-in-person">In-Person One-on-One Mentorship</SelectItem>
                              <SelectItem value="one-on-one-virtual">Virtual One-on-One Mentorship</SelectItem>
                              <SelectItem value="strategy-session">Business Strategy Session</SelectItem>
                              <SelectItem value="growth-consulting">Growth Consulting</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Details *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your vision, business, timeline, and any specific requirements..."
                          className="resize-none light:bg-white light:border-gray-200 dark:bg-white/5 dark:border-border focus:border-primary focus:ring-4 focus:ring-primary/20"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-red-700 dark:to-red-700 light:to-primary/90 text-white py-4 rounded-xl font-semibold text-lg hover:from-primary/90 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Schedule Free Consultation
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy. We'll never share your information.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
