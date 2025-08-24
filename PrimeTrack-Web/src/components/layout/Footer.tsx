import { NavLink } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Mail as MailIcon,
  MessageCircle,
} from "lucide-react";

const socialLinks = [
  { icon: <Facebook />, href: "#" },
  { icon: <Instagram />, href: "#" },
  { icon: <MessageCircle />, href: "https://wa.me/593123456789" },
  { icon: <MailIcon />, href: "mailto:info@primetrack.com" },
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
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Prime<span className="text-secondary">Track</span>
            </h2>
            <p className="text-gray-400">
              Revolucionando la logística con tecnología e innovación.
            </p>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/about-us" className="hover:text-blue-500">
                  Sobre Nosotros
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="hover:text-blue-500">
                  Servicios
                </NavLink>
              </li>
              <li>
                <NavLink to="/plans" className="hover:text-blue-500">
                  Planes
                </NavLink>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Plataforma Web
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  App Móvil
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-4">Nuestras Oficinas</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {locations.map((loc, index) => (
                <p key={index} className="text-gray-400">
                  {loc}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-gray-500">
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
