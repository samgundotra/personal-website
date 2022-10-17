import React, { useState } from "react";
import './Landing.css';
import character from './cowboy-hat-face.png'
import PersonalGlassCard from "./PersonalGlassCard";




function LandingMobile(props: {img: string, description: string, resume: string}) {
    return (
      <div className="gradient-container">
        <section className='mobile-landing-section'>
            <div className='glass-card-container'>
                <div className='mobile-landing-icon'>
                    <img src={props.img} className='mobile-img'></img>
                </div>
                <div className='mobile-glass-box-personal'>
                <div className='glass-personal-header-wrapper'>
                <div className='mobile-personal-proj-title'>
                    <h2>Hi I'm Sam!</h2>
                </div>
                </div>
            
                <div className='mobile-landing-box-content'>
                {/* <h2>Card One</h2> */}
                <p>{props.description}</p>
                <div className="contact-resume">
                  <a className='glass-read-more' href="mailto: samantha_gundotra@brown.edu?subject=Greetings!">Contact  
                    <svg className="mobile-navigation__current-svg" viewBox="0 0 9 14" width="9" height="14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.0166 6.99998L6.87975 8.13683L0.219466 1.57206L1.42035 0.40378L8.0166 6.99998Z" fill="currentColor"></path>
                      <path d="M6.87975 5.86314L8.0166 6.99998L1.42041 13.5962L0.260401 12.3108L6.87975 5.86314Z" fill="currentColor"></path>
                    </svg>
                    </a>
                  <a className='landing-resume' href={props.resume} target="_blank">Resume  
                    <svg className="mobile-navigation__current-svg" viewBox="0 0 9 14" width="9" height="14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.0166 6.99998L6.87975 8.13683L0.219466 1.57206L1.42035 0.40378L8.0166 6.99998Z" fill="currentColor"></path>
                      <path d="M6.87975 5.86314L8.0166 6.99998L1.42041 13.5962L0.260401 12.3108L6.87975 5.86314Z" fill="currentColor"></path>
                    </svg>
                  </a>
                </div>
                </div>
            </div>
          </div>
          
          <div id="about-me-section" className='glass-card-container'>
                <div className='mobile-glass-box-personal-about'>
                  
                <div className='mobile-personal-pic'>
                  <img src="https://media-exp1.licdn.com/dms/image/D4E03AQHjxfdykEI9gw/profile-displayphoto-shrink_400_400/0/1665532361511?e=1671062400&v=beta&t=VNTObkr6sRXPDkauuZnRSxFhaHZw13wMuu7yAkl9olw"></img>
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




        // <div className='glass-wrapper'>
        //     <div className='glass-personal-header-wrapper'>
        //    <div className='glass-personal-proj-title'>
        //       <h2>Sam Gundotra</h2>
        //   </div>
        //   <div className='glass-personal-proj-emoji'>
        //     <img src={props.img}></img>
        //   </div>
        // </div>
       
        // <div className='glass-personal-box-content'>
        //   {/* <h2>Card One</h2> */}
        //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, cumque?</p>
        //   <a href="#">Read More</a>
        // </div>

        // </div>

    );
}


export default LandingMobile;