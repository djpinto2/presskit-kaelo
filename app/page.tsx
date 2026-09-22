import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Music from './components/Music';
import Reels from './components/Reels';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[var(--bg)]">
        <Hero />
        <About />
        <Music />
        <Reels />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
