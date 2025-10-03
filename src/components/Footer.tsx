
'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Facebook, Twitter, Instagram, Send, Youtube, Linkedin, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Footer = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setLoading(true);
        try {
            await addDoc(collection(db, "newsletterSubscriptions"), {
                email: email,
                createdAt: serverTimestamp(),
                read: false,
            });
            toast({
                title: "Subscribed!",
                description: "Thank you for subscribing to the newsletter.",
            });
            setEmail('');
        } catch (error) {
            console.error("Error subscribing: ", error);
            toast({
                title: "Subscription Error",
                description: "There was a problem. Please try again.",
                variant: "destructive"
            });
        } finally {
            setLoading(false);
        }
    }

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
                    <a href="https://www.tiktok.com/@olaiya.ismail1?_t=ZS-908Ecbe6ibo&_r=1" target="_blank" rel="noopener noreferrer" className="text-red-100/70 hover:text-primary transition">
                        <Image src="/images/tiktok.svg" alt="TikTok" width={20} height={20} className="filter-white" />
                    </a>
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
                <Link href="/keynote" className="footer-link text-red-100/70 hover:text-primary transition">Keynote</Link>
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
                <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input 
                        type="email" 
                        placeholder="Your email..." 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-md bg-white/5 border-border text-sm px-3 text-white placeholder:text-red-100/50"
                        required
                    />
                    <Button type="submit" variant="secondary" size="icon" className="shrink-0 bg-primary/20 hover:bg-primary/30 border-border border" disabled={loading}>
                        {loading ? <Loader2 className="animate-spin text-primary" /> : <Sparkles className="text-primary"/>}
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
        <style jsx>{`
            .filter-white {
                filter: brightness(0) invert(1);
            }
        `}</style>
      </div>
    </footer>
  );
};

export default Footer;
