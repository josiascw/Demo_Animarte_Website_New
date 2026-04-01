import { ShieldCheck, Sparkles, Palette, Zap } from 'lucide-react';

export const Benefits = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: 'Instalación Profesional',
      description: 'Contamos con equipos expertos para asegurar un acabado perfecto en cada proyecto.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Alta Calidad',
      description: 'Utilizamos materiales premium que garantizan durabilidad y colores vibrantes.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Diseños Personalizados',
      description: 'Creamos soluciones a medida que se adaptan exactamente a lo que imaginas.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Entrega Rápida',
      description: 'Optimizamos nuestros procesos para que disfrutes de tus espacios lo antes posible.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="mb-6 p-3 bg-zinc-50 rounded-2xl text-black">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-black mb-3">{benefit.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
