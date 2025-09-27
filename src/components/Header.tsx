'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Dialog, DialogTrigger } from './ui/dialog';
import BookingForm from './BookingForm';

const mainNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '#mentorship', label: 'Mentorship' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (href.startsWith('/')) {
      if(pathname !== href) {
        router.push(href);
      }
    } else {
       const targetElement = document.querySelector(href);
       if (targetElement) {
         targetElement.scrollIntoView({ behavior: 'smooth' });
       } else if (pathname !== '/') {
         router.push('/' + href);
       }
    }
  };

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {mainNavLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={cn(
                "text-sm font-medium hover:text-foreground transition",
                mobile ? "py-2 text-base" : "",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </>
  );

  return (
    <>
      <header id="heroNav" className={cn(
          "fixed top-0 left-0 right-0 z-30 transition-all duration-300",
          isScrolled ? "bg-background/70 backdrop-blur-lg border-b border-border" : "bg-transparent"
      )}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
             <div className="w-9 h-9 rounded-xl bg-foreground text-background grid place-items-center shadow-sm group-hover:scale-105 transition-transform duration-200">
              <span className="text-sm font-bold tracking-tighter">I</span>
            </div>
            <span className="text-lg font-medium tracking-tight">Ismail A. Olaiya</span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <NavLinks />
            </ul>
          </nav>
          <div className="flex items-center gap-2">
             <button id="menuBtn" className="p-2 rounded-md hover:bg-muted md:hidden transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-background/90 backdrop-blur-lg">
            <nav>
              <ul className="flex flex-col items-center gap-8 px-6 py-4 border-y border-border">
                <NavLinks mobile={true} />
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
