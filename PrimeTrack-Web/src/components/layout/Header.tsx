import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/lib/motion-transitions";
import { Menu } from "lucide-react";
import { useState } from "react";
import LogoIcon from "@/assets/Logo.svg?react";

const navLinks = [
  { id: 1, label: "Inicio", path: "/" },
  { id: 2, label: "Nosotros", path: "/about-us" },
  { id: 3, label: "Servicios", path: "/services" },
  { id: 4, label: "Planes", path: "/plans" },
  { id: 5, label: "Contacto", path: "/contact" },
] as const;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      variants={fadeIn("bottom", 0.2)}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed top-0 left-0 z-50 w-full bg-neutral-100/90 backdrop-blur-md border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          aria-label="PrimeTrack – Inicio"
          className="flex items-center gap-3"
        >
          <LogoIcon className="h-10 md:h-12 w-auto" aria-label="PrimeTrack" />
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-x-8 text-[15px] font-medium">
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    [
                      // subrayado animado
                      "relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100",
                      // colores base/activo
                      isActive
                        ? "text-primary"
                        : "text-neutral-700 hover:text-neutral-900",
                      // accesibilidad
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded",
                    ].join(" ")
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA desktop */}
        <button className="hidden md:inline-flex btn-primary">
          Acceder a mi cuenta
        </button>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          className="md:hidden p-2 rounded-xl hover:bg-neutral-200 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <Menu className="w-7 h-7 text-neutral-700" />
        </button>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="md:hidden border-t border-neutral-200 bg-white/95 backdrop-blur-sm shadow-sm"
          >
            <ul className="flex flex-col px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    className={({ isActive }) =>
                      [
                        "block py-2 px-1 rounded-md transition",
                        isActive
                          ? "text-primary bg-neutral-100"
                          : "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                      ].join(" ")
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <button
                  className="w-full btn-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Acceder a mi cuenta
                </button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
