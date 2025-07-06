import { Github, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import qnoScreenshot from '@/assets/qno-screenshot.jpg';
import busScreenshot from '@/assets/bus-tracking-screenshot.jpg';
import locallyScreenshot from '@/assets/locally-away-screenshot.jpg';

export function Projects() {
  const projects = [
    {
      title: "QNO – Smart Appointment Booking System",
      type: "Full-Stack",
      client: "CHRIST University Health Centre",
      year: "2024",
      tech: ["React.js", "Flutter (GetX)", "Django REST API", "PostgreSQL", "Razorpay"],
      description: "Smart appointment system for university clinics with real-time queue tracking, Razorpay payments, and multi-role login.",
      features: [
        "Live queue tracking & estimated wait time",
        "Razorpay integration for secure online payments",
        "Admin dashboard with doctor and appointment management",
        "Real-time alerts and multi-role access"
      ],
      impact: "Reduced in-clinic waiting time by 70%, serving 200+ monthly users.",
      image: qnoScreenshot,
      github: "#",
      demo: "#"
    },
    {
      title: "Real-Time Bus Tracking Mobile App",
      type: "Mobile + Maps Integration",
      client: "CHRIST University Transport Unit",
      year: "2024",
      tech: ["Flutter (GetX)", "Google Maps API", "Dio"],
      description: "Real-time location tracking app for university buses with Google Maps integration and arrival estimates.",
      features: [
        "Live bus locations on Google Maps",
        "Route/stop listing with arrival time predictions",
        "Push notifications for delays",
        "Admin panel (planned) for bus scheduling"
      ],
      impact: "Will benefit 500+ daily commuters on launch.",
      image: busScreenshot,
      github: "#",
      demo: "#",
      status: "In Development"
    },
    {
      title: "SWO Suite – Student Venue & Instrument Booking",
      type: "Web App",
      client: "Student Welfare Office",
      year: "2024",
      tech: ["Django", "Bootstrap", "JavaScript", "SQL"],
      description: "Web platform for booking practice venues and musical instruments with role-based access and approval workflows.",
      features: [
        "Real-time availability and booking calendar",
        "Email alerts and approval system",
        "Admin control over venue/instrument allocation",
        "Booking conflict prevention logic"
      ],
      impact: "1000+ approved bookings, reducing manual workload by 90%.",
      image: locallyScreenshot,
      github: "#",
      demo: "#"
    },
    {
      title: "Locally Away – E-commerce Platform",
      type: "Web App",
      client: "Personal Project",
      year: "2023",
      tech: ["Django", "Tailwind CSS", "JavaScript"],
      description: "E-commerce platform for booking ingredients and food preparation materials for local vendors and university services.",
      features: [
        "Product listing, filtering, and booking cart",
        "Secure user authentication",
        "Admin inventory and booking approval system",
        "Responsive UI design"
      ],
      impact: "Simplified material logistics during university events.",
      image: locallyScreenshot,
      github: "#",
      demo: "#"
    },
    {
      title: "MentEezy – Mentorship Management System",
      type: "Web App",
      client: "Academic Mentoring Cell",
      year: "2023",
      tech: ["Django", "JavaScript", "Bootstrap"],
      description: "Centralized platform for managing mentor-mentee relationships with progress tracking and academic planning.",
      features: [
        "Mentor/Mentee dashboards with session logs",
        "Admin control over assignments and reporting",
        "Bulk downloads and print-friendly profiles",
        "Google Sign-In integration (2024 update)"
      ],
      impact: "Improved transparency and structure across 30+ mentoring cells.",
      image: locallyScreenshot,
      github: "#",
      demo: "#"
    },
    {
      title: "Wallet View – Personal Finance App",
      type: "Mobile App",
      client: "Personal Learning Project",
      year: "2022 – Present",
      tech: ["Flutter", "Firebase", "Django"],
      description: "Personal finance tracker with daily expense monitoring, budget planning, and analytics dashboard.",
      features: [
        "Daily & monthly budget tracking",
        "Analytics dashboard with insights",
        "Secure login and data storage",
        "Shared expenses and split tracking"
      ],
      impact: "Served as a playground for trying out Flutter, Firebase, and Django together.",
      image: busScreenshot,
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of applications I've built, from healthcare management systems to 
            real-time tracking solutions and educational platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card hover-lift group">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-smooth" />
                {project.status && (
                  <Badge className="absolute top-3 right-3 bg-warning text-warning-foreground">
                    {project.status}
                  </Badge>
                )}
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-primary group-hover:text-primary-light transition-smooth">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                      {project.year}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-3">
                    <span className="font-medium">{project.type}</span>
                    {project.client && (
                      <>
                        <span>•</span>
                        <span>{project.client}</span>
                      </>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="bg-primary/5 p-3 rounded-lg">
                  <p className="text-sm font-medium text-primary">Impact: {project.impact}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Link className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}