import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-secondary/30 border-border border-t pt-16 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 z-0 pointer-events-none select-none">
            <h2 style={{fontFamily:'"Plus Jakarta Sans", sans-serif', fontSize: '24vw', lineHeight: 1, letterSpacing: '-0.045em', color: 'rgba(113,113,122,0.11)', fontWeight: 700, textTransform: 'uppercase', whiteSpace: 'nowrap', width: '100vw'}} className="tracking-tight text-center opacity-30 dark:opacity-100">
                OLAIYA
            </h2>
        </div>
      <div className="relative container mx-auto px-6 z-10">
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
              <h4 className="font-semibold text-foreground mb-4">Newsletter</h4>
              <p className="text-muted-foreground mb-4">Get insights on growth, strategy, and more. No spam.</p>
                <form className="flex gap-2">
                    <input type="email" placeholder="Your email..." className="w-full rounded-md bg-white/5 border-border text-sm px-3"/>
                    <Button variant="secondary" size="icon" className="shrink-0">
                        <Sparkles />
                    </Button>
                </form>
            </div>
          </div>
          <div className="mt-16 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Ismail A. Olaiya. All Rights Reserved.</p>
            <div className="flex items-center gap-4">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</a>
                <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
