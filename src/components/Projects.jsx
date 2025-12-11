import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-6">Proyectos</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div key={p.title} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="opacity-80 mb-4">{p.desc}</p>

            <div className="flex gap-4">
              <a className="text-indigo-600" href={p.link}>Demo</a>
              <a className="text-indigo-600" href={p.github}>GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
