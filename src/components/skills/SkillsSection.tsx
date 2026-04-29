import type { ElementType } from 'react';
import { motion } from 'framer-motion';
import { Atom, BarChart3, Brain, Code, Database, Globe2, Link2, Sparkles, Server, Terminal, Wrench, Zap, Coffee } from 'lucide-react';
import { domains, otherSkills, skills } from '@/data/developer';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function SkillsSection() {
  const technicalSkills = skills.filter(s => s.category === 'technical');

  const skillIconMap: Record<string, ElementType> = {
    Python: Terminal,
    'JavaScript (ES6+)': Zap,
    'React.js': Atom,
    'Node.js': Server,
    Java: Coffee,
    'SQL / MongoDB': Database,
  };

  const domainIconMap: Record<string, ElementType> = {
    'Artificial Intelligence': Brain,
    Blockchain: Link2,
    'Full Stack Development': Globe2,
    'Data Science': BarChart3,
  };

  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden" id="skills">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16">
            <span className="text-sm uppercase tracking-[0.35em] text-primary/70">
              What I Know
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Skills & <span className="text-gradient-primary">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to build real-world solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-16">
          <ScrollReveal>
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary shadow-lg shadow-primary/10">
                  <Code className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Technical Skills</h3>
                  <p className="text-sm text-muted-foreground">
                    Core frameworks, languages and tools I use daily.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.35)] transition-all hover:border-primary/30"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-3xl">
                      {(() => {
                        const Icon = skillIconMap[skill.name] ?? Code;
                        return <Icon className="h-8 w-8 text-primary" />;
                      })()}
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {skill.name}
                    </h4>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-secondary/10 text-secondary shadow-lg shadow-secondary/10">
                  <Wrench className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Other Skills</h3>
                  <p className="text-sm text-muted-foreground">
                    Tools, libraries and workflow skills that complement my core stack.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {otherSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                    className="inline-flex items-center rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm font-medium text-foreground shadow-sm shadow-black/10"
                  >
                    <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-primary" />
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.35)]">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary shadow-lg shadow-primary/10">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Domains & Interests</h3>
                  <p className="text-sm text-muted-foreground">
                    Focus areas where I enjoy building solutions and learning more.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {domains.map((domain, index) => (
                  <motion.div
                    key={domain.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className="rounded-3xl border border-white/10 bg-slate-950/70 p-5"
                  >
                    <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white/5 text-primary">
                      {(() => {
                        const Icon = domainIconMap[domain.name] ?? Sparkles;
                        return <Icon className="h-6 w-6" />;
                      })()}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {domain.name}
                    </h4>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {domain.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-full border border-primary/10 bg-primary/5 px-6 py-4 text-center text-sm text-primary/80 shadow-[0_20px_40px_rgba(14,165,233,0.08)]">
              I love learning new technologies and building solutions that make an impact!
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
