
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Brands from '@/components/Brands';
import Testimonials from '@/components/Testimonials';
import Sustainability from '@/components/Sustainability';
import Innovation from '@/components/Innovation';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Brands />
        <Testimonials />
        <Sustainability />
        <Innovation />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <SmoothScroll />
    </div>
  );
};

export default Index;
