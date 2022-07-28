import React, { useState } from "react";
import './Landing.css';
import SocialFollow from "./SocialFollow";
// import { emoj } from 'https://emoji.craftwork.design/images/section-1-image-22@2x.png';




function LandingDesktop(props: {img : string}) {
    return (
        <div className='glass-wrapper'>
        <section className='glass-section'>
          <div className='glass-container'>
              <header className='glass-header'>
                <a className='logo'>Welcome</a>
                <ul className='glass-ul'>
                  <li className='glass-li'><a className='active' href='#academic-section'>Academics</a></li>
                  <li className='glass-li'><a className='glass-a' href='#personal-section'>Personal</a></li>
                  <li className='glass-li'><a className='glass-a' href='#prof-section'>Experience</a></li>
                  <li className='glass-li'><a className='glass-a' href='#skills-section'>Skills</a></li>
                </ul>
              </header>
              <div className='glass-content'>
                <h2 className='glass-h2'>I'm Samantha Gundotra</h2>
                <p className='glass-p'>I'm a junior at Brown University studying Computer Science. I love combining CS and design to build beautiful products. Check out my work below to learn more, and thank you for stopping by!
                </p>
                <div className="contact-resume">
                  <a className='glass-read-more' href="mailto: samantha_gundotra@brown.edu">Contact  
                    <svg className="main-navigation__current-svg" viewBox="0 0 9 14" width="9" height="14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.0166 6.99998L6.87975 8.13683L0.219466 1.57206L1.42035 0.40378L8.0166 6.99998Z" fill="currentColor"></path>
                      <path d="M6.87975 5.86314L8.0166 6.99998L1.42041 13.5962L0.260401 12.3108L6.87975 5.86314Z" fill="currentColor"></path>
                    </svg></a>
                  <a className='landing-resume' href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:f446918d-7b7b-32da-85e8-0c3e872010a6">Resume  
                    <svg className="main-navigation__current-svg" viewBox="0 0 9 14" width="9" height="14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.0166 6.99998L6.87975 8.13683L0.219466 1.57206L1.42035 0.40378L8.0166 6.99998Z" fill="currentColor"></path>
                      <path d="M6.87975 5.86314L8.0166 6.99998L1.42041 13.5962L0.260401 12.3108L6.87975 5.86314Z" fill="currentColor"></path>
                    </svg></a>
                </div>
                
              </div>
              <div className='imgBox'>
                <img src='https://emoji.craftwork.design/images/section-1-image-22@2x.png'></img>
              </div>
              {/* <ul className='sci'>
                <li><a href='#'><img src={facebook}></img></a></li>
                <li><a href='#'><img src={twitter}></img></a></li>
                <li><a href='#'><img src={instagram}></img></a></li>
              </ul> */}
          </div>
        </section>
      </div>

    );
}


export default LandingDesktop;