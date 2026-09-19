import Hero from './components/Hero';
import Bio from './components/Bio';
import Music from './components/Music';
import Reels from './components/Reels';
import Rider from './components/Rider';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--black)]">
      <Hero />
      <Bio />
      <Music />
      <Reels />
      <Rider />
      <Footer />
    </main>
  );
}
