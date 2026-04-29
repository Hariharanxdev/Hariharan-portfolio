import { projects, developerInfo } from '@/data/developer';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { SEOHead } from '@/components/seo/SEOHead';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { motion } from 'framer-motion';

/**
 * Projects page showcasing all projects with skills section
 */
export default function Portfolio() {
  return (
    <>
      <SEOHead 
        title="Projects"
        description={`Browse ${developerInfo.name}'s projects including mobile apps, AI solutions, and web development work.`}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 px-6 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-wide">
                My Work
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-gradient-primary">Projects</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                A collection of projects showcasing my skills in AI/ML, and web technologies
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 md:py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient-primary">Featured Projects</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Here are some of the projects I've worked on
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <SkillsSection />

        {/* Call to Action */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-12 rounded-3xl bg-gradient-card border border-border/50 relative overflow-hidden"
              whileHover={{ borderColor: 'hsl(var(--primary) / 0.3)' }}
            >
              {/* Glow effects */}
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Have a project in mind?
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  I'm always excited to work on new challenges. Let's build something amazing together!
                </p>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow-primary hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bottom spacing */}
        <div className="h-12" />
      </div>
    </>
  );
}
