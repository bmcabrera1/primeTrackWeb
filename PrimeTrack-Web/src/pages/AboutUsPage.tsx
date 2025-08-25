import { MotionTransition } from "@/components/layout/transition-component";
import { fadeIn } from "@/lib/motion-transitions";
import { Building, Target, Users, Handshake } from "lucide-react";

const timelineEvents = [
  {
    year: 2015,
    title: "Fundación de PrimeTrack",
    description: "Revolucionar la logística en Ecuador.",
  },
  {
    year: 2018,
    title: "Lanzamiento de la Plataforma",
    description: "Primera versión de seguimiento en tiempo real.",
  },
  {
    year: 2021,
    title: "Expansión Nacional",
    description: "Cobertura total en territorio continental.",
  },
  {
    year: 2024,
    title: "Líderes del Mercado",
    description: "Preferidos por más de 1000 empresas.",
  },
];

const values = [
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Innovación",
    description: "Siempre buscando mejores formas de servir.",
  },
  {
    icon: <Handshake className="w-8 h-8 text-primary" />,
    title: "Compromiso",
    description: "La satisfacción del cliente nos impulsa.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Integridad",
    description: "Honestidad y transparencia.",
  },
];

const leaders = [
  {
    name: "Juan Pérez",
    role: "CEO & Fundador",
    image: "https://placehold.co/600x600/e5e7eb/111827?text=JP",
  },
  {
    name: "María García",
    role: "Directora de Operaciones",
    image: "https://placehold.co/600x600/e5e7eb/111827?text=MG",
  },
  {
    name: "Carlos Rodríguez",
    role: "Director de Tecnología",
    image: "https://placehold.co/600x600/e5e7eb/111827?text=CR",
  },
];

const AboutUsPage = () => {
  return (
    <div>
      {/* Quiénes somos */}
      <section className="section bg-neutral-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <MotionTransition variants={fadeIn("right", 0.3)}>
            <Building className="w-full h-auto text-primary/20" />
          </MotionTransition>

          <MotionTransition variants={fadeIn("left", 0.5)}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
              Nuestra Historia
            </h1>
            <p className="text-lg text-neutral-600">
              Desde 2015, PrimeTrack lidera la innovación logística en Ecuador.
              Simplificamos transporte y gestión de flotas con tecnología que
              genera resultados reales.
            </p>
          </MotionTransition>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <MotionTransition
            variants={fadeIn("bottom", 0.3)}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Nuestra Trayectoria
            </h2>
          </MotionTransition>

          <div className="relative max-w-5xl mx-auto">
            {/* Línea central */}
            <div className="border-l-2 border-primary/70 absolute h-full top-0 left-1/2 -translate-x-1/2" />

            {timelineEvents.map((event, index) => (
              <MotionTransition
                key={index}
                variants={fadeIn("bottom", 0.2 * (index + 1))}
                className="mb-10 flex justify-between items-center w-full"
              >
                {/* Tarjeta izquierda/derecha */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "order-1 text-right" : "order-3 text-left"
                  }`}
                >
                  <div className="card p-5">
                    <h3 className="font-bold text-xl mb-1 text-neutral-900">
                      {event.title}
                    </h3>
                    <p className="text-neutral-600">{event.description}</p>
                  </div>
                </div>

                {/* Burbujas de año */}
                <div className="z-10 flex items-center justify-center order-2 bg-white shadow-xl w-16 h-16 rounded-full border-2 border-primary">
                  <span className="font-semibold text-sm text-primary">
                    {event.year}
                  </span>
                </div>

                {/* Columna vacía para balance */}
                <div className="w-5/12 order-1" />
              </MotionTransition>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section bg-neutral-50">
        <div className="container mx-auto px-4">
          <MotionTransition
            variants={fadeIn("bottom", 0.3)}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Nuestros Valores
            </h2>
          </MotionTransition>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <MotionTransition
                key={index}
                variants={fadeIn("bottom", 0.2 * (index + 1))}
              >
                <div className="card p-8 text-center transition-shadow hover:shadow-brand">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 text-neutral-900">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600">{value.description}</p>
                </div>
              </MotionTransition>
            ))}
          </div>
        </div>
      </section>

      {/* Líderes */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <MotionTransition
            variants={fadeIn("bottom", 0.3)}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Conoce a Nuestros Líderes
            </h2>
          </MotionTransition>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leaders.map((leader, i) => (
              <MotionTransition
                key={i}
                variants={fadeIn("bottom", 0.2 * (i + 1))}
              >
                <article className="group relative overflow-hidden rounded-2xl border border-neutral-200 shadow-lg">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white">
                      {leader.name}
                    </h3>
                    <p className="text-primary font-medium">{leader.role}</p>
                  </div>
                </article>
              </MotionTransition>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
