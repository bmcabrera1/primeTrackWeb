// LandingStartup.tsx
// Layout startup-friendly para PrimeTrack (todo en 1 archivo)
// Stack: React + TS + Tailwind + framer-motion + lucide-react
// Secciones: Hero / Beneficios / Casos / Precios / Calculadora / Stats / Comparativa / Demo / Testimonios / FAQ / Roadmap / CTA / Sticky CTA

import { MotionTransition } from "@/components/layout/transition-component";
import { fadeIn } from "@/lib/motion-transitions";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  ShieldCheck,
  Truck,
  BarChart as IconBarChart,
  Send,
  Smartphone,
  Bell,
  Cog,
  CheckCircle2,
  Fuel,
  Check,
  X,
  MessageCircle,
  Phone,
  BadgeDollarSign,
  Calculator,
} from "lucide-react";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

/** Brand tokens */
const BRAND = {
  PRIMARY: "#6200F7",
  SECONDARY: "#E73400",
  BG: "#FFFFFF",
  TEXT_DARK: "#111827",
  TEXT_MUTED: "#6B7280",
  BORDER: "#E5E7EB",
};
const gradient = `linear-gradient(90deg, ${BRAND.PRIMARY}, ${BRAND.SECONDARY})`;
const BASE = import.meta.env.BASE_URL; // respeta base en build (/, /subcarpeta/, etc.)

/** UI atoms */
function Card({ className = "", ...props }: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={`bg-white border border-neutral-200 rounded-2xl shadow-sm ${className}`}
    />
  );
}

function PrimaryButton(props: React.ComponentProps<"a">) {
  const { className = "", style, ...rest } = props;
  return (
    <a
      {...rest}
      className={`inline-flex items-center justify-center px-5 md:px-6 py-3 md:py-3.5 rounded-2xl font-semibold shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-purple-300 ${className}`}
      style={{ backgroundImage: gradient, color: "#fff", ...style }}
    />
  );
}

function OutlineButton(props: React.ComponentProps<"a">) {
  const { className = "", style, ...rest } = props;
  return (
    <a
      {...rest}
      className={`inline-flex items-center justify-center px-5 md:px-6 py-3 md:py-3.5 rounded-2xl font-semibold transition hover:bg-neutral-50 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-purple-200 ${className}`}
      style={{
        border: `1px solid ${BRAND.PRIMARY}`,
        color: BRAND.PRIMARY,
        ...style,
      }}
    />
  );
}

/** Helpers */
type PictureProps = {
  src: string;
  alt: string;
  className?: string;
  aspect?: string;
  /** Deja vacío para NO usar <picture> ni sources */
  formats?: Array<"avif" | "webp">;
} & React.ImgHTMLAttributes<HTMLImageElement>;

function ResponsivePicture({
  src,
  alt,
  className = "",
  aspect = "aspect-[16/10]",
  formats = ["avif", "webp"], // por defecto intenta, pero puedes desactivarlo
  ...imgProps
}: PictureProps) {
  const baseNoExt = src.replace(/\.(jpg|jpeg|png|webp|avif)$/i, "");

  if (!formats || formats.length === 0) {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-full ${aspect} object-cover rounded-2xl border border-neutral-200 ${className}`}
        loading="lazy"
        decoding="async"
        sizes="(min-width: 768px) 33vw, 100vw"
        {...imgProps}
      />
    );
  }

  return (
    <picture>
      {formats.includes("avif") && (
        <source srcSet={`${baseNoExt}.avif`} type="image/avif" />
      )}
      {formats.includes("webp") && (
        <source srcSet={`${baseNoExt}.webp`} type="image/webp" />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full ${aspect} object-cover rounded-2xl border border-neutral-200 ${className}`}
        loading="lazy"
        decoding="async"
        sizes="(min-width: 768px) 33vw, 100vw"
        {...imgProps}
      />
    </picture>
  );
}

/** Data */
const benefits = [
  {
    icon: <Fuel className="w-10 h-10" aria-hidden="true" />,
    title: "Más Ahorro",
    desc: "Hasta 40% menos que la competencia, incluye cobertura internacional.",
  },
  {
    icon: <IconBarChart className="w-10 h-10" aria-hidden="true" />,
    title: "Control fácil",
    desc: "Panel intuitivo con rutas, alertas y reportes en tiempo real.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10" aria-hidden="true" />,
    title: "Seguridad 24/7",
    desc: "Monitoreo constante y notificaciones ante eventos críticos.",
  },
];

// Stats realistas para startup
const stats = [
  { value: 1500, label: "Clientes satisfechos", suffix: "+" },
  { value: 99, label: "Disponibilidad del sistema", suffix: "%" },
  { value: 3, label: "Cobertura Colombia y Perú", suffix: "+" },
];

const comparison = [
  {
    feature: "Precio mensual por vehículo",
    competitors: "$12–$15",
    prime: "Desde $7.90",
  },
  {
    feature: "Cobertura",
    competitors: "Nacional",
    prime: "Internacional (Colombia y Perú)",
  },
  { feature: "Interfaz", competitors: "Compleja", prime: "Simple e intuitiva" },
  {
    feature: "Alertas",
    competitors: "Básicas",
    prime: "Contextuales en tiempo real",
  },
];

// Mock shots (BASE-safe) — ahora usando `src`
type Shot = { title: string; src: string };
const mockShots: Shot[] = [
  { title: "Dashboard de flota", src: `${BASE}img/Principal.png` },
  { title: "Mapa y rutas", src: `${BASE}img/Mapa.png` },
  { title: "Alertas en tiempo real", src: `${BASE}img/Notificacion.png` },
];

const PRICING = [
  {
    id: "taxi",
    name: "Taxi",
    price: 7.9,
    unit: "/mes por vehículo",
    features: [
      "GPS en tiempo real",
      "Historial de rutas 90 días",
      "Alertas de desvío",
      "App móvil y panel web",
    ],
    cta: "#contact",
  },
  {
    id: "flota",
    name: "Flotas",
    price: 6.9,
    unit: "/mes por vehículo",
    badge: "Más popular",
    features: [
      "Todo lo de Taxi",
      "Geocercas ilimitadas",
      "Reportes automáticos",
      "Soporte dedicado",
    ],
    cta: "#contact",
  },
  {
    id: "particular",
    name: "Particular",
    price: 8.9,
    unit: "/mes por vehículo",
    features: [
      "GPS en tiempo real",
      "Alertas por movimiento",
      "Botón de pánico",
      "Soporte por WhatsApp",
    ],
    cta: "#contact",
  },
];

/** Sección: Precios (3 tiers) */
function Pricing() {
  return (
    <section
      id="planes"
      className="px-6 md:px-8 py-10 bg-white"
      aria-labelledby="pricing-title"
    >
      <div className="max-w-6xl mx-auto">
        <MotionTransition
          variants={fadeIn("bottom", 0.2)}
          className="text-center mb-10"
        >
          <h2
            id="pricing-title"
            className="text-3xl md:text-4xl font-bold text-neutral-900"
          >
            Planes simples y económicos
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Paga mes a mes. Sin contrato. Instalación rápida en 24h.
          </p>
        </MotionTransition>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING.map((p, idx) => (
            <MotionTransition
              key={p.id}
              variants={fadeIn("bottom", 0.1 * (idx + 1))}
            >
              <Card
                className={`p-6 ${p.badge ? "ring-2 ring-purple-200" : ""}`}
              >
                {p.badge && (
                  <div className="inline-block mb-3 text-xs font-semibold px-2 py-1 rounded-full bg-purple-50 text-purple-700">
                    {p.badge}
                  </div>
                )}
                <h3 className="text-xl font-bold text-neutral-900">{p.name}</h3>
                <div className="mt-2">
                  <span
                    className="text-4xl font-extrabold"
                    style={{ color: BRAND.PRIMARY }}
                  >
                    ${p.price.toFixed(2)}
                  </span>
                  <span className="ml-1 text-neutral-500">{p.unit}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-neutral-700"
                    >
                      <CheckCircle2
                        className="w-5 h-5"
                        style={{ color: BRAND.PRIMARY }}
                        aria-hidden="true"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={p.cta}
                  className="mt-6 w-full inline-flex items-center justify-center px-4 py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#6200F7] to-[#E73400] focus:outline-none focus:ring-4 focus:ring-purple-300"
                >
                  Empezar ahora
                </a>
                <a
                  href="https://wa.me/593XXXXXXXXX?text=Hola%20quiero%20cotizar%20el%20plan%20PrimeTrack"
                  target="_blank"
                  rel="noopener"
                  className="mt-3 w-full inline-flex items-center justify-center px-4 py-3 rounded-2xl font-semibold border border-[#6200F7] text-[#6200F7] hover:bg-neutral-50 focus:outline-none focus:ring-4 focus:ring-purple-200"
                >
                  Cotizar por WhatsApp
                </a>
              </Card>
            </MotionTransition>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Sección: Comparativa llamativa estilo startup */
function CompareTable() {
  return (
    <section
      className="px-6 md:px-8 py-20 bg-neutral-50"
      aria-labelledby="compare-title"
    >
      <div className="max-w-6xl mx-auto">
        <MotionTransition
          variants={fadeIn("bottom", 0.2)}
          className="text-center mb-14"
        >
          <h2
            id="compare-title"
            className="text-3xl md:text-4xl font-extrabold text-neutral-900"
          >
            Ahorro y simplicidad frente a la competencia
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Lo que otros ofrecen versus lo que obtienes con{" "}
            <span
              className="bg-clip-text text-transparent font-bold"
              style={{ backgroundImage: gradient }}
            >
              PrimeTrack
            </span>
            .
          </p>
        </MotionTransition>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-2xl shadow-lg overflow-hidden">
            <thead>
              <tr>
                <th className="px-6 py-4 text-center text-sm md:text-base font-bold text-neutral-800 bg-neutral-100">
                  Característica
                </th>
                <th className="px-6 py-4 text-center text-sm md:text-base font-bold text-neutral-600 bg-neutral-100">
                  Competencia
                </th>
                <th
                  className="px-6 py-4 text-center text-sm md:text-base font-bold text-white"
                  style={{ backgroundImage: gradient }}
                >
                  PrimeTrack
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`transition-colors ${
                    i % 2 === 0 ? "bg-white" : "bg-neutral-50"
                  } hover:bg-purple-50/40`}
                >
                  <td className="px-6 py-4 text-center text-neutral-900 font-medium border-b border-neutral-200">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-center text-neutral-500 border-b border-neutral-200">
                    {row.competitors}
                  </td>
                  <td className="px-6 py-4 text-center font-semibold border-b border-neutral-200 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700">
                    {row.prime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-neutral-500 text-center">
          Comparativa basada en análisis del mercado local. PrimeTrack
          evoluciona constantemente para darte más.
        </p>
      </div>
    </section>
  );
}

/** Sección: FAQ */
function Faq() {
  const QA = [
    {
      q: "¿Cuánto cuesta instalar?",
      a: "Desde $0 a $25 según ciudad y tipo de vehículo. Pregunta por promociones para instalación en 24h.",
    },
    {
      q: "¿Hay contrato de permanencia?",
      a: "No. Puedes cancelar cuando quieras, mes a mes.",
    },
    {
      q: "¿La app funciona en iOS y Android?",
      a: "Sí, contamos con app móvil y panel web.",
    },
    {
      q: "¿Qué pasa si roban mi vehículo?",
      a: "Alertas de movimiento y soporte inmediato para coordinar recuperación con autoridades.",
    },
    {
      q: "¿La precisión del GPS?",
      a: "Típicamente 2 a 10 metros, dependiendo de red y entorno urbano.",
    },
  ];
  return (
    <section
      className="px-6 md:px-8 py-16 bg-neutral-50"
      aria-labelledby="faq-title"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="faq-title"
          className="text-3xl md:text-4xl font-bold mb-8 text-neutral-900 text-center"
        >
          Preguntas frecuentes
        </h2>
        <ul className="space-y-3">
          {QA.map((item) => (
            <li
              key={item.q}
              className="border border-neutral-200 rounded-2xl bg-white"
            >
              <details className="group p-5">
                <summary className="cursor-pointer list-none font-semibold text-neutral-900 flex justify-between items-center">
                  {item.q}
                  <span className="ml-4 text-neutral-400 group-open:rotate-45 transition">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-neutral-700">{item.a}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Sticky CTA móvil */
function StickyCtaMobile() {
  return (
    <div className="fixed bottom-3 inset-x-3 z-50 md:hidden">
      <div className="grid grid-cols-3 gap-2 rounded-2xl shadow-lg border border-neutral-200 bg-white p-2">
        <a
          href="#planes"
          className="flex flex-col items-center py-2 rounded-xl hover:bg-neutral-50"
        >
          <BadgeDollarSign className="w-5 h-5" aria-hidden="true" />
          <span className="text-xs font-medium">Planes</span>
        </a>
        <a
          href="https://wa.me/593XXXXXXXXX?text=Hola%20quiero%20una%20cotizaci%C3%B3n"
          target="_blank"
          rel="noopener"
          className="flex flex-col items-center py-2 rounded-xl hover:bg-neutral-50"
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

/** Página principal */
export default function LandingStartup() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div style={{ backgroundColor: BRAND.BG }}>
      {/* HERO */}
      <section
        aria-labelledby="hero-title"
        className="relative px-6 md:px-8 pt-16 md:pt-24 pb-16 overflow-hidden"
      >
        {/* Fondo gradiente */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: gradient }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Copy */}
          <div>
            <MotionTransition variants={fadeIn("bottom", 0.2)}>
              <span className="inline-block text-xs md:text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-4">
                Nueva plataforma de rastreo en tiempo real
              </span>
              <h1
                id="hero-title"
                className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-neutral-900"
              >
                Más{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: gradient }}
                >
                  control
                </span>
                <br />
                Menos
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: gradient }}
                >
                  {" "}
                  costos
                </span>
              </h1>
            </MotionTransition>

            <MotionTransition variants={fadeIn("bottom", 0.35)}>
              <p className="text-lg md:text-xl text-neutral-700 max-w-xl mb-6 leading-relaxed">
                Rastreo desde <strong>$10.00/mes</strong> por vehículo.
                Instalación <strong>inmediata</strong>. Cobertura internacional
                y soporte 24/7.
              </p>
            </MotionTransition>

            {/* CTAs visibles */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-3"
            >
              <PrimaryButton href="#planes" aria-label="Ver planes disponibles">
                Ver planes
              </PrimaryButton>

              <OutlineButton
                href="https://wa.me/593XXXXXXXXX?text=Hola%20quiero%20una%20cotizaci%C3%B3n%20PrimeTrack"
                target="_blank"
                rel="noopener"
                aria-label="Cotizar por WhatsApp"
              >
                <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                Cotiza ahora
              </OutlineButton>
            </motion.div>
          </div>

          {/* Mockup (LCP optimizado, base-safe) */}
          <MotionTransition variants={fadeIn("bottom", 0.35)}>
            <div className="relative">
              <img
                src={`${BASE}img/Dashboard.jpg`}
                alt="Vista del dashboard de PrimeTrack con mapa, rutas y alertas en tiempo real"
                className="w-full aspect-[16/10] object-cover rounded-2xl border border-neutral-200"
                width={1600}
                height={1000}
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <div
                className="absolute -bottom-4 -right-4 w-28 h-28 rounded-2xl blur-2xl bg-gradient-to-r from-[#6200F7] to-[#E73400] opacity-30"
                aria-hidden="true"
              />
            </div>
          </MotionTransition>
        </div>
      </section>

      {/* PRECIOS */}
      <Pricing />

      {/* COMPARATIVA */}
      <CompareTable />

      {/* BENEFICIOS (versión mejorada) */}
      <section
        className="relative px-6 md:px-8 py-20"
        aria-labelledby="benefits-title"
      >
        {/* Fondo decorativo suave */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-[420px] opacity-30 blur-2xl"
          style={{
            backgroundImage: `radial-gradient(40% 60% at 30% 40%, ${BRAND.PRIMARY}22 0%, transparent 60%), radial-gradient(35% 55% at 70% 30%, ${BRAND.SECONDARY}22 0%, transparent 60%)`,
          }}
        />

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <MotionTransition
            variants={fadeIn("bottom", 0.15)}
            className="text-center mb-14"
          >
            <h2
              id="benefits-title"
              className="mt-3 text-3xl md:text-4xl font-bold text-neutral-900"
            >
              Beneficios clave
            </h2>
            <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
              Control total y ahorro real: tecnología ágil que optimiza tu
              operación sin complicaciones.
            </p>
          </MotionTransition>

          {/* Grid de beneficios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, idx) => (
              <MotionTransition
                key={b.title}
                variants={fadeIn("bottom", 0.1 * (idx + 1))}
              >
                {/* Wrapper con borde degradado */}
                <div
                  className="rounded-2xl p-[1px]"
                  style={{ backgroundImage: gradient }}
                >
                  <Card className="h-full p-6 bg-white/90 backdrop-blur-sm hover:bg-white transition-colors">
                    {/* Medallón de icono */}
                    <div className="flex items-start justify-between">
                      <div
                        className="relative inline-flex items-center justify-center rounded-2xl p-3"
                        style={{ color: BRAND.PRIMARY }}
                        aria-hidden="true"
                      >
                        {/* Glow bajo el icono */}
                        <span
                          className="absolute inset-0 rounded-2xl blur-md opacity-25"
                          style={{ backgroundImage: gradient }}
                        />
                        <span className="relative inline-flex items-center justify-center rounded-xl bg-white/70 border border-neutral-200">
                          <span className="p-2">{b.icon}</span>
                        </span>
                      </div>

                      {/* Etiqueta pequeña con numeración */}
                      <span className="text-xs font-semibold text-neutral-500 self-start">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Contenido */}
                    <h3 className="mt-4 text-xl font-bold text-neutral-900">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-neutral-600 leading-relaxed">
                      {b.desc}
                    </p>

                    {/* Barra de énfasis inferior en hover */}
                    <div
                      className="mt-5 h-1 w-14 rounded-full transition-all"
                      style={{ background: `${BRAND.PRIMARY}33` }}
                    />
                  </Card>
                </div>
              </MotionTransition>
            ))}
          </div>

          {/* Mini-CTA */}
          <MotionTransition
            variants={fadeIn("bottom", 0.35)}
            className="text-center mt-10"
            children={undefined}
          ></MotionTransition>
        </div>
      </section>

      {/* STATS */}
      <section
        ref={ref}
        className="px-6 md:px-8 py-16 bg-neutral-50"
        aria-label="Métricas clave"
      >
        <div className="max-w-6xl mx-auto">
          <MotionTransition
            variants={fadeIn("bottom", 0.2)}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-neutral-900">
              Resultados que importan
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Métricas honestas de una startup que crece contigo.
            </p>
          </MotionTransition>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <MotionTransition
                key={stat.label}
                variants={fadeIn("bottom", 0.1 * (i + 1))}
              >
                <Card className="p-8">
                  <h3
                    className="text-5xl font-extrabold mb-2"
                    style={{ color: BRAND.PRIMARY }}
                  >
                    {inView && (
                      <CountUp
                        end={stat.value}
                        duration={2.2}
                        decimals={(stat as any).decimals || 0}
                        separator=","
                      />
                    )}
                    {stat.suffix}
                  </h3>
                  <p className="text-neutral-600 text-lg">{stat.label}</p>
                </Card>
              </MotionTransition>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO / CAPTURAS — usa shot.src */}
      <section
        className="px-6 md:px-8 py-16 bg-white"
        aria-labelledby="demo-title"
      >
        <div className="max-w-6xl mx-auto">
          <MotionTransition
            variants={fadeIn("bottom", 0.2)}
            className="text-center mb-10"
          >
            <h2
              id="demo-title"
              className="text-3xl md:text-4xl font-bold mb-3 text-neutral-900"
            >
              Así se ve PrimeTrack
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Un vistazo a nuestro dashboard, mapas y alertas.
            </p>
          </MotionTransition>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockShots.map((shot, i) => (
              <MotionTransition
                key={shot.title}
                variants={fadeIn("bottom", 0.1 * (i + 1))}
              >
                <div
                  className="rounded-2xl p-[1px]"
                  style={{ backgroundImage: gradient }}
                >
                  <Card className="group overflow-hidden p-0">
                    <div className="relative">
                      <ResponsivePicture
                        src={shot.src}
                        alt={shot.title}
                        aspect="aspect-[16/9]"
                        formats={[]}
                        onError={(e) => {
                          (
                            e.currentTarget as HTMLImageElement
                          ).src = `${BASE}img/placeholder.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-neutral-900">
                        {shot.title}
                      </h3>
                    </div>
                  </Card>
                </div>
              </MotionTransition>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        className="px-6 md:px-8 py-20 bg-white"
        aria-labelledby="cta-title"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2
            id="cta-title"
            className="text-3xl md:text-4xl font-extrabold mb-4 text-neutral-900"
          >
            ¿Listo para tener más control gastando menos?
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
            Empieza hoy con PrimeTrack y descubre por qué controlar tu flota o
            tu vehículo no tiene que ser costoso.
          </p>
          <div className="flex items-center justify-center gap-4">
            <PrimaryButton href="#planes">Ver planes</PrimaryButton>
            <OutlineButton
              href="https://wa.me/593XXXXXXXXX?text=Hola%20quiero%20probar%20PrimeTrack"
              target="_blank"
              rel="noopener"
            >
              Cotiza ahora
            </OutlineButton>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-neutral-600">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            <span>
              Planes Flexibles • Instalación Inmediata • Cobertura Nacional e
              Internacional
            </span>
          </div>
        </div>
      </section>

      {/* Sticky CTA móvil */}
      <StickyCtaMobile />
    </div>
  );
}
