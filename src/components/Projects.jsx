import { projects } from "../data/projects";
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-3">Proyectos</h2>
        <div className="w-32 h-1 mx-auto bg-linear-to-r from-[#ff00ff] to-[#ffd700] rounded-full"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, index) => (
          <motion.div 
            key={p.title} 
            className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-indigo-500 transition-colors"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Imagen con icono de GitHub */}
            <div className="relative">
              <img 
                src={p.image} 
                alt={p.title}
                className="w-full h-48 object-cover"
              />
              <a 
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-black/70 hover:bg-black p-2 rounded-full transition-colors"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
            </div>

            {/* Contenido */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="opacity-80 mb-4 text-sm">{p.desc}</p>
              
              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2">
                {p.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded-full border border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
