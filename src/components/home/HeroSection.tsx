import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { developerInfo } from '@/data/developer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

/**
 * Hero section with animated intro and floating decorations
 */
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Animated background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/20 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-tertiary/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(210_100%_55%/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(210_100%_55%/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="block text-foreground font-serif">Hi, I'm</span>
          <span className="text-gradient-primary">{developerInfo.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {developerInfo.title}
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {developerInfo.heroIntroduction}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium px-8 shadow-glow-primary transition-all duration-300"
          >
            <Link to="/portfolio">View My Projects</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 font-medium px-8 group/resume"
          >
            <a href={developerInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FileText className="size-5 group-hover/resume:animate-bounce" />
              Download Resume
            </a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex gap-4 justify-center pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a
            href={developerInfo.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 transition-colors group"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href={`mailto:${developerInfo.email}`}
            className="p-3 rounded-full bg-muted/50 hover:bg-secondary/20 transition-colors group"
            aria-label="Email"
          >
            <Mail className="size-5 text-muted-foreground group-hover:text-secondary transition-colors" />
          </a>
          <a
            href={developerInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted/50 hover:bg-tertiary/20 transition-colors group"
            aria-label="GitHub"
          >
            <Github className="size-5 text-muted-foreground group-hover:text-tertiary transition-colors" />
          </a>
        </motion.div>
      </div>


    </section>
  );
}
