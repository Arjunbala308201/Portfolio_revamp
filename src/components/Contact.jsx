import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { contactData } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const socialLinks = [
  { icon: Mail, href: `mailto:${contactData.email}`, label: contactData.email },
  { icon: Phone, href: `tel:${contactData.phone}`, label: contactData.phone },
  { icon: Linkedin, href: contactData.linkedin, label: 'LinkedIn' },
  { icon: Github, href: contactData.github, label: 'GitHub' },
];

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(null), 5000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Get In Touch" subtitle="Let's connect" />

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">Let's work together</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              I'm always open to discussing new opportunities, interesting projects, or
              collaborations. Feel free to reach out!
            </p>

            <div className="flex items-center gap-3 mb-6 text-gray-400 text-sm">
              <MapPin size={16} className="text-primary" />
              Kanyakumari, Tamil Nadu, India
            </div>

            <div className="space-y-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:border-primary/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-5 sm:p-8 flex flex-col gap-5"
          >
            <div>
              <label className="text-sm text-gray-400 mb-1.5 block">Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-surface-light border border-border text-white text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-600"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1.5 block">Email</label>
              <input
                type="email"
                name="title"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-surface-light border border-border text-white text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-600"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1.5 block">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-surface-light border border-border text-white text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none placeholder:text-gray-600"
                placeholder="Hi Arjun, I'd like to..."
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>Sending...</>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
            {status === 'success' && (
              <p className="flex items-center gap-2 text-green-400 text-sm">
                <CheckCircle size={16} /> Message sent! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="flex items-center gap-2 text-red-400 text-sm">
                <AlertCircle size={16} /> Something went wrong. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
