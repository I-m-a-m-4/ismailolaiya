'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, BookOpen, Newspaper, Award, Mic, Library, MessageSquare, Image as ImageIcon, Users, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from './ThemeToggle';
import CartButton from './CartButton';
import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

const mainNavLinks = [
  { href: '/about', label: 'About' },
];

const diaryLinks = [
  { href: '/diary/strategies-from-the-companions', label: 'Strategies from the Hearts of the Companions', description: 'Timeless principles from the Sahabah.', imageId: 'diary-podcast', icon: BookOpen },
  { href: '/diary/becoming-with-olaiya', label: 'Becoming with Olaiya', description: 'In-depth conversations with leaders.', imageId: 'diary-interviews', icon: Users },
  { href: '/diary/ama-sessions', label: 'AMA Sessions', description: 'Live Q&A with Olaiya.', imageId: 'diary-news', icon: MessageSquare },
  { href: '/diary/reviews', label: 'Reviews', description: 'Real stories and results from clients.', imageId: 'diary-reviews', icon: Award },
  { href: '/diary/resource-library', label: 'Resource Library', description: 'A collection of tools and guides.', imageId: 'diary-resource-library', icon: Library },
  { href: '/diary/gallery', label: 'Gallery', description: 'A visual journey of our work.', imageId: 'diary-gallery', icon: ImageIcon },
];

const otherLinks = [
    { href: '/pricing', label: 'Pricing' },
    { href: '/events', label: 'Events' },
    { href: '/keynote', label: 'Keynote' },
    { href: '/shop', label: 'Shop' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
  };

  const MobileNav = () => {
    const [isDiaryMenuOpen, setIsDiaryMenuOpen] = useState(false);

    return (
      <div className="md:hidden bg-background/95 backdrop-blur-lg">
        <nav>
          <ul className="flex flex-col items-start gap-2 px-6 py-4 border-y border-border">
            {mainNavLinks.map((link) => (
              <li key={link.href} className="w-full text-left border-b border-dashed border-border/70 py-2">
                <Link href={link.href} onClick={() => handleLinkClick(link.href)} className={cn("text-base font-medium transition", pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary")}>
                  {link.label}
                </Link>
              </li>
            ))}

            <Collapsible open={isDiaryMenuOpen} onOpenChange={setIsDiaryMenuOpen} className="w-full border-b border-dashed border-border/70">
              <li className="w-full text-left py-2">
                <CollapsibleTrigger className='w-full'>
                    <div className='flex items-center justify-between'>
                        <Link href="/diary" onClick={(e) => { e.preventDefault(); setIsDiaryMenuOpen(!isDiaryMenuOpen); }} className={cn("text-base font-medium transition", pathname.startsWith('/diary') ? "text-primary" : "text-muted-foreground hover:text-primary")}>
                          Diary
                        </Link>
                        <ChevronDown className={cn("h-5 w-5 text-muted-foreground transition-transform", isDiaryMenuOpen && "rotate-180")} />
                    </div>
                </CollapsibleTrigger>
              </li>
              <CollapsibleContent>
                <ul className='pl-4'>
                    {diaryLinks.map((link) => (
                       <li key={link.href} className="w-full text-left border-t border-dashed border-border/70 py-2">
                        <Link href={link.href} onClick={() => handleLinkClick(link.href)} className={cn("text-base font-medium transition", pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary")}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </CollapsibleContent>
            </Collapsible>

            {otherLinks.map((link) => (
              <li key={link.href} className="w-full text-left border-b border-dashed border-border/70 py-2">
                <Link href={link.href} onClick={() => handleLinkClick(link.href)} className={cn("text-base font-medium transition", pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary")}>
                  {link.label}
                </Link>
              </li>
            ))}
             <li className="w-full pt-4">
                  <Button asChild className="w-full">
                      <Link href="/#contact" onClick={() => handleLinkClick('/#contact')}>BOOK OLAIYA</Link>
                  </Button>
              </li>
          </ul>
        </nav>
      </div>
    )
  }

  const TwoLineMenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="8" x2="20" y2="8"></line>
        <line x1="4" y1="16" x2="20" y2="16"></line>
    </svg>
  );

  return (
    <>
      <header id="heroNav" className={cn(
          "fixed top-0 left-0 right-0 z-30 transition-all duration-300",
          isScrolled ? "bg-background/70 backdrop-blur-lg border-b border-border" : "bg-transparent"
      )}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
             <div className="w-9 h-9 bg-foreground text-background grid place-items-center shadow-sm group-hover:scale-105 transition-transform duration-200 rounded-lg">
              <span className="text-sm font-bold tracking-tighter">S</span>
            </div>
            <span className="text-lg font-medium tracking-tight">Scale with Olaiya</span>
          </Link>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {mainNavLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                   <NavigationMenuLink asChild active={pathname === link.href} className={navigationMenuTriggerStyle()}>
                     <Link href={link.href}>
                       {link.label}
                     </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuTrigger>
                    <Link href="/diary" className={cn(pathname.startsWith('/diary') ? "text-primary" : "")}>Diary</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] gap-4 p-4 md:w-[680px] md:grid-cols-3 lg:w-[760px]">
                    {diaryLinks.map((component) => {
                       const image = placeholderData.placeholderImages.find(p => p.id === component.imageId);
                       return (
                         <Link
                          key={component.label}
                          href={component.href}
                          className="group relative flex flex-col justify-end overflow-hidden rounded-lg bg-background h-48 p-4 text-white no-underline transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl"
                        >
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={component.label}
                              fill
                              className="absolute inset-0 object-cover w-full h-full brightness-50 group-hover:brightness-75 transition-all duration-500"
                              data-ai-hint={image.imageHint}
                            />
                          )}
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                          <div className="relative z-10">
                             <component.icon className="h-6 w-6 mb-2 text-white/80"/>
                            <div className="text-base font-semibold leading-none">{component.label}</div>
                            <p className="mt-1 line-clamp-2 text-sm leading-snug text-white/80">
                              {component.description}
                            </p>
                          </div>
                        </Link>
                       )
                    })}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
               {otherLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                   <NavigationMenuLink asChild active={pathname === link.href} className={navigationMenuTriggerStyle()}>
                     <Link href={link.href}>
                       {link.label}
                     </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <CartButton />
            <Button asChild className="hidden md:inline-flex">
                <Link href="/#contact">BOOK OLAIYA</Link>
            </Button>
            <ThemeToggle />
             <button id="menuBtn" className="p-2 rounded-md hover:bg-muted md:hidden transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <TwoLineMenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && <MobileNav />}
      </header>
    </>
  );
};

export default Header;
