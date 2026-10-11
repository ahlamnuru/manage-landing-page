import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      <Hero />

      <Features />

      <Testimonials />

      <CallToAction />

      <Footer />
    </div>
  );
}

export default App;