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
    // CAMBIO 1: Se usa <header> como contenedor principal
    <motion.header
      variants={fadeIn("bottom", 0.2)}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed z-50 w-full top-0 left-0 bg-neutral-900/90 backdrop-blur-md border-b border-primary/20"
    >
      <div className="container flex items-center justify-between max-w-7xl mx-auto px-4 md:px-6 py-1 md:py-1">
        {/* Logo más grande */}
        <NavLink
          to="/"
          aria-label="PrimeTrack – Inicio"
          className="flex items-center gap-3"
        >
          <LogoIcon
            className="h-8 md:h-20 lg:h-[80px] w-auto"
            aria-label="PrimeTrack"
          />
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
                      "relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100",
                      isActive
                        ? "text-primary"
                        : "text-gray-300 hover:text-white",
                    ].join(" ")
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA desktop (opcional) */}
        <button className="hidden md:inline-flex btn-primary">
          Acceder a mi cuenta
        </button>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Abrir menú"
          className="md:hidden p-2 rounded-xl hover:bg-white/5 transition"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <Menu className="w-7 h-7 text-white" />
        </button>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-primary/20 bg-neutral-900/95"
          >
            <ul className="flex flex-col px-4 py-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    className={({ isActive }) =>
                      [
                        "block py-2",
                        isActive
                          ? "text-primary"
                          : "text-gray-300 hover:text-white",
                      ].join(" ")
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
