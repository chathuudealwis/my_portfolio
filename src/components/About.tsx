import { Code2, Palette, Rocket, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    {
      icon: Code2,
      title: 'Development',
      description: 'Building scalable applications with React, TypeScript, Node.js, and modern frameworks.',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creating intuitive interfaces with attention to detail and user experience.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed, efficiency, and seamless user interactions.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams using Agile methodologies and best practices.',
    },
  ];

  return (
    <section ref={ref} id="about" className="py-20 px-4 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6 text-center"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-300 mb-16 text-center max-w-3xl mx-auto"
        >
          I'm a passionate full-stack developer and 3rd year undergraduate at SLIIT.
          I love turning complex problems into simple, beautiful, and intuitive solutions.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 glow-blue"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4"
              >
                <skill.icon className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
              <p className="text-slate-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-blue-900/30 to-slate-900/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-blue-300 mb-3 text-lg">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion'].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1 bg-slate-800 text-blue-300 rounded-full text-sm font-medium border border-slate-700 cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-blue-300 mb-3 text-lg">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'PostgreSQL', 'Supabase', 'REST APIs'].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1 bg-slate-800 text-blue-300 rounded-full text-sm font-medium border border-slate-700 cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-blue-300 mb-3 text-lg">Tools</h4>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'VS Code', 'Figma', 'Vite'].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1 bg-slate-800 text-blue-300 rounded-full text-sm font-medium border border-slate-700 cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
