import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { navLinks } from '../data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top)] transition-colors transition-shadow duration-300 ${
        scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold gradient-text">
          {'<Arjun />'}
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === href
                  ? 'text-primary bg-primary/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="ml-4 flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-all duration-200"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-400 hover:text-white p-2"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile sidebar overlay + drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40"
            />
            {/* Sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              style={{ backgroundColor: '#0a0a0f' }}
              className="fixed top-0 left-0 bottom-0 w-72 border-r border-border md:hidden z-50 flex flex-col isolate"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-border">
                <a href="#" className="text-xl font-bold gradient-text">
                  {'<Arjun />'}
                </a>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-400 hover:text-white p-2"
                >
                  <X size={22} />
                </button>
              </div>
              <div className="px-4 py-6 flex flex-col gap-1 flex-1">
                {navLinks.map(({ name, href }) => (
                  <a
                    key={name}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      activeSection === href
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {name}
                  </a>
                ))}
              </div>
              <div className="px-4 pb-6">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white text-sm font-medium rounded-lg w-full"
                >
                  <Download size={14} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
