import { MotionTransition } from "@/components/layout/transition-component";
import { fadeIn } from "../lib/motion-transitions";
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

// Mock Data
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
    description:
      "Incorporamos tecnología eco-amigable para un futuro más verde.",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Flota",
  },
  {
    title: "Expansión a Nivel Nacional",
    description: "Ahora con cobertura en las 24 provincias del Ecuador.",
    image: "https://placehold.co/600x400/10b981/ffffff?text=Expansión",
  },
  {
    title: "Premio a la Innovación Logística 2025",
    description:
      "Reconocidos por nuestra plataforma de seguimiento en tiempo real.",
    image: "https://placehold.co/600x400/f59e0b/ffffff?text=Premio",
  },
];

const whyChooseUsItems = [
  {
    icon: <Truck className="w-10 h-10 text-blue-500" />,
    title: "Logística Inteligente",
    description: "Optimización de rutas y entregas en tiempo récord.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
    title: "Seguridad Garantizada",
    description: "Monitoreo 24/7 y seguros para toda tu mercancía.",
  },
  {
    icon: <BarChart className="w-10 h-10 text-blue-500" />,
    title: "Reportes Detallados",
    description: "Analíticas avanzadas para la toma de decisiones.",
  },
  {
    icon: <Send className="w-10 h-10 text-blue-500" />,
    title: "Comunicación Directa",
    description: "Soporte personalizado y notificaciones instantáneas.",
  },
];

const HomePage = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <MotionTransition variants={fadeIn("bottom", 0.2)}>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              La <span className="text-secondary">Evolución</span> de la
              Logística <br /> a tu Alcance
            </h1>
          </MotionTransition>
          <MotionTransition variants={fadeIn("bottom", 0.4)}>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              En PrimeTrack, transformamos la gestión de tu flota con tecnología
              de punta, optimizando rutas, reduciendo costos y garantizando
              entregas puntuales.
            </p>
          </MotionTransition>
          <MotionTransition variants={fadeIn("bottom", 0.6)}>
            <button className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg transition-transform duration-300 hover:bg-blue-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900">
              Solicitar una Demo
            </button>
          </MotionTransition>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-gray-800 overflow-hidden">
        <div className="container mx-auto">
          <h3 className="text-center text-2xl font-semibold text-gray-400 mb-8">
            Con la confianza de empresas líderes
          </h3>
          <div className="relative">
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

      {/* Stats Section */}
      <section ref={ref} className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <MotionTransition
                key={index}
                variants={fadeIn("bottom", 0.2 * (index + 1))}
              >
                <div className="p-8 bg-gray-800 rounded-xl shadow-2xl">
                  <h2 className="text-5xl font-bold text-secondary mb-2">
                    {inView && (
                      <CountUp
                        end={stat.value}
                        duration={3}
                        decimals={stat.decimals || 0}
                      />
                    )}
                    {stat.suffix}
                  </h2>
                  <p className="text-gray-300 text-lg">{stat.label}</p>
                </div>
              </MotionTransition>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Report */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <MotionTransition
            variants={fadeIn("bottom", 0.3)}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestro Crecimiento Sostenido
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Visualiza cómo hemos escalado nuestras operaciones, reflejando el
              éxito y la confianza de nuestros clientes.
            </p>
          </MotionTransition>
          <MotionTransition
            variants={fadeIn("bottom", 0.5)}
            className="w-full h-[400px]"
          >
            <ResponsiveContainer>
              <RechartsBarChart data={reportData}>
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    border: "none",
                    borderRadius: "0.5rem",
                  }}
                />
                <Legend />
                <Bar
                  dataKey="Crecimiento"
                  fill="#2563eb"
                  barSize={30}
                  radius={[10, 10, 0, 0]}
                />
              </RechartsBarChart>
            </ResponsiveContainer>
          </MotionTransition>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <MotionTransition
            variants={fadeIn("bottom", 0.3)}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Noticias y Novedades
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Mantente al día con los últimos avances y logros de PrimeTrack.
            </p>
          </MotionTransition>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <MotionTransition
                key={index}
                variants={fadeIn("bottom", 0.2 * (index + 1))}
              >
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group">
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </MotionTransition>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <MotionTransition variants={fadeIn("bottom", 0.3)} className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Descubre PrimeTrack en Acción
            </h2>
          </MotionTransition>
          <MotionTransition variants={fadeIn("bottom", 0.5)}>
            <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder video
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </MotionTransition>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <MotionTransition
            variants={fadeIn("bottom", 0.3)}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Somos más que un proveedor; somos tu socio estratégico en
              logística.
            </p>
          </MotionTransition>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsItems.map((item, index) => (
              <MotionTransition
                key={index}
                variants={fadeIn("bottom", 0.2 * (index + 1))}
              >
                <div className="text-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700/50 transition-colors duration-300">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
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
