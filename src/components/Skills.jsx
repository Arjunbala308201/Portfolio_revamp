import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Skills() {
  const categories = Object.values(skillsData);

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Skills & Technologies" subtitle="What I work with" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
              className="glass rounded-2xl p-5 sm:p-8 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <cat.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-white font-semibold text-lg">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: ci * 0.1 + si * 0.03 }}
                    className="px-3.5 py-1.5 text-sm font-medium rounded-lg bg-surface-lighter text-gray-300 border border-border hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
