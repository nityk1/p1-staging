//import logo from './logo.svg';
import './App.scss';
//import './components/Navbar'
//import Navigation from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './About';
import Home from './Home';
import Layout from './Layout';
import Header from "./components/Header";
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/layout" element={<Layout />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
