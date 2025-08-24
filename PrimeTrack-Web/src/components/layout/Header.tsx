import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/lib/motion-transitions";
import { Menu } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { id: 1, label: "Inicio", path: "/" },
  { id: 2, label: "Nosotros", path: "/about-us" },
  { id: 3, label: "Servicios", path: "/services" },
  { id: 4, label: "Planes", path: "/plans" },
  { id: 5, label: "Contacto", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.div
      variants={fadeIn("bottom", 0.3)}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed z-50 w-full top-0 left-0 bg-gray-900/80 backdrop-blur-sm"
    >
      <header className="container flex items-center justify-between max-w-6xl mx-auto p-4 md:p-6">
        <NavLink to="/">
          <h1 className="font-bold text-3xl md:text-4xl">
            Prime<span className="text-secondary">Track</span>
          </h1>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-x-8 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `hover:text-secondary transition-all duration-300 ${
                      isActive ? "text-secondary" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button className="hidden md:block px-4 py-2 bg-blue-600 text-white text-md font-semibold rounded-lg shadow-lg transition-transform duration-300 hover:bg-blue-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900">
          Acceder a mi cuenta
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="md:hidden bg-gray-800"
          >
            <nav className="flex flex-col items-center p-5">
              <ul className="flex flex-col items-center gap-y-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <NavLink
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `hover:text-secondary transition-all duration-300 ${
                          isActive ? "text-secondary" : ""
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-md font-semibold rounded-lg shadow-lg transition-transform duration-300 hover:bg-blue-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800">
                Acceder a mi cuenta
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
export default Header;
