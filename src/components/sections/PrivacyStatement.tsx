import { motion } from "motion/react";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyStatement() {
  return (
    <section className="py-32 px-6 bg-carnaval-cream min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-carnaval-red/10 text-carnaval-red rounded-3xl flex items-center justify-center mx-auto mb-8"
          >
            <ShieldCheck size={40} />
          </motion.div>
          <h1 className="text-5xl md:text-7xl uppercase tracking-tighter">
            Privacy <span className="text-carnaval-red">Verklaring</span>
          </h1>
          <p className="text-xl text-carnaval-charcoal/60 font-accent max-w-2xl mx-auto">
            JCV Gebrook hecht veel waarde aan de bescherming van uw persoonsgegevens. 
            In dit document leggen we uit hoe we met uw informatie omgaan.
          </p>
        </header>

        <div className="grid gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-carnaval-charcoal/5"
          >
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-carnaval-yellow/10 text-carnaval-yellow rounded-2xl flex items-center justify-center shrink-0">
                <FileText size={24} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl uppercase tracking-tight">Algemeen</h3>
                <p className="text-carnaval-charcoal/70 font-accent leading-relaxed">
                  JCV Gebrook respecteert de privacy van alle gebruikers van haar site en draagt er zorg voor dat de persoonlijke informatie die u ons verschaft vertrouwelijk wordt behandeld. 
                  Wij gebruiken uw gegevens enkel om diensten te verlenen waar u om gevraagd heeft, zoals lidmaatschap of deelname aan evenementen.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-carnaval-charcoal/5"
          >
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-carnaval-red/10 text-carnaval-red rounded-2xl flex items-center justify-center shrink-0">
                <Lock size={24} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl uppercase tracking-tight">Gegevensverwerking</h3>
                <p className="text-carnaval-charcoal/70 font-accent leading-relaxed">
                  Wanneer u zich aanmeldt voor onze evenementen of als lid, vragen we u om persoonsgegevens te verstrekken. Deze gegevens worden gebruikt om de dienst uit te kunnen voeren. 
                  De gegevens worden opgeslagen op eigen beveiligde servers van een derde partij (bijvoorbeeld Formspree voor contactformulieren). 
                  Wij zullen deze gegevens niet combineren met andere persoonlijke gegevens waarover wij beschikken.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-carnaval-charcoal/5"
          >
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-carnaval-yellow/10 text-carnaval-yellow rounded-2xl flex items-center justify-center shrink-0">
                <Eye size={24} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl uppercase tracking-tight">Derden</h3>
                <p className="text-carnaval-charcoal/70 font-accent leading-relaxed">
                  De informatie wordt niet met derden gedeeld, tenzij dit noodzakelijk is voor de uitvoering van onze activiteiten (bijvoorbeeld doorgeven van namen aan de overkoepelende bond voor verzekeringen). 
                  Onze vrijwilligers zijn verplicht om de vertrouwelijkheid van uw gegevens te respecteren.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="prose prose-invert max-w-none font-accent text-carnaval-charcoal/60 mt-16 pt-16 border-t border-carnaval-charcoal/10">
          <h2 className="text-carnaval-charcoal uppercase tracking-tighter">Vragen en feedback</h2>
          <p>
            We controleren regelmatig of we aan dit privacybeleid voldoen. Als u vragen heeft over dit privacybeleid, kunt u contact met ons opnemen via:
          </p>
          <p className="font-bold text-carnaval-red">
            JCV Gebrook<br />
            Email: info@jcvgebrook.nl
          </p>
          <p className="text-xs italic">
            Laatste update: 15 mei 2024
          </p>
        </div>
      </div>
    </section>
  );
}
