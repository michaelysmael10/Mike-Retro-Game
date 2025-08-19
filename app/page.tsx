import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import GameLibrary from '@/components/GameLibrary';
import Categories from '@/components/Categories';
import ComingSoon from '@/components/ComingSoon';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <Navigation />
      <Hero />
      <Categories />
      <GameLibrary />
      <ComingSoon />
      <Footer />
    </main>
  );
}