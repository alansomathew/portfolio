import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/alanso-profile.jpg';

export function Hero() {
  return (
    <section className="section-padding gradient-hero">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="relative group">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-glow transition-smooth group-hover:scale-105">
              <img 
                src={profileImage} 
                alt="Alanso Mathew" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-10 transition-smooth" />
          </div>
          
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Alanso Mathew</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Full-Stack Developer | Software Engineer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Dedicated Full-Stack Developer with over 4 years of experience building robust web and mobile applications. 
              Passionate about delivering scalable, user-focused solutions using Django, React.js, and Flutter.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 9447908235
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                alansomathew10@gmail.com
              </div>
              <div className="flex items-center gap-2">
                📍 Kerala, India
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                asChild 
                size="lg" 
                className="gradient-primary text-white hover:shadow-glow transition-bounce"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover-lift">
                <a href="https://github.com/alansomathew" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover-lift">
                <a href="https://linkedin.com/in/alansomathew" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}