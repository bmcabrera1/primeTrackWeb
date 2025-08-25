import { MotionTransition } from "@/components/layout/transition-component";
import { fadeIn } from "@/lib/motion-transitions";
import { BarChart, Send, ShieldCheck, Truck } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Bar,
  BarChart as RechartsBarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { motion } from "framer-motion";

const clients = [
  {
    name: "TechCorp",
    logo: "https://placehold.co/150x50/1f2937/ffffff?text=TechCorp",
  },
  {
    name: "InnovateInc",
    logo: "https://placehold.co/150x50/1f2937/ffffff?text=InnovateInc",
  },
  {
    name: "QuantumLeap",
    logo: "https://placehold.co/150x50/1f2937/ffffff?text=QuantumLeap",
  },
  {
    name: "FutureGadget",
    logo: "https://placehold.co/150x50/1f2937/ffffff?text=FutureGadget",
  },
  {
    name: "SynergySys",
    logo: "https://placehold.co/150x50/1f2937/ffffff?text=SynergySys",
  },
  {
    name: "NextGen",
    logo: "https://placehold.co/150x50/1f2937/ffffff?text=NextGen",
  },
];

const stats = [
  { value: 1200, label: "Clientes Satisfechos", suffix: "+" },
  { value: 98, label: "Eficiencia Mejorada", suffix: "%" },
  { value: 1.5, label: "Crecimiento Anual", suffix: "M", decimals: 1 },
];

const reportData = [
  { name: "Ene", Crecimiento: 4000 },
  { name: "Mar", Crecimiento: 3000 },
  { name: "May", Crecimiento: 2000 },
  { name: "Jul", Crecimiento: 2780 },
  { name: "Sep", Crecimiento: 1890 },
  { name: "Nov", Crecimiento: 2390 },
];

const news = [
  {
    title: "Nueva Flota de Vehículos Eléctricos",
    description: "Tecnología eco-amigable para un futuro más verde.",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Flota",
  },
  {
    title: "Expansión a Nivel Nacional",
    description: "Cobertura en las 24 provincias del Ecuador.",
    image: "https://placehold.co/600x400/10b981/ffffff?text=Expansión",
  },
  {
    title: "Premio a la Innovación Logística 2025",
    description: "Seguimiento en tiempo real reconocido.",
    image: "https://placehold.co/600x400/f59e0b/ffffff?text=Premio",
  },
];

const whyChooseUsItems = [
  {
    icon: <Truck className="w-10 h-10 text-primary" />,
    title: "Logística Inteligente",
    description: "Optimización de rutas y entregas en tiempo récord.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Seguridad Garantizada",
    description: "Monitoreo 24/7 y seguros para tu mercancía.",
  },
  {
    icon: <BarChart className="w-10 h-10 text-primary" />,
    title: "Reportes Detallados",
    description: "Analíticas para decisiones informadas.",
  },
  {
    icon: <Send className="w-10 h-10 text-primary" />,
    title: "Comunicación Directa",
    description: "Soporte personalizado y notificaciones.",
  },
];

const HomePage = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div>
      {/* Hero */}
      <section className="relative section bg-neutral-900">
        <div className="absolute inset-0 bg-hero-grid bg-grid opacity-40 pointer-events-none" />
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <MotionTransition variants={fadeIn("bottom", 0.2)}>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight">
              La <span className="text-primary">Evolución</span> del Rastreo{" "}
              <br className="hidden md:block" />
              de Vehículos en Ecuador
            </h1>
          </MotionTransition>
          <MotionTransition variants={fadeIn("bottom", 0.35)}>
            <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
              PrimeTrack optimiza rutas, reduce costos y garantiza entregas
              puntuales con tecnología de punta.
            </p>
          </MotionTransition>
          <MotionTransition variants={fadeIn("bottom", 0.5)}>
            <div className="flex items-center justify-center gap-4">
              <a href="#planes" className="btn-primary">
                Ver Planes
              </a>
              <a href="/contact" className="btn-secondary">
                Solicitar Demo
              </a>
            </div>
          </MotionTransition>
        </div>
      </section>

      {/* Clients */}
      <section className="py-14 bg-neutral-800">
        <div className="container mx-auto">
          <h3 className="text-center text-sm tracking-widest text-neutral-400 mb-6 uppercase">
            Con la confianza de empresas líderes
          </h3>
          <div className="relative overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            >
              {[...clients, ...clients].map((client, index) => (
                <div key={index} className="flex-shrink-0 w-1/3 md:w-1/6 px-4">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 mx-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={ref} className="section bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <MotionTransition
                key={i}
                variants={fadeIn("bottom", 0.2 * (i + 1))}
              >
                <div className="card p-8">
                  <h2 className="text-5xl font-extrabold text-primary mb-2">
                    {inView && (
                      <CountUp
                        end={stat.value}
                        duration={3}
                        decimals={(stat as any).decimals || 0}
                      />
                    )}
                    {stat.suffix}
                  </h2>
                  <p className="text-neutral-300 text-lg">{stat.label}</p>
                </div>
              </MotionTransition>
            ))}
          </div>
        </div>
      </section>

      {/* Reporte anual */}
      <section className="section bg-neutral-800">
        <div className="container mx-auto px-4">
          <MotionTransition
            variants={fadeIn("bottom", 0.3)}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Nuestro Crecimiento
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Escalamos operaciones con el respaldo de nuestros clientes.
            </p>
          </MotionTransition>
          <MotionTransition
            variants={fadeIn("bottom", 0.5)}
            className="w-full h-[380px] card p-4"
          >
            <ResponsiveContainer>
              <RechartsBarChart data={reportData}>
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#111827",
                    border: "1px solid #374151",
                    borderRadius: 12,
                  }}
                />
                <Legend />
                <Bar
                  dataKey="Crecimiento"
                  fill="#6200F7"
                  barSize={28}
                  radius={[10, 10, 0, 0]}
                />
              </RechartsBarChart>
            </ResponsiveContainer>
          </MotionTransition>
        </div>
      </section>

      {/* Noticias */}
      <section className="section bg-neutral-900">
        <div className="container mx-auto px-4">
          <MotionTransition
            variants={fadeIn("bottom", 0.3)}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Noticias y Novedades
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Lo último de PrimeTrack.
            </p>
          </MotionTransition>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <MotionTransition
                key={i}
                variants={fadeIn("bottom", 0.2 * (i + 1))}
              >
                <article className="card overflow-hidden group">
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-neutral-400">{item.description}</p>
                  </div>
                </article>
              </MotionTransition>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Por qué elegirnos? */}
      <section className="section bg-neutral-800">
        <div className="container mx-auto px-4">
          <MotionTransition
            variants={fadeIn("bottom", 0.3)}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Tu socio estratégico en logística.
            </p>
          </MotionTransition>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsItems.map((item, i) => (
              <MotionTransition
                key={i}
                variants={fadeIn("bottom", 0.2 * (i + 1))}
              >
                <div className="card p-6 text-center hover:shadow-glow transition-shadow">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-neutral-400">{item.description}</p>
                </div>
              </MotionTransition>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
