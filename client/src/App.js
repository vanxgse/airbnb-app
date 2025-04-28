import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Nav from './component/Nav';
import Home from './pages/Home';  // Asegúrate de crear una página Home
import About from './pages/About';  // Asegúrate de crear una página About

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
