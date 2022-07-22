import React, { useState } from "react";
import './Landing.css';
import character from './cowboy-hat-face.png'
import PersonalGlassCard from "./PersonalGlassCard";




function LandingMobile(props: {img: string}) {
    return (
        <section className='mobile-landing-section'>
            {/* <header className='glass-personal-header'>
                    <h2 className='glass-h2'>Hi, my name is</h2>
            </header> */}
            
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
            
                <div className='mobile-personal-box-content'>
                {/* <h2>Card One</h2> */}
                <p>I am a rising junior at Brown University studying Computer Science. I love developing elegant products and taking project inspiration from my many passions. Check out my work below to learn more, and thank you for stopping by!</p>
                <a className='glass-read-more' href="mailto: samantha_gundotra@brown.edu">Contact</a>
                </div>
            </div>
              {/* <PersonalGlassCard
                title="Samantha Gundotra"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsum a saepe, ipsa eveniet earum vero deleniti corporis dolor sunt?"
                emoji='https://emoji.craftwork.design/images/modal/thought-balloon.png'
              /> */}
              {/* <header className='glass-personal-header'>
                <a href="#" className='logo'>Personal Projects</a>
              </header>
              <div className='imgBox'>
                <img src='https://emoji.craftwork.design/images/modal/thought-balloon.png'></img>
              </div> */}
          </div>
        </section>




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