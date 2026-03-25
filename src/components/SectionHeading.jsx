import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <p className="text-primary font-mono text-sm tracking-wider mb-2">
        {subtitle}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
    </motion.div>
  );
}
