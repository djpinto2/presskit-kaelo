import Intro from './components/Intro';
import BackgroundVideo from './components/BackgroundVideo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Music from './components/Music';
import Reels from './components/Reels';
import Rider from './components/Rider';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <BackgroundVideo />
      <main style={{ color: 'var(--bone)' }}>
        <Intro />
        <Navbar />
        <Hero />
        <div className="divider" />
        <Bio />
        <div className="divider" />
        <Music />
        <div className="divider" />
        <Reels />
        <div className="divider" />
        <Rider />
        <div className="divider" />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
