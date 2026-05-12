import { motion } from "motion/react";
import { UserPlus, CheckCircle2, Sparkles } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function JoinUs() {
  const [state, handleSubmit] = useForm("meennyrz");

  if (state.succeeded) {
    return (
      <section id="join" className="py-24 px-6 bg-carnaval-charcoal relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-12 inline-block border-carnaval-green/30"
          >
            <CheckCircle2 size={64} className="text-carnaval-green mx-auto mb-6" />
            <h2 className="text-4xl uppercase mb-4">Bedankt voor je aanmelding!</h2>
            <p className="text-carnaval-cream/70 font-accent max-w-md mx-auto">
              We hebben je bericht ontvangen en nemen binnen 48 uur contact met je op.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="join" className="py-24 px-6 bg-carnaval-charcoal relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-carnaval-red blur-[150px] rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-carnaval-green blur-[150px] rounded-full animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-carnaval-red/20 text-carnaval-red border border-carnaval-red/30 text-xs font-bold tracking-widest uppercase mb-6">
            <Sparkles size={14} />
            Word lid
          </div>
          <h2 className="text-5xl md:text-8xl uppercase mb-8 leading-[0.9]">
            BOUW MEE AAN <br />
            <span className="text-carnaval-red">HET FEEST</span>
          </h2>
          <p className="text-xl text-carnaval-cream/70 mb-10 font-accent max-w-lg leading-relaxed">
            Nieuwe vrienden maken, op het podium staan en de Limburgse traditie doorgeven. Bij JCV Gebrook hoor je erbij!
          </p>

          <ul className="space-y-6 mb-12">
            {[
              "Deelname aan alle grote activiteiten",
              "Meelopen in de optocht op onze eigen wagen",
              "Nieuwe vriendschappen voor het leven",
              "Leren organiseren en presenteren"
            ].map((benefit, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 text-carnaval-cream/90"
              >
                <div className="w-6 h-6 rounded-full bg-carnaval-green/20 text-carnaval-green flex items-center justify-center shrink-0">
                  <CheckCircle2 size={16} />
                </div>
                <span className="font-medium">{benefit}</span>
              </motion.li>
            ))}
          </ul>

          <div className="glass-card p-6 border-carnaval-green/20 bg-carnaval-green/5">
            <div className="flex items-center gap-4 text-carnaval-green">
              <div className="p-3 bg-carnaval-green text-carnaval-charcoal rounded-xl">
                <UserPlus size={24} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest">Wacht niet langer!</p>
                <p className="text-xs text-carnaval-cream/60">Al meer dan 40 jongeren gingen je voor dit jaar.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* High Conversion Form Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-carnaval-yellow/20 blur-[100px] rounded-full opacity-20"></div>
          <div className="relative glass-card p-8 md:p-12 border-white/20 shadow-2xl backdrop-blur-2xl">
            <h3 className="text-3xl mb-8 uppercase text-center">Word lid</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-carnaval-cream/50 ml-2">Voornaam</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Milan"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-carnaval-yellow transition-colors text-carnaval-cream"
                  />
                  <ValidationError prefix="Voornaam" field="firstName" errors={state.errors} className="text-xs text-carnaval-red mt-1" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-carnaval-cream/50 ml-2">Achternaam</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Janssen"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-carnaval-yellow transition-colors text-carnaval-cream"
                  />
                  <ValidationError prefix="Achternaam" field="lastName" errors={state.errors} className="text-xs text-carnaval-red mt-1" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-carnaval-cream/50 ml-2">Email Ouder/Verzorger</label>
                <input
                  type="email"
                  name="email"
                  placeholder="ouder@voorbeeld.nl"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-carnaval-yellow transition-colors text-carnaval-cream"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-carnaval-red mt-1" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-carnaval-cream/50 ml-2">Leeftijd Jeugdlid</label>
                <select 
                  name="age" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-carnaval-yellow transition-colors text-carnaval-cream appearance-none"
                  required
                >
                  <option value="" className="bg-carnaval-charcoal">Selecteer leeftijd</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i} value={i+4} className="bg-carnaval-charcoal">{i+4} jaar</option>
                  ))}
                </select>
                <ValidationError prefix="Leeftijd" field="age" errors={state.errors} className="text-xs text-carnaval-red mt-1" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-carnaval-cream/50 ml-2">Korte Motivatie (Optioneel)</label>
                <textarea
                  name="message"
                  placeholder="Ik wil graag bij de Raad van 11!"
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-carnaval-yellow transition-colors text-carnaval-cream resize-none"
                ></textarea>
                <ValidationError prefix="Bericht" field="message" errors={state.errors} className="text-xs text-carnaval-red mt-1" />
              </div>
              
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-5 rounded-2xl yellow-gradient text-carnaval-charcoal font-display text-2xl tracking-widest shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? "VERZENDEN..." : "WORD LID"}
              </button>
              <p className="text-center text-[10px] text-carnaval-cream/40 uppercase tracking-widest pt-4">
                We nemen binnen 48 uur contact met je op
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
