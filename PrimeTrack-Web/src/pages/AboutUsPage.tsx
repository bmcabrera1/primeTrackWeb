import React, { useEffect, useMemo, useRef, useState } from "react";
import { MotionTransition } from "@/components/layout/transition-component";
import { fadeIn } from "@/lib/motion-transitions";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Building2 as Building,
  Target,
  Users,
  Handshake,
  Rocket,
  ShieldCheck,
  LineChart,
  MapPin,
  CalendarDays,
  Hash,
} from "lucide-react";

/** Brand tokens (alineados a Landing) */
const BRAND = {
  PRIMARY: "#6200F7",
  SECONDARY: "#E73400",
  BG: "#FFFFFF",
  TEXT_DARK: "#111827",
  TEXT_MUTED: "#6B7280",
  BORDER: "#E5E7EB",
};
const gradient = `linear-gradient(90deg, ${BRAND.PRIMARY}, ${BRAND.SECONDARY})`;
const BASE = import.meta.env.BASE_URL;

/** Átomos UI */
function Card({ className = "", ...props }: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={`bg-white border border-neutral-200 rounded-2xl shadow-sm ${className}`}
    />
  );
}

/** Imagen responsive (para las demás secciones que ya tenías) */
type PictureProps = {
  src: string;
  alt: string;
  className?: string;
  aspect?: string;
  formats?: Array<"avif" | "webp">;
} & React.ImgHTMLAttributes<HTMLImageElement>;

function ResponsivePicture({
  src,
  alt,
  className = "",
  aspect = "aspect-[16/10]",
  formats = [],
  ...imgProps
}: PictureProps) {
  const baseNoExt = src.replace(/\.(jpg|jpeg|png|webp|avif|svg)$/i, "");
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

/** Contenido inventado (empresa nacida el año pasado) */
const foundingYear = 2024;

/** Valores (manteniendo tu contenido y estilos con imagen) */
const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Innovación útil",
    description:
      "Construimos rápido, escuchamos al cliente y simplificamos lo complejo.",
    img: `${BASE}img/Innovacion.jpg`,
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Compromiso real",
    description:
      "Soporte cercano, SLAs claros y acompañamiento en la implementación.",
    img: `${BASE}img/Compromiso.jpg`,
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Integridad",
    description:
      "Datos seguros y decisiones transparentes en cada interacción.",
    img: `${BASE}img/Integridad.jpg`,
  },
];

/** Líderes (manteniendo tu contenido) */
const leaders = [
  {
    name: "Juan Pérez",
    role: "CEO & Fundador",
    image: `${BASE}img/about/leaders/juan.jpg`,
    bio: "Estrategia y alianzas. Ex-ops en logística y retail.",
  },
  {
    name: "María García",
    role: "Directora de Operaciones",
    image: `${BASE}img/about/leaders/maria.jpg`,
    bio: "Ejecución en campo y calidad de servicio a escala.",
  },
  {
    name: "Carlos Rodríguez",
    role: "CTO",
    image: `${BASE}img/about/leaders/carlos.jpg`,
    bio: "Arquitectura en la nube y apps móviles.",
  },
];

/** =========================
 *  TIMELINE 2025 (sin imágenes, sin controles)
 *  ========================= */

/** Tipos */
type Status = "done" | "in-progress" | "planned";
type Category = "producto" | "crecimiento" | "operaciones" | "alianzas";

interface TimelineItem {
  id: string; // anchor id
  date: string; // YYYY-MM
  quarter: string; // Q1/Q2/Q3/Q4 2025
  title: string;
  description: string;
  category: Category;
  status: Status;
  icon: React.ReactNode;
}

/** Meta para categorías y estatus */
const CATEGORY_META: Record<Category, { label: string; dotClass: string }> = {
  producto: { label: "Producto", dotClass: "bg-purple-500" },
  crecimiento: { label: "Crecimiento", dotClass: "bg-pink-500" },
  operaciones: { label: "Operaciones", dotClass: "bg-blue-500" },
  alianzas: { label: "Alianzas", dotClass: "bg-emerald-500" },
};

const STATUS_META: Record<Status, { label: string; className: string }> = {
  done: {
    label: "Logrado",
    className: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  "in-progress": {
    label: "En curso",
    className: "bg-amber-50 text-amber-700 border-amber-200",
  },
  planned: {
    label: "Planificado",
    className: "bg-neutral-50 text-neutral-700 border-neutral-200",
  },
};

/** Datos (desde 2025, sin imágenes) */
const RAW_EVENTS: TimelineItem[] = [
  {
    id: "2025-01-v2",
    date: "2025-01",
    quarter: "Q1 2025",
    title: "Lanzamiento PrimeTrack v2",
    description:
      "Nueva interfaz web, mejoras de rendimiento y módulos de reportes.",
    category: "producto",
    status: "done",
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    id: "2025-03-sla",
    date: "2025-03",
    quarter: "Q1 2025",
    title: "SLA 99.9%",
    description: "Migración de infraestructura y observabilidad 24/7.",
    category: "operaciones",
    status: "done",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    id: "2025-04-api",
    date: "2025-04",
    quarter: "Q2 2025",
    title: "API pública y Webhooks",
    description: "Integraciones con ERPs y automatizaciones vía eventos.",
    category: "producto",
    status: "done",
    icon: <Hash className="w-5 h-5" />,
  },
  {
    id: "2025-06-2k",
    date: "2025-06",
    quarter: "Q2 2025",
    title: "2.000 vehículos activos",
    description: "Hito de crecimiento sostenido con churn < 2%.",
    category: "crecimiento",
    status: "done",
    icon: <LineChart className="w-5 h-5" />,
  },
  {
    id: "2025-08-app20",
    date: "2025-08",
    quarter: "Q3 2025",
    title: "App móvil 2.0",
    description:
      "Reescritura con mejoras en notificaciones y rendimiento offline.",
    category: "producto",
    status: "in-progress",
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    id: "2025-09-alianza",
    date: "2025-09",
    quarter: "Q3 2025",
    title: "Alianza con aseguradora",
    description: "Beneficios de prima por uso de rastreo en pólizas selectas.",
    category: "alianzas",
    status: "planned",
    icon: <Handshake className="w-5 h-5" />,
  },
  {
    id: "2025-10-expansion",
    date: "2025-10",
    quarter: "Q4 2025",
    title: "Pilotos en Lima y Bogotá",
    description:
      "Expansión gradual con socios locales y soporte horario extendido.",
    category: "crecimiento",
    status: "planned",
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    id: "2025-12-seguridad",
    date: "2025-12",
    quarter: "Q4 2025",
    title: "Programa de cumplimiento de seguridad",
    description:
      "Endurecimiento de seguridad y preparación para certificaciones.",
    category: "operaciones",
    status: "planned",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
];

/** Utilidades para timeline */
const byDateAsc = (a: TimelineItem, b: TimelineItem) =>
  a.date.localeCompare(b.date);

const formatMonth = (isoYYYYMM: string) => {
  const [y, m] = isoYYYYMM.split("-").map(Number);
  return new Date(y, (m || 1) - 1, 1).toLocaleDateString(undefined, {
    month: "short",
    year: "numeric",
  });
};

function Chip({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${className}`}
    >
      {children}
    </span>
  );
}

/** Timeline compacto, sin controles, sin imágenes */
function Timeline2025Lite() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const events = useMemo(() => [...RAW_EVENTS].sort(byDateAsc), []);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const activeIndex = Math.max(
    events.findIndex((e) => e.id === activeId),
    -1
  );
  const progress =
    events.length > 0 && activeIndex >= 0
      ? ((activeIndex + 1) / events.length) * 100
      : 0;

  return (
    <section
      className="px-6 md:px-8 py-16 bg-neutral-50"
      aria-labelledby="timeline-title"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-xs md:text-sm font-semibold tracking-widest text-neutral-500 uppercase">
            Nuestra trayectoria
          </div>
          <h2
            id="timeline-title"
            className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2"
          >
            Hitos 2025
          </h2>
          <p className="text-neutral-600 max-w-3xl mx-auto mt-3">
            Foco en producto, operaciones, crecimiento y alianzas.
          </p>
        </div>

        <div
          role="list"
          aria-label="Línea de tiempo 2025"
          className="relative max-w-5xl mx-auto"
        >
          {/* Línea central */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 rounded-full bg-neutral-200" />
          {/* Progreso vertical */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-1 rounded-full"
            style={{ height: `${progress}%`, backgroundImage: gradient }}
          />

          {events.map((event, index) => (
            <TimelineRowLite
              key={event.id}
              item={event}
              index={index}
              activeId={activeId}
              setActiveId={setActiveId}
              refCb={(el) => (itemRefs.current[event.id] = el)}
            />
          ))}

          <div className="sr-only" aria-live="polite">
            Elemento activo: {activeId || "ninguno"}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineRowLite({
  item,
  index,
  activeId,
  setActiveId,
  refCb,
}: {
  item: TimelineItem;
  index: number;
  activeId: string | null;
  setActiveId: (id: string) => void;
  refCb: (el: HTMLDivElement | null) => void;
}) {
  const { ref, inView } = useInView({ threshold: 0.6 });

  useEffect(() => {
    if (inView) setActiveId(item.id);
  }, [inView, item.id, setActiveId]);

  const sideLeft = index % 2 === 0;
  const isActive = activeId === item.id;

  return (
    <motion.div
      role="listitem"
      aria-current={isActive ? "step" : undefined}
      ref={(el) => {
        ref(el);
        refCb(el);
      }}
      id={item.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mb-10 flex justify-between items-stretch w-full"
    >
      {/* Columna izquierda / derecha */}
      <div
        className={`w-5/12 ${
          sideLeft ? "order-1 text-right" : "order-3 text-left"
        }`}
      >
        <div
          className={`rounded-2xl p-[1px] transition ${
            isActive ? "shadow-lg" : "shadow-sm"
          }`}
          style={{ backgroundImage: gradient }}
        >
          <div className="bg-white rounded-2xl p-4 md:p-5 border border-neutral-200">
            <div className="flex items-center gap-2 text-neutral-500 text-xs">
              <CalendarDays className="w-4 h-4" /> {formatMonth(item.date)} •{" "}
              {item.quarter}
            </div>
            <div className="mt-1 flex items-center gap-2">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  CATEGORY_META[item.category].dotClass
                }`}
              />
              <h3 className="text-base md:text-lg font-semibold text-neutral-900">
                {item.title}
              </h3>
            </div>
            <p className="mt-1.5 text-neutral-600 text-sm leading-relaxed">
              {item.description}
            </p>

            {/* Chips informativos (no interactivos) */}
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Chip className="border-neutral-200 bg-neutral-50 text-neutral-700">
                {CATEGORY_META[item.category].label}
              </Chip>
              <Chip className={STATUS_META[item.status].className}>
                {STATUS_META[item.status].label}
              </Chip>
            </div>
          </div>
        </div>
      </div>

      {/* Nodo central */}
      <div className="z-10 flex items-center justify-center order-2">
        <div className="relative w-6 h-6">
          {isActive && (
            <span
              className="absolute inset-0 rounded-full animate-ping opacity-30"
              style={{ backgroundImage: gradient }}
            />
          )}
          <div
            className="absolute inset-0 rounded-full border-2 bg-white"
            style={{ borderColor: BRAND.PRIMARY }}
          />
          <div
            className="absolute inset-1 rounded-full flex items-center justify-center text-white"
            style={{ backgroundImage: gradient }}
          >
            {item.icon}
          </div>
        </div>
      </div>

      {/* Columna vacía para balance */}
      <div className="w-5/12 order-1" />
    </motion.div>
  );
}

/** =========================
 *  PÁGINA ABOUT US (manteniendo tu contenido; solo cambia el timeline)
 *  ========================= */
const AboutUsPage = () => {
  return (
    <div style={{ backgroundColor: BRAND.BG }}>
      {/* HERO / QUIÉNES SOMOS (manteniendo tu contenido) */}
      <section className="px-6 md:px-8 pt-16 md:pt-24 pb-12 relative overflow-hidden bg-neutral-50">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: gradient }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <MotionTransition variants={fadeIn("right", 0.25)}>
            <div className="relative">
              <ResponsivePicture
                src={`${BASE}img/PrimeTrack-square.svg`}
                alt="Logo PrimeTrack"
                aspect="aspect-square"
                className="object-contain"
                formats={[]}
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl blur-2xl bg-gradient-to-r from-[#6200F7] to-[#E73400] opacity-30" />
            </div>
          </MotionTransition>

          <MotionTransition variants={fadeIn("left", 0.35)}>
            <div>
              <div className="inline-block text-xs md:text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-3">
                Sobre PrimeTrack
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight text-neutral-900">
                Nacimos en {foundingYear} para dar{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: gradient }}
                >
                  control y tranquilidad
                </span>
              </h1>
              <p className="text-lg text-neutral-700 leading-relaxed max-w-xl">
                Somos una startup ecuatoriana de rastreo vehicular. En menos de
                un año lanzamos app móvil y panel web, habilitamos monitoreo
                24/7 y hoy acompañamos a familias y pymes a tomar decisiones con
                datos reales.
              </p>

              {/* KPIs chicos */}
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[
                  { n: "1.2k+", l: "Vehículos" },
                  { n: "99%", l: "Uptime" },
                  { n: "24/7", l: "Monitoreo" },
                ].map((k) => (
                  <Card key={k.l} className="p-4">
                    <div
                      className="text-2xl font-extrabold"
                      style={{ color: BRAND.PRIMARY }}
                    >
                      {k.n}
                    </div>
                    <div className="text-xs text-neutral-500">{k.l}</div>
                  </Card>
                ))}
              </div>
            </div>
          </MotionTransition>
        </div>
      </section>

      {/* MISIÓN / VISIÓN (manteniendo tu contenido) */}
      <section className="px-6 md:px-8 py-14 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-stretch">
          <MotionTransition variants={fadeIn("bottom", 0.2)}>
            <Card className="p-6 h-full">
              <div className="flex items-center gap-3 font-semibold">
                <Building
                  className="w-5 h-5"
                  style={{ color: BRAND.PRIMARY }}
                />
                Quiénes somos
              </div>
              <p className="mt-3 text-neutral-700">
                Equipo multidisciplinario en operaciones, soporte e ingeniería.
                Construimos tecnología útil y fácil de adoptar.
              </p>
            </Card>
          </MotionTransition>
          <MotionTransition variants={fadeIn("bottom", 0.3)}>
            <Card className="p-6 h-full">
              <div className="flex items-center gap-3 font-semibold">
                <Target className="w-5 h-5" style={{ color: BRAND.PRIMARY }} />
                Misión
              </div>
              <p className="mt-3 text-neutral-700">
                Dar visibilidad en tiempo real y herramientas simples para
                reducir costos y riesgos en movilidad.
              </p>
            </Card>
          </MotionTransition>
          <MotionTransition variants={fadeIn("bottom", 0.4)}>
            <Card className="p-6 h-full">
              <div className="flex items-center gap-3 font-semibold">
                <Rocket className="w-5 h-5" style={{ color: BRAND.PRIMARY }} />
                Visión
              </div>
              <p className="mt-3 text-neutral-700">
                Ser la plataforma de rastreo preferida por personas y pymes en
                Ecuador y la región.
              </p>
            </Card>
          </MotionTransition>
        </div>
      </section>

      {/* TIMELINE (reemplazado por la versión sin controles, sin imágenes) */}
      <Timeline2025Lite />

      {/* VALORES con imagen (manteniendo tu contenido) */}
      <section className="px-6 md:px-8 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2">
              Nuestros valores
            </h2>
            <p className="text-neutral-600 max-w-3xl mx-auto mt-3">
              Principios que guían cada decisión
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <MotionTransition
                key={v.title}
                variants={fadeIn("bottom", 0.12 * (i + 1))}
              >
                <div
                  className="rounded-2xl p-[1px]"
                  style={{ backgroundImage: gradient }}
                >
                  <Card className="overflow-hidden">
                    <ResponsivePicture
                      src={v.img}
                      alt={v.title}
                      aspect="aspect-[16/10]"
                      formats={[]}
                    />
                    <div className="p-6">
                      <div
                        className="flex items-center gap-2 font-semibold"
                        style={{ color: BRAND.PRIMARY }}
                      >
                        {v.icon}
                        <span
                          className="text-neutral-900"
                          style={{ color: "inherit" }}
                        >
                          {v.title}
                        </span>
                      </div>
                      <p className="mt-2 text-neutral-600">{v.description}</p>
                    </div>
                  </Card>
                </div>
              </MotionTransition>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (manteniendo tu contenido) */}
      <section className="px-6 md:px-8 py-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-neutral-900">
            ¿Te sumas a nuestra historia?
          </h3>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-3">
            Con PrimeTrack, tener visibilidad y seguridad es más simple de lo
            que crees.
          </p>
          <div
            className="mt-6 inline-flex rounded-2xl px-6 py-3 font-semibold text-white"
            style={{ backgroundImage: gradient }}
          >
            Contáctanos
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
