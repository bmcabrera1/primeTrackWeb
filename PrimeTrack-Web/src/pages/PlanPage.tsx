import { MotionTransition } from "@/components/layout/transition-component";
import { fadeIn } from "@/lib/motion-transitions";
import { CheckCircle2, XCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

const featuresList = [
  { name: "Rastreo en Tiempo Real", basic: true, pro: true, enterprise: true },
  {
    name: "Historial de Recorridos",
    basic: "30 días",
    pro: "90 días",
    enterprise: "1 año",
  },
  { name: "Alertas de Velocidad", basic: true, pro: true, enterprise: true },
  { name: "Geocercas", basic: 5, pro: 50, enterprise: "Ilimitadas" },
  { name: "App Móvil", basic: false, pro: true, enterprise: true },
  { name: "Optimización de Rutas", basic: false, pro: true, enterprise: true },
  {
    name: "Gestión de Mantenimiento",
    basic: false,
    pro: true,
    enterprise: true,
  },
  { name: "Reportes Avanzados", basic: false, pro: false, enterprise: true },
  { name: "API para Integración", basic: false, pro: false, enterprise: true },
  {
    name: "Soporte Técnico",
    basic: "Email",
    pro: "Prioritario",
    enterprise: "Dedicado 24/7",
  },
];

const PlansPage = () => {
  return (
    <div>
      {/* Section clara para encajar con el fondo intermedio elegante */}
      <section className="section bg-neutral-50">
        <div className="container mx-auto px-4">
          <MotionTransition
            variants={fadeIn("bottom", 0.3)}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
              Compara Nuestros Planes
            </h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Encuentra la solución perfecta para tu flota.
            </p>
          </MotionTransition>

          <MotionTransition
            variants={fadeIn("bottom", 0.5)}
            className="overflow-x-auto"
          >
            {/* Card contenedor para sombras/bordes coherentes */}
            <div className="card p-0">
              <table className="w-full min-w-[860px] text-left border-collapse">
                <caption className="sr-only">
                  Comparativa de características por plan
                </caption>
                <thead>
                  <tr className="bg-neutral-100/90">
                    <th className="p-4 text-sm md:text-base font-semibold text-neutral-700 w-1/3">
                      Características
                    </th>
                    <th className="p-4 text-center text-sm md:text-base font-semibold text-neutral-700">
                      Básico
                    </th>
                    <th className="p-4 text-center text-sm md:text-base font-semibold text-neutral-900 bg-primary/5 border-x border-neutral-200">
                      Profesional
                    </th>
                    <th className="p-4 text-center text-sm md:text-base font-semibold text-neutral-700">
                      Empresarial
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
                        {typeof feature.basic === "boolean" ? (
                          feature.basic ? (
                            <CheckCircle2
                              className="mx-auto text-primary"
                              aria-label="Incluido"
                            />
                          ) : (
                            <XCircle
                              className="mx-auto text-secondary"
                              aria-label="No incluido"
                            />
                          )
                        ) : (
                          <span className="text-neutral-800">
                            {feature.basic}
                          </span>
                        )}
                      </td>

                      <td className="p-4 text-center bg-primary/5 border-x border-neutral-200">
                        {typeof feature.pro === "boolean" ? (
                          feature.pro ? (
                            <CheckCircle2
                              className="mx-auto text-primary"
                              aria-label="Incluido"
                            />
                          ) : (
                            <XCircle
                              className="mx-auto text-secondary"
                              aria-label="No incluido"
                            />
                          )
                        ) : (
                          <span className="font-bold text-neutral-900">
                            {feature.pro}
                          </span>
                        )}
                      </td>

                      <td className="p-4 text-center">
                        {typeof feature.enterprise === "boolean" ? (
                          feature.enterprise ? (
                            <CheckCircle2
                              className="mx-auto text-primary"
                              aria-label="Incluido"
                            />
                          ) : (
                            <XCircle
                              className="mx-auto text-secondary"
                              aria-label="No incluido"
                            />
                          )
                        ) : (
                          <span className="text-neutral-800">
                            {feature.enterprise}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}

                  {/* Fila de CTAs */}
                  <tr className="bg-neutral-100/80">
                    <td className="p-4" />
                    <td className="p-4 text-center">
                      <NavLink to="/contact" className="btn-secondary">
                        Elegir
                      </NavLink>
                    </td>
                    <td className="p-4 text-center bg-primary/5 border-x border-neutral-200">
                      <NavLink to="/contact" className="btn-primary">
                        Elegir Plan
                      </NavLink>
                    </td>
                    <td className="p-4 text-center">
                      <NavLink to="/contact" className="btn-secondary">
                        Elegir
                      </NavLink>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </MotionTransition>
        </div>
      </section>
    </div>
  );
};

export default PlansPage;
