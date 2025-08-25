import { MotionTransition } from "@/components/layout/transition-component";
import { fadeIn } from "@/lib/motion-transitions";
import { Phone, Mail, MapPin as MapPinIcon, MessageCircle } from "lucide-react";
import React from "react";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Formulario enviado (simulación). ¡Gracias por contactarnos!");
  };

  return (
    <div>
      <section className="section bg-neutral-900">
        <div className="container mx-auto px-4">
          <MotionTransition
            variants={fadeIn("bottom", 0.3)}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
              Completa el formulario o usa nuestros canales directos.
            </p>
          </MotionTransition>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <MotionTransition variants={fadeIn("right", 0.5)}>
              <div className="card p-8">
                <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Nombre Completo
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full p-3 bg-neutral-900 rounded-lg border border-neutral-700 focus:ring-2 focus:ring-primary/60 outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Correo Electrónico
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full p-3 bg-neutral-900 rounded-lg border border-neutral-700 focus:ring-2 focus:ring-primary/60 outline-none"
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
                      className="w-full p-3 bg-neutral-900 rounded-lg border border-neutral-700 focus:ring-2 focus:ring-primary/60 outline-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </MotionTransition>

            {/* Info + Mapa */}
            <MotionTransition variants={fadeIn("left", 0.5)}>
              <div className="space-y-8">
                <div className="card p-8">
                  <h2 className="text-2xl font-bold mb-6">
                    Información de Contacto
                  </h2>
                  <div className="space-y-4 text-neutral-200">
                    <div className="flex items-center gap-4">
                      <Phone className="w-6 h-6 text-primary" />
                      <span>(02) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6 text-primary" />
                      <span>info@primetrack.com</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPinIcon className="w-6 h-6 text-primary mt-1" />
                      <span>
                        Quito: Galo Plaza Lasso 87-21 y Rafael Bustamante
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="https://placehold.co/600x300/1f2937/4b5563?text=Mapa+de+Ubicación"
                    alt="Mapa"
                    className="rounded-xl w-full h-auto border border-neutral-700/60"
                  />
                </div>
              </div>
            </MotionTransition>
          </div>
        </div>
      </section>

      {/* WhatsApp */}
      <a
        href="https://wa.me/593123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-secondary p-4 rounded-full shadow-lg hover:bg-secondary-light transition-colors"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </div>
  );
};

export default ContactPage;
