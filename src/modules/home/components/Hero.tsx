import { motion } from 'motion/react';
import { Button } from '../../../components/ui/Button';

export const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1920"
          alt="Wallpaper Interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none mb-6">
            Viste tus paredes con <span className="italic">estilo</span>.
          </h1>
          <p className="text-lg md:text-xl text-zinc-100 mb-8 max-w-lg leading-relaxed">
            Empapelados exclusivos y soluciones publicitarias para transformar cualquier ambiente en una experiencia única.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-zinc-100">
              Ver productos
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Nuestros servicios
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
