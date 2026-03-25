import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, ChevronLeft, ChevronRight, X, Layers, Monitor } from 'lucide-react';
import { projectsData } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import ecommVideo from '../assets/e-comm.vdo.mp4';
import tm1Img from '../assets/tm1.png';

function PlaceholderImage({ alt, index }) {
  const colors = [
    'from-primary/20 to-purple-600/20',
    'from-blue-600/20 to-primary/20',
    'from-purple-600/20 to-pink-500/20',
    'from-primary/20 to-cyan-500/20',
  ];
  return (
    <div
      className={`w-full h-full bg-gradient-to-br ${colors[index % 4]} flex items-center justify-center`}
    >
      <div className="text-center">
        <Monitor size={48} className="text-primary/40 mx-auto mb-3" />
        <p className="text-gray-500 text-sm font-medium">{alt}</p>
      </div>
    </div>
  );
}

function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  return (
    <div className="relative rounded-xl overflow-hidden bg-surface-light aspect-video">
      <PlaceholderImage alt={images[current].alt} index={current} />
      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrent((p) => (p === 0 ? images.length - 1 : p - 1))}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 glass rounded-full flex items-center justify-center text-white hover:bg-primary/20 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => setCurrent((p) => (p === images.length - 1 ? 0 : p + 1))}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 glass rounded-full flex items-center justify-center text-white hover:bg-primary/20 transition-colors"
          >
            <ChevronRight size={16} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === current ? 'bg-primary w-6' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative glass-strong rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 z-10 w-8 h-8 rounded-full bg-surface-lighter flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 transition-colors"
        >
          <X size={16} />
        </button>

        <div className="p-8">
          {project.video && (
            <div className="mb-8 rounded-xl overflow-hidden" style={{ marginTop: '-2%' }}>
              <div className="overflow-hidden" style={{ marginTop: '-8%' }}>
                <video
                  src={ecommVideo}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}
          {project.image && !project.video && (
            <div className="mb-8 rounded-xl overflow-hidden">
              <img src={tm1Img} alt={project.title} className="w-full h-auto" />
            </div>
          )}
          {project.images && !project.video && !project.image && (
            <div className="mb-8">
              <ImageCarousel images={project.images} />
            </div>
          )}

          <div className="mb-2 flex items-center gap-2">
            {project.category && (
              <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                {project.category}
              </span>
            )}
          </div>

          <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            {project.fullDesc || project.shortDesc}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-lg bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.features && (
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Layers size={16} className="text-primary" /> Key Features
              </h4>
              <ul className="space-y-2">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.contributions && (
            <div>
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Eye size={16} className="text-primary" /> My Contributions
              </h4>
              <ul className="space-y-2">
                {project.contributions.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {(project.github || project.live) && (
            <div className="flex gap-3 mt-8 pt-6 border-t border-border">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-border hover:border-primary/50 text-gray-300 hover:text-white transition-all"
                >
                  <Github size={16} /> Source Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-primary hover:bg-primary-dark text-white transition-all"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function TeamProjectCard({ project, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      <div className="grid md:grid-cols-2">
        <div className="aspect-video md:aspect-auto">
          <PlaceholderImage alt={project.images[0].alt} index={0} />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded self-start mb-3">
            Team Project
          </span>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.shortDesc}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs rounded-md bg-surface-lighter text-gray-400 border border-border"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 5 && (
              <span className="px-2.5 py-1 text-xs rounded-md bg-surface-lighter text-gray-400 border border-border">
                +{project.techStack.length - 5}
              </span>
            )}
          </div>
          <span className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
            <Eye size={16} /> View Details
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function IndividualProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group flex flex-col"
    >
      {/* Decorative header */}
      <div className="rounded-xl bg-gradient-to-br from-surface-light to-surface-lighter mb-5 overflow-hidden">
        {project.video ? (
          <div className="overflow-hidden" style={{ marginTop: '-8%' }}>
            <video
              src={ecommVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
          </div>
        ) : project.image ? (
          <img
            src={tm1Img}
            alt={project.title}
            className="w-full h-auto object-contain"
          />
        ) : (
          <div className="h-32">
            <PlaceholderImage alt={project.title} index={index} />
          </div>
        )}
      </div>

      <h3
        className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors cursor-pointer"
        onClick={onClick}
      >
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{project.shortDesc}</p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs rounded bg-surface-lighter text-gray-500 border border-border"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors"
          >
            <Github size={15} /> Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-gray-400 hover:text-primary text-sm transition-colors"
          >
            <ExternalLink size={15} /> Live
          </a>
        )}
        <button
          onClick={onClick}
          className="ml-auto flex items-center gap-1.5 text-primary text-sm font-medium hover:gap-2.5 transition-all"
        >
          <Eye size={15} /> Details
        </button>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Projects" subtitle="What I've built" />

        {/* Team project(s) */}
        <div className="mb-16">
          {projectsData.team.map((p) => (
            <TeamProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} />
          ))}
        </div>

        {/* Individual projects */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl font-semibold text-white mb-8"
        >
          Individual Projects
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projectsData.individual.map((p, i) => (
            <IndividualProjectCard
              key={p.id}
              project={p}
              index={i}
              onClick={() => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
