import { HeroSection } from '@/components/home/HeroSection';
import { AboutPreview } from '@/components/home/AboutPreview';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { ContactSection } from '@/components/contact/ContactSection';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { projects, developerInfo } from '@/data/developer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Homepage - Developer Portfolio for HariHaran E
 * Features hero, about preview, projects, skills, and contact sections
 */
export default function Home() {
  return (
    <>
      <SEOHead 
        title={`${developerInfo.name} | ${developerInfo.title}`}
        description={developerInfo.heroIntroduction}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Preview */}
        <AboutPreview />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <section className="py-24 md:py-32 px-6 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-tertiary/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="text-gradient-primary">Projects</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Showcasing my best work in mobile development and AI
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="flex justify-center mt-12">
                <Link
                  to="/portfolio"
                  className="group inline-flex items-center gap-2 text-lg font-medium text-primary hover:text-primary-glow transition-colors"
                >
                  <span>View All Projects</span>
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
}
