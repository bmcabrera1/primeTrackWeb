import { MotionTransition } from "@/components/layout/transition-component";
import { fadeIn } from "../lib/motion-transitions";
import { Phone, Mail, MapPin as MapPinIcon, MessageCircle } from "lucide-react";
import React from "react";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría la lógica de envío de formulario
    alert("Formulario enviado (simulación). ¡Gracias por contactarnos!");
  };

  return (
    <div className="pt-24 md:pt-32">
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <MotionTransition
            variants={fadeIn("bottom", 0.3)}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Estamos listos para ayudarte. Completa el formulario o utiliza uno
              de nuestros canales de contacto directo.
            </p>
          </MotionTransition>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <MotionTransition variants={fadeIn("right", 0.5)}>
              <div className="p-8 bg-gray-800 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full p-3 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full p-3 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full p-3 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition-colors duration-300 hover:bg-blue-500"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </MotionTransition>

            {/* Contact Info & Map */}
            <MotionTransition variants={fadeIn("left", 0.5)}>
              <div className="space-y-8">
                <div className="p-8 bg-gray-800 rounded-lg">
                  <h2 className="text-2xl font-bold mb-6">
                    Información de Contacto
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Phone className="w-6 h-6 text-blue-500" />
                      <span className="text-lg">(02) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6 text-blue-500" />
                      <span className="text-lg">info@primetrack.com</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPinIcon className="w-6 h-6 text-blue-500 mt-1" />
                      <span className="text-lg">
                        Quito: Galo Plaza Lasso 87-21 y Rafael Bustamante
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="https://placehold.co/600x300/1f2937/4b5563?text=Mapa+de+Ubicación"
                    alt="Mapa"
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
            </MotionTransition>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/593123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </div>
  );
};

export default ContactPage;
