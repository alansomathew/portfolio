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
    <section id="about" className="section-padding bg-gradient-surface">
      <div className="container-custom">
        <div className="text-center ">
          <h2 className="section-title mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            Currently serving as a Software Developer at CHRIST University, I specialize in creating
            innovative systems for education and institutional needs while continuously exploring
            cutting-edge technologies and development methodologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-12 stagger-animation">
          {/* Career Objective */}
          <div className="professional-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-semibold text-primary">Career Objective</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Dedicated and results-driven Full-Stack Developer with over 4 years of experience building
              robust web and mobile applications. Passionate about delivering scalable, user-focused
              solutions using Django, React.js, and Flutter. Seeking opportunities to leverage full-stack
              expertise in dynamic development teams.
            </p>
          </div>

          {/* Education */}
          <div className="professional-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-2xl font-semibold text-primary">Education</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6 relative">
                <div className="absolute -left-[8px] top-2 w-3 h-3 bg-primary rounded-full"></div>
                <h4 className="font-semibold text-lg mb-2">Bachelor of Computer Application (BCA)</h4>
                <p className="text-muted-foreground font-medium mb-1">
                  St. Joseph's Academy of Higher Education and Research, Idukki
                </p>
                <p className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full w-fit">
                  Jun 2018 – Jul 2021
                </p>
              </div>
              <div className="border-l-4 border-primary/50 pl-6 relative">
                <div className="absolute -left-[8px] top-2 w-3 h-3 bg-primary/50 rounded-full"></div>
                <h4 className="font-semibold text-lg mb-2">Higher Secondary Education (Class XII)</h4>
                <p className="text-muted-foreground font-medium mb-1">
                  THSS of IHRD, Thodupuzha - Electronics and Computer Science
                </p>
                <p className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full w-fit">
                  Jun 2016 – May 2018
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}