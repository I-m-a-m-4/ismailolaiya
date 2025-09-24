import About from '@/components/About';
import FunFacts from '@/components/FunFacts';
import Testimonials from '@/components/Testimonials';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        <About />
        <FunFacts />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
