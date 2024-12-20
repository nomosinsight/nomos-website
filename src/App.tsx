import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Industries from './components/Industries';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import BlogList from './components/blog/BlogList';
import BlogPost from './components/blog/BlogPost';
import IndustriesPage from './pages/Industries';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Achievements />
              <Services />
              <Technologies />
              <Industries />
              <Testimonials />
              <Contact />
            </main>
          } />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/blog" element={<Blog />}>
            <Route index element={<BlogList />} />
            <Route path=":slug" element={<BlogPost />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;