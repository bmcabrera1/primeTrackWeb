import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { fadeIn } from "@/lib/motion-transitions";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import LogoIcon from "@/assets/Logo.svg?react";

/** Marca (match con tu landing) */
const BRAND = {
  PRIMARY: "#6200F7",
  SECONDARY: "#E73400",
};
const gradient = `linear-gradient(90deg, ${BRAND.PRIMARY}, ${BRAND.SECONDARY})`;

const navLinks = [
  { id: 1, label: "Inicio", path: "/" },
  { id: 2, label: "Nosotros", path: "/about-us" },
  { id: 4, label: "Planes", path: "/plans" },
  { id: 5, label: "Contacto", path: "/contact" },
] as const;

/** CTA inline (evita depender de .btn-primary externas) */
function PrimaryCta({
  className = "",
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={[
        "inline-flex items-center justify-center h-11 px-4 md:px-5 rounded-xl text-white font-semibold shadow-sm",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2",
        "transition hover:opacity-90",
        className,
      ].join(" ")}
      style={{ backgroundImage: gradient }}
    />
  );
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Sombra/glass al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Skip link accesible */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-white focus:text-neutral-900 focus:px-4 focus:py-2 focus:rounded-lg focus:shadow"
      >
        Saltar al contenido
      </a>

      <motion.header
        variants={fadeIn("bottom", 0.1)}
        initial="hidden"
        animate="visible"
        className={[
          "fixed top-0 left-0 z-50 w-full border-b",
          scrolled
            ? "bg-white/80 backdrop-blur-md border-neutral-200 shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
            : "bg-white/60 backdrop-blur-md border-transparent",
        ].join(" ")}
      >
        {/* Línea superior con degradé sutil */}
        <div
          aria-hidden="true"
          className="h-[3px] w-full"
          style={{ backgroundImage: gradient }}
        />

        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            aria-label="PrimeTrack – Inicio"
            className="flex items-center gap-3"
          >
            <LogoIcon className="h-9 md:h-10 w-auto" aria-label="PrimeTrack" />
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-x-6 lg:gap-x-8 text-[15px] font-medium">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    className={({ isActive }) =>
                      [
                        "relative inline-flex items-center px-1 py-1 rounded-md transition",
                        isActive
                          ? "text-neutral-900"
                          : "text-neutral-700 hover:text-neutral-900",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/40",
                      ].join(" ")
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="relative z-10">{link.label}</span>
                        {/* Subrayado/pill animado con degradé */}
                        <span
                          aria-hidden="true"
                          className={[
                            "absolute left-0 right-0 -bottom-1 h-[2px] origin-left rounded-full",
                            isActive ? "scale-x-100" : "scale-x-0",
                          ].join(" ")}
                          style={{ backgroundImage: gradient }}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <PrimaryCta onClick={() => (window.location.href = "/login")}>
              Acceder a mi cuenta
            </PrimaryCta>
          </div>

          {/* Toggle móvil */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            className="md:hidden p-2 rounded-xl hover:bg-neutral-200/60 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/40"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? (
              <X className="w-7 h-7 text-neutral-700" />
            ) : (
              <Menu className="w-7 h-7 text-neutral-700" />
            )}
          </button>
        </div>

        {/* Menú móvil */}
        <AnimatePresence initial={false}>
          {isMenuOpen && (
            <motion.nav
              id="mobile-menu"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
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
                          "block py-2 px-3 rounded-lg transition",
                          isActive
                            ? "text-neutral-900"
                            : "text-neutral-700 hover:text-neutral-900",
                          "focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/40",
                        ].join(" ")
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="relative">
                        {link.label}
                        {/* subrayado fino activo en mobile */}
                        <span
                          aria-hidden="true"
                          className="block mt-1 h-[2px] w-10 rounded-full"
                          style={{
                            backgroundImage: gradient,
                            opacity: location.pathname === link.path ? 1 : 0,
                          }}
                        />
                      </span>
                    </NavLink>
                  </li>
                ))}
                <li className="pt-2">
                  <PrimaryCta
                    className="w-full"
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.location.href = "/login";
                    }}
                  >
                    Acceder a mi cuenta
                  </PrimaryCta>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer para no tapar el contenido por el header fijo */}
      <div className="h-5 md:h-5" />
    </>
  );
};

export default Header;
