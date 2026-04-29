import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { developerInfo } from '@/data/developer';
import { cn } from '@/lib/utils';

interface NavLink {
  name: string;
  path: string;
  isHash?: boolean;
  isExternal?: boolean;
}

const navLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About Me', path: '/about' },
  { name: 'Skills', path: '/#skills', isHash: true },
  { name: 'Projects', path: '/portfolio' },
  
  { name: 'Contact', path: '/contact' },
];

/**
 * Developer portfolio header with colorful accents
 */
export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isTransparent = location.pathname === '/' && !isScrolled;

  // Handle hash scrolling with retry mechanism for lazy loaded components
  useEffect(() => {
    const handleScroll = () => {
      if (location.hash) {
        const id = location.hash.replace('#', '');

        // Try to find the element multiple times in case of lazy loading
        let attempts = 0;
        const maxAttempts = 20; // 2 seconds
        const intervalId = setInterval(() => {
          const element = document.getElementById(id);
          if (element) {
            clearInterval(intervalId);
            setTimeout(() => {
              const headerOffset = 80;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.scrollY - headerOffset;

              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }, 100);
          } else {
            attempts++;
            if (attempts >= maxAttempts) {
              clearInterval(intervalId);
            }
          }
        }, 100);

        // Cleanup interval on unmount or dependency change
        return () => clearInterval(intervalId);
      } else if (location.pathname === '/' && !location.hash) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    const cleanup = handleScroll();
    return cleanup;
  }, [location]);

  // Handle hash navigation to skills
  const handleSkillsClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isTransparent
          ? 'bg-transparent'
          : 'glass border-b border-border/50'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <span className="text-xl font-bold tracking-tight text-gradient-primary">
                {developerInfo.name.split(' ')[0]}
              </span>
              <span className="text-xl font-light text-foreground ml-1">
                {developerInfo.name.split(' ').slice(1).join(' ')}
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => {
              const isActive = link.path === '/'
                ? location.pathname === '/' && !location.hash
                : link.isHash
                  ? location.pathname + location.hash === link.path
                  : location.pathname === link.path;

              return (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  {link.isExternal ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative text-sm font-medium transition-colors duration-300 text-muted-foreground hover:text-foreground"
                    >
                      {link.name}
                    </a>
                  ) : link.isHash ? (
                    <a
                      href={link.path}
                      onClick={(e) => handleSkillsClick(e, link.path)}
                      className={cn(
                        "relative text-sm font-medium transition-colors duration-300",
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className={cn(
                        "relative text-sm font-medium transition-colors duration-300",
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  )}
                </motion.div>
              );
            })}

            {/* Social links */}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border/50">
              <a
                href={developerInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href={developerInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-tertiary/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="size-4 text-muted-foreground hover:text-tertiary transition-colors" />
              </a>
              <a
                href={`mailto:${developerInfo.email}`}
                className="p-2 rounded-full hover:bg-secondary/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="size-4 text-muted-foreground hover:text-secondary transition-colors" />
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <ThemeToggle />
            </motion.div>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-9"
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 bg-background border-border">
                <div className="flex flex-col h-full">
                  <nav className="flex flex-col gap-6 mt-8">
                    {navLinks.map((link) => {
                      const isActive = link.path === '/'
                        ? location.pathname === '/' && !location.hash
                        : link.isHash
                          ? location.pathname + location.hash === link.path
                          : location.pathname === link.path;

                      return link.isExternal ? (
                        <a
                          key={link.path}
                          href={link.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-lg font-medium transition-colors text-muted-foreground hover:text-foreground"
                        >
                          {link.name}
                        </a>
                      ) : link.isHash ? (
                        <a
                          key={link.path}
                          href={link.path}
                          onClick={(e) => {
                            setMobileMenuOpen(false);
                            handleSkillsClick(e, link.path);
                          }}
                          className={cn(
                            "text-lg font-medium transition-colors",
                            isActive
                              ? "text-primary"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "text-lg font-medium transition-colors",
                            isActive
                              ? "text-primary"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                  </nav>

                  {/* Mobile social links */}
                  <div className="mt-auto pb-8 pt-8 border-t border-border">
                    <div className="flex items-center gap-4">
                      <a
                        href={developerInfo.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-muted/50 hover:bg-primary/10 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="size-5 text-muted-foreground" />
                      </a>
                      <a
                        href={`mailto:${developerInfo.email}`}
                        className="p-3 rounded-full bg-muted/50 hover:bg-secondary/10 transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="size-5 text-muted-foreground" />
                      </a>
                      <a
                        href={developerInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-muted/50 hover:bg-tertiary/10 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="size-5 text-muted-foreground" />
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
