import { motion } from "motion/react";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { UPCOMING_EVENTS } from "../../constants";

export default function EventsSection() {
  return (
    <section id="agenda" className="py-24 px-6 relative bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl uppercase mb-4">
              Carnavals <br />
              <span className="text-carnaval-red">Agenda</span>
            </h2>
            <p className="text-carnaval-charcoal/60 max-w-xl font-accent">
              Mis geen enkel moment! Van de eerste zitting tot de grote optocht door Gebrook.
            </p>
          </div>
          <motion.button
            whileHover={{ x: 10 }}
            className="flex items-center gap-3 text-carnaval-red font-display text-xl tracking-widest group"
          >
            VOLLEDIG PROGRAMMA <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {UPCOMING_EVENTS.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <img
                src={event.image}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carnaval-charcoal via-carnaval-charcoal/40 to-transparent"></div>
              
              <div className="absolute top-6 left-6">
                <div className="bg-carnaval-red text-carnaval-cream px-4 py-2 rounded-2xl flex flex-col items-center justify-center min-w-[70px] shadow-lg border border-carnaval-charcoal/10 group-hover:bg-carnaval-yellow group-hover:text-carnaval-charcoal transition-colors">
                  <span className="text-2xl font-display leading-none">{event.date.split(' ')[0]}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">{event.date.split(' ')[1]}</span>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-2 text-carnaval-yellow text-xs font-bold tracking-widest uppercase mb-3">
                  <Star fill="currentColor" size={10} />
                  <span>{event.type}</span>
                </div>
                <h3 className="text-3xl mb-4 group-hover:text-carnaval-yellow transition-colors text-white">{event.title}</h3>
                <div className="flex items-center gap-2 text-carnaval-cream/60 text-sm font-accent mb-6">
                  <MapPin size={16} className="text-carnaval-green" />
                  <span>{event.location}</span>
                </div>
                
                <button className="w-full py-3 rounded-full bg-carnaval-charcoal/5 border border-carnaval-charcoal/10 backdrop-blur-md text-carnaval-charcoal font-display tracking-widest hover:bg-carnaval-green hover:text-white hover:border-carnaval-green transition-all">
                  MEER INFO
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Star({ size, fill, className }: { size?: number; fill?: string; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={fill || "none"} 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
