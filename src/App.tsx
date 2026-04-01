import { Toaster } from 'sonner';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { Home } from './pages/Home';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-black selection:text-white">
      <Navbar />
      <Home />
      <Footer />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}
