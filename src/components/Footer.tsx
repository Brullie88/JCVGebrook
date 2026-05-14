import { useState } from "react";
import { motion } from "motion/react";
import { Facebook, Mail, MapPin, Phone, Heart, Youtube } from "lucide-react";
import { CONTACT_INFO, NAVIGATION } from "../constants";
import { useForm, ValidationError } from "@formspree/react";
import LegalModal from "./LegalModal";

const LEGAL_CONTENT = {
  voorwaarden: {
    title: "Algemene Voorwaarden",
    content: `Artikel 1 - Definities
In deze voorwaarden wordt verstaan onder:

Website: JCV Gebrook en alle bijbehorende subdomeinen.
Gebruiker: Iedereen die de website bezoekt of gebruikt.
Aanbieder: JCV Gebrook, gevestigd te Hoensbroek.

Artikel 2 - Toepasselijkheid
Deze voorwaarden zijn van toepassing op elk bezoek aan de website van JCV Gebrook en op alle overeenkomsten of interacties die via de website tot stand komen. Door de website te gebruiken, verklaart de gebruiker zich akkoord met deze voorwaarden.

Artikel 3 - Gebruik van de website
Het is de gebruiker niet toegestaan de website te gebruiken voor handelingen die in strijd zijn met de Nederlandse wet of die schade kunnen toebrengen aan JCV Gebrook of derden. Alle intellectuele eigendomsrechten op de inhoud van de website (waaronder teksten, logo's en afbeeldingen) berusten bij JCV Gebrook.

Artikel 4 - Aansprakelijkheid
JCV Gebrook streeft naar een zo actueel en nauwkeurig mogelijke website. Desondanks kan JCV Gebrook niet aansprakelijk worden gesteld voor eventuele fouten, onvolledigheden of technische storingen. Het gebruik van de informatie op deze site geschiedt volledig op eigen risico van de gebruiker.

Artikel 5 - Contact en Wijzigingen
JCV Gebrook behoudt zich het recht voor deze voorwaarden eenzijdig te wijzigen. Voor vragen over deze voorwaarden kun je contact opnemen via info@jcvgebrook.nl.`
  },
  privacy: {
    title: "Privacy Policy",
    content: `Laatst bijgewerkt op: 12 mei 2026

Bij JCV Gebrook hechten we groot belang aan de bescherming van je persogensgegevens. In deze privacyverklaring leggen we uit hoe wij omgaan met de gegevens die we via onze website verzamelen.

Welke gegevens verwerken wij?
Wanneer je onze website bezoekt, kan JCV Gebrook de volgende gegevens verwerken:
- Contactgegevens: Je naam en e-mailadres, indien je deze zelf achterlaat via een contactformulier of door ons direct te mailen.
- Technische gegevens: Gegevens zoals je IP-adres en browserinstellingen die automatisch worden verzameld voor de technische werking van de site.

Doel van de gegevensverwerking
Wij gebruiken je gegevens uitsluitend voor de volgende doeleinden:
1. Om contact met je op te kunnen nemen naar aanleiding van je eigen verzoek.
2. Om onze informatievoorziening en diensten te kunnen verbeteren.
3. Voor de beveiliging en optimalisatie van de website.

Delen met derden
JCV Gebrook verkoopt of verhuurt je gegevens nooit aan derden. Wij delen informatie alleen met externe dienstverleners (zoals onze hostingprovider) wanneer dit strikt noodzakelijk is voor de werking van de website, of wanneer wij hiertoe wettelijk verplicht zijn.

Cookies
JCV Gebrook maakt gebruik van functionele en analytische cookies. Deze zorgen ervoor dat de website naar behoren werkt en geven ons inzicht in het algemene bezoekersgedrag (geanonimiseerd). Je kunt je browser zo instellen dat je geen cookies meer opslaat.

Jouw rechten
Je hebt op basis van de AVG (GDPR) de volgende rechten:
- Inzage in de gegevens die wij van je hebben.
- Correctie of verwijdering van je gegevens.
- Intrekken van eerder gegeven toestemming.

Voor vragen over ons privacybeleid of om gebruik te maken van je rechten, kun je een bericht sturen naar: info@jcvgebrook.nl.

Contactgegevens
JCV Gebrook
E-mail: info@jcvgebrook.nl
Gevestigd te Hoensbroek`
  }
};

interface Props {
  onNavigate: (id: string) => void;
}

export default function Footer({ onNavigate }: Props) {
  const [state, handleSubmit] = useForm("meennyrz");
  const [activeModal, setActiveModal] = useState<"privacy" | "voorwaarden" | null>(null);

  return (
    <footer id="contact" className="bg-carnaval-charcoal/5 pt-24 pb-12 px-6 border-t border-carnaval-charcoal/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {/* Brand */}
          <div className="space-y-6">
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => onNavigate("home")}
            >
              <div className="w-12 h-12 bg-carnaval-red rounded-xl flex items-center justify-center border-2 border-carnaval-yellow group-hover:scale-110 transition-transform">
                <span className="text-carnaval-yellow font-display text-2xl">J</span>
              </div>
              <h2 className="text-2xl font-display tracking-wider">JCV GEBROOK</h2>
            </div>
            <p className="text-carnaval-charcoal/50 font-accent text-sm leading-relaxed">
              Al generaties lang hét gezicht van de jeugdcarnaval in Hoensbroek. Samen bouwen we aan tradities, vriendschap en onvergetelijke feesten.
            </p>
            <div className="flex gap-4">
              <a 
                href={CONTACT_INFO.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-carnaval-charcoal/5 text-carnaval-charcoal hover:bg-carnaval-red hover:text-white transition-all shadow-lg hover:shadow-carnaval-red/20 group"
              >
                <Facebook size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href={CONTACT_INFO.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-carnaval-charcoal/5 text-carnaval-charcoal hover:bg-carnaval-red hover:text-white transition-all shadow-lg hover:shadow-carnaval-red/20 group"
              >
                <Youtube size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-carnaval-green font-display text-xl mb-8 tracking-widest uppercase">Navigatie</h4>
            <ul className="space-y-4">
              {NAVIGATION.map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => onNavigate(item.id)}
                    className="text-carnaval-charcoal/60 hover:text-carnaval-green transition-colors text-sm uppercase tracking-widest text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-carnaval-yellow font-display text-xl mb-8 tracking-widest uppercase">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-carnaval-charcoal/60">
                <Mail size={18} className="text-carnaval-red shrink-0 mt-1" />
                <span className="text-sm">{CONTACT_INFO.email}</span>
              </li>
              <li className="flex items-start gap-4 text-carnaval-charcoal/60">
                <MapPin size={18} className="text-carnaval-red shrink-0 mt-1" />
                <div className="flex flex-col text-sm">
                  <span>{CONTACT_INFO.address}</span>
                  <span>{CONTACT_INFO.postcode} {CONTACT_INFO.city}</span>
                </div>
              </li>
              <li className="flex items-start gap-4 text-carnaval-charcoal/60">
                <Phone size={18} className="text-carnaval-red shrink-0 mt-1" />
                <a 
                  href={`https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, "")}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-carnaval-red transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="pt-4 mt-4 border-t border-carnaval-charcoal/10 text-[11px] uppercase tracking-wider text-carnaval-charcoal/40 space-y-2">
                <div className="flex justify-between">
                  <span>KVK:</span>
                  <span className="font-mono">{CONTACT_INFO.kvk}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>IBAN:</span>
                  <span className="font-mono text-[10px]">{CONTACT_INFO.iban}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-carnaval-yellow font-display text-xl mb-8 tracking-widest uppercase">Blijf op de hoogte</h4>
            {state.succeeded ? (
              <div className="bg-carnaval-green/10 border border-carnaval-green/30 rounded-xl p-4 text-carnaval-green text-xs uppercase tracking-widest text-center">
                Bedankt voor je inschrijving!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Je email adres"
                  className="w-full bg-white/50 border border-carnaval-charcoal/10 rounded-xl px-5 py-3 outline-none focus:border-carnaval-yellow transition-colors text-sm text-carnaval-charcoal placeholder:text-carnaval-charcoal/20"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-[10px] text-carnaval-red ml-2" />
                <button 
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3 rounded-xl bg-carnaval-red font-display tracking-widest hover:bg-carnaval-bordeaux transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? "VERZENDEN..." : "INSCHRIJVEN"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-carnaval-charcoal/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-[0.2em] text-carnaval-charcoal/30">
          <p>© 2026 JCV GEBROOK. Alle rechten voorbehouden.</p>
          <div className="flex items-center gap-2">
            Made with <Heart size={12} className="text-carnaval-red fill-carnaval-red" /> in Gebrook
          </div>
          <div className="flex gap-6">
            <button 
              onClick={() => setActiveModal("privacy")}
              className="hover:text-carnaval-yellow transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setActiveModal("voorwaarden")}
              className="hover:text-carnaval-yellow transition-colors"
            >
              Voorwaarden
            </button>
          </div>
        </div>
      </div>

      <LegalModal 
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        title={activeModal ? LEGAL_CONTENT[activeModal].title : ""}
        content={activeModal ? LEGAL_CONTENT[activeModal].content : ""}
      />
    </footer>
  );
}
