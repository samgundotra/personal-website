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
                <li className='glass-li'><a className='glass-a' href='#about-me-section'>About</a></li>
                  <li className='glass-li'><a className='glass-a' href='#academic-section'>Academics</a></li>
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
          </div>
          <div className='landing-card-container'>
                <div className='mobile-glass-box-personal'>
                  
                <div id="about-me-section" className='desktop-personal-pic'>
                  <img src="https://media-exp1.licdn.com/dms/image/C4E03AQG34L54kPzS4A/profile-displayphoto-shrink_400_400/0/1597249710921?e=1664409600&v=beta&t=ps32BQ-uQPMwZpokGsN8vldmIDRyGJESfnfZmx7Bftg"></img>
                </div>
                
                <div className='mobile-about-box-content'>
                  <h2 className="glass-h2">A little bit about me... 👋🏽</h2>
                  <p>I am a California native navigating my way through Rhode Island winters 🌱 </p>
                  <p>I am the proud sister of a Solana dev 🛠️<a href="https://twitter.com/ngundotra"> @ngundotra</a> </p>
                  <p>I built this website from scratch using React JS 👩🏽‍💻 Inspiration comes from <a href="https://www.pinterest.com/samgundotra/ui-inspo/">this pinterest board.</a> </p>
                  <ul>My current favorites:
                    <li>Collaging</li>
                    <li>My two frenchies</li>
                    <li>Depop</li>
                    <li>Creating Notion templates</li>
                    <li>Pho</li>
                    <li>Making pinterest boards that I probably forget about</li>
                  </ul>
                </div>
            </div>
          </div>








        </section>
      </div>

    );
}


export default LandingDesktop;