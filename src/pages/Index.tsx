
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Brands from '@/components/Brands';
import Sustainability from '@/components/Sustainability';
import Innovation from '@/components/Innovation';
import Contact from '@/components/Contact';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Brands />
        <Sustainability />
        <Innovation />
        <Contact />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
