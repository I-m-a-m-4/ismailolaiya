'use client';

import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';
import { User } from 'lucide-react';
import MotionWrap from './MotionWrap';

const aboutImage = placeholderData.placeholderImages.find(p => p.id === 'ismail-about');

const About = () => {
  return (
    <MotionWrap>
      <section id="about" className="relative bg-background/50 border-t border-b border-white/10 pt-32 pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <article className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="anim d-1">
                <div className="relative">
                  <div className="relative overflow-hidden h-96 md:h-[500px] ring-1 ring-white/10">
                    {aboutImage && <Image
                      src={aboutImage.imageUrl}
                      alt="Ismail Adekunle-Olaiya, a business developer, in a strategic discussion"
                      fill
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent"></div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 glass-card p-4 shadow-2xl bg-secondary/80 dark:bg-secondary/80">
                    <div className="text-center">
                      <div className="text-2xl font-semibold text-foreground mb-1">5+</div>
                      <div className="text-xs text-muted-foreground">Years Experience</div>
                    </div>
                  </div>
                  <div className="absolute -top-6 -left-6 glass-card p-4 shadow-2xl bg-secondary/80 dark:bg-secondary/80">
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
                  About Your Business Strategist
                </span>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 text-foreground" style={{ letterSpacing: '-0.03em' }}>
                  Meet Ismail Adekunle-Olaiya: A Business Strategist for Muslims
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed mb-10">
                  <p className="text-lg">
                    Ismail A. Olaiya (Abu Sufyaan) is a Pro-Islamic business strategist and growth expert dedicated to unlocking the potential of Muslims. As a professional business developer and brand strategist, he empowers organizations and Islamic nations through clarity, structure, and long-term thinking.
                  </p>
                  <p>
                    With half a decade of experience as a business consultant, he currently drives downstream expansion in Nigeria for Muslim business owners—leading market entry, high-value deals, and Islamic-centered growth strategies.
                  </p>
                  <p>
                    Grounded in the belief that Muslims were designed to lead—with the right mindset, strategies, and systems modeled from the Prophet ﷺ—Ismail’s vision as a growth strategist is clear: to raise Muslims who reshape the world. Read more about my <a href="/about" className="text-primary hover:underline">journey as a business consultant</a>.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </MotionWrap>
  );
};

export default About;
