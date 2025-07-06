import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { ColorCustomizer } from './ColorCustomizer';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-gradient hover:scale-105 transition-bounce"
          >
            Alanso Mathew
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium hover:text-primary transition-smooth"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-sm font-medium hover:text-primary transition-smooth"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-sm font-medium hover:text-primary transition-smooth"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium hover:text-primary transition-smooth"
            >
              Contact
            </button>
          </div>

          {/* Theme Controls */}
          <div className="flex items-center gap-2">
            <ColorCustomizer />
            <ThemeToggle />
            <Button 
              onClick={() => scrollToSection('contact')}
              size="sm"
              className="hidden sm:inline-flex gradient-primary text-white hover:shadow-glow transition-bounce"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}