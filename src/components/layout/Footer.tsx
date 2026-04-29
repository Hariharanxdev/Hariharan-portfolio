import { Linkedin, Mail, Github, Heart } from 'lucide-react';
import { developerInfo } from '@/data/developer';
import { Link } from 'react-router-dom';

/**
 * Developer portfolio footer with gradient accents
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-xl font-bold text-gradient-primary">
                {developerInfo.name.split(' ')[0]}
              </span>
              <span className="text-xl font-light text-foreground ml-1">
                {developerInfo.name.split(' ').slice(1).join(' ')}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Full-Stack Developer | AI & ML Learning Engineer | DevOps Engineer passionate about AI solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Me
              </Link>
              <Link to="/certificates" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Certificates
              </Link>
              <a href="/#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-2">
              <a
                href={`mailto:${developerInfo.email}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors block"
              >
                {developerInfo.email}
              </a>
              <a
                href={`tel:${developerInfo.phone}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors block"
              >
                {developerInfo.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={developerInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href={`mailto:${developerInfo.email}`}
              className="p-2 rounded-full hover:bg-secondary/10 transition-colors group"
              aria-label="Email"
            >
              <Mail className="size-5 text-muted-foreground group-hover:text-secondary transition-colors" />
            </a>
            <a
              href={developerInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-tertiary/10 transition-colors group"
              aria-label="GitHub"
            >
              <Github className="size-5 text-muted-foreground group-hover:text-tertiary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
