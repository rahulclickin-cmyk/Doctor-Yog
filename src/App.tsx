import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Retreats from './pages/Retreats';
import About from './pages/About';
import BookClass from './pages/BookClass';
import Programs from './pages/Programs';
import Gallery from './pages/Gallery';
import Blogs from './pages/Blogs';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import AIChatbot from './components/AIChatbot';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/retreats" element={<Retreats />} />
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<BookClass />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/:type" element={<Programs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/gallery" element={<Gallery />} />
            <Route path="/contact/blogs" element={<Blogs />} />
            <Route path="/contact/faqs" element={<FAQs />} />
            {/* Fallback to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <AIChatbot />
      </div>
    </Router>
  );
}
