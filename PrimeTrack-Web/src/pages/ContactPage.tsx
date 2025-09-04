import React, { useState } from "react";
import { MotionTransition } from "@/components/layout/transition-component";
import { fadeIn } from "@/lib/motion-transitions";
import {
  Phone,
  Mail,
  MapPin as MapPinIcon,
  MessageCircle,
  Clock,
  Send,
  ChevronDown,
} from "lucide-react";

const BRAND = {
  PRIMARY: "#6200F7",
  SECONDARY: "#E73400",
};
const gradient = `linear-gradient(90deg, ${BRAND.PRIMARY}, ${BRAND.SECONDARY})`;

const ContactPage: React.FC = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot simple contra bots
    if ((data.get("company_website") as string)?.trim().length) return;

    const email = (data.get("email") as string) || "";
    const message = (data.get("message") as string) || "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Por favor ingresa un correo válido.");
      return;
    }
    if (message.trim().length < 10) {
      setError("El mensaje es muy corto. Cuéntanos un poco más, por favor.");
      return;
    }

    setSending(true);
    // Simulación de envío
    setTimeout(() => {
      setSending(false);
      setSent(true);
      form.reset();
    }, 900);
  };

  const whatsappHref =
    "https://wa.me/593992339274?text=Hola%20PrimeTrack%2C%20necesito%20informaci%C3%B3n%20sobre%20planes%20de%20rastreo%20vehicular.";
  const mapsEmbedSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.805595702777!2d-78.47723732532342!3d-0.14470513544321567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58fff8ff40db1%3A0x9f578da496afcf71!2sDe%20los%20%C3%81lamos%20%26%20Av.%206%20de%20Diciembre%2C%20170138%20Quito!5e0!3m2!1ses-419!2sec!4v1756868429688!5m2!1ses-419!2sec";

  return (
    <div>
      <section className="section bg-neutral-50">
        <div className="container mx-auto px-4">
          {/* Encabezado visible de inmediato */}
          <MotionTransition
            variants={fadeIn("bottom", {
              delay: 0.0,
              duration: 0.6,
              distance: 16,
            })}
            className="text-center mb-12"
            initialVisible
            inViewDetect={false}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
              Contáctanos
            </h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Completa el formulario o usa nuestros canales directos.
              Respondemos en menos de <strong>24 horas hábiles</strong>.
            </p>
          </MotionTransition>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulario (no espera scroll) */}
            <MotionTransition
              variants={fadeIn("right", {
                delay: 0.05,
                duration: 0.6,
                distance: 20,
              })}
              initialVisible
              inViewDetect={false}
            >
              <div className="card p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6 text-neutral-900">
                  Envíanos un Mensaje
                </h2>

                {/* Mensajes de estado */}
                <div aria-live="polite" className="mb-4">
                  {sent && (
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 px-4 py-3 text-sm">
                      ¡Gracias! Hemos recibido tu mensaje. Te contactaremos muy
                      pronto.
                    </div>
                  )}
                  {!!error && (
                    <div className="rounded-xl border border-red-200 bg-red-50 text-red-800 px-4 py-3 text-sm">
                      {error}
                    </div>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <input
                    type="text"
                    name="company_website"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid md:grid-cols-2 gap-4">
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
                        className="w-full h-12 px-3 bg-white rounded-lg border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:ring-2 focus:ring-violet-300 focus:border-violet-300 outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-2 font-medium text-neutral-800"
                      >
                        Teléfono
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+593 9 0000 0000"
                        pattern="^[0-9+()\\s-]{7,}$"
                        className="w-full h-12 px-3 bg-white rounded-lg border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:ring-2 focus:ring-violet-300 focus:border-violet-300 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
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
                        className="w-full h-12 px-3 bg-white rounded-lg border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:ring-2 focus:ring-violet-300 focus:border-violet-300 outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="plan"
                        className="block mb-2 font-medium text-neutral-800"
                      >
                        Plan de interés
                      </label>
                      <div className="relative">
                        <select
                          id="plan"
                          name="plan"
                          defaultValue=""
                          className="w-full h-12 px-3 pr-10 bg-white rounded-lg border border-neutral-200 text-neutral-900 focus:ring-2 focus:ring-violet-300 focus:border-violet-300 outline-none appearance-none"
                        >
                          <option value="" disabled>
                            Selecciona un plan
                          </option>
                          <option value="basic">Básico</option>
                          <option value="pro">Profesional</option>
                          <option value="enterprise">Empresarial</option>
                          <option value="other">No estoy seguro/a</option>
                        </select>
                        <ChevronDown
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
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
                      className="w-full p-3 bg-white rounded-lg border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:ring-2 focus:ring-violet-300 focus:border-violet-300 outline-none"
                    />
                    <p className="mt-2 text-xs text-neutral-500">
                      Al enviar aceptas nuestro tratamiento de datos con fines
                      de contacto y soporte.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold text-white shadow-sm focus:outline-none focus:ring-4 focus:ring-violet-200`}
                    style={{ backgroundImage: gradient }}
                    disabled={sending}
                    aria-busy={sending}
                  >
                    {sending ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </form>
              </div>
            </MotionTransition>

            {/* Info + Mapa (no espera scroll) */}
            <MotionTransition
              variants={fadeIn("left", {
                delay: 0.1,
                duration: 0.6,
                distance: 20,
              })}
              initialVisible
              inViewDetect={false}
            >
              <div className="space-y-8">
                {/* Canales directos */}
                <div className="card p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6 text-neutral-900">
                    Información de Contacto
                  </h2>
                  <div className="space-y-5 text-neutral-700">
                    <a
                      href="tel:+593992339274"
                      className="flex items-center gap-4 group"
                    >
                      <span
                        className="p-2 rounded-lg text-white"
                        style={{ backgroundImage: gradient }}
                        aria-hidden="true"
                      >
                        <Phone className="w-5 h-5" />
                      </span>
                      <span className="group-hover:underline">
                        (+593) 099-233-9274
                      </span>
                    </a>

                    <a
                      href="mailto:info@primetrack.com"
                      className="flex items-center gap-4 group"
                    >
                      <span
                        className="p-2 rounded-lg text-white"
                        style={{ backgroundImage: gradient }}
                        aria-hidden="true"
                      >
                        <Mail className="w-5 h-5" />
                      </span>
                      <span className="group-hover:underline">
                        info@primetrack.com
                      </span>
                    </a>

                    <div className="flex items-start gap-4">
                      <span
                        className="p-2 rounded-lg text-white mt-1"
                        style={{ backgroundImage: gradient }}
                        aria-hidden="true"
                      >
                        <MapPinIcon className="w-5 h-5" />
                      </span>
                      <div>
                        <p className="font-medium text-neutral-900">Quito</p>
                        <p className="text-neutral-700">
                          Av. 6 de Diciembre y de los Álamos
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span
                        className="p-2 rounded-lg text-white mt-1"
                        style={{ backgroundImage: gradient }}
                        aria-hidden="true"
                      >
                        <Clock className="w-5 h-5" />
                      </span>
                      <div>
                        <p className="font-medium text-neutral-900">Horario</p>
                        <p className="text-neutral-700">
                          Lun a Vie: 09h00 – 18h00
                        </p>
                      </div>
                    </div>

                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-white shadow-sm focus:outline-none focus:ring-4 focus:ring-green-200"
                      style={{ background: "#25D366" }}
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* Mapa embebido */}
                <div className="rounded-xl overflow-hidden border border-neutral-200 shadow-md">
                  <iframe
                    title="Mapa de ubicación de PrimeTrack en Quito"
                    src={mapsEmbedSrc}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-[300px]"
                  />
                </div>
              </div>
            </MotionTransition>
          </div>
        </div>
      </section>

      {/* WhatsApp flotante */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 p-4 rounded-full shadow-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-300"
        style={{ background: "#25D366" }}
        aria-label="Abrir chat de WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </div>
  );
};

export default ContactPage;
