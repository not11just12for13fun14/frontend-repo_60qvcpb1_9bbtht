import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(56,189,248,0.15),transparent),radial-gradient(40%_30%_at_80%_10%,rgba(99,102,241,0.15),transparent)]" />
      <div className="relative">
        <Navbar />
        <Hero />
        <Features />
        <WhyChooseUs />
        <Products />
        <Showcase />
        <CTA />
        <Testimonials />
        <Contact />
        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60 text-sm">
            <p>© {new Date().getFullYear()} Sonic Vision. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#why" className="hover:text-white">Why us</a>
              <a href="#products" className="hover:text-white">Products</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App