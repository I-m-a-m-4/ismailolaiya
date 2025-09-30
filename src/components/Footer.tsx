import { Button } from "@/components/ui/button";
import { Sparkles, Facebook, Twitter, Instagram, Send, Youtube, Linkedin } from "lucide-react";
import Link from "next/link";

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.65 4.31 1.72v3.79c-1.89.09-3.71-.49-5.12-1.62A8.54 8.54 0 0 1 16 4.96v1.98c0 1.54-1.24 2.79-2.78 2.81-1.54.02-2.79-1.24-2.81-2.78l-.02-7.18h-3.4v16.1c0 2.21-1.79 4-4 4s-4-1.79-4-4V7.87c.43.02.86.03 1.29.03 1.48 0 2.85-.51 3.9-1.35C8.11 5.68 8.87 4.52 9.29 3.22c.03-.1.06-.2.09-.3v-3.1h3.15Z"/>
  </svg>
)

const Footer = () => {
  return (
    <footer className="relative bg-[#040000] border-border border-t pt-24 pb-12 overflow-hidden">
      <div className="relative container mx-auto px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-8">
            <div className="col-span-2 md:col-span-4">
              <h3 className="text-2xl font-semibold text-white mb-4">Scale with Olaiya</h3>
              <p className="text-red-100/70 max-w-md mb-6">Pro-Islamic business strategist and growth expert dedicated to unlocking the potential of Muslims, organizations, and Islamic nations.</p>
               <div className="flex flex-wrap gap-4">
                    <a href="https://www.facebook.com/share/16yvgyB42g/" target="_blank" rel="noopener noreferrer" className="text-red-100/70 hover:text-primary transition"><Facebook className="size-5" /></a>
                    <a href="https://x.com/scalewitholaiya?t=RGmVcX6PZyvvRJ2K1izaXQ&s=09" target="_blank" rel="noopener noreferrer" className="text-red-100/70 hover:text-primary transition"><Twitter className="size-5" /></a>
                    <a href="https://www.instagram.com/scalewitholaiya?igsh=cGZucHV2ZDFuZzZw" target="_blank" rel="noopener noreferrer" className="text-red-100/70 hover:text-primary transition"><Instagram className="size-5" /></a>
                    <a href="https://www.tiktok.com/@olaiya.ismail1?_t=ZS-908Ecbe6ibo&_r=1" target="_blank" rel="noopener noreferrer" className="text-red-100/70 hover:text-primary transition"><TikTokIcon className="size-5" /></a>
                    <a href="https://www.threads.com/@scalewitholaiya" target="_blank" rel="noopener noreferrer" className="text-red-100/70 hover:text-primary transition"><Send className="size-5" /></a>
                    <a href="https://youtube.com/@scalewitholaiya?si=-QHHYmj9EmOXqXLW" target="_blank" rel="noopener noreferrer" className="text-red-100/70 hover:text-primary transition"><Youtube className="size-5" /></a>
                    <a href="https://www.linkedin.com/in/ismail-adekunle-olaiya-014b2b24b/" target="_blank" rel="noopener noreferrer" className="text-red-100/70 hover:text-primary transition"><Linkedin className="size-5" /></a>
                </div>
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <nav className="flex flex-col gap-3" aria-label="Company">
                <Link href="/about" className="footer-link text-red-100/70 hover:text-primary transition">About Me</Link>
                <Link href="/#process" className="footer-link text-red-100/70 hover:text-primary transition">My Process</Link>
                <Link href="/press-room" className="footer-link text-red-100/70 hover:text-primary transition">Press Room</Link>
                <Link href="/#contact" className="footer-link text-red-100/70 hover:text-primary transition">Contact</Link>
              </nav>
            </div>
             <div className="col-span-1 md:col-span-2">
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <nav className="flex flex-col gap-3" aria-label="Services">
                <Link href="/pricing" className="footer-link text-red-100/70 hover:text-primary transition">Pricing</Link>
                <Link href="/#mentorship" className="footer-link text-red-100/70 hover:text-primary transition">One-on-One</Link>
                <Link href="/#mentorship" className="footer-link text-red-100/70 hover:text-primary transition">Team & Corporate</Link>
                <Link href="/events" className="footer-link text-red-100/70 hover:text-primary transition">Events</Link>
              </nav>
            </div>
             <div className="col-span-1 md:col-span-2">
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <nav className="flex flex-col gap-3" aria-label="Resources">
                <Link href="/#blog" className="footer-link text-red-100/70 hover:text-primary transition">Blog</Link>
                <Link href="/shop" className="footer-link text-red-100/70 hover:text-primary transition">Shop</Link>
                <Link href="/diary/podcast" className="footer-link text-red-100/70 hover:text-primary transition">Podcast</Link>
                <Link href="/#faq" className="footer-link text-red-100/70 hover:text-primary transition">FAQs</Link>
              </nav>
            </div>

            <div className="col-span-2 md:col-span-2">
              <h4 className="font-semibold text-white mb-4">Newsletter</h4>
              <p className="text-red-100/70 mb-4 text-sm">Get insights on growth, strategy, and more. No spam.</p>
                <form className="flex gap-2">
                    <input type="email" placeholder="Your email..." className="w-full rounded-md bg-white/5 border-border text-sm px-3 text-white placeholder:text-red-100/50"/>
                    <Button variant="secondary" size="icon" className="shrink-0 bg-primary/20 hover:bg-primary/30 border-border border">
                        <Sparkles className="text-primary"/>
                    </Button>
                </form>
            </div>
          </div>
          <div className="mt-20 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-red-100/70">&copy; {new Date().getFullYear()} Scale with Olaiya. All Rights Reserved.</p>
            <div className="flex items-center gap-4">
                <a href="#" className="text-sm text-red-100/70 hover:text-primary">Privacy Policy</a>
                <a href="#" className="text-sm text-red-100/70 hover:text-primary">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

    