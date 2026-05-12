import { motion } from "motion/react";
import { SPONSORS } from "../../constants";
import { useForm, ValidationError } from "@formspree/react";

export default function SponsorsSection() {
  const hoofdsponsors = SPONSORS.filter(s => s.tier === "Hoofdsponsor");
  const sponsors = SPONSORS.filter(s => s.tier === "Sponsor");
  const regulier = SPONSORS.filter(s => s.tier === "Regulier");

  return (
    <section id="sponsors" className="py-24 px-6 bg-carnaval-charcoal/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl uppercase mb-6">Onze <span className="text-carnaval-yellow">Sponsoren</span></h2>
          <p className="text-carnaval-cream/60 max-w-3xl mx-auto font-accent leading-relaxed">
            We bedanken onderstaande sponsoren voor hun steun aan JCV Gebrook 2026-2027. <br />
            Indien van toepassing kunt u op de naam van de sponsor klikken en wordt u doorverwezen naar zijn/haar website of Facebookpagina.
          </p>
        </div>

        {/* Hoofdsponsoren */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-display tracking-widest text-carnaval-red uppercase">HOOFDSPONSOR 2026-2027</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-carnaval-red/30 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hoofdsponsors.map((s, i) => (
              <motion.a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.02 }}
                className={`glass-card p-10 flex items-center justify-center text-center border-carnaval-red/20 hover:border-carnaval-red/50 transition-all group ${s.url ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <span className="text-3xl font-display text-carnaval-cream group-hover:text-carnaval-red transition-colors">
                  {s.name}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Sponsoren */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-display tracking-widest text-carnaval-yellow uppercase">SPONSOR 2026-2027</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-carnaval-yellow/30 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sponsors.map((s, i) => (
              <motion.a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.01 }}
                className={`glass-card p-8 flex items-center justify-center text-center border-carnaval-yellow/20 hover:border-carnaval-yellow/50 transition-all group ${s.url ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <span className="text-2xl font-display text-carnaval-cream group-hover:text-carnaval-yellow transition-colors">
                  {s.name}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Reguliere Sponsoren */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-xl font-display tracking-widest text-carnaval-green uppercase">Sponsoren</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-carnaval-green/30 to-transparent"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {regulier.map((s, i) => (
              <motion.a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className={`glass-card p-6 flex items-center justify-center text-center border-white/5 hover:border-carnaval-green/50 transition-all group ${s.url ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <span className="text-lg font-display text-carnaval-cream/60 group-hover:text-carnaval-green transition-colors">
                  {s.name}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Word Sponsor Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glass-card overflow-hidden p-12 md:p-20"
        >
          {/* Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-carnaval-yellow/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-carnaval-red/10 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl uppercase mb-8 leading-tight">
                Word <br />
                <span className="text-carnaval-yellow">Sponsor!</span>
              </h2>
              <p className="text-xl text-carnaval-cream/70 font-accent mb-10 leading-relaxed">
                Draag bij aan de mooiste jeugdtraditie van Hoensbroek en breng uw bedrijf onder de aandacht bij duizenden carnavalsvierders. We hebben pakketten op maat voor elk bedrijf.
              </p>
              
              <ul className="space-y-6 mb-10">
                {[
                  "Zichtbaarheid op onze goedbezochte website",
                  "Vermelding in onze carnavalskrant",
                  "Logo-uiting tijdens diverse evenementen",
                  "Steun aan de jeugd van Hoensbroek"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-carnaval-cream/80">
                    <div className="w-6 h-6 rounded-full bg-carnaval-green/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-carnaval-green"></div>
                    </div>
                    <span className="text-lg font-accent">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-8 md:p-10 border-white/10 bg-white/5">
              <h3 className="text-2xl uppercase mb-8">Neem contact op</h3>
              <SponsorForm />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SponsorForm() {
  const [state, handleSubmit] = useForm("meennyrz");

  if (state.succeeded) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-carnaval-green/20 text-carnaval-green rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-2xl uppercase mb-2">Bericht verzonden!</h4>
        <p className="text-carnaval-cream/60">We nemen zo snel mogelijk contact met u op.</p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-carnaval-cream/40 mb-2">Bedrijfsnaam</label>
        <input 
          type="text" 
          name="companyName"
          placeholder="Uw bedrijfsnaam"
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-carnaval-yellow/50 outline-none transition-all placeholder:text-white/10"
        />
        <ValidationError prefix="Bedrijfsnaam" field="companyName" errors={state.errors} className="text-xs text-carnaval-red mt-1" />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-carnaval-cream/40 mb-2">E-mailadres</label>
          <input 
            type="email" 
            name="email"
            placeholder="naam@bedrijf.nl"
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-carnaval-yellow/50 outline-none transition-all placeholder:text-white/10"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-carnaval-red mt-1" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-carnaval-cream/40 mb-2">Telefoon</label>
          <input 
            type="tel" 
            name="phone"
            placeholder="06-12345678"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-carnaval-yellow/50 outline-none transition-all placeholder:text-white/10"
          />
          <ValidationError prefix="Telefoon" field="phone" errors={state.errors} className="text-xs text-carnaval-red mt-1" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-carnaval-cream/40 mb-2">Bericht</label>
        <textarea 
          name="message"
          rows={4}
          placeholder="Ik heb interesse in..."
          className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-carnaval-yellow/50 outline-none transition-all placeholder:text-white/10 resize-none"
        ></textarea>
        <ValidationError prefix="Bericht" field="message" errors={state.errors} className="text-xs text-carnaval-red mt-1" />
      </div>
      <button 
        type="submit" 
        disabled={state.submitting}
        className="w-full py-5 rounded-xl yellow-gradient text-carnaval-charcoal font-display text-xl tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? "VERZENDEN..." : "WORD SPONSOR"}
      </button>
    </form>
  );
}
