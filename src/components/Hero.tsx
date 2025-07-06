import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/alanso-profile.jpg';

export function Hero() {
  return (
    <section className="section-padding gradient-hero min-h-screen flex items-center">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left stagger-animation">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-subtle text-primary rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Available for opportunities
            </div>
            
            <h1 className="section-title mb-6 leading-tight">
              Hi, I'm <span className="text-gradient">Alanso Mathew</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Full-Stack Developer & Software Engineer
            </h2>
            
            <p className="section-subtitle text-left lg:text-left mb-8">
              Dedicated Full-Stack Developer with over 4 years of experience building robust, 
              scalable web and mobile applications. Passionate about delivering user-focused solutions 
              using modern technologies like Django, React.js, and Flutter.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">+91 9447908235</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">alansomathew10@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary">📍</span>
                </div>
                <span className="font-medium">Kerala, India</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#contact" className="button-primary">
                Get In Touch
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/alansomathew" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-secondary"
              >
                <Github className="w-4 h-4" />
                View GitHub
              </a>
              <a 
                href="https://linkedin.com/in/alansomathew" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-secondary"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              {/* Background decorative elements */}
              <div className="absolute -inset-8 bg-gradient-primary rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-all duration-500"></div>
              <div className="absolute -inset-4 bg-primary/5 rounded-full"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-elegant transition-all duration-500 group-hover:scale-105 group-hover:shadow-glow border-4 border-background">
                <img 
                  src={profileImage} 
                  alt="Alanso Mathew - Full-Stack Developer" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-full" />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 floating-element">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  4+ Years
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 floating-element" style={{ animationDelay: '2s' }}>
                <div className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}