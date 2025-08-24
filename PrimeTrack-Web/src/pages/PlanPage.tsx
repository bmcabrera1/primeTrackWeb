import { MotionTransition } from "@/components/layout/transition-component";
import { fadeIn } from "../lib/motion-transitions";
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
    <div className="pt-24 md:pt-32">
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <MotionTransition
            variants={fadeIn("bottom", 0.3)}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Compara Nuestros Planes
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Encuentra la solución perfecta para tu flota. Todos nuestros
              planes están diseñados para escalar contigo.
            </p>
          </MotionTransition>

          <MotionTransition
            variants={fadeIn("bottom", 0.5)}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[800px] text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="p-4 text-xl font-bold w-1/3">
                    Características
                  </th>
                  <th className="p-4 text-center text-xl font-bold">Básico</th>
                  <th className="p-4 text-center text-xl font-bold bg-blue-600/10 rounded-t-lg">
                    Profesional
                  </th>
                  <th className="p-4 text-center text-xl font-bold">
                    Empresarial
                  </th>
                </tr>
              </thead>
              <tbody>
                {featuresList.map((feature, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-800 hover:bg-gray-800/50"
                  >
                    <td className="p-4 font-semibold">{feature.name}</td>
                    <td className="p-4 text-center">
                      {typeof feature.basic === "boolean" ? (
                        feature.basic ? (
                          <CheckCircle2 className="mx-auto text-green-500" />
                        ) : (
                          <XCircle className="mx-auto text-red-500" />
                        )
                      ) : (
                        <span>{feature.basic}</span>
                      )}
                    </td>
                    <td className="p-4 text-center bg-blue-600/10">
                      {typeof feature.pro === "boolean" ? (
                        feature.pro ? (
                          <CheckCircle2 className="mx-auto text-green-400" />
                        ) : (
                          <XCircle className="mx-auto text-red-400" />
                        )
                      ) : (
                        <span className="font-bold text-white">
                          {feature.pro}
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof feature.enterprise === "boolean" ? (
                        feature.enterprise ? (
                          <CheckCircle2 className="mx-auto text-green-500" />
                        ) : (
                          <XCircle className="mx-auto text-red-500" />
                        )
                      ) : (
                        <span>{feature.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-800/20">
                  <td className="p-4"></td>
                  <td className="p-4 text-center">
                    <NavLink
                      to="/contact"
                      className="px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-300 hover:bg-gray-600"
                    >
                      Elegir
                    </NavLink>
                  </td>
                  <td className="p-4 text-center bg-blue-600/10 rounded-b-lg">
                    <NavLink
                      to="/contact"
                      className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition-colors duration-300 hover:bg-blue-500"
                    >
                      Elegir Plan
                    </NavLink>
                  </td>
                  <td className="p-4 text-center">
                    <NavLink
                      to="/contact"
                      className="px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-300 hover:bg-gray-600"
                    >
                      Elegir
                    </NavLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </MotionTransition>
        </div>
      </section>
    </div>
  );
};

export default PlansPage;
