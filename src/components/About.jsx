import { Code, Lightbulb, Users, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center mb-3">Sobre mí</h2>
        <div className="w-32 h-1 mx-auto bg-linear-to-r from-[#ff00ff] to-[#ffd700] rounded-full"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Columna izquierda - Texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6 opacity-90">
            Pasión por crear soluciones digitales que marcan la diferencia.
          </h2>
          
          <p className="opacity-90 mb-4">
            Soy un desarrollador Full Stack con experiencia en frontend, backend y
            creación de sistemas completos. Me gusta construir productos útiles,
            optimizados y bien diseñados.
          </p>
          <p className="opacity-90">
            Me especializo en tecnologías como React, Node.js y TypeScript, pero siempre estoy aprendiendo las nuevas
            herramientas y tendencias del sector para ofrecer lo mejor en cada proyecto. 
          </p>
        </motion.div>

        {/* Columna derecha - Cards 2x2 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-black border border-gray-800 rounded-lg p-6 hover:border-indigo-500 transition-colors">
            <Code className="w-8 h-8 mb-3 text-indigo-400" />
            <h3 className="text-lg font-semibold mb-2 text-indigo-400">Codigo Limpio</h3>
            <p className="text-sm opacity-80">Código mantenible, escalable y eficiente</p>
          </div>

          <div className="bg-black border border-gray-800 rounded-lg p-6 hover:border-indigo-500 transition-colors">
            <Lightbulb className="w-8 h-8 mb-3 text-indigo-400" />
            <h3 className="text-lg font-semibold mb-2 text-indigo-400">Innovación</h3>
            <p className="text-sm opacity-80">Siempre explorando nuevas tecnologías y tendencias para resolver problemas complejos</p>
          </div>

          <div className="bg-black border border-gray-800 rounded-lg p-6 hover:border-indigo-500 transition-colors">
            <Users className="w-8 h-8 mb-3 text-indigo-400" />
            <h3 className="text-lg font-semibold mb-2 text-indigo-400">Colaboración</h3>
            <p className="text-sm opacity-80">Trabajo en equipo efectivo</p>
          </div>

          <div className="bg-black border border-gray-800 rounded-lg p-6 hover:border-indigo-500 transition-colors">
            <Coffee className="w-8 h-8 mb-3 text-indigo-400" />
            <h3 className="text-lg font-semibold mb-2 text-indigo-400">Dedicación</h3>
            <p className="text-sm opacity-80">Pasión por el código y aprender las tendencias de la industria</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
