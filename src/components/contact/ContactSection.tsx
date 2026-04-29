import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { developerInfo } from '@/data/developer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState, useRef } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import emailjs from '@emailjs/browser';

/**
 * Contact section with form and contact info
 */
export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace these with your actual EmailJS Header Creds
    // You can find these in your EmailJS dashboard: https://dashboard.emailjs.com/
    const SERVICE_ID = 'service_gmail';
    const TEMPLATE_ID = 'template_7kuu55s';
    const PUBLIC_KEY = 'aBdckNd8AZeUq3kyK';

    try {
      if (formRef.current) {
        const formData = new FormData(formRef.current);
        const templateParams = {
          user_name: formData.get('user_name'),
          user_email: formData.get('user_email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
          to_name: 'HARIHARAN E', // Your name as the recipient
        };

        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          templateParams,
          PUBLIC_KEY
        );

        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon!",
        });

        formRef.current.reset();
      }
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      toast({
        variant: "destructive",
        title: "Error sending message",
        description: error.text || "Something went wrong. Please check your credentials and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: developerInfo.email,
      href: `mailto:${developerInfo.email}`,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: developerInfo.phone,
      href: `tel:${developerInfo.phone}`,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: developerInfo.location,
      color: 'text-tertiary',
      bgColor: 'bg-tertiary/10',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: developerInfo.linkedIn,
      color: 'text-skill-flutter',
      bgColor: 'bg-skill-flutter/10',
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden" id="contact">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal variant="scale">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient-secondary">Get In Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <ScrollReveal variant="fadeLeft" className="h-full">
            <div className="space-y-6 h-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <motion.div
                className="p-8 rounded-2xl bg-gradient-card border border-border/50 flex-1 flex flex-col shadow-glow-primary/5"
              >
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="user_name"
                        placeholder="Your name"
                        required
                        className="bg-muted/30 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="user_email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="bg-muted/30 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      required
                      className="bg-muted/30 border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2 flex-1 flex flex-col">
                    <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      required
                      className="bg-muted/30 border-border/50 focus:border-primary resize-none flex-1 min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium shadow-glow-primary transition-all duration-300"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 size-4" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>
          </ScrollReveal>
          {/* Contact Info */}
          <ScrollReveal variant="fadeRight" delay={0.2} className="h-full">
            <motion.div
              className="space-y-6 h-full flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-4 flex-1">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300"
                      >
                        <div className={`p-3 rounded-lg ${item.bgColor}`}>
                          <item.icon className={`size-5 ${item.color}`} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-card border border-border/50">
                        <div className={`p-3 rounded-lg ${item.bgColor}`}>
                          <item.icon className={`size-5 ${item.color}`} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="font-medium text-foreground">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Availability notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
              >
                <p className="text-sm text-muted-foreground mb-2">Availability</p>
                <p className="font-medium text-foreground">
                  🟢 Open for freelance projects and collaborations
                </p>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}