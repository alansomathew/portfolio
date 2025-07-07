export function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "CHRIST University, Lavasa, Pune",
      period: "Aug 2022 – Present",
      achievements: [
        "Led development of full-stack web and mobile solutions serving university administration and student needs",
        "Designed and deployed RESTful APIs using Django REST Framework to enable seamless communication between mobile/web clients and backend services",
        "Developed cross-platform mobile apps in Flutter with GetX for state management, integrating advanced features like live queue tracking and payment gateways",
        "Implemented real-time features using Firebase for data synchronization and notifications",
        "Collaborated with UI/UX teams to ensure accessible, responsive design for web dashboards and mobile apps",
        "Managed deployments and maintenance of critical university systems, prioritizing security, data integrity, and user experience"
      ]
    },
    {
      title: "Software Trainee",
      company: "Progressive Software Solutions And Training, Muvattupuzha",
      period: "Aug 2021 – Jul 2022",
      achievements: [
        "Delivered classroom and online training in Django, Flutter, JSP, PHP, JavaScript, and CSS",
        "Created structured learning modules and practical coding exercises",
        "Supported student projects, offering hands-on debugging and design guidance"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="section-title mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            Professional journey building scalable solutions and contributing to innovative projects
          </p>
        </div>

        <div className="space-y-12 stagger-animation">
          {experiences.map((exp, index) => (
            <div key={index} className="professional-card relative">
              {/* Timeline indicator */}
              <div className="absolute left-2 top-8 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
              </div>
              
              <div className=" mx-5 flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-2">{exp.title}</h3>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{exp.company}</h4>
                </div>
                <div className="lg:ml-8">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-primary-subtle px-4 py-2 rounded-full">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <div className="grid gap-4">
                {exp.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start gap-4 p-2 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}