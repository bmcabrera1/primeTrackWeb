import { NavLink } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Mail as MailIcon,
  MessageCircle,
} from "lucide-react";

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

const locations = [
  "Quito: Galo Plaza Lasso 87-21 y Rafael Bustamante",
  "Guayaquil: Cdla. Simón Bolívar. Av. Hno Miguel Mz 2 #76",
  "Loja",
  "Cuenca",
  "Manta",
  "Ambato",
  "Sto. Domingo",
  "Oriente",
  "Machala",
  "Esmeraldas",
  "Ibarra",
];

const Footer = () => {
  return (
    <footer className="mt-20 bg-neutral-50 text-neutral-700 border-t border-neutral-200">
      {/* Banda superior con degradado de marca */}
      <div className="h-1 w-full bg-brand-gradient" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-10">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight mb-3">
              <span className="text-neutral-900">Prime</span>
              <span className="text-brand-gradient">Track</span>
            </h2>
            <p className="text-neutral-600">
              Revolucionando la logística con tecnología e innovación.
            </p>

            <div className="flex gap-3 mt-5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow transition
                             hover:-translate-y-0.5 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Enlaces rápidos">
            <h3 className="font-semibold text-neutral-900 text-lg mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/about-us"
                  className="hover:text-primary underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 rounded"
                >
                  Sobre Nosotros
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="hover:text-primary underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 rounded"
                >
                  Servicios
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/plans"
                  className="hover:text-primary underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 rounded"
                >
                  Planes
                </NavLink>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 rounded"
                >
                  Plataforma Web
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 rounded"
                >
                  App Móvil
                </a>
              </li>
            </ul>
          </nav>

          {/* Locations */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-neutral-900 text-lg mb-4">
              Nuestras Oficinas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {locations.map((loc) => (
                <p key={loc} className="text-neutral-600">
                  {loc}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-6 text-center text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()} PrimeTrack. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
