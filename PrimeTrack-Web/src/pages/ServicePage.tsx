import { MotionTransition } from "@/components/layout/transition-component";
import { fadeIn } from "../lib/motion-transitions";
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
      "Monitorea la ubicación exacta de tu flota 24/7 con precisión milimétrica.",
  },
  {
    icon: <Smartphone />,
    title: "Aplicación Móvil Intuitiva",
    description:
      "Gestiona tus vehículos desde cualquier lugar con nuestra app para iOS y Android.",
  },
  {
    icon: <BarChart2 />,
    title: "Analítica y Reportes",
    description:
      "Obtén informes detallados sobre rendimiento, consumo de combustible y más.",
  },
  {
    icon: <Shield />,
    title: "Alertas de Seguridad",
    description:
      "Recibe notificaciones instantáneas sobre excesos de velocidad, geocercas y paradas no autorizadas.",
  },
  {
    icon: <Package />,
    title: "Gestión de Mantenimiento",
    description:
      "Programa y lleva un registro de los mantenimientos preventivos y correctivos.",
  },
  {
    icon: <Zap />,
    title: "Optimización de Rutas",
    description:
      "Ahorra tiempo y combustible con nuestro algoritmo de planificación de rutas inteligentes.",
  },
];

const plans = [
  {
    name: "Básico",
    price: "49",
    features: [
      "Rastreo en Tiempo Real",
      "Historial de 30 días",
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
      "Gestión de Mantenimiento",
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
      "API de Integración",
      "Analítica Avanzada",
      "Soporte Dedicado 24/7",
      "Capacitación Personalizada",
    ],
    recommended: false,
  },
];

const ServicesPage = () => {
  return (
    <div className="pt-24 md:pt-32">
      {/* Main Services */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <MotionTransition
            variants={fadeIn("bottom", 0.3)}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestros Servicios
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Soluciones integrales diseñadas para potenciar la eficiencia de tu
              flota y llevar tu negocio al siguiente nivel.
            </p>
          </MotionTransition>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <MotionTransition
                key={index}
                variants={fadeIn("bottom", 0.15 * (index + 1))}
              >
                <div className="p-8 bg-gray-800 rounded-xl flex items-start gap-4 hover:bg-gray-700/50 transition-colors duration-300">
                  <div className="text-blue-500 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
              </MotionTransition>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <MotionTransition
            variants={fadeIn("bottom", 0.3)}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Planes y Precios
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Elige el plan que mejor se adapte a las necesidades y al tamaño de
              tu operación.
            </p>
          </MotionTransition>
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {plans.map((plan, index) => (
              <MotionTransition
                key={index}
                variants={fadeIn("bottom", 0.2 * (index + 1))}
                className={`transform ${
                  plan.recommended ? "lg:scale-110" : ""
                }`}
              >
                <div
                  className={`p-8 rounded-xl shadow-2xl ${
                    plan.recommended ? "bg-blue-600" : "bg-gray-900"
                  }`}
                >
                  {plan.recommended && (
                    <p className="text-center bg-white text-blue-600 font-bold py-1 px-4 rounded-full w-fit mx-auto -mt-12 mb-4">
                      Recomendado
                    </p>
                  )}
                  <h3 className="text-2xl font-bold text-center mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-5xl font-extrabold text-center mb-6">
                    {plan.price !== "Custom" ? `$${plan.price}` : ""}
                    <span
                      className={`text-lg font-normal ${
                        plan.recommended ? "text-gray-200" : "text-gray-400"
                      }`}
                    >
                      {plan.price !== "Custom" ? "/mes" : "Personalizado"}
                    </span>
                  </p>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <ShieldCheckIcon
                          className={`w-5 h-5 ${
                            plan.recommended ? "text-white" : "text-blue-500"
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 font-bold rounded-lg transition-colors duration-300 ${
                      plan.recommended
                        ? "bg-white text-blue-600 hover:bg-gray-200"
                        : "bg-blue-600 text-white hover:bg-blue-500"
                    }`}
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

      {/* Solutions Mockups */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <MotionTransition
            variants={fadeIn("bottom", 0.3)}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestras Soluciones en Acción
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Una interfaz poderosa y amigable que te da el control total de tu
              flota.
            </p>
          </MotionTransition>
          <MotionTransition variants={fadeIn("bottom", 0.5)}>
            <img
              src="https://placehold.co/1200x600/1f2937/ffffff?text=Dashboard+Mockup"
              alt="Dashboard Mockup"
              className="rounded-lg shadow-2xl mx-auto"
            />
          </MotionTransition>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
