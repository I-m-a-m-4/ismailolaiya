
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Vision from '@/components/Vision';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Process from '@/components/Process';
import Reviews from '@/components/Reviews';
import Mentorship from '@/components/Mentorship';
import Events from '@/components/Events';
import Resources from '@/components/Resources';
import Blog from '@/components/Blog';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Vision />
        <About />
        <Stats />
        <Process />
        <Reviews />
        <Mentorship />
        <Events />
        <Resources />
        <Blog />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
