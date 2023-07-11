import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Home from "./Components/Home"
import Menu from "./Components/Menu"
import Deal from "./Components/Deal"
import Franchise from "./Components/Franchise"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Preloader from "./Components/Preload"


function App() {
  return (
  <div>
    
    <BrowserRouter>
      <Preloader/>
      <Navbar/>
          <Routes>
             <Route exact path="/" element= {<Home/>} />
             <Route exact path="/Menu" element= {<Menu/>} />
             <Route exact path="/Deal" element= {<Deal/>} />
             <Route exact path="/Franchise" element= {<Franchise/>} />
             <Route exact path="/About" element= {<About/>} />
             <Route exact path="/Contact" element= {<Contact/>} />
          </Routes>
        <Footer/>
    </BrowserRouter>
    
  </div>
  );
}

export default App;
