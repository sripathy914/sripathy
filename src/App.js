import './App.css';
import NavBar from './NavBar/NavBar';
import About from './NavBar/About';
import Achievements from './NavBar/Achiements'
import ContactUs from './NavBar/ContactUs';
// import Login from './NavBar/Login';
import Footer from './NavBar/Footer';
import './NavBar/NavBar.css'

import { Link } from 'react-router-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from './NavBar/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Achievements" element={<Achievements/>}/>
            <Route path="/ContactUs" element={<ContactUs/>}/>
            {/* <Route path="/Login" element={<Login/>}/> */}
          </Routes>
          <Footer />
      </BrowserRouter>
      
    </div>
  );
} 

export default App;
