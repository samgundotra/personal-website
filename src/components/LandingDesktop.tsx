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
                <p className='glass-p'>I am a rising junior at Brown University studying Computer Science. I love developing elegant products and taking project inspiration from my many passions. Check out my work below to learn more, and thank you for stopping by!
                </p>
                <div className="contact-resume">
                  <a className='glass-read-more' href="mailto: samantha_gundotra@brown.edu">Contact</a>
                  <a className='landing-resume' href="https://drive.google.com/file/d/1onlTbl3Nr5MqHCwC4HNkN14HlSvZxPqQ/view?usp=sharing">Resume</a>
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