import { GraduationCap, BookOpen, Trophy, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Bio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const highlights = [
    {
      icon: GraduationCap,
      title: '3rd Year Student',
      description: 'Pursuing my degree at Sri Lanka Institute of Information Technology',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BookOpen,
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and staying updated with industry trends',
      color: 'from-cyan-500 to-blue-400',
    },
    {
      icon: Trophy,
      title: 'Academic Excellence',
      description: 'Maintaining strong academic performance while building real-world projects',
      color: 'from-blue-600 to-blue-500',
    },
    {
      icon: Target,
      title: 'Career Goals',
      description: 'Aspiring to become a skilled software engineer and contribute to innovative solutions',
      color: 'from-blue-500 to-indigo-500',
    },
  ];

  return (
    <section ref={ref} id="bio" className="py-20 px-4 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My <span className="gradient-text">Journey</span>
          </motion.h2>
          <motion.p
            className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            As a 3rd year undergraduate at SLIIT, I'm passionate about leveraging technology to solve
            real-world problems. My journey in software development has been driven by curiosity,
            dedication, and a constant desire to learn and grow.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 glow-blue group"
            >
              <motion.div
                className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <item.icon className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-br from-blue-900/50 to-slate-900/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <GraduationCap className="w-12 h-12 text-blue-400" />
            </motion.div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Sri Lanka Institute of Information Technology
              </h3>
              <p className="text-blue-300 text-lg">Bachelor of Science in Information Technology</p>
            </div>
          </div>
          <p className="text-slate-300 leading-relaxed">
            At SLIIT, I'm gaining comprehensive knowledge in software engineering, web development,
            database management, and system design. Through hands-on projects and collaborative work,
            I'm building the skills needed to excel in the tech industry. My coursework combined with
            personal projects allows me to apply theoretical concepts to practical, real-world applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
