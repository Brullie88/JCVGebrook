import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Facebook, Youtube } from "lucide-react";
import { NAVIGATION, CONTACT_INFO } from "../constants";

interface Props {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export default function Navigation({ activeSection, onNavigate }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-lg py-3 shadow-xl" : "bg-transparent py-4 sm:py-6"
        }`}
      >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onNavigate("home")}
        >
          <div className="w-12 h-12 bg-carnaval-red rounded-full flex items-center justify-center border-2 border-carnaval-yellow shadow-[0_0_15px_rgba(211,16,43,0.5)] group-hover:scale-110 transition-transform">
            <span className="text-carnaval-yellow font-display text-2xl">J</span>
          </div>
          <div className="hidden sm:block">
            <h1 className={`text-xl font-display leading-none transition-colors ${isScrolled ? "text-carnaval-charcoal" : "text-carnaval-cream"}`}>JCV GEBROOK</h1>
            <p className="text-[10px] tracking-widest text-carnaval-yellow uppercase">Vastelaovend Same</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAVIGATION.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm font-bold tracking-widest uppercase transition-colors hover:text-carnaval-red ${
                activeSection === item.id ? "text-carnaval-red" : 
                isScrolled ? "text-carnaval-charcoal" : "text-white"
              }`}
            >
              {item.name}
            </button>
          ))}
          
          <div className="flex items-center gap-3 border-l border-carnaval-charcoal/10 pl-6 ml-2">
            <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className={`transition-colors ${isScrolled ? "text-carnaval-charcoal" : "text-carnaval-cream"} hover:text-carnaval-yellow`}>
              <Facebook size={18} />
            </a>
            <a href={CONTACT_INFO.youtube} target="_blank" rel="noopener noreferrer" className={`transition-colors ${isScrolled ? "text-carnaval-charcoal" : "text-carnaval-cream"} hover:text-carnaval-yellow`}>
              <Youtube size={18} />
            </a>
          </div>

          <button
            onClick={() => onNavigate("join")}
            className="bg-carnaval-red hover:bg-carnaval-bordeaux text-carnaval-cream px-6 py-2 rounded-full font-display text-lg tracking-wide shadow-lg hover:shadow-carnaval-red/20 transition-all active:scale-95"
          >
            Word lid
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden transition-colors p-2 ${isScrolled ? "text-carnaval-charcoal" : "text-carnaval-cream"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-carnaval-cream z-40 flex flex-col items-center justify-center gap-8 md:hidden text-carnaval-charcoal"
          >
            {NAVIGATION.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className="text-3xl font-display tracking-widest uppercase hover:text-carnaval-gold"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate("join");
                setIsMobileMenuOpen(false);
              }}
              className="mt-4 bg-carnaval-red text-carnaval-cream px-10 py-4 rounded-full font-display text-2xl tracking-widest shadow-2xl"
            >
              Word lid
            </button>
            <div className="flex gap-8 mt-4">
              <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-carnaval-charcoal/5 text-carnaval-charcoal hover:bg-carnaval-red hover:text-carnaval-cream transition-all">
                <Facebook size={32} />
              </a>
              <a href={CONTACT_INFO.youtube} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-carnaval-charcoal/5 text-carnaval-charcoal hover:bg-carnaval-red hover:text-carnaval-cream transition-all">
                <Youtube size={32} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
}
