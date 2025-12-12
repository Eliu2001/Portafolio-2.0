import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        e.target.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError(data.message || 'Error al enviar el mensaje');
        console.error('Error:', data);
      }
    } catch (error) {
      setError('Error de conexión. Intenta de nuevo.');
      console.error('Error al enviar:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Estoy disponible para nuevos proyectos. ¡Hablemos!
          </p>

          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto space-y-6"
          >
            {/* Access Key de Web3Forms */}
            <input 
              type="hidden" 
              name="access_key" 
              value="d0b6eec6-8347-4efe-b7ba-eb87f11092b5"
            />
            
            {/* Honeypot para spam - debe estar vacío */}
            <input 
              type="text" 
              name="botcheck"
              style={{ display: 'none' }}
            />

            {/* Redirect opcional */}
            <input type="hidden" name="redirect" value="false" />

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Tu nombre completo"
                className="w-full p-4 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="tu@email.com"
                className="w-full p-4 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Mensaje
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows="6"
                placeholder="Cuéntame sobre tu proyecto..."
                className="w-full p-4 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Enviando...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    ¡Mensaje enviado!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar mensaje
                  </>
                )}
              </button>
            </motion.div>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-green-900/20 border border-green-500 rounded-lg text-center text-green-400"
              >
                ¡Gracias! Te responderé pronto 🚀
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-red-900/20 border border-red-500 rounded-lg text-center text-red-400"
              >
                {error}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
