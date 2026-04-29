import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '@/data/developer';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

/**
 * Project card with hover effects and gradient accents
 */
export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const categoryColors = {
    app: 'from-primary to-secondary',
    ai: 'from-secondary to-tertiary',
    web: 'from-accent to-primary',
  };

  return (
    <ScrollReveal 
      variant={index % 2 === 0 ? 'fadeLeft' : 'fadeRight'} 
      delay={index * 0.1}
    >
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
      <Link
        to={`/project/${project.slug}`}
        className="group block relative overflow-hidden rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300"
      >
        {/* Image - Fixed height for uniform sizing */}
        <div className="h-48 relative overflow-hidden">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColors[project.category]} text-primary-foreground`}>
              {project.category.toUpperCase()}
            </span>
          </div>
          
          {/* Year badge */}
          {/* <div className="absolute top-4 right-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-muted/80 backdrop-blur-sm text-muted-foreground">
              {project.year}
            </span>
          </div> */}
        </div>

        {/* Content - Fixed height for uniform sizing */}
        <div className="p-6 space-y-4 flex flex-col h-64">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2 flex-1">
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 h-10">
                {project.description}
              </p>
            </div>
            <motion.div
              className="flex-shrink-0 p-2 rounded-full bg-muted/50 group-hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.div>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 flex-1 content-start">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground border border-border/50 h-fit"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary h-fit">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>

          {/* View project link - fixed at bottom */}
          <div className="pt-2 border-t border-border/30 mt-auto">
            <p className="text-sm text-secondary font-medium line-clamp-1 group-hover:text-primary transition-colors">
              {project.impact ? project.impact : 'Go Project'}
            </p>
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        </div>
      </Link>
      </motion.article>
    </ScrollReveal>
  );
}
