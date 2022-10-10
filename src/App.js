import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Blog from './components/Blog/Blog'
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import './App.css';

function App() {
  return (
  <>
  

  <BrowserRouter>
  <Navbar></Navbar> 
  <Routes>
    <Route  path="/" element={<Home></Home>}/>
    <Route path="/about" element={<About></About>}/>
    <Route path="/services" element={<Services></Services>}/>
    <Route path="/blog" element={<Blog></Blog>}/>
    <Route path="/portfolio" element={<Portfolio></Portfolio>}/>
    <Route path="/contact" element={<Contact></Contact>}/>
  </Routes>
    
  </BrowserRouter>
  </>
  );
}

export default App;
