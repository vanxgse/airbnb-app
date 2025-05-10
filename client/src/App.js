import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Nav from './component/Nav';
import Home from './component/pages/Home';  
import About from './component/pages/About'; 
import Login from './component/pages/Login'; // Asegúrate que la ruta esté bien escrita
import Register from './component/pages/Register';
import Creadores from './component/pages/Creadores';
import Mapa from './component/pages/Mapa';




function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/creadores" element={<Creadores />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
