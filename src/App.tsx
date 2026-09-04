import { LangProvider } from './hooks/useLang';
import { ExploreFilterProvider } from './hooks/useExploreFilter';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Collections from './components/Collections';
import MoodSelector from './components/MoodSelector';
import LuckyButton from './components/LuckyButton';
import Explore from './components/Explore';
import About from './components/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function AppContent() {
  return (
    <>
      <Nav />

      <main>
        <Hero />
        <Collections />
        <MoodSelector />
        <LuckyButton />
        <Explore />
        <About />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}

function App() {
  return (
    <LangProvider>
      <ExploreFilterProvider>
        <AppContent />
      </ExploreFilterProvider>
    </LangProvider>
  );
}

export default App;
