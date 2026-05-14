import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, X, Maximize2 } from "lucide-react";

const GALLERY_IMAGES = [
  {
    src: "/Foto%201.png",
    alt: "Carnaval sfeer 1",
    className: "md:col-span-2 md:row-span-2",
    title: "Prinselijke Ontvangst"
  },
  {
    src: "/Foto%202.png",
    alt: "Carnaval sfeer 2",
    className: "md:col-span-1 md:row-span-1",
    title: "De Grote Optocht"
  },
  {
    src: "/Foto%203.png",
    alt: "Carnaval sfeer 3",
    className: "md:col-span-1 md:row-span-2",
    title: "Zate Hermeniekes"
  },
  {
    src: "/Foto%204.png",
    alt: "Carnaval sfeer 4",
    className: "md:col-span-1 md:row-span-1",
    title: "Feest in de Tent"
  },
  {
    src: "/Foto%205.png",
    alt: "Carnaval sfeer 5",
    className: "md:col-span-2 md:row-span-1",
    title: "Gezelligheid in Gebrook"
  },
  {
    src: "/Foto%206.png",
    alt: "Carnaval sfeer 6",
    className: "md:col-span-1 md:row-span-1",
    title: "Alaaf Gebeuren"
  },
  {
    src: "/Foto%207.png",
    alt: "Carnaval sfeer 7",
    className: "md:col-span-1 md:row-span-1",
    title: "Kleurrijk Spektakel"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedImages = showAll ? GALLERY_IMAGES : GALLERY_IMAGES.slice(0, 2);

  return (
    <section id="galerij" className="py-24 bg-carnaval-cream relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-carnaval-red/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-carnaval-yellow/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-12 h-12 bg-carnaval-red/10 rounded-full flex items-center justify-center text-carnaval-red mb-4"
          >
            <Camera size={24} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display text-carnaval-charcoal mb-4">
            FOTO <span className="text-carnaval-red">ALBUM</span>
          </h2>
          <div className="h-1 w-20 bg-carnaval-yellow rounded-full mb-6"></div>
          <p className="text-carnaval-charcoal/60 max-w-xl font-accent italic">
            Een impressie van de sfeer, de kleuren en de tradities van de Jeugd van Gebrook.
          </p>
        </div>

        {/* Bento Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 ${showAll ? 'auto-rows-[250px]' : 'auto-rows-[400px]'}`}>
          {displayedImages.map((img, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => setSelectedImage(index)}
              className={`group relative overflow-hidden rounded-3xl bg-white border border-carnaval-charcoal/5 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${showAll ? img.className : 'md:col-span-2 md:row-span-1'}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carnaval-charcoal/90 via-carnaval-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <div className="flex justify-between items-end">
                  <span className="text-carnaval-cream font-display text-xl tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {img.title}
                  </span>
                  <div className="bg-carnaval-yellow p-2 rounded-full transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    <Maximize2 size={16} className="text-carnaval-charcoal" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button 
            onClick={() => setShowAll(!showAll)}
            className="bg-carnaval-charcoal text-carnaval-cream px-8 py-3 rounded-2xl font-display tracking-widest hover:bg-carnaval-red transition-all shadow-lg active:scale-95"
          >
            {showAll ? "MINDER FOTO'S" : "BEKIJK MEER FOTO'S"}
          </button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-carnaval-charcoal/95 p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-carnaval-cream bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY_IMAGES[selectedImage].src}
                alt={GALLERY_IMAGES[selectedImage].alt}
                className="w-full h-full object-contain shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <h3 className="text-white font-display text-2xl md:text-3xl tracking-wide">
                  {GALLERY_IMAGES[selectedImage].title}
                </h3>
                <p className="text-white/70 italic mt-2">{GALLERY_IMAGES[selectedImage].alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
