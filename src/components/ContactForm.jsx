export default function ContactForm() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>

      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        className="grid gap-4 max-w-xl"
      >
        <input name="name" placeholder="Tu nombre" className="p-3 bg-gray-100 dark:bg-gray-800 rounded" />

        <input name="email" type="email" placeholder="Tu email" className="p-3 bg-gray-100 dark:bg-gray-800 rounded" />

        <textarea name="message" placeholder="Mensaje" className="p-3 bg-gray-100 dark:bg-gray-800 rounded h-32"></textarea>

        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}
