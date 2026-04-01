import { Hero } from '../modules/home/components/Hero';
import { Categories } from '../modules/home/components/Categories';
import { FeaturedProducts } from '../modules/home/components/FeaturedProducts';
import { Benefits } from '../modules/home/components/Benefits';

export const Home = () => {
  return (
    <main className="pt-16">
      <Hero />
      <Benefits />
      <Categories />
      <FeaturedProducts />
    </main>
  );
};
