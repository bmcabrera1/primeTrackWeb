import { MotionTransition } from "@/components/layout/transition-component";
import { fadeIn } from "../lib/motion-transitions";
import { Building, Target, Users, Handshake } from "lucide-react";

const timelineEvents = [
  {
    year: 2015,
    title: "Fundación de PrimeTrack",
    description:
      "Nace la idea de revolucionar la logística en Ecuador con un pequeño equipo y una gran visión.",
  },
  {
    year: 2018,
    title: "Lanzamiento de la Plataforma",
    description:
      "Tras años de desarrollo, lanzamos nuestra primera versión de la plataforma de seguimiento en tiempo real.",
  },
  {
    year: 2021,
    title: "Expansión Nacional",
    description:
      "Alcanzamos cobertura total en el territorio continental ecuatoriano, abriendo oficinas en ciudades clave.",
  },
  {
    year: 2024,
    title: "Líderes del Mercado",
    description:
      "Consolidados como la solución logística preferida por más de 1000 empresas en el país.",
  },
];

const values = [
  {
    icon: <Target className="w-8 h-8 text-blue-400" />,
    title: "Innovación",
    description:
      "Buscamos constantemente nuevas y mejores formas de servir a nuestros clientes.",
  },
  {
    icon: <Handshake className="w-8 h-8 text-blue-400" />,
    title: "Compromiso",
    description:
      "La satisfacción de nuestros clientes es el motor que impulsa cada una de nuestras acciones.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-400" />,
    title: "Integridad",
    description:
      "Actuamos con honestidad y transparencia en todas nuestras operaciones.",
  },
];

const leaders = [
  {
    name: "Juan Pérez",
    role: "CEO & Fundador",
    image: "https://placehold.co/400x400/1f2937/ffffff?text=JP",
  },
  {
    name: "María García",
    role: "Directora de Operaciones",
    image: "https://placehold.co/400x400/1f2937/ffffff?text=MG",
  },
  {
    name: "Carlos Rodríguez",
    role: "Director de Tecnología",
    image: "https://placehold.co/400x400/1f2937/ffffff?text=CR",
  },
];

const AboutUsPage = () => {
  return (
    <div className="pt-24 md:pt-32">
      {/* Who We Are */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <MotionTransition variants={fadeIn("right", 0.3)}>
            <Building className="w-full h-auto text-blue-500 opacity-20" />
          </MotionTransition>
          <MotionTransition variants={fadeIn("left", 0.5)}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestra Historia
            </h1>
            <p className="text-lg text-gray-300">
              Desde 2015, PrimeTrack ha estado a la vanguardia de la innovación
              logística en Ecuador. Nacimos con el objetivo de simplificar la
              complejidad del transporte y la gestión de flotas, ofreciendo
              soluciones tecnológicas que generan resultados reales. Hoy, somos
              el socio estratégico de cientos de empresas que confían en
              nosotros para mover sus negocios hacia adelante.
            </p>
          </MotionTransition>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <MotionTransition
            variants={fadeIn("bottom", 0.3)}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Nuestra Trayectoria
            </h2>
          </MotionTransition>
          <div className="relative">
            <div className="border-l-2 border-blue-500 absolute h-full top-0 left-1/2 -translate-x-1/2"></div>
            {timelineEvents.map((event, index) => (
              <MotionTransition
                key={index}
                variants={fadeIn("bottom", 0.2 * (index + 1))}
                className="mb-8 flex justify-between items-center w-full"
              >
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "order-1 text-right" : "order-3 text-left"
                  }`}
                >
                  <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
                    <h3 className="font-bold text-xl mb-1">{event.title}</h3>
                    <p className="text-gray-400">{event.description}</p>
                  </div>
                </div>
                <div className="z-10 flex items-center order-2 bg-gray-900 shadow-xl w-16 h-16 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-blue-500">
                    {event.year}
                  </h1>
                </div>
                <div className="w-5/12 order-1"></div>
              </MotionTransition>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <MotionTransition
            variants={fadeIn("bottom", 0.3)}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Nuestros Valores</h2>
          </MotionTransition>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <MotionTransition
                key={index}
                variants={fadeIn("bottom", 0.2 * (index + 1))}
              >
                <div className="p-8 text-center bg-gray-900 rounded-xl">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </MotionTransition>
            ))}
          </div>
        </div>
      </section>

      {/* Leaders */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <MotionTransition
            variants={fadeIn("bottom", 0.3)}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Conoce a Nuestros Líderes
            </h2>
          </MotionTransition>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <MotionTransition
                key={index}
                variants={fadeIn("bottom", 0.2 * (index + 1))}
              >
                <div className="group relative overflow-hidden rounded-lg">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold">{leader.name}</h3>
                    <p className="text-blue-400">{leader.role}</p>
                  </div>
                </div>
              </MotionTransition>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
