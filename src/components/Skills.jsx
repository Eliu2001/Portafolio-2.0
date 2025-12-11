export default function Skills() {
  const skills = [
    "JavaScript", "TypeScript", "Node.js", "React", "Astro",
    "Tailwind", "Python", "SQL", "Git"
  ];

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div key={skill} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
