import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Certificates } from '@/components/Certificates';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Skills } from '@/components/Skills';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
