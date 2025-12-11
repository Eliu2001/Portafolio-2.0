export default function Hero() {
  return (
    <section className="py-32" id="hero">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Hola, soy <span className="name-text"><span></span></span>
      </h1>

      <p className="text-lg md:text-xl max-w-2xl opacity-90">
        Desarrollador Full Stack enfocado en crear experiencias web modernas,
        rápidas y escalables.
      </p>

      <div className="mt-8">
        <a
          href="#projects"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Ver proyectos
        </a>
      </div>
    </section>
  );
}
