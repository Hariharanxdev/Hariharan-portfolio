import { useState } from 'react';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, ExternalLink, X } from 'lucide-react';
import { developerInfo } from '@/data/developer';
import pythonCert from '@/assets/certificates/python-cert.png';
import javaCert from '@/assets/certificates/java-full-stack-cert.jpeg';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
}

const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Python Programming',
    issuer: 'Professional Certification',
    date: '2022',
    credentialUrl: '#',
    image: pythonCert,
  },
  {
    id: '2',
    title: 'C Programming',
    issuer: 'Professional Certification',
    date: '2022',
    credentialUrl: '#',
    image: pythonCert,
  },
  {
    id: '3',
    title: 'C++ Programming',
    issuer: 'Professional Certification',
    date: '2022',
    credentialUrl: '#',
    image: pythonCert,
  },
  {
    id: '4',
    title: 'SQL Database Management',
    issuer: 'Professional Certification',
    date: '2022',
    credentialUrl: '#',
    image: pythonCert,
  },
  {
    id: '5',
    title: 'Java Full Stack Development',
    issuer: 'Professional Certification',
    date: '2025',
    credentialUrl: '#',
    image: javaCert,
  },
];

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <SEOHead
        title="Certificates"
        description={`Professional certifications and achievements of ${developerInfo.name}.`}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 px-6 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Award className="inline size-4 mr-2" />
                Achievements
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-gradient-primary">Certificates</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Professional certifications and continuous learning achievements
              </p>
            </motion.div>
          </div>
        </section>

        {/* Certificates Grid */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <ScrollReveal key={cert.id} delay={index * 0.1}>
                <motion.div
                  className="group relative p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                  <div className="relative z-10 space-y-4">
                    {cert.image && (
                      <div
                        className="relative h-48 w-full overflow-hidden rounded-xl mb-4 cursor-pointer"
                        onClick={() => setSelectedImage(cert.image!)}
                      >
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}

                    <div className="flex items-start justify-between">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Award className="size-6 text-primary" />
                      </div>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                        >
                          <ExternalLink className="size-4 text-muted-foreground hover:text-primary" />
                        </a>
                      )}
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-muted-foreground">{cert.issuer}</p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="size-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <div className="h-24" />

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full max-h-[90vh] bg-background rounded-xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                >
                  <X className="size-6" />
                </button>
                <img
                  src={selectedImage}
                  alt="Certificate"
                  className="w-full h-full object-contain max-h-[85vh]"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
