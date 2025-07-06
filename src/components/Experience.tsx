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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional journey building scalable solutions and contributing to innovative projects
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="project-card hover-lift">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-1">{exp.title}</h3>
                  <h4 className="text-lg font-medium text-foreground">{exp.company}</h4>
                </div>
                <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}