
'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import placeholderData from '@/lib/placeholder-images.json';
import { Sparkles } from 'lucide-react';
import { Dialog, DialogTrigger } from './ui/dialog';
import BookingForm from './BookingForm';
import MotionWrap from './MotionWrap';

const heroImage = placeholderData.placeholderImages.find(p => p.id === 'ismail');

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    const heroImageRef = useRef<HTMLImageElement>(null);
    const heroOverlayRef = useRef<HTMLDivElement>(null);
    const heroNavRef = useRef<HTMLElement>(null);
    const heroStatusRef = useRef<HTMLDivElement>(null);
    const heroTitleRef = useRef<HTMLDivElement>(null);
    const heroSubtitleRef = useRef<HTMLDivElement>(null);
    const heroButtonRef = useRef<HTMLDivElement>(null);
    const heroTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const applyStyle = (ref: React.RefObject<HTMLElement>, delay: number) => {
        if (ref.current) {
          setTimeout(() => {
            if (ref.current) {
              ref.current.style.opacity = '1';
              ref.current.style.transform = 'translateY(0) translateX(0)';
              ref.current.style.filter = 'blur(0px)';
            }
          }, delay);
        }
      };

      if (heroImageRef.current) {
        setTimeout(() => {
          if (heroImageRef.current) {
            heroImageRef.current.style.opacity = '1';
            heroImageRef.current.style.transform = 'scale(1)';
            heroImageRef.current.style.filter = 'brightness(0.56) blur(0px)';
          }
        }, 100);
      }

      if (heroOverlayRef.current) {
        setTimeout(() => {
          if(heroOverlayRef.current) {
            heroOverlayRef.current.style.opacity = '1';
          }
        }, 300);
      }
      
      const navElement = document.getElementById('heroNav');
      if (navElement) {
        setTimeout(() => {
            navElement.style.opacity = '1';
            navElement.style.transform = 'translateY(0)';
            navElement.style.filter = 'blur(0px)';
        }, 800);
      }

      applyStyle(heroStatusRef, 1000);
      applyStyle(heroTitleRef, 1200);
      applyStyle(heroSubtitleRef, 1400);
      applyStyle(heroButtonRef, 1600);
      applyStyle(heroTextRef, 1800);

    }, []);

    return (
        <MotionWrap>
            <section className="relative min-h-screen w-full flex items-center justify-center">
                <h1 className="sr-only">Pro-Islamic Business Strategist, Growth Consultant, and Brand Strategist for Muslims</h1>
                {heroImage && 
                <Image 
                    ref={heroImageRef}
                    src={heroImage.imageUrl} 
                    alt="Ismail Adekunle-Olaiya, a professional business strategist for Muslims" 
                    fill
                    className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-0 scale-125 blur-md transition-all duration-2000 ease-out" 
                    style={{ filter: 'brightness(0.56)' }}
                    priority
                    onLoad={() => setIsLoaded(true)}
                />
                }
                <div ref={heroOverlayRef} className="absolute inset-0 bg-gradient-to-bl from-zinc-950/80 via-zinc-950/60 to-zinc-950/90 z-10 opacity-0 transition-opacity duration-1500 ease-out"></div>

                <div className="container relative z-20 flex flex-col min-h-screen mr-auto ml-auto pr-6 pl-6" style={{paddingTop:'20vh', paddingBottom:'30vh'}}>
                    <div className="flex flex-col w-full h-full justify-center text-left">
                        <div ref={heroStatusRef} className="opacity-0 transform translate-y-12 translate-x-[-20px] blur-md transition-all duration-1200 ease-out" style={{transitionDelay: '1000ms'}}>
                            <span className="inline-flex items-center gap-2 px-4 py-1 bg-zinc-800/50 text-white ring-1 ring-inset ring-zinc-600/40 rounded-full text-sm mb-6 backdrop-blur-md font-medium w-fit">
                                <span className="w-2 h-2 bg-zinc-300 rounded-full animate-pulse"></span>
                                Ismail Adekunle-Olaiya (Abu Sufyaan)
                            </span>
                        </div>

                        <div ref={heroTitleRef} className="opacity-0 transform translate-y-16 translate-x-[-30px] blur-md transition-all duration-1400 ease-out" style={{transitionDelay: '1200ms'}}>
                            <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight mb-6 text-white" style={{letterSpacing:'-0.035em'}}>
                            As a business consultant, Olaiya promotes blue-chip thinking for Muslim builders, encouraging disruptive strategies to thrive.
                            </h2>
                        </div>

                        <div ref={heroSubtitleRef} className="opacity-0 transform translate-y-20 translate-x-[-40px] blur-md transition-all duration-1400 ease-out" style={{transitionDelay: '1400ms'}}>
                            <p className="max-w-2xl text-base md:text-lg text-zinc-300 light:text-white mb-8 leading-relaxed">
                            I guide Muslims to build thriving businesses without compromising their Deen—through mindset shifts, proven strategies, and long-term growth systems from a professional growth strategist.
                            </p>
                        </div>

                        <div ref={heroButtonRef} className="opacity-0 transform translate-y-24 translate-x-[-50px] blur-md transition-all duration-1400 ease-out" style={{transitionDelay: '1600ms'}}>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button>
                                        <Sparkles className="w-5 h-5 mr-2"/>
                                        Book a Session
                                    </Button>
                                </DialogTrigger>
                                <BookingForm />
                            </Dialog>
                        </div>
                    </div>
                </div>

                <div ref={heroTextRef} className="absolute left-0 right-0 bottom-0 z-10 pointer-events-none select-none overflow-hidden opacity-0 transform translate-y-20 blur-lg transition-all duration-2000 ease-out" style={{transitionDelay: '1800ms'}}>
                    <h2 style={{fontFamily:'"Plus Jakarta Sans", sans-serif', fontSize: '24vw', lineHeight: 1, letterSpacing: '-0.045em', color: 'rgba(113,113,122,0.11)', fontWeight: 700, textTransform: 'uppercase', whiteSpace: 'nowrap', width: '100vw'}} className="tracking-tight text-center">
                        OLAIYA
                    </h2>
                </div>
            </section>
        </MotionWrap>
    );
};

export default Hero;
