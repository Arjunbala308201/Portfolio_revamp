import { Github, Linkedin, Mail } from 'lucide-react';
import { contactData } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm whitespace-nowrap">
          &copy; {new Date().getFullYear()} Arjun S.A. Built with React & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={contactData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${contactData.email}`}
            className="text-gray-500 hover:text-primary transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
