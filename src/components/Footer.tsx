import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-slate-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Portfolio</span>
            </h3>
            <p className="text-slate-400">
              Building digital experiences that make a difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-blue-400">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'Bio', 'About', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ x: 5, color: '#60a5fa' }}
                  className="block text-slate-400 hover:text-blue-400 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-blue-400">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com/chathuudealwis', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:chathupachanidu2000@gmail.com', label: 'Email' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 bg-slate-900 rounded-lg hover:bg-slate-800 border border-slate-800 hover:border-blue-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-blue-400" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-slate-800 text-center"
        >
          <p className="text-slate-400 flex items-center justify-center gap-2">
           
            Made by Chanidu Sri Chathupa De Alwis
            <span className="mx-2">|</span>
            {currentYear}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

