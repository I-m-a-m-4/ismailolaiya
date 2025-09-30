
import React from 'react';
import dynamic from 'next/dynamic';
import { LoaderCircle } from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const DynamicLoading = () => (
  <div className="flex justify-center items-center py-20">
    <LoaderCircle className="w-8 h-8 animate-spin" />
  </div>
);

const Vision = dynamic(() => import('@/components/Vision'), { loading: () => <DynamicLoading /> });
const About = dynamic(() => import('@/components/About'), { loading: () => <DynamicLoading /> });
const Stats = dynamic(() => import('@/components/Stats'), { loading: () => <DynamicLoading /> });
const Process = dynamic(() => import('@/components/Process'), { loading: () => <DynamicLoading /> });
const Reviews = dynamic(() => import('@/components/Reviews'), { loading: () => <DynamicLoading /> });
const Mentorship = dynamic(() => import('@/components/Mentorship'), { loading: () => <DynamicLoading /> });
const Events = dynamic(() => import('@/components/Events'), { loading: () => <DynamicLoading /> });
const Resources = dynamic(() => import('@/components/Resources'), { loading: () => <DynamicLoading /> });
const Blog = dynamic(() => import('@/components/Blog'), { loading: () => <DynamicLoading /> });
const Faq = dynamic(() => import('@/components/Faq'), { loading: () => <DynamicLoading /> });
const Contact = dynamic(() => import('@/components/Contact'), { loading: () => <DynamicLoading /> });

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
