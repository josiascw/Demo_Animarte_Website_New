import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { products } from '../../../data/products';
import { useStore } from '../../../store/useStore';
import { Button } from '../../../components/ui/Button';
import { toast } from 'sonner';

export const FeaturedProducts = () => {
  const addToCart = useStore((state) => state.addToCart);

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast.success(`${product.name} agregado al carrito`);
  };

  return (
    <section id="products" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter text-black sm:text-4xl">Productos Destacados</h2>
            <p className="mt-4 text-zinc-500 max-w-2xl">
              Nuestros artículos más populares elegidos por profesionales y entusiastas del diseño.
            </p>
          </div>
          <Button variant="ghost" className="hidden sm:flex">Ver todos</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl overflow-hidden border border-zinc-100 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-black uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-black mb-2">{product.name}</h3>
                <p className="text-sm text-zinc-500 mb-6 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-black">
                    ${product.price.toLocaleString('es-AR')}
                  </span>
                  <Button
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                    className="rounded-full p-2.5"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
