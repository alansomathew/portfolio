import { Github, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import qnoScreenshot from '@/assets/qno-screenshot.jpg';
import busScreenshot from '@/assets/bus-tracking-screenshot.jpg';
import locallyScreenshot from '@/assets/locally-away-screenshot.jpg';

export function Projects() {
  const projects = [
    {
      title: "The Bridge – Placement Management System",
      type: "Full-Stack Internal Web App",
      client: "CHRIST University",
      year: "2024–2025",
      tech: ["Django", "SQLite", "Bootstrap", "jQuery", "DataTables"],
      description: "Centralized placement management system for students, faculty, and recruiters with resume submissions and approval workflows.",
      features: [
        "Resume approvals and department-wise views",
        "HR dashboard with student visibility",
        "CSV uploads and print-ready views",
        "Placement tracking and analytics"
      ],
      impact: "Streamlined placement workflows and enhanced student visibility to recruiters.",
      image: qnoScreenshot,
      github: "#",
      demo: "#"
    },
    {
      title: "EZBus – Real-Time Bus Tracking & Booking",
      type: "Web App (Transport Management)",
      client: "CHRIST University Transport Unit",
      year: "2024",
      tech: ["Django", "Bootstrap", "JavaScript", "Google Maps API"],
      description: "Campus bus tracking and booking system featuring live maps, trip scheduling, and student booking with notifications.",
      features: [
        "Google Maps live tracking integration",
        "Student booking system with notifications",
        "Admin dashboard for trip management",
        "Push alerts for delays and updates"
      ],
      impact: "Improved reliability and transparency for 500+ daily commuters.",
      image: busScreenshot,
      github: "#",
      demo: "#"
    },
    {
      title: "QNO – Smart Appointment Booking System",
      type: "Cross-Platform (Web + Mobile)",
      client: "CHRIST University Health Centre",
      year: "2024",
      tech: ["React.js", "Flutter (GetX)", "Django REST API", "PostgreSQL", "Razorpay"],
      description: "Health appointment platform enabling token-based queuing, secure payments, and live wait tracking.",
      features: [
        "Real-time queue and wait tracking",
        "Razorpay integration for secure payments",
        "Role-based portals for different users",
        "Appointment reminders and notifications"
      ],
      impact: "Reduced clinic wait times by 70%; used by 200+ patients monthly.",
      image: qnoScreenshot,
      github: "#",
      demo: "#"
    },
    {
      title: "SWO Suite – Student Venue & Instrument Booking",
      type: "Internal Booking System",
      client: "Student Welfare Office",
      year: "2024",
      tech: ["Django", "Bootstrap", "JavaScript"],
      description: "Booking platform for students to reserve music rooms and instruments with real-time availability and faculty approval.",
      features: [
        "Calendar booking with real-time availability",
        "Conflict prevention and approval flow",
        "Email alerts and notifications",
        "Admin control over venue allocation"
      ],
      impact: "1000+ approved bookings; manual effort reduced by 90%.",
      image: locallyScreenshot,
      github: "#",
      demo: "#"
    },
    {
      title: "Locally Away – E-Commerce for Food Materials",
      type: "Internal E-Commerce App",
      client: "CHRIST University",
      year: "2023",
      tech: ["Django", "Tailwind CSS", "JavaScript"],
      description: "Platform to order ingredients for university event kitchens with product filtering and booking cart.",
      features: [
        "Product filters and booking cart",
        "Admin inventory management",
        "Mobile-first responsive design",
        "Secure user authentication"
      ],
      impact: "Optimized procurement during large campus events.",
      image: locallyScreenshot,
      github: "#",
      demo: "#"
    },
    {
      title: "Horizon – Static Microsite for Lavasa Retreat",
      type: "Static Site",
      client: "CHRIST University",
      year: "2023",
      tech: ["React.js", "Tailwind CSS"],
      description: "Promotional microsite for university retreat with minimalistic and fast-loading design.",
      features: [
        "Tailwind responsive layout",
        "Mobile-optimized UI design",
        "Static hosting for fast performance",
        "Registration and outreach features"
      ],
      impact: "Used for registrations and outreach across departments.",
      image: busScreenshot,
      github: "#",
      demo: "#"
    },
    {
      title: "The Buzz (Voice of Lavasa) – Music Streaming",
      type: "Internal Streaming App",
      client: "CHRIST University",
      year: "2023",
      tech: ["React.js", "Django"],
      description: "Curated music streaming website for students and faculty with playlist management and secure streaming.",
      features: [
        "Playlist management system",
        "Audio playback with streaming",
        "Secure streaming protocols",
        "Admin dashboard for content control"
      ],
      impact: "Used in university events and student-led sessions.",
      image: locallyScreenshot,
      github: "#",
      demo: "#"
    },
    {
      title: "MentEezy – Mentorship Management System",
      type: "Academic Tracking System",
      client: "Academic Mentoring Cell",
      year: "2023",
      tech: ["Django", "Bootstrap", "JavaScript"],
      description: "Platform for tracking mentorship activities between faculty and students with session logging.",
      features: [
        "Session logging and dashboards",
        "Google Sign-In integration",
        "Profile downloads and reporting",
        "Mentor-mentee matching system"
      ],
      impact: "Used by 30+ mentorship cells for structured engagement.",
      image: qnoScreenshot,
      github: "#",
      demo: "#"
    },
    {
      title: "Certify – Digital Certificate Generation",
      type: "Admin Utility Web App",
      client: "CHRIST University",
      year: "2023",
      tech: ["Django", "JavaScript"],
      description: "Platform for generating QR-secured digital certificates with dynamic templates and validation.",
      features: [
        "Dynamic certificate templates",
        "QR validation and security",
        "Secure certificate issuance",
        "Bulk generation capabilities"
      ],
      impact: "Over 1000 certificates issued during campus fests and conferences.",
      image: busScreenshot,
      github: "#",
      demo: "#"
    },
    {
      title: "LetUsDream – Conference & Outreach Website",
      type: "Public Information Website",
      client: "LetUsDream Conference",
      year: "2022",
      tech: ["Django", "Bootstrap", "JavaScript"],
      description: "Content-rich platform for conference featuring articles, speaker bios, and multimedia content.",
      features: [
        "SEO-friendly structure and content",
        "Media embeds and speaker profiles",
        "Event scheduling and registration",
        "Multi-language content support"
      ],
      impact: "Reached international educators and event attendees.",
      image: locallyScreenshot,
      github: "#",
      demo: "#"
    },
    {
      title: "Wallet View – Personal Finance Tracker",
      type: "Mobile App (Learning Project)",
      client: "Personal Project",
      year: "2022–Present",
      tech: ["Flutter", "Firebase", "Django"],
      description: "Personal budgeting app tracking expenses, insights, and shared costs. Migrated from Firebase to Django for backend improvements.",
      features: [
        "Expense charts and analytics",
        "Shared expense splitting",
        "Budget tracking and insights",
        "Cross-platform mobile support"
      ],
      impact: "Served as a practical learning project for full-stack development.",
      image: qnoScreenshot,
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
            <div key={index} className="project-card hover-lift group">{/* group class added back */}
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-smooth" />
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