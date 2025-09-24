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
import { Send, Mail, Phone, Linkedin, Twitter, Youtube } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-20" style={{'--animation-delay': '0.6s'} as React.CSSProperties}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Get in Touch</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Have a project in mind or want to collaborate? Let's talk.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="space-y-8 anim d-2">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:talktome@ismailolaiya.com" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-lg bg-primary/10 "><Mail className="size-5 text-primary"/></div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground group-hover:text-primary transition">talktome@ismailolaiya.com</p>
                  </div>
                </a>
                <a href="tel:+2348100985574" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-lg bg-primary/10 "><Phone className="size-5 text-primary"/></div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground group-hover:text-primary transition">+234 810 098 5574</p>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a href="#" className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition"><Linkedin className="size-5"/></a>
                <a href="#" className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition"><Twitter className="size-5"/></a>
                <a href="#" className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition"><Youtube className="size-5"/></a>
              </div>
            </div>
          </div>
          
          <div className="rounded-2xl glass-card p-8 anim d-3">
             <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Abdullah Ibn Abbas" {...field} className="bg-background/80 dark:bg-white/5 border-border focus:ring-offset-background"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., abdullah@email.com" {...field} className="bg-background/80 dark:bg-white/5 border-border focus:ring-offset-background"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="What is this about?" {...field} className="bg-background/80 dark:bg-white/5 border-border focus:ring-offset-background"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me a little bit about your project or inquiry..."
                          className="resize-none bg-background/80 dark:bg-white/5 border-border focus:ring-offset-background"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                    <Send className="mr-2 size-4" />
                    Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}