'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import placeholderData from '@/lib/placeholder-images.json';
import { User } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


const aboutImage = placeholderData.placeholderImages.find(p => p.id === 'ismail-about');

const brandLogos = [
  { name: 'Peritus Engineering' },
  { name: 'Pilgrim Prive' },
  { name: 'EasyReside LTD' },
  { name: 'ResearchGains' },
  { name: 'Salaam Muslim Books' },
  { name: 'Haamz Variety Store' },
  { name: 'Sccentaura' }
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" ref={sectionRef} className="relative bg-background/50 border-t border-b border-white/10 pt-32 pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <article className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="anim d-1">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl h-96 md:h-[500px] ring-1 ring-white/10">
                  {aboutImage && <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 glass-card rounded-xl p-4 shadow-2xl">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-foreground mb-1">5+</div>
                    <div className="text-xs text-muted-foreground">Years Experience</div>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 glass-card rounded-xl p-4 shadow-2xl">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-foreground mb-1">50+</div>
                    <div className="text-xs text-muted-foreground">Muslim Brands Guided</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="anim d-2 lg:pl-8">
              <span className="inline-flex items-center gap-2 px-4 py-1 bg-primary/10 ring-1 ring-inset ring-primary/20 rounded-full text-sm mb-6 font-medium text-primary">
                <User size={16} />
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 text-foreground" style={{ letterSpacing: '-0.03em' }}>
                Strategist, Architect, Advisor
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed mb-10">
                 <p className="text-lg">
                  Ismail A. Olaiya (Abu Sufyaan) is a Pro-Islamic business strategist and growth expert dedicated to unlocking the potential of Muslims, organizations, and Islamic nations through clarity, structure, and long-term thinking.
                </p>
                <p>
                  With half a decade of experience across the SME value chain, he currently drives downstream expansion in Nigeria for Muslim business owners—leading market entry, high-value deals, and Islamic-centered growth strategies.
                </p>
                <p>
                  Grounded in the belief that Muslims were designed to lead—with the right mindset, strategies, and systems modeled from the Prophet ﷺ—Ismail’s vision is clear: to raise Muslims who reshape the world.
                </p>
              </div>
            </div>
          </article>

          <div className="mt-16 border-t border-border pt-12">
            <h3 className="text-center text-sm uppercase tracking-[0.2em] text-muted-foreground anim-fade d-0">Brands I’ve Worked With</h3>
            <Carousel
              plugins={[Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full mt-8 anim-fade d-1"
            >
              <CarouselContent>
                {brandLogos.map((brand, index) => (
                  <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                    <div className="p-1">
                        <div className="flex aspect-square items-center justify-center p-6">
                          <span className="text-xl font-medium text-foreground/70">{brand.name}</span>
                        </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
