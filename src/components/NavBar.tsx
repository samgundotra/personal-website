import React, { useState } from "react";
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";




function NavBar() {
    const [navOpen, setNavOpen] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
    const [navBlurOn, setNavBlur] = useState(true);

    const handleNav = () => {
        setNavOpen(!navOpen)
        console.log('click')
        // setNavBlur(!navBlurOn)
    }

    return ( 
    <header className='nav-bar-header'>
      {!navOpen && <div className='nav-blur'></div>}
      <div className="icon-container">
        <FontAwesomeIcon icon={navOpen ? faXmark : faBars} id={isMobile ? 'menu-mobile' :'menu'} onClick={handleNav}/>
      </div>
        {/* <i className="fa-solid fa-bars" aria-hidden="true" id="menu"></i> */}
        {navOpen &&
        <section id={isMobile ? 'sidenav-mobile' :'sidenav'}>
          <ul onClick={handleNav}>
            <li><a href="#">Home</a></li>
            <li><a href="#about-me-section">About</a></li>
            <li><a href="#academic-section">Academics</a></li>
            <li><a href="#personal-section">Personal</a></li>
            <li><a href="#prof-section">Experience</a></li>
            <li><a href="#skills-section">Skills</a></li>
          </ul>
        </section> }
      </header>
    );
}


export default NavBar;


// <header className='nav-bar-header'>
//         <FontAwesomeIcon icon={ faBars } id='menu' onClick={handleNav}/>
//         {/* <i className="fa-solid fa-bars" aria-hidden="true" id="menu"></i> */}
//         {navOpen &&
//         <section id="sidenav">
//           <ul>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">Academics</a></li>
//             <li><a href="#">Personal</a></li>
//             <li><a href="#">Professional</a></li>
//           </ul>
//         </section> }
        
//       </header>