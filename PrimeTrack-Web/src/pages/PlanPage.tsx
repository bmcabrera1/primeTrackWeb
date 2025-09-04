import { MotionTransition } from "@/components/layout/transition-component";
import { fadeIn } from "@/lib/motion-transitions";
import { CheckCircle2, XCircle } from "lucide-react";
import { NavLink } from "react-router-dom";
import React from "react";

/** Brand tokens */
const BRAND = {
  PRIMARY: "#6200F7",
  SECONDARY: "#E73400",
  TEXT: "#111827",
  MUTED: "#6B7280",
  BORDER: "#E5E7EB",
};
const gradient = `linear-gradient(90deg, ${BRAND.PRIMARY}, ${BRAND.SECONDARY})`;

type FeatureValue = boolean | number | string;

type Feature = {
  name: string;
  basic: FeatureValue;
  pro: FeatureValue;
};

const featuresList: Feature[] = [
  { name: "Rastreo en Tiempo Real", basic: true, pro: true },
  { name: "Historial de Recorridos", basic: "30 días", pro: "365 días" },
  { name: "Alertas de Velocidad", basic: true, pro: true },
  { name: "Bloqueo de Motor", basic: true, pro: true },
  { name: "Botón de Pánico", basic: true, pro: true },
  { name: "App Móvil", basic: true, pro: true },
  { name: "Geocerca de Perimetrales", basic: false, pro: true },
  { name: "Apertura Remota de Seguros", basic: false, pro: true },
  { name: "Gestión de Mantenimiento", basic: false, pro: true },
  { name: "Reportes Avanzados", basic: false, pro: true },
  { name: "API para Integración", basic: false, pro: true },
  { name: "Soporte Técnico", basic: "Email", pro: "Prioritario" },
];

/** Helpers UI */
function GradientButton(props: React.ComponentProps<typeof NavLink>) {
  const { className = "", ...rest } = props;
  return (
    <NavLink
      {...rest}
      className={`inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-semibold text-white shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-200 ${className}`}
      style={{ backgroundImage: gradient }}
    />
  );
}
function OutlineButton(props: React.ComponentProps<typeof NavLink>) {
  const { className = "", ...rest } = props;
  return (
    <NavLink
      {...rest}
      className={`inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-semibold border focus:outline-none focus:ring-4 focus:ring-purple-100 ${className}`}
      style={{ borderColor: BRAND.PRIMARY, color: BRAND.PRIMARY }}
    />
  );
}

function CellValue({
  value,
  emphasize = false,
  ariaLabelTrue = "Incluido",
  ariaLabelFalse = "No incluido",
}: {
  value: FeatureValue;
  emphasize?: boolean;
  ariaLabelTrue?: string;
  ariaLabelFalse?: string;
}) {
  if (typeof value === "boolean") {
    return value ? (
      <CheckCircle2
        className="mx-auto w-5 h-5"
        style={{ color: BRAND.PRIMARY }}
        aria-label={ariaLabelTrue}
        role="img"
      />
    ) : (
      <XCircle
        className="mx-auto w-5 h-5"
        style={{ color: BRAND.SECONDARY }}
        aria-label={ariaLabelFalse}
        role="img"
      />
    );
  }
  return (
    <span
      className={emphasize ? "font-bold text-neutral-900" : "text-neutral-800"}
    >
      {String(value)}
    </span>
  );
}

/** Responsive “cards” for mobile (stacked) */
type PlanKey = keyof Omit<Feature, "name">; // 'basic' | 'pro'

function MobilePlanCards() {
  const plans: Array<{ key: PlanKey; label: string; badge?: string }> = [
    { key: "basic", label: "Plan Autocontrol" },
    { key: "pro", label: "Plan Control Total", badge: "Recomendado" },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 md:hidden">
      {plans.map((plan) => (
        <div
          key={plan.key}
          className="rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden"
        >
          <div
            className="flex items-center justify-between p-4"
            style={{
              backgroundImage: plan.key === "pro" ? gradient : undefined,
            }}
          >
            <div
              className={`text-lg font-bold ${
                plan.key === "pro" ? "text-white" : "text-neutral-900"
              }`}
            >
              {plan.label}
            </div>
            {plan.badge && (
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  plan.key === "pro"
                    ? "bg-white/15 text-white"
                    : "bg-purple-50 text-purple-700"
                }`}
              >
                {plan.badge}
              </span>
            )}
          </div>
          <ul className="divide-y divide-neutral-200">
            {featuresList.map((f) => (
              <li
                key={f.name}
                className="p-4 flex items-center justify-between"
              >
                <span className="text-neutral-800">{f.name}</span>
                <div className="pl-4">
                  <CellValue
                    value={f[plan.key]}
                    emphasize={plan.key === "pro"}
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className="p-4 flex gap-3">
            {plan.key === "pro" ? (
              <>
                <GradientButton to="/contact" className="flex-1">
                  Elegir Plan
                </GradientButton>
                <OutlineButton to="/contact" className="flex-1">
                  Hablar con ventas
                </OutlineButton>
              </>
            ) : (
              <>
                <OutlineButton to="/contact" className="flex-1">
                  Elegir
                </OutlineButton>
                <OutlineButton to="/contact" className="flex-1">
                  Consulta
                </OutlineButton>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

const PlansPage = () => {
  return (
    <div>
      {/* Header */}
      <section className="section bg-neutral-50">
        <div className="container mx-auto px-4">
          <MotionTransition
            variants={fadeIn("bottom", 0.2)}
            className="text-center mb-8 md:mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
              Compara Nuestros Planes
            </h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Encuentra la solución perfecta para tu flota. El{" "}
              <strong>Plan Control Total</strong> equilibra potencia y precio.
            </p>
          </MotionTransition>

          {/* Mobile cards */}
          <MobilePlanCards />

          {/* Desktop table */}
          <MotionTransition
            variants={fadeIn("bottom", 0.35)}
            className="hidden md:block overflow-x-auto"
          >
            <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
              <table className="w-full min-w-[720px] text-left border-collapse">
                <caption className="sr-only">
                  Comparativa de características por plan
                </caption>
                <thead className="sticky top-0 z-10">
                  <tr className="bg-neutral-100/90 backdrop-blur supports-[backdrop-filter]:bg-neutral-100/70">
                    <th className="p-4 text-sm md:text-base font-semibold text-neutral-700 w-1/3">
                      Características
                    </th>
                    <th className="p-4 text-center text-sm md:text-base font-semibold text-neutral-700">
                      Plan Autocontrol
                    </th>
                    <th
                      className="p-4 text-center text-sm md:text-base font-semibold border-l border-neutral-200"
                      style={{ backgroundImage: gradient, color: "#fff" }}
                    >
                      Plan Control Total{" "}
                      <span className="ml-2 text-xs font-semibold bg-white/15 px-2 py-0.5 rounded-full">
                        Recomendado
                      </span>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-neutral-200">
                  {featuresList.map((feature, index) => (
                    <tr
                      key={index}
                      className="odd:bg-white even:bg-neutral-50 hover:bg-neutral-100/60 transition-colors"
                    >
                      <td className="p-4 font-medium text-neutral-800">
                        {feature.name}
                      </td>

                      <td className="p-4 text-center">
                        <CellValue value={feature.basic} />
                      </td>

                      <td
                        className="p-4 text-center border-l border-neutral-200"
                        style={{ background: "#F4EEFF" }}
                      >
                        <CellValue value={feature.pro} emphasize />
                      </td>
                    </tr>
                  ))}

                  {/* CTA row */}
                  <tr className="bg-neutral-100/80">
                    <td className="p-4" />
                    <td className="p-4 text-center">
                      <OutlineButton to="/contact">Elegir</OutlineButton>
                    </td>
                    <td className="p-4 text-center border-l border-neutral-200">
                      <GradientButton to="/contact">Elegir Plan</GradientButton>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Little footnote */}
            <p className="mt-4 text-sm text-neutral-500">
              * Algunas funciones pueden requerir hardware compatible. Solicita
              una demo para verlas en acción.
            </p>
          </MotionTransition>
        </div>
      </section>
    </div>
  );
};

export default PlansPage;
