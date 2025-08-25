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
      <section className="section bg-neutral-50">
        <div className="container mx-auto px-4">
          <MotionTransition
            variants={fadeIn("bottom", 0.3)}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
              Contáctanos
            </h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Completa el formulario o usa nuestros canales directos.
            </p>
          </MotionTransition>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <MotionTransition variants={fadeIn("right", 0.5)}>
              <div className="card p-8">
                <h2 className="text-2xl font-bold mb-6 text-neutral-900">
                  Envíanos un Mensaje
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 font-medium text-neutral-800"
                    >
                      Nombre Completo
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Tu nombre y apellido"
                      className="w-full p-3 bg-white rounded-lg border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:ring-2 focus:ring-primary/40 focus:border-primary/40 outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 font-medium text-neutral-800"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="tucorreo@dominio.com"
                      className="w-full p-3 bg-white rounded-lg border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:ring-2 focus:ring-primary/40 focus:border-primary/40 outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 font-medium text-neutral-800"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Cuéntanos brevemente tu necesidad"
                      className="w-full p-3 bg-white rounded-lg border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:ring-2 focus:ring-primary/40 focus:border-primary/40 outline-none"
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
                  <h2 className="text-2xl font-bold mb-6 text-neutral-900">
                    Información de Contacto
                  </h2>
                  <div className="space-y-4 text-neutral-700">
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
                    src="https://placehold.co/600x300/e5e7eb/111827?text=Mapa+de+Ubicación"
                    alt="Mapa de ubicación de PrimeTrack"
                    className="rounded-xl w-full h-auto border border-neutral-200 shadow-md"
                  />
                </div>
              </div>
            </MotionTransition>
          </div>
        </div>
      </section>

      {/* WhatsApp flotante */}
      <a
        href="https://wa.me/593123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-secondary p-4 rounded-full shadow-lg hover:bg-secondary-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40"
        aria-label="Abrir chat de WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </div>
  );
};

export default ContactPage;
