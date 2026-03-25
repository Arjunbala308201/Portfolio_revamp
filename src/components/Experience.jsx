import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Award } from 'lucide-react';
import { experienceData } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Professional Experience" subtitle="Where I've worked" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          {experienceData.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-8 md:pl-20 pb-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-8 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-[#0a0a0f] glow" />

              <div className="glass rounded-2xl p-5 sm:p-8 hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <Briefcase size={15} />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-sm text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((point, pi) => (
                    <motion.li
                      key={pi}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + pi * 0.08 }}
                      className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {point}
                    </motion.li>
                  ))}
                </ul>

                {exp.certificate && (
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 text-sm font-medium rounded-lg border border-border hover:border-primary/50 text-gray-300 hover:text-white transition-all"
                  >
                    <Award size={16} className="text-primary" />
                    View Certificate
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
