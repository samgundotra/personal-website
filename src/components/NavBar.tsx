import React, { useState } from "react";
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";




function NavBar() {
    const [navOpen, setNavOpen] = useState(false);

    const handleNav = () => {
        setNavOpen(!navOpen)
    }

    return (  
    <header className='nav-bar-header'>
        <FontAwesomeIcon icon={navOpen ? faXmark : faBars} id='menu' onClick={handleNav}/>
        {/* <i className="fa-solid fa-bars" aria-hidden="true" id="menu"></i> */}
        {navOpen &&
        <section id="sidenav">
          <ul onClick={handleNav}>
            <li><a href="#">Home</a></li>
            <li><a href="#academic-section">Academics</a></li>
            <li><a href="#personal-section">Personal</a></li>
            <li><a href="#prof-section">Experience</a></li>
            <li><a href="#skills-section">Skills</a></li>
            <li><a href="#skills-section">Socials</a></li>
            {/* <li><a href="#">Mini-Blog</a></li> */}
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