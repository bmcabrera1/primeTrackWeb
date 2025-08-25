import { MotionTransition } from "@/components/layout/transition-component";
import { fadeIn } from "@/lib/motion-transitions";
import {
  MapPin,
  Smartphone,
  BarChart2,
  Shield,
  Package,
  Zap,
  ShieldCheck as ShieldCheckIcon,
} from "lucide-react";

const services = [
  {
    icon: <MapPin />,
    title: "Rastreo GPS en Tiempo Real",
    description:
      "Monitorea la ubicación exacta de tu flota 24/7 con precisión.",
  },
  {
    icon: <Smartphone />,
    title: "App Móvil Intuitiva",
    description: "Gestiona tu flota desde iOS y Android.",
  },
  {
    icon: <BarChart2 />,
    title: "Analítica y Reportes",
    description: "Informes sobre rendimiento y combustible.",
  },
  {
    icon: <Shield />,
    title: "Alertas de Seguridad",
    description: "Velocidad, geocercas y paradas no autorizadas.",
  },
  {
    icon: <Package />,
    title: "Mantenimiento",
    description: "Programación y registro de mantenimientos.",
  },
  {
    icon: <Zap />,
    title: "Optimización de Rutas",
    description: "Ahorra tiempo y combustible con planificación inteligente.",
  },
];

const plans = [
  {
    name: "Básico",
    price: "49",
    features: [
      "Rastreo en Tiempo Real",
      "Historial 30 días",
      "Alertas Básicas",
      "Soporte por Email",
    ],
    recommended: false,
  },
  {
    name: "Profesional",
    price: "79",
    features: [
      "Todo en Básico",
      "Optimización de Rutas",
      "Mantenimiento",
      "App Móvil Completa",
      "Soporte Prioritario",
    ],
    recommended: true,
  },
  {
    name: "Empresarial",
    price: "Custom",
    features: [
      "Todo en Profesional",
      "API",
      "Analítica Avanzada",
      "Soporte 24/7",
      "Capacitación",
    ],
    recommended: false,
  },
];

const ServicesPage = () => {
  return (
    <div>
      {/* Servicios */}
      <section className="section bg-neutral-900">
        <div className="container mx-auto px-4">
          <MotionTransition
            variants={fadeIn("bottom", 0.3)}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestros Servicios
            </h1>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
              Soluciones integrales para la eficiencia de tu flota.
            </p>
          </MotionTransition>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <MotionTransition
                key={idx}
                variants={fadeIn("bottom", 0.12 * (idx + 1))}
              >
                <div className="card p-6 flex items-start gap-4 hover:border-primary/50 transition-colors">
                  <div className="text-primary flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                    <p className="text-neutral-400">{service.description}</p>
                  </div>
                </div>
              </MotionTransition>
            ))}
          </div>
        </div>
      </section>

      {/* Planes */}
      <section id="planes" className="section bg-neutral-800">
        <div className="container mx-auto px-4">
          <MotionTransition
            variants={fadeIn("bottom", 0.3)}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Planes y Precios
            </h2>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
              Elige el plan que se adapte a tu operación.
            </p>
          </MotionTransition>
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, i) => (
              <MotionTransition
                key={i}
                variants={fadeIn("bottom", 0.18 * (i + 1))}
                className={plan.recommended ? "lg:scale-[1.04]" : ""}
              >
                <div
                  className={`card p-8 relative ${
                    plan.recommended
                      ? "border-primary"
                      : "border-neutral-700/60"
                  }`}
                >
                  {plan.recommended && (
                    <p className="absolute -top-3 left-1/2 -translate-x-1/2 text-center bg-primary text-white font-bold py-1 px-4 rounded-full shadow-glow">
                      Recomendado
                    </p>
                  )}
                  <h3 className="text-2xl font-bold text-center mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-5xl font-extrabold text-center mb-6">
                    {plan.price !== "Custom" ? `$${plan.price}` : ""}
                    <span className="text-lg font-normal text-neutral-400 ml-2">
                      {plan.price !== "Custom" ? "/mes" : "Personalizado"}
                    </span>
                  </p>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <ShieldCheckIcon
                          className={`w-5 h-5 ${
                            plan.recommended ? "text-primary" : "text-primary"
                          }`}
                        />
                        <span className="text-neutral-100">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={
                      plan.recommended
                        ? "btn-primary w-full"
                        : "btn-secondary w-full"
                    }
                  >
                    {plan.price === "Custom"
                      ? "Contactar Ventas"
                      : "Empezar Ahora"}
                  </button>
                </div>
              </MotionTransition>
            ))}
          </div>
        </div>
      </section>

      {/* Mockup / Showcase */}
      <section className="section bg-neutral-900">
        <div className="container mx-auto px-4">
          <MotionTransition
            variants={fadeIn("bottom", 0.3)}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Nuestras Soluciones en Acción
            </h2>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
              Una interfaz poderosa que te da control total.
            </p>
          </MotionTransition>
          <MotionTransition variants={fadeIn("bottom", 0.5)}>
            <img
              src="https://placehold.co/1200x600/1f2937/ffffff?text=Dashboard+Mockup"
              alt="Dashboard Mockup"
              className="rounded-2xl shadow-2xl border border-neutral-700/60 mx-auto"
            />
          </MotionTransition>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
