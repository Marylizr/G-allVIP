import './App.css';
import {Routes, Route} from "react-router-dom";
import Banner from './banner/Banner';
import NavBar from './navbar/NavBar';
import Tours from './tours/Tours';
import Contact from './contact/Contact';
import Home from './home/Home';

function App() {

  return (
    <div className="App">
       <NavBar />
    
        <Routes> 
            <Route path="/home" element={ <Home />} />
            <Route path="/about" element={ <Banner />} />
            <Route path="/tours" element={  <Tours />} />
            <Route path="/contact" element={  <Contact />} />
        </Routes> 
  
    </div>
  );
}

export default App;
