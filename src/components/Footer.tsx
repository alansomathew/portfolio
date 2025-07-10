import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">Alanso Mathew</h3>
            <p className="text-muted-foreground mb-4">
              Full-Stack Developer passionate about creating innovative solutions 
              with modern technologies.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/alansomathew" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-smooth"
              >
                <Github className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://linkedin.com/in/alansomathew" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-smooth"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="mailto:alansomathew10@gmail.com"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-smooth"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="tel:+919447908235"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-smooth"
              >
                <Phone className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-smooth">About Me</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-primary transition-smooth">Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-smooth">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-smooth">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <a className="flex items-center gap-2" href="mailto:alansomathew10@gmail.com">
                <Mail className="w-4 h-4" /> 
                alansomathew10@gmail.com
              </a>
              <a className="flex items-center gap-2" href="tel:+919447908235">
                <Phone className="w-4 h-4" />
                +91 9447908235
              </a>
              <p className="flex items-center gap-2">
                📍 Kerala, India
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} Alanso Mathew. All rights reserved.</p>
          <p className="text-sm mt-2">
            Built with React, TypeScript, and Tailwind CSS • Hosted on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  );
}