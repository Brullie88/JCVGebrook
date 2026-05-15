import { Analytics } from "@vercel/analytics/react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navigation from "./components/Navigation";
import Hero from "./components/sections/Hero";
import YouthRoyals from "./components/sections/YouthRoyals";
import EventsSection from "./components/sections/EventsSection";
import HistorySection from "./components/sections/HistorySection";
import JoinUs from "./components/sections/JoinUs";
import SponsorsSection from "./components/sections/SponsorsSection";
import SocialWall from "./components/sections/SocialWall";
import Gallery from "./components/sections/Gallery";
import PrivacyStatement from "./components/sections/PrivacyStatement";
import Footer from "./components/Footer";
import CountdownTimer from "./components/CountdownTimer";
import { NEWS_FLASH, HIGHLIGHTS } from "./constants";
import { ArrowRight, Star } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "IMG" || target.closest("img")) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  const handleNavigate = (id: string) => {
    // These IDs are all sections on the home page
    const homeSections = ["home", "galerij", "historie", "council", "agenda", "socials", "sponsors", "contact"];
    
    if (homeSections.includes(id)) {
      setActiveTab("home");
      // Use setTimeout to ensure the home tab is rendered before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const navHeight = 80; // Approximate nav height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;

          window.scrollTo({
            top: id === "home" ? 0 : offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      setActiveTab(id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToContent = () => {
    const el = document.getElementById("highlights");
    if (el) {
      const navHeight = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-carnaval-cream selection:bg-carnaval-yellow selection:text-carnaval-charcoal">
      <Navigation activeSection={activeTab} onNavigate={handleNavigate} />

      <main>
        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero */}
              <Hero onNext={scrollToContent} />

              {/* Highlight Cards */}
              <section id="highlights" className="py-24 px-6 relative z-10 -mt-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
                  {HIGHLIGHTS.slice(0, 2).map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="glass-card p-10 hover:bg-white/10 transition-all group hover:-translate-y-2"
                    >
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform animate-float ${
                        i % 2 === 0 ? "bg-carnaval-red/20 text-carnaval-red" : 
                        "bg-carnaval-yellow/20 text-carnaval-yellow"
                      }`}>
                        <Star size={32} />
                      </div>
                      <h3 translate="no" className="text-3xl mb-4 uppercase text-carnaval-charcoal">
                        {item.title}
                      </h3>
                      <p className="text-carnaval-charcoal/60 font-accent mb-8 leading-relaxed">
                        {item.description}
                      </p>
                      <button 
                        onClick={() => {
                          const targetId = item.title === "Word lid" ? "join" : 
                                          item.title === "Jeugdraad" ? "council" : "agenda";
                          handleNavigate(targetId);
                        }}
                        translate="no"
                        className={`flex items-center gap-2 font-display text-lg tracking-widest group ${
                          i % 2 === 0 ? "text-carnaval-red" : 
                          "text-carnaval-yellow"
                        }`}
                      >
                        {item.cta} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* History Section */}
              <HistorySection />

              {/* Gallery Section */}
              <Gallery />

              {/* Royals Section */}
              <YouthRoyals />

              {/* News Snippet */}
              <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                  <div className="flex justify-between items-end mb-16">
                    <h2 className="text-5xl md:text-7xl uppercase">Het <span className="text-carnaval-red">Laatste</span> Nieuws</h2>
                    <button className="hidden md:block text-carnaval-yellow font-display text-xl tracking-widest border-b border-carnaval-yellow pb-1 px-2">ALLE BERICHTEN</button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-12">
                    {NEWS_FLASH.map((news) => (
                      <motion.div
                        key={news.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="group flex flex-col md:flex-row gap-8 items-center glass-card p-6 border-carnaval-charcoal/5 hover:border-carnaval-red/30 transition-all"
                      >
                        <div className="w-48 h-48 rounded-2xl overflow-hidden shrink-0">
                          <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="space-y-3">
                          <div className="flex flex-col gap-2">
                            {news.targetDate && <CountdownTimer targetDate={news.targetDate} />}
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white bg-carnaval-red px-3 py-1 rounded-full shadow-lg shadow-carnaval-red/20 w-fit">{news.category}</span>
                          </div>
                          <h4 className="text-2xl text-carnaval-charcoal">{news.title}</h4>
                          <p className="text-sm text-carnaval-charcoal/60 font-accent line-clamp-2">{news.summary}</p>
                          {news.url ? (
                            <a 
                              href={news.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-carnaval-red text-sm font-bold uppercase tracking-widest group inline-flex"
                            >
                              LEES MEER <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                          ) : (
                            <button className="flex items-center gap-2 text-carnaval-red text-sm font-bold uppercase tracking-widest group">
                              LEES MEER <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Agenda Section */}
              <EventsSection />

              <SocialWall />

              {/* CTA Join Section Teaser */}
              <SponsorsSection />
              <JoinUs />
            </motion.div>
          )}

          {activeTab === "join" && (
            <motion.div
              key="join-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="pt-32">
                <JoinUs />
              </div>
            </motion.div>
          )}

          {activeTab === "privacy" && (
            <motion.div
              key="privacy-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <PrivacyStatement />
            </motion.div>
          )}
          
          {/* Fallback for other tabs - keep user on home or message */}
          {activeTab !== "home" && activeTab !== "join" && activeTab !== "privacy" && (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32"
            >
              <h2 className="text-7xl mb-8 uppercase">Aan de <span className="text-carnaval-yellow">Weg</span> Timmeren</h2>
              <p className="text-xl text-carnaval-charcoal/60 max-w-xl font-accent mb-12">
                Deze pagina wordt op dit moment klaargemaakt voor de optocht. Kom snel terug voor een premium ervaring!
              </p>
              <button 
                onClick={() => setActiveTab("home")}
                className="px-12 py-5 rounded-full red-gradient font-display text-2xl tracking-widest shadow-2xl"
              >
                TERUG NAAR DE HOME
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer onNavigate={handleNavigate} />
      <Analytics />
    </div>
  );
}
