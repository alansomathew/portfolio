export function Skills() {
    const skills = {
        'Languages & Frameworks': ['Python (Django)', 'JavaScript', 'React.js', 'Flutter', 'HTML5', 'CSS3', 'Tailwind CSS'],
        'Backend': ['Django REST Framework', 'PostgreSQL', 'MySQL', 'Firebase'],
        'Frontend': ['React.js', 'Bootstrap', 'jQuery'],
        'Mobile': ['Flutter (with GetX)'],
        'Dev Tools': ['Git', 'GitHub'],
        'Other': ['API Design & Integration', 'Agile Development', 'Google Maps API', 'Razorpay Integration']
    };

   
    return (
        <section id="skills" className="section-padding bg-gradient-surface">
            <div className="container-custom">

                {/* Skills */}
                <div className="">
                    <div className="text-center mb-16">
                        <h3 className="section-title mb-6">
                            Technical <span className="text-gradient">Skills</span>
                        </h3>
                        <p className="section-subtitle">
                            Comprehensive expertise across the full development stack
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
                        {Object.entries(skills).map(([category, items], index) => (
                            <div key={category} className="professional-card group">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <span className="text-primary font-bold">{index + 1}</span>
                                    </div>
                                    <h4 className="font-semibold text-primary text-lg">{category}</h4>
                                </div>
                                <div className="flex flex-wrap gap-3">
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
            </div>
        </section>
    );
}