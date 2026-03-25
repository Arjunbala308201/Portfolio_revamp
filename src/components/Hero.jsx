import { motion } from 'framer-motion';
import { ArrowDown, FolderOpen, Download } from 'lucide-react';
import { heroData } from '../data/portfolio';
import profilePlaceholder from '../assets/profile-placeholder.svg';

// Place your profile photo at src/assets/profile.jpg to replace the placeholder
const profileModules = import.meta.glob('../assets/profile.{jpg,jpeg,png,webp}', { eager: true, import: 'default' });
const profileImg = Object.values(profileModules)[0] || profilePlaceholder;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32 flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm mb-4 tracking-wider"
          >
            {heroData.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
          >
            <span className="gradient-text">{heroData.name}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-6"
          >
            {heroData.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed mb-8 sm:mb-10"
          >
            {heroData.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 text-sm sm:text-base"
            >
              <FolderOpen size={18} />
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 border border-border hover:border-primary/50 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:bg-primary/5 text-sm sm:text-base"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
            {/* Glow ring */}
            <div className="absolute -inset-1 bg-gradient-to-br from-primary via-purple-500 to-primary rounded-full opacity-60 blur-md animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30">
              <img
                src={profileImg}
                alt="Arjun S.A"
                className="w-full h-full object-cover "
              />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -bottom-2 -right-2 glass px-4 py-2 rounded-xl text-sm font-mono text-primary"
            >
              {'< MERN + MEAN />'}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={20} className="text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
