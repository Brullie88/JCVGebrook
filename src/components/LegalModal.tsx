import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export default function LegalModal({ isOpen, onClose, title, content }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] cursor-pointer"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-10 md:inset-20 lg:inset-x-[20%] lg:inset-y-[10%] bg-carnaval-charcoal border border-white/10 rounded-3xl z-[101] overflow-hidden flex flex-col shadow-2xl shadow-black/50"
          >
            <div className="p-8 border-b border-white/5 flex items-center justify-between shrink-0 bg-white/5">
              <h2 className="text-3xl uppercase font-display tracking-widest text-carnaval-yellow">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 transition-colors text-carnaval-cream/50 hover:text-white"
              >
                <X size={32} />
              </button>
            </div>
            <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
              <div className="prose prose-invert max-w-none prose-p:text-carnaval-cream/70 prose-p:font-accent prose-h2:text-carnaval-red prose-h2:uppercase prose-h2:tracking-wider prose-h3:text-carnaval-green prose-h3:uppercase">
                <div className="whitespace-pre-wrap text-carnaval-cream/80 font-accent leading-relaxed">
                  {content}
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-white/5 bg-white/20 shrink-0 text-center">
              <button
                onClick={onClose}
                className="px-12 py-3 rounded-xl bg-carnaval-red text-white font-display tracking-widest hover:bg-carnaval-bordeaux transition-all uppercase"
              >
                Sluiten
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
