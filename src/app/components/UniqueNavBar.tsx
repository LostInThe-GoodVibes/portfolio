import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { motion } from "motion/react";
import { Home, Briefcase, User, Mail, Menu, X } from "lucide-react";
import { assetUrl } from "../lib/assetUrl";

const logo = assetUrl("/assets/LOGO.png");

export function UniqueNavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveHash("");
      return undefined;
    }

    const sections = ["#hero", "#about", "#work", "#contact"];

    const updateActiveSection = () => {
      const marker = window.scrollY + 180;
      let currentHash = "#hero";

      sections.forEach((hash) => {
        const element = document.querySelector(hash);
        if (!element) return;

        const top = element.getBoundingClientRect().top + window.pageYOffset;
        if (marker >= top) {
          currentHash = hash;
        }
      });

      setActiveHash(currentHash);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      setActiveHash(location.hash);
    }
  }, [location.hash, location.pathname]);

  const navItems = [
    { name: "Home", icon: Home, path: "/", hash: "#hero" },
    { name: "About Me", icon: User, path: "/", hash: "#about" },
    { name: "Work", icon: Briefcase, path: "/", hash: "#work" },
    { name: "Contact", icon: Mail, path: "/", hash: "#contact" },
  ];

  const scrollToSection = (hash: string) => {
    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash });
    } else {
      setActiveHash(hash);
      const element = document.querySelector(hash);
      if (element) {
        const offset = 100;
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: Math.max(0, elementPosition - offset),
          behavior: "smooth",
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Floating Morphing Navigation */}
      <motion.nav
        className={`fixed left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
          isScrolled ? "top-4" : "top-4 sm:top-8"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          className="relative w-[calc(100vw-24px)] max-w-max rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(15,23,43,0.8)] shadow-[0_8px_32px_rgba(12,174,255,0.15)] backdrop-blur-xl sm:w-auto"
        >
          <div className="flex items-center gap-2 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
            {/* Logo/Brand */}
            <Link
              to="/"
              className="mr-4 relative group"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#hero");
              }}
            >
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={logo} alt="Arjun logo" className="h-9 w-auto max-w-none sm:h-10" />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.hash)}
                    className="relative whitespace-nowrap px-6 py-2 rounded-full text-[#90a1b9] hover:text-white transition-colors group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Hover background */}
                    <motion.div
                      className="absolute inset-0 bg-[rgba(12,174,255,0.1)] rounded-full opacity-0 group-hover:opacity-100"
                      layoutId={`nav-hover-${item.name}`}
                    />

                    {/* Content */}
                    <div className="relative flex items-center gap-2 whitespace-nowrap">
                      <Icon className="w-4 h-4" />
                      <span className="whitespace-nowrap text-sm font-medium">{item.name}</span>
                    </div>

                    {/* Active indicator */}
                    <motion.div
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#0caeff] rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: activeHash === item.hash ? 1 : 0 }}
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-auto text-white md:hidden"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden fixed inset-0 bg-[#020618] z-40"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 px-6 pt-24">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.hash)}
                className="flex items-center gap-4 text-white text-2xl font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20,
                }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-6 h-6" />
                {item.name}
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
