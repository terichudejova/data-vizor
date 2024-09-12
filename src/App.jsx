import { useState, useEffect, useRef } from 'react'
import "./App.css"
import { Outlet, NavLink } from 'react-router-dom'
import ScrollToTop from './ScrollToTop';
import CloudIcon from '@mui/icons-material/Cloud';

function App() {


  //Hamburger Menu
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //Pozadí pro wide navbar při scrollování
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    }
    else {
      setIsScrolled(false)
    };
  }

      // Přidání event listeneru při načtení komponenty
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Čištění event listeneru při odchodu z komponenty
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };

      }, []);

  //Zavření hamburger menu při kliknutí na obrazovku
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
  }, []);


  return (
    <div>
      <ScrollToTop />
      <nav className={`nav ${isOpen ? 'open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <p id='companyName'>DataVizor</p>
        <div ref={navRef}  className={`nav-links ${isOpen ? 'show' : ''}`}>
          <NavLink to="/data-vizor/" end className="navLink" onClick={toggleMenu} id='homeLink'>DataVizor <CloudIcon className='cloudIcon'/></NavLink>
          <NavLink to="/data-vizor/about" className="navLink" onClick={toggleMenu}>About Us</NavLink>
          <NavLink to="/data-vizor/services" className="navLink" onClick={toggleMenu}>Services</NavLink>
          <NavLink to="/data-vizor/prices" className="navLink" onClick={toggleMenu}>Prices</NavLink>
          <NavLink to="/data-vizor/contact" className="navLink" onClick={toggleMenu}>Contact Us</NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
