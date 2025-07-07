import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Link } from 'lucide-react';

export function Certificates() {
  const professionalCertificates = [
    {
      title: "Full-Stack Web Development Professional",
      issuer: "Meta",
      platform: "Coursera",
      date: "2024",
      skills: ["React", "Django", "Node.js", "Database Design"],
      credentialId: "META-2024-001",
      verifyUrl: "#"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      platform: "Google Cloud Skills Boost",
      date: "2024",
      skills: ["Cloud Architecture", "API Development", "Kubernetes"],
      credentialId: "GCP-DEV-2024",
      verifyUrl: "#"
    },
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      platform: "AWS Training",
      date: "2023",
      skills: ["Cloud Infrastructure", "System Design", "Security"],
      credentialId: "AWS-SA-2023",
      verifyUrl: "#"
    }
  ];

  const courseCertificates = [
    {
      title: "Advanced React and Redux",
      issuer: "University of Helsinki",
      platform: "edX",
      date: "2024",
      skills: ["React Hooks", "Redux Toolkit", "Testing"],
      grade: "95%",
      verifyUrl: "#"
    },
    {
      title: "Mobile App Development with Flutter",
      issuer: "Google Developers",
      platform: "Udacity",
      date: "2023",
      skills: ["Flutter", "Dart", "Firebase", "State Management"],
      grade: "A+",
      verifyUrl: "#"
    },
    {
      title: "Database Systems and SQL",
      issuer: "Stanford University",
      platform: "Coursera",
      date: "2023",
      skills: ["PostgreSQL", "Database Design", "Query Optimization"],
      grade: "98%",
      verifyUrl: "#"
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "California Institute of the Arts",
      platform: "Coursera",
      date: "2022",
      skills: ["Design Thinking", "Prototyping", "User Research"],
      grade: "92%",
      verifyUrl: "#"
    },
    {
      title: "Python for Data Science",
      issuer: "IBM",
      platform: "edX",
      date: "2022",
      skills: ["Python", "Data Analysis", "Machine Learning"],
      grade: "96%",
      verifyUrl: "#"
    },
    {
      title: "Cybersecurity Fundamentals",
      issuer: "University of Maryland",
      platform: "Coursera",
      date: "2022",
      skills: ["Network Security", "Cryptography", "Risk Assessment"],
      grade: "94%",
      verifyUrl: "#"
    }
  ];

  return (
    <section id="certificates" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications & <span className="text-gradient">Credentials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and course completions that demonstrate my commitment to 
            continuous learning and expertise in modern technologies.
          </p>
        </div>

        {/* Professional Certificates */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-2xl font-bold">Professional Certifications</h3>
            <Badge variant="secondary" className="text-sm">
              Industry Recognition
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalCertificates.map((cert, index) => (
              <div key={index} className="professional-card group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {cert.issuer.charAt(0)}
                    </span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {cert.date}
                  </Badge>
                </div>
                
                <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">
                  {cert.title}
                </h4>
                
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-medium text-primary">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">{cert.platform}</p>
                  {cert.credentialId && (
                    <p className="text-xs text-muted-foreground">
                      ID: {cert.credentialId}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="skill-tag text-xs">
                      {skill}
                    </span>
                  ))}
                </div>

                <Button variant="outline" size="sm" asChild className="w-full">
                  <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                    <Link className="w-4 h-4 mr-2" />
                    Verify Certificate
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Course Certificates */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-2xl font-bold">Course Certifications</h3>
            <Badge variant="secondary" className="text-sm">
              Continuous Learning
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseCertificates.map((cert, index) => (
              <div key={index} className="professional-card group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-xs mb-1">
                      {cert.date}
                    </Badge>
                    {cert.grade && (
                      <div className="text-xs font-medium text-primary">
                        {cert.grade}
                      </div>
                    )}
                  </div>
                </div>
                
                <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">
                  {cert.title}
                </h4>
                
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-medium text-primary">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">{cert.platform}</p>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="skill-tag text-xs">
                      {skill}
                    </span>
                  ))}
                </div>

                <Button variant="outline" size="sm" asChild className="w-full">
                  <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                    <Link className="w-4 h-4 mr-2" />
                    View Certificate
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}