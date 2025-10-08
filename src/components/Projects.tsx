import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import myPhoto from '../uploads/project_photo.png';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      title: 'Aquarium Management System',
      description: 'A full-stack aquarium management solution with payment integration, inventory management, and real-time analytics.',
      image: myPhoto,
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com/chathuudealwis/ceylonAquapulse',
      
    }
    
  ];

  return (
    <section ref={ref} id="projects" className="py-20 px-4 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6 text-center"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-300 mb-16 text-center max-w-3xl mx-auto"
        >
          A selection of projects I've worked on, showcasing my expertise in web development
          and problem-solving abilities.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 glow-blue group"
            >
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.1 }}
                      className="px-2 py-1 bg-slate-900 text-blue-400 rounded text-xs font-medium border border-slate-700"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">Code</span>
                  </motion.a>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
