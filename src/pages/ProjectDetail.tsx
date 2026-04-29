import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Sparkles } from 'lucide-react';
import { getProjectBySlug, developerInfo } from '@/data/developer';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

/**
 * Project detail page showing full project information
 */
export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-foreground">Project Not Found</h1>
          <p className="text-muted-foreground">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/portfolio">Back to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  const categoryColors = {
    app: 'from-skill-flutter to-skill-firebase',
    ai: 'from-skill-ml to-tertiary',
    web: 'from-skill-web to-primary',
  };

  return (
    <>
      <SEOHead 
        title={project.title}
        description={project.description}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 px-6 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-6xl mx-auto relative z-10">
            {/* Back button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="size-4" />
                <span>Back to Projects</span>
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Category & Year */}
                <div className="flex items-center gap-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColors[project.category]} text-primary-foreground`}>
                    {project.category.toUpperCase()}
                  </span>
                  {/* <span className="text-sm text-muted-foreground">{project.year}</span> */}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="text-gradient-primary">{project.title}</span>
                </h1>

                <p className="text-xl text-muted-foreground">
                  {project.description}
                </p>

                {/* Impact badge */}
                {project.impact && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                    <Sparkles className="size-4 text-secondary" />
                    <span className="text-secondary font-medium">{project.impact}</span>
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium shadow-glow-primary"
                  >
                    <ExternalLink className="size-4 mr-2" />
                    View Live Demo
                  </Button>
                  {project.sourceCode && (
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary/30 hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                        <Github className="size-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-glow-primary">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Description */}
                <ScrollReveal>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">About the Project</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>
                </ScrollReveal>

                {/* Features */}
                <ScrollReveal delay={0.1}>
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Key Features</h2>
                    <ul className="space-y-4">
                      {project.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Tech Stack */}
                <ScrollReveal delay={0.2}>
                  <div className="p-6 rounded-2xl bg-gradient-card border border-border/50 space-y-4">
                    <h3 className="text-lg font-semibold">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm rounded-lg bg-muted/50 text-foreground border border-border/50 hover:border-primary/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Project Info */}
                <ScrollReveal delay={0.3}>
                  <div className="p-6 rounded-2xl bg-gradient-card border border-border/50 space-y-4">
                    <h3 className="text-lg font-semibold">Project Info</h3>
                    <dl className="space-y-3">
                      <div>
                        <dt className="text-sm text-muted-foreground">Category</dt>
                        <dd className="font-medium capitalize">{project.category}</dd>
                      </div>
                      {/* <div>
                        <dt className="text-sm text-muted-foreground">Year</dt>
                        <dd className="font-medium">{project.year}</dd>
                      </div> */}
                      <div>
                        <dt className="text-sm text-muted-foreground">Developer</dt>
                        <dd className="font-medium">{developerInfo.name}</dd>
                      </div>
                    </dl>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom spacing */}
        <div className="h-24" />
      </div>
    </>
  );
}
