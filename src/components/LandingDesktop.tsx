import React, { useState } from "react";
import './Landing.css';
// import { emoj } from 'https://emoji.craftwork.design/images/section-1-image-22@2x.png';

import { Document, Page, pdfjs } from 'react-pdf/dist/umd/entry.webpack';
// import headshot from '/headshot.jpeg'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function LandingDesktop(props: {img : string, description: string, resume:string}) {

    return (
        <div className='glass-wrapper'>
        <section className='glass-section'>
          <div className='glass-container'>
              <header className='glass-header'>
                <a className='logo'>Welcome</a>
                <ul className='glass-ul'>
                <li className='glass-li'><a className='glass-a' href='#about-me-section'>About</a></li>
                  <li className='glass-li'><a className='glass-a' href='#academic-section'>Academics</a></li>
                  <li className='glass-li'><a className='glass-a' href='#personal-section'>Passion Projects</a></li>
                  <li className='glass-li'><a className='glass-a' href='#prof-section'>Experience</a></li>
                  <li className='glass-li'><a className='glass-a' href='#skills-section'>Skills</a></li>
                </ul>
              </header>
              <div className='glass-content'>
                <h2 className='glass-h2'>Hi, I'm Sam.</h2>
                <h3 className="header-h3">It's nice to meet you. 👋🏽</h3>
                <p className='glass-p'>{props.description}</p>
                <div className="contact-resume">
                  <a className='glass-read-more' href="mailto: samantha_gundotra@brown.edu?subject=Greetings!">Contact  
                    <svg className="main-navigation__current-svg" viewBox="0 0 9 14" width="9" height="14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.0166 6.99998L6.87975 8.13683L0.219466 1.57206L1.42035 0.40378L8.0166 6.99998Z" fill="currentColor"></path>
                      <path d="M6.87975 5.86314L8.0166 6.99998L1.42041 13.5962L0.260401 12.3108L6.87975 5.86314Z" fill="currentColor"></path>
                    </svg></a>
                    {/* <Document file="./public/samantha_gundotra_resume.pdf" onLoadError={console.error} /> */}
                  <a className='landing-resume' href={props.resume} target="_blank">Resume  
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
                <div className='mobile-glass-box-personal-about'>
                  
                <div id="about-me-section" className='desktop-personal-pic'>
                  <img src='https://media-exp1.licdn.com/dms/image/C4E03AQG34L54kPzS4A/profile-displayphoto-shrink_400_400/0/1597249710921?e=1669852800&v=beta&t=oQjf-H4xrtn1o_JNbQ804J0f28s91atuP2kU0tLr7m4'></img>
                </div>
                
                <div className='mobile-about-box-content'>
                  <h2 className="glass-h2">A little bit about me... 👋🏽</h2>
                  <p>I am a California native navigating my way through Rhode Island winters 🌱 </p>
                  <p>I am the proud sister of a Solana dev 🛠️ <a href="https://twitter.com/ngundotra">@ngundotra</a> </p>
                  <p>I built this website from scratch using React JS 👩🏽‍💻 All inspiration comes from <a href="https://www.pinterest.com/samgundotra/ui-inspo/">this pinterest board.</a> </p>
                  <ul>My current favorites:
                    <li>Collaging</li>
                    <li>My two frenchies</li>
                    <li>Depop hunting</li>
                    <li>Creating Notion templates</li>
                    <li>Candle making</li>
                  </ul>
                </div>
            </div>
          </div>








        </section>
      </div>

    );
}


export default LandingDesktop;