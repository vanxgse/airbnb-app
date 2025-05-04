import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Nav from './component/Nav';
import Home from './component/pages/Home';  
import About from './component/pages/About'; 
import Login from './component/pages/Login'; // Asegúrate que la ruta esté bien escrita
import Register from './component/pages/Register';


function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
