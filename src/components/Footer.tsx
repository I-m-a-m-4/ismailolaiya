import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-secondary/30 border-border border-t pt-16">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <h3 className="text-2xl font-semibold text-foreground mb-2">Ismail A. Olaiya</h3>
              <p className="text-muted-foreground max-w-md">Pro-Islamic business strategist and growth expert dedicated to unlocking the potential of Muslims, organizations, and Islamic nations.</p>
            </div>
            <div className="md:col-span-2">
              <h4 className="font-semibold text-foreground mb-4">Menu</h4>
              <nav className="flex flex-col gap-3" aria-label="Footer">
                <Link href="#about" className="text-muted-foreground hover:text-primary transition">About</Link>
                <Link href="#mentorship" className="text-muted-foreground hover:text-primary transition">Mentorship</Link>
                <Link href="#blog" className="text-muted-foreground hover:text-primary transition">Blog</Link>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition">Contact</Link>
              </nav>
            </div>
            <div className="md:col-span-2">
              <h4 className="font-semibold text-foreground mb-4">Social</h4>
                <div className="flex flex-col gap-3">
                    <a href="#" className="text-muted-foreground hover:text-primary transition">LinkedIn</a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition">Twitter</a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition">YouTube</a>
                </div>
            </div>
            <div className="md:col-span-3">
                <h4 className="font-semibold text-foreground mb-4">Get In Touch</h4>
                <div className="flex flex-col gap-3">
                    <a href="mailto:talktome@ismailolaiya.com" className="text-muted-foreground hover:text-primary transition">talktome@ismailolaiya.com</a>
                    <a href="tel:+2348100985574" className="text-muted-foreground hover:text-primary transition">+2348100985574</a>
                </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              &copy; {new Date().getFullYear()} Ismail Adekunle-Olaiya. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
