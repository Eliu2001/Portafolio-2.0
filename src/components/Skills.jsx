import { motion } from "framer-motion";

export default function Skills() {
  const skillsData = {
    frontend: [
      { name: "Astro", level: 95, color: "#FF5D01" },
      { name: "TypeScript", level: 90, color: "#3178C6" },
      { name: "Tailwind CSS", level: 88, color: "#06B6D4" },
      { name: "React", level: 87, color: "#61DAFB" },
    ],
    backend: [
      { name: "Node.js", level: 90, color: "#68A063" },
      { name: "Java", level: 80, color: "#ED8B00" },
      { name: "Python", level: 80, color: "#3776AB" },
      { name: "MongoDB", level: 70, color: "#47A248" },
    ],
    tools: [
      { name: "Git & GitHub", level: 95, color: "#F05032" },
      { name: "VS Code", level: 90, color: "#007ACC" },
      { name: "Postman", level: 85, color: "#FF6C37" },
      { name: "Docker", level: 75, color: "#2496ED" },
    ],
  };

  const technologies = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "Express.js",
    "Node.js",
    "PostgreSQL",
    "MySQL",
    "AWS",
    "REST API",
    "GraphQL",
    "Vite",
    "Spring Boot",
    "Linux",
    "AWS",
    "Vercel",
    "Netlify",
    "Figma",
  ];

  const SkillBar = ({ name, level, color }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm font-medium" style={{ color }}>
          {level}%
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-1">
        <div
          className="h-1 rounded-full transition-all duration-1000"
          style={{ width: `${level}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-3">
          Skills y Tecnologías
        </h2>
        <div className="w-32 h-1 mx-auto bg-linear-to-r from-[#ff00ff] to-[#ffd700] rounded-full"></div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Frontend Card */}
        <motion.div
          className="bg-gray-800 border border-gray-700 rounded-lg p-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-6 text-white text-center">
            Frontend
          </h3>
          {skillsData.frontend.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              color={skill.color}
            />
          ))}
        </motion.div>

        {/* Backend Card */}
        <motion.div
          className="bg-gray-800 border border-gray-700 rounded-lg p-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-6 text-white text-center">
            Backend
          </h3>
          {skillsData.backend.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              color={skill.color}
            />
          ))}
        </motion.div>

        {/* Tools Card */}
        <motion.div
          className="bg-gray-800 border border-gray-700 rounded-lg p-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-6 text-white text-center">
            Herramientas
          </h3>
          {skillsData.tools.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              color={skill.color}
            />
          ))}
        </motion.div>
      </div>

      {/* Tecnologías adicionales */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-center mb-6">
          Tecnologías con las que he trabajado
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.05 }}
              viewport={{ once: true }}
              className="px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:border-gray-400 hover:text-white transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
