import { NavLink } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Mail as MailIcon,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { FormEvent } from "react";

/** Marca consistente con tu header/landing */
const BRAND = {
  PRIMARY: "#6200F7",
  SECONDARY: "#E73400",
};
const gradient = `linear-gradient(90deg, ${BRAND.PRIMARY}, ${BRAND.SECONDARY})`;

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  {
    icon: MessageCircle,
    href: "https://wa.me/593123456789",
    label: "WhatsApp",
  },
  { icon: MailIcon, href: "mailto:info@primetrack.com", label: "Correo" },
];

type Location = { city: string; address?: string };
const locations: Location[] = [
  { city: "Quito", address: "Galo Plaza Lasso 87-21 y Rafael Bustamante" },
  {
    city: "Guayaquil",
    address: "Cdla. Simón Bolívar. Av. Hno Miguel Mz 2 #76",
  },
  { city: "Cuenca" },
  { city: "Manta" },
];

/** Botón de submit con degradé para el formulario de novedades */
function GradientSubmitButton({
  className = "",
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={[
        "inline-flex items-center justify-center h-12 px-5 rounded-xl text-white font-semibold shadow-sm",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2",
        "transition hover:opacity-90",
        className,
      ].join(" ")}
      style={{ backgroundImage: gradient }}
    />
  );
}

const Footer = () => {
  const onSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Integra aquí tu servicio de email (Brevo/Mailchimp/etc.)
    alert("¡Gracias por suscribirte! Te mantendremos al día.");
  };

  return (
    <footer className="relative mt-20 text-neutral-700">
      {/* Fondo suave con patrón + glass */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 400px at 20% -10%, rgba(98,0,247,0.08), transparent 60%), radial-gradient(1000px 360px at 80% -20%, rgba(231,52,0,0.08), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-white/60 backdrop-blur-sm" />

      {/* Banda superior con degradé de marca */}
      <div className="h-1 w-full" style={{ backgroundImage: gradient }} />

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-10">
          {/* Brand + tagline + mini CTA + social */}
          <div className="md:col-span-4">
            <h2 className="text-3xl font-extrabold tracking-tight mb-3">
              <span className="text-neutral-900">Prime</span>
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: gradient }}
              >
                Track
              </span>
            </h2>

            <p className="text-neutral-600 mb-4">
              Tecnología de rastreo para reducir costos y aumentar el control de
              tu operación, sin fricciones.
            </p>

            {/* Mini-CTA para equilibrar visualmente el bloque de marca */}
            <NavLink
              to="/plans"
              className="inline-flex items-center px-4 py-2 rounded-lg border border-neutral-300 text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition mb-5"
            >
              Ver planes
            </NavLink>

            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow transition hover:-translate-y-0.5 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/40"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Novedades (más amplia y sin botones de contacto) */}
          <div className="md:col-span-5">
            <h3 className="font-semibold text-neutral-900 text-lg mb-4">
              Novedades
            </h3>

            <p className="text-neutral-600 mb-4">
              Suscríbete para recibir actualizaciones sobre nuevas funciones,
              promociones y consejos de operación.
            </p>

            <form
              onSubmit={onSubscribe}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="tu@correo.com"
                className="w-full h-12 rounded-xl border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-purple-200"
                aria-label="Correo electrónico"
              />
              <GradientSubmitButton type="submit" className="shrink-0">
                Suscribirme
              </GradientSubmitButton>
            </form>

            {/* Microcopy de confianza */}
            <p className="mt-3 text-xs text-neutral-500">
              Nos tomamos la privacidad en serio. Puedes darte de baja cuando
              quieras.
            </p>
          </div>

          {/* Oficinas */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-neutral-900 text-lg mb-4">
              Oficinas
            </h3>
            <ul className="space-y-2 text-sm">
              {locations.map(({ city, address }) => (
                <li key={city} className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-neutral-400" />
                  <span className="text-neutral-600">
                    <span className="font-medium text-neutral-800">{city}</span>
                    {address ? `: ${address}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal bar */}
        <div className="border-t border-neutral-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()} PrimeTrack. Todos los derechos
            reservados.
          </p>

          <ul className="flex items-center gap-4">
            <li>
              <NavLink
                to="/legal/terminos"
                className="hover:text-neutral-800 underline-offset-4 hover:underline"
              >
                Términos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/legal/privacidad"
                className="hover:text-neutral-800 underline-offset-4 hover:underline"
              >
                Privacidad
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/legal/cookies"
                className="hover:text-neutral-800 underline-offset-4 hover:underline"
              >
                Cookies
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
