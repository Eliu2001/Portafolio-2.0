import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generar estrellas solo en el cliente
    setStars(
      Array.from({ length: 100 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2
      }))
    );
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden bg-linear-to-b from-black via-gray-900 to-gray-800" id="hero">
      {/* Fondo de estrellas */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-5xl px-4">
      <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 0.6 }}
      className="text-base md:text-lg mb-2">
      Hola, soy 

      </motion.p>
      <motion.h1 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-4xl md:text-6xl font-bold mb-6 min-h-20 md:min-h-[100px] flex items-center justify-center">
      <span className="name-text"><span></span></span>
      </motion.h1>

      <motion.p 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="text-base md:text-lg mb-8 opacity-90">
        Creo experiencias digitales usando tecnologias de vanguardia como{' '}
        <motion.span 
          className="text-[#61DBFB] font-semibold inline-block"
          animate={{ 
            scale: [1, 1.15, 1],
            textShadow: ['0px 0px 0px rgba(97, 219, 251, 0)', '0px 0px 12px rgba(97, 219, 251, 0.8)', '0px 0px 0px rgba(97, 219, 251, 0)']
          }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
        >
          React
        </motion.span>
        ,{' '}
        <motion.span 
          className="text-[#3C873A] font-semibold inline-block"
          animate={{ 
            scale: [1, 1.15, 1],
            textShadow: ['0px 0px 0px rgba(60, 135, 58, 0)', '0px 0px 12px rgba(60, 135, 58, 0.8)', '0px 0px 0px rgba(60, 135, 58, 0)']
          }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2, delay: 0.5 }}
        >
          Node.js
        </motion.span>
        {' '}y{' '}
        <motion.span 
          className="text-[#3178C6] font-semibold inline-block"
          animate={{ 
            scale: [1, 1.15, 1],
            textShadow: ['0px 0px 0px rgba(49, 120, 198, 0)', '0px 0px 12px rgba(49, 120, 198, 0.8)', '0px 0px 0px rgba(49, 120, 198, 0)']
          }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2, delay: 1 }}
        >
          TypeScript
        </motion.span>
        . Apasionado por traer ideas a la vida.
      </motion.p>

      <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 0.6, delay: 0.6 }}>
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95, rotate: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-block"
        >
          Ver proyectos
        </motion.a>
      </motion.div>
      </div>
    </section>
  );
}