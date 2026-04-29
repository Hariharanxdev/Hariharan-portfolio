import { developerInfo } from '@/data/developer';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GraduationCap, MapPin, Calendar, Target, Code, Cpu, Settings, Sparkles, FileText } from 'lucide-react';
import profilePhoto from '@/assets/profile-new.jpg';

const highlights = [
  
  {
    icon: Code,
    title: 'Full Stack Engineer',
    description: 'Creating responsive web apps to solve real-world problems.',
    color: 'text-skill-web',
    bgColor: 'bg-skill-web/10',
  },
  {
    icon: Settings,
    title: 'AI & Blockchain',
    description: 'Integrating smart solutions into applications',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    icon: Sparkles,
    title: 'Problem Solving',
    description: 'Turning ideas into innovative solutions',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    icon: Cpu,
    title: 'Backend Developer',
    description: 'Building scalable backend systems',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
];

/**
 * About page with biography and education
 */
export default function About() {
  return (
    <>
      <SEOHead
        title="About"
        description={`Learn more about ${developerInfo.name}, ${developerInfo.title}.`}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 px-6 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-2 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary text-sm font-medium mb-6">About Me</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-gradient-primary">{developerInfo.name}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{developerInfo.title} • {developerInfo.tagline}</p>
            </motion.div>
          </div>
        </section>

        {/* Profile Photo Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto flex justify-center">
            <ScrollReveal>
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Animated rotating gradient ring */}
                <motion.div
                  className="absolute -inset-3 rounded-full bg-gradient-to-r from-primary via-secondary to-tertiary opacity-75 blur-sm"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                {/* Pulsing glow effect */}
                <motion.div
                  className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary to-secondary opacity-30"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Photo container */}
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-background shadow-glow-primary">
                  <img
                    src={profilePhoto}
                    alt={developerInfo.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Floating particles around photo */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-primary"
                    style={{
                      top: `${30 + Math.sin(i * 60 * Math.PI / 180) * 40}%`,
                      left: `${50 + Math.cos(i * 60 * Math.PI / 180) * 50}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 2 + i * 0.3,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </ScrollReveal>
          </div>
        </section>

        {/* Bio */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              {developerInfo.biography.split('\n\n').map((p, i) => (
                <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-6">{p}</p>
              ))}
              <motion.div
                className="flex justify-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-tertiary to-secondary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      asChild
                      size="lg"
                      className="relative bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium px-10 py-6 text-lg shadow-glow-primary transition-all duration-300 gap-3"
                    >
                      <a href={developerInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                        <FileText className="size-6 animate-pulse" />
                        Download Resume
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="py-24 md:py-32 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="text-gradient-primary">What I Do</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.1} className="h-full">
                  <motion.div
                    className="group relative p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 h-full min-h-[200px] flex flex-col"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                    <div className="relative z-10 space-y-4 flex flex-col flex-1">
                      <motion.div
                        className={`inline-flex p-3 rounded-xl bg-gradient-primary shadow-lg shadow-primary/20`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <item.icon className="size-6 text-primary-foreground" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground flex-1">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="p-8 rounded-2xl bg-gradient-card border border-border/50 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-primary/10"><GraduationCap className="size-6 text-primary" /></div>
                  <h2 className="text-2xl font-semibold">Education</h2>
                </div>
                <div className="space-y-6">
                  {developerInfo.education.map((edu, index) => (
                    <div key={index} className="space-y-2 border-l-2 border-primary/20 pl-4 relative">
                      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                      <h3 className="text-lg font-medium">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><Calendar className="size-4" />{edu.duration}</span>
                        {edu.grade && <span className="px-2 py-1 rounded-md bg-secondary/10 text-secondary text-xs font-medium">{edu.grade}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="p-8 rounded-2xl bg-gradient-card border border-border/50 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-secondary/10"><MapPin className="size-6 text-secondary" /></div>
                  <h2 className="text-2xl font-semibold">Location</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-lg">{developerInfo.location}</p>
                  <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                    <div className="flex items-center gap-2 mb-2"><Target className="size-4 text-primary" /><span className="text-sm text-muted-foreground">Availability</span></div>
                    <p className="font-medium">🟢 Open for freelance & full-time opportunities</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
        <div className="h-24" />
      </div>
    </>
  );
}
