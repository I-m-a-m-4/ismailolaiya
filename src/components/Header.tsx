'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Dialog, DialogTrigger } from './ui/dialog';
import BookingForm from './BookingForm';
import Loader from './Loader';

const mainNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '#mentorship', label: 'Mentorship' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    } else if (href.startsWith('/')) {
      e.preventDefault();
      setIsLoading(true);
      setTimeout(() => {
        router.push(href);
        setIsLoading(false);
        setIsMenuOpen(false);
      }, 1500);
    } else {
      setIsMenuOpen(false);
    }
  };

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {mainNavLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className={cn(
              "text-sm font-medium text-muted-foreground hover:text-foreground transition",
              mobile && "py-2 text-base"
            )}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <>
      {isLoading && <Loader />}
      <header id="heroNav" className={cn(
          "fixed top-0 left-0 right-0 z-30 transition-all duration-300",
          isScrolled ? "bg-background/70 backdrop-blur-lg border-b border-border" : "bg-transparent"
      )}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
             <div className="w-9 h-9 rounded-xl bg-foreground text-background grid place-items-center shadow-sm group-hover:scale-105 transition-transform duration-200">
              <span className="text-sm font-bold tracking-tighter">I</span>
            </div>
            <span className="text-lg font-medium tracking-tight" style={{ letterSpacing: '-0.02em' }}>Ismail A. Olaiya</span>
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
