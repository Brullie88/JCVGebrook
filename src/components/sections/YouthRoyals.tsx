import { motion } from "motion/react";
import { Crown, Star, ShieldCheck } from "lucide-react";
import { YOUTH_ROYALS } from "../../constants";

export default function YouthRoyals() {
  return (
    <section id="council" className="py-24 px-6 bg-carnaval-charcoal/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-carnaval-yellow/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-carnaval-yellow/10 text-carnaval-yellow rounded-2xl mb-6"
          >
            <Crown size={32} />
          </motion.div>
          <h2 className="text-5xl md:text-7xl mb-4 uppercase">
            Onze <span className="text-carnaval-green">Heersers</span>
          </h2>
          <p className="text-carnaval-charcoal/60 max-w-2xl mx-auto font-accent">
            Ontmoet het stralende middelpunt van JCV Gebrook. Onze Jeugdprins, Prinses en hun trouwe adjudanten.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Royals Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-carnaval-red/50 via-carnaval-yellow/50 to-carnaval-green/50 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass-card overflow-hidden rounded-[2rem]">
              <div className="relative h-[500px]">
                <img
                  src="/prins_beau.png"
                  alt="Jeugdprins Beau 1e"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carnaval-charcoal/90 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-8 left-8 right-8 text-carnaval-cream">
                  <div className="flex items-center gap-2 text-carnaval-yellow mb-2">
                    <Star size={16} fill="currentColor" />
                    <span className="text-xs font-bold tracking-widest uppercase">{YOUTH_ROYALS.title}</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl mb-4">
                    {YOUTH_ROYALS.name}
                  </h3>
                  <p className="text-white/80 max-w-md font-accent italic">
                    "{YOUTH_ROYALS.description}"
                  </p>
                  <div className="mt-4 flex gap-4 text-[10px] uppercase tracking-widest text-carnaval-green font-bold">
                    <span>{YOUTH_ROYALS.age}</span>
                    <span className="opacity-30">|</span>
                    <span>{YOUTH_ROYALS.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Details & Adjudanten */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 group hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-carnaval-red text-white flex items-center justify-center shrink-0 shadow-lg shadow-carnaval-red/20">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h4 className="text-2xl mb-2 text-carnaval-red">Gevolg</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-1 rounded-full bg-carnaval-charcoal/5 border border-carnaval-charcoal/10 text-sm font-medium">
                      Raad van Elf
                    </span>
                    <span className="px-4 py-1 rounded-full bg-carnaval-charcoal/5 border border-carnaval-charcoal/10 text-sm font-medium">
                      Dansgarde
                    </span>
                  </div>
                  <p className="mt-4 text-carnaval-charcoal/60 font-accent text-sm leading-relaxed">
                    Samen met de Raad van Elf trekt Jeugdprins Beau 1e door het Gebrookser land.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="glass-card p-6 text-center group hover:border-carnaval-red/50 transition-all cursor-default text-carnaval-red">
                <div className="text-4xl font-display mb-1">11</div>
                <div className="text-[10px] tracking-[0.2em] uppercase opacity-40">Raad van Elf</div>
              </div>
              <div className="glass-card p-6 text-center group hover:border-carnaval-green/50 transition-all cursor-default text-carnaval-green">
                <div className="text-4xl font-display mb-1">11</div>
                <div className="text-[10px] tracking-[0.2em] uppercase opacity-40">Jaar Traditie</div>
              </div>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl border border-carnaval-red text-carnaval-red font-display text-xl tracking-widest hover:bg-carnaval-red hover:text-white transition-all shadow-lg hover:shadow-carnaval-red/20"
            >
              BEKIJK DE VOLLEDIGE RAAD
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
