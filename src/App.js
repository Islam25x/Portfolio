import React,{useState , useEffect} from 'react';
import { BrowserRouter} from 'react-router-dom';
import RingLoader from 'react-spinners/RingLoader'
import ScrollToTop from 'react-scroll-to-top';
import 'bootstrap/dist/css/bootstrap.min.css';
// comps 
import Home from './comps/Home/Home';
import NavBar from './comps/NavBar/NavBar';
import Services from './comps/Services/Services'
import Works from './comps/Works/Works'
import Skills from './comps/Skills/Skills'
import Resume from './comps/Resume/Resume'
import Contact from './comps/Contact/Contact'
import Footer from './comps/Footer/Footer'

// style css 
import './App.css'

function App() {

  return (
    <BrowserRouter>

        <NavBar />
        <Home />
        <Services/>
        <Works />
        <Resume />
        <Skills />
        <Contact />
        <Footer />
        <ScrollToTop className='ScrollToTop' smooth top={800} />
        
    </BrowserRouter>

  );
}

export default App;
