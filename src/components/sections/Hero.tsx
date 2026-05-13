import { motion } from "motion/react";
import { Play } from "lucide-react";

interface Props {
  onNext: () => void;
}

export default function Hero({ onNext }: Props) {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Cinematic Background Simulation */}
      <div className="absolute inset-0 z-0">
        <img
          src="/LogoJCV.png"
          alt="JCV Gebrook Logo"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-carnaval-charcoal/40 via-carnaval-charcoal/20 to-carnaval-cream"></div>
      </div>

      {/* Confetti Overlay Particle Simulation (CSS) */}
      <div className="absolute inset-0 z-1 pointer-events-none opacity-40">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-sm"
            initial={{ 
              top: -20, 
              left: `${Math.random() * 100}%`,
              backgroundColor: ["#D1102B", "#FDD835", "#43A047"][Math.floor(Math.random() * 3)]
            }}
            animate={{ 
              top: "110%",
              rotate: 360,
              x: Math.sin(i) * 50
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-carnaval-yellow/20 text-carnaval-yellow border border-carnaval-yellow/30 text-xs font-bold tracking-[0.3em] uppercase mb-6">
            Samen carnaval vieren — 1x11 Jaar Jubileum
          </span>
          <h1 className="text-6xl md:text-9xl font-display leading-[0.9] mb-8 text-carnaval-charcoal drop-shadow-xl">
            DE JEUGD VAN <br />
            <span className="text-carnaval-red">GEB</span><span className="text-carnaval-yellow">RO</span><span className="text-carnaval-green">OK</span>
          </h1>
          <p className="text-lg md:text-2xl font-light text-carnaval-charcoal/80 mb-10 max-w-2xl mx-auto leading-relaxed font-accent">
            De gezelligste jeugdcarnavalsvereniging van Zuid-Limburg. Bouw jij mee aan de toekomst van onze traditie?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
