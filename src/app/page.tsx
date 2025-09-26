'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Mentorship from '@/components/Mentorship';
import Events from '@/components/Events';
import Resources from '@/components/Resources';
import Blog from '@/components/Blog';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen';
import Vision from '@/components/Vision';
import MotionWrap from '@/components/MotionWrap';
import Contact from '@/components/Contact';
import Process from '@/components/Process';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const loader = document.getElementById('splash-screen');
      if (loader) {
        loader.style.opacity = '0';
        loader.addEventListener('transitionend', () => {
          setLoading(false);
        });
      } else {
        setLoading(false);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <MotionWrap>
          <Hero />
        </MotionWrap>
        <MotionWrap>
          <Vision />
        </MotionWrap>
        <MotionWrap>
          <About />
        </MotionWrap>
        <MotionWrap>
          <Process />
        </MotionWrap>
        <MotionWrap>
          <Testimonials />
        </MotionWrap>
        <MotionWrap>
          <Mentorship />
        </MotionWrap>
        <MotionWrap>
          <Events />
        </MotionWrap>
        <MotionWrap>
          <Resources />
        </MotionWrap>
        <MotionWrap>
          <Blog />
        </MotionWrap>
        <MotionWrap>
          <Faq />
        </MotionWrap>
        <MotionWrap>
          <Contact />
        </MotionWrap>
      </main>
      <Footer />
    </div>
  );
}
