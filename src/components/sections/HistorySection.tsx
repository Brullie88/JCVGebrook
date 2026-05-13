import { motion } from "motion/react";
import { History, Users, Music, Trophy } from "lucide-react";

const MILESTONES = [
  {
    year: "2014",
    title: "De Oprichting",
    description: "JCV Gebrook werd officieel opgericht door Diana en Ton Bodelier met als doel de Limburgse cultuur levend te houden voor de jeugd.",
    icon: <History size={24} />
  },
  {
    year: "2017",
    title: "Dansgarde",
    description: "Eind 2017 werd de Dansgarde opgericht onder leiding van Tante Leen. Vijf dames zetten na weken oefenen een fantastische eerste dans neer.",
    icon: <Music size={24} />
  },
  {
    year: "Heden",
    title: "Samenwerking Scholen",
    description: "We werken nauw samen met alle basisscholen in Hoensbroek om de jeugd te betrekken bij de Raad van 11 en ons prinsenpaar.",
    icon: <Users size={24} />
  },
  {
    year: "Traditie",
    title: "Optochten",
    description: "Van de kinderoptocht tot de grote optocht in Heerlen: JCV Gebrook is overal een graag geziene gast.",
    icon: <Trophy size={24} />
  }
];

export default function HistorySection() {
  return (
    <section id="historie" className="py-24 px-6 relative overflow-hidden bg-carnaval-charcoal/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl uppercase mb-8">
              Ons <span className="text-carnaval-red">Verhaal</span>
            </h2>
            <div className="space-y-6 text-carnaval-charcoal/70 font-accent leading-relaxed">
              <p>
                Enkele jaren geleden werd het idee geopperd om een jeugdcarnavalsvereniging in Hoensbroek op te richten. Dit werd in <span className="text-carnaval-yellow font-bold">2014</span> officieel toen JCV Gebrook werd opgericht door Diana en Ton Bodelier.
              </p>
              <p>
                Ons doel is simpel maar essentieel: de carnavalsbeleving bij de jeugd van Hoensbroek en omgeving levend houden. Dit prachtige stukje Limburgse cultuur mag nooit verloren gaan. Daarom bevorderen we ook het dansen en de actieve betrokkenheid van kinderen.
              </p>
              <p>
                We zijn niet gebonden aan één specifieke wijk; we zijn er voor de jeugd van héél Hoensbroek. Jaarlijks bezoeken we basisscholen om nieuwe leden te werven voor onze Raad van 11 en om de volgende heersers van Gebrook te vinden.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {MILESTONES.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 border-carnaval-charcoal/5 hover:border-carnaval-yellow/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-carnaval-yellow group-hover:scale-110 transition-transform">
                  {milestone.icon}
                </div>
                <div className="text-xs font-bold text-carnaval-red tracking-widest uppercase mb-2">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-display mb-4 text-carnaval-charcoal group-hover:text-carnaval-yellow transition-colors">
                  {milestone.title}
                </h3>
                <p className="text-sm text-carnaval-charcoal/50 font-accent">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 relative rounded-3xl overflow-hidden aspect-[21/9] group"
        >
          <img 
            src="/jeugdraad_groep.png" 
            alt="JCV Gebrook Groepsfoto" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carnaval-cream/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8">
            <p className="text-carnaval-red font-display text-2xl tracking-widest uppercase">Traditie in Beeld</p>
            <p className="text-carnaval-charcoal/60 font-accent">De Jeugdraad van JCV Gebrook 2026-2027</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 glass-card border-carnaval-green/20 bg-carnaval-green/5 text-center"
        >
          <p className="text-xl font-display text-carnaval-green tracking-widest">
            "WE HOPEN IN LENGTE VAN DAGEN DE JEUGD VAN GEBROOK TE VOORZIEN VAN MOOIE CARNAVALSJAREN."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
