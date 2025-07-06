export function About() {
  const skills = {
    'Languages & Frameworks': ['Python (Django)', 'JavaScript', 'React.js', 'Flutter', 'HTML5', 'CSS3', 'Tailwind CSS'],
    'Backend': ['Django REST Framework', 'PostgreSQL', 'MySQL', 'Firebase'],
    'Frontend': ['React.js', 'Bootstrap', 'jQuery'],
    'Mobile': ['Flutter (with GetX)'],
    'Dev Tools': ['Git', 'GitHub'],
    'Other': ['API Design & Integration', 'Agile Development', 'Google Maps API', 'Razorpay Integration']
  };

  const certifications = [
    'Flutter Development – Udemy (Sep 2022 – Nov 2022)',
    'Meta Frontend Developer – Coursera (May 2023)',
    'Advanced React – Meta (Grade: 89.10%)',
    'Principles of UX/UI Design – Meta (Grade: 92.50%)',
    'Programming with JavaScript – Meta (Grade: 99.20%)'
  ];

  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Currently serving as a Software Developer at CHRIST University, I specialize in creating 
            innovative systems for education and institutional needs while continuously exploring 
            new technologies and development methodologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Career Objective */}
          <div className="project-card">
            <h3 className="text-xl font-semibold mb-4 text-primary">Career Objective</h3>
            <p className="text-muted-foreground leading-relaxed">
              Dedicated and results-driven Full-Stack Developer with over 4 years of experience building 
              robust web and mobile applications. Passionate about delivering scalable, user-focused 
              solutions using Django, React.js, and Flutter. Seeking opportunities to leverage full-stack 
              expertise in dynamic development teams.
            </p>
          </div>

          {/* Education */}
          <div className="project-card">
            <h3 className="text-xl font-semibold mb-4 text-primary">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Bachelor of Computer Application (BCA)</h4>
                <p className="text-sm text-muted-foreground">
                  St. Joseph's Academy of Higher Education and Research, Idukki
                </p>
                <p className="text-sm text-muted-foreground">Jun 2018 – Jul 2021</p>
              </div>
              <div>
                <h4 className="font-medium">Higher Secondary Education (Class XII)</h4>
                <p className="text-sm text-muted-foreground">
                  THSS of IHRD, Thodupuzha - Electronics and Computer Science
                </p>
                <p className="text-sm text-muted-foreground">Jun 2016 – May 2018</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-12">
            Technical <span className="text-gradient">Skills</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="project-card">
                <h4 className="font-semibold text-primary mb-3">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-12">
            <span className="text-gradient">Certifications</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="project-card">
                <p className="text-sm">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}