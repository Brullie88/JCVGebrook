import { motion } from "motion/react";
import { Facebook, MessageCircle, Heart, Share2, Play } from "lucide-react";
import { CONTACT_INFO } from "../../constants";

const SOCIAL_POSTS = [
  {
    type: "facebook",
    image: "/prins_auto.png",
    text: "De nieuwe auto voor Jeugdprins Beau 1e is klaar! Gefeliciteerd Beau! 🚗🎉 #jcvgebrook #carnaval",
    likes: 245,
    date: "1d geleden",
    position: "object-center"
  },
  {
    type: "tiktok",
    image: "/jeugdraad_groep.png",
    text: "Onze volledige Jeugdraad in actie! Een geweldige club die de traditie van Gebrook hoog houdt. 💃🕺",
    likes: "3.1k",
    date: "2 dagen geleden",
    position: "object-top"
  },
  {
    type: "facebook",
    image: "/begeleiding.png",
    text: "Samen maken we de carnaval groot in Hoensbroek. Bedankt aan alle begeleiders en vrijwilligers! ❤️💛💚",
    likes: 78,
    date: "3 dagen geleden",
    position: "object-[center_top]"
  }
];

export default function SocialWall() {
  return (
    <section id="socials" className="py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-carnaval-red/5 blur-[100px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl uppercase mb-4">
              Onze <span className="text-carnaval-red">Socials</span>
            </h2>
            <p className="text-carnaval-charcoal/60 max-w-xl font-accent">
              Volg ons voor de laatste updates, backstage beelden en de leukste carnavalsmomenten uit Gebrook!
            </p>
          </div>
          <div className="flex gap-4">
            <a 
              href={CONTACT_INFO.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full glass-card border-carnaval-red/30 text-carnaval-charcoal hover:bg-carnaval-red hover:text-white transition-all flex items-center gap-2 font-display tracking-widest text-sm"
            >
              <Facebook size={18} /> FACEBOOK
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOCIAL_POSTS.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden group border-carnaval-charcoal/5 hover:border-carnaval-charcoal/20 transition-all flex flex-col h-full"
            >
              <div className="relative h-[450px] overflow-hidden">
                <img 
                  src={post.image} 
                  alt="Social post" 
                  className={`w-full h-full object-cover ${post.position} group-hover:scale-110 transition-transform duration-700`}
                />
                <div className="absolute top-4 right-4 p-2 bg-carnaval-red text-white rounded-lg shadow-lg">
                  {post.type === "facebook" && <Facebook size={18} />}
                  {post.type === "tiktok" && <MessageCircle size={18} />}
                </div>
                {post.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                      <Play size={24} fill="white" className="text-white ml-1" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm text-carnaval-charcoal/80 font-accent line-clamp-3 mb-6 flex-1">
                  {post.text}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/5 text-[10px] uppercase tracking-widest font-bold">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-carnaval-red">
                      <Heart size={14} fill="currentColor" /> {post.likes}
                    </span>
                    <span className="text-carnaval-charcoal/40">{post.date}</span>
                  </div>
                  <Share2 size={14} className="text-carnaval-charcoal/40" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-carnaval-charcoal/40 font-display tracking-[0.3em] uppercase text-sm mb-6">
            Blijf verbonden met de jeugd van Gebrook
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-40 hover:opacity-100 transition-opacity">
            <span className="font-display text-2xl">#JCVGEBROOK</span>
            <span className="font-display text-2xl">#HOENSBROEK</span>
            <span className="font-display text-2xl">#CARNAVAL</span>
            <span className="font-display text-2xl">#1X11JAAR</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
