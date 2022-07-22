import React, { useState } from 'react';
import logo from './logo.svg';
import star from './Star 1.svg';
import folder from './mac-folder.svg';
import butterfly from './17_butterfly.svg';
import './App.css';
import Title from "./components/Title";
import SocialFollow from './components/SocialFollow';
import SamsCard from './components/SamsCard';
import ExpandableCard from './components/ExpandableCard';
// import CollapseCard from './components/CollapseCard';
import blobpic from './blob-scatter-haikei.png';
import AcademicProjects from './academic_projects.json'
import PersonalProjects from './personal_projects.json'
import PersonalCard from './components/PersonalCard';
import facebook from  './facebook.png'
import twitter from  './twitter.png'
import instagram from  './instagram.png'
import character from './cowboy-hat-face.png'
import AcademicCard from './components/AcademicCard';
import PersonalGlassCard from './components/PersonalGlassCard';
import LandingIntro from './components/LandingDesktop';
import { useMediaQuery } from 'react-responsive';
import LandingMobile from './components/LandingMobile';
import LandingDesktop from './components/LandingDesktop';
import NavBar from './components/NavBar';
import charME from './icon_3d.svg'
import charHorse from './horse-icon-3d.png'
import chainGlass from './chain_glass.png'
import pinkAbs from './pink-abstract.jpeg'
import Timeline from './components/Timeline';


function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
  const className = isMobile ? 'mobile-glass-box-personal' : 'glass-box-personal';
  

  return (
    <div className="App">
      <NavBar/>
      {/* glass attempt */}
      {!isMobile && <LandingDesktop img={charHorse}/>}
      {isMobile && <LandingMobile img='https://superscene.pro/images/modal/victory-hand-dark.png'/>}
      {/* <LandingIntro/> */}
      <div id='academic-section' className='glass-card-wrapper'>
        <header className='glass-academic-header'>
                <h2 className='glass-h2'>Academic Projects</h2>
        </header>
        <div className='glass-card-container'>

            {AcademicProjects && AcademicProjects.map( project => {
              return (
                <AcademicCard key={project.id}
                    title={project.title}
                    description={project.description_short}
                  />
                )
            })
          }
          {/* <AcademicCard
              title='Card One'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsum a saepe, ipsa eveniet earum vero deleniti corporis dolor sunt?'
          />
          <AcademicCard
              title='Card Two'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsum a saepe, ipsa eveniet earum vero deleniti corporis dolor sunt?'
          />
          <AcademicCard
              title='Card Three'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsum a saepe, ipsa eveniet earum vero deleniti corporis dolor sunt?'
          /> */}
        </div>
      </div>

      <section id='personal-section' className='glass-personal-section'>
          <header className='glass-personal-header'>
                  <h2 className='glass-h2'>Personal Projects</h2>
          </header>
          <div className='personal-card-container'>
          {PersonalProjects && PersonalProjects.map( proj => {
              return (
                <PersonalGlassCard key={proj.id}
                  title={proj.title}
                  description={proj.description}
                  emoji={proj.emoji}
                  repo={proj.repo}
                />
                )
            })
          }
            {/* <PersonalGlassCard
              title="Fashion MNIST"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsum a saepe, ipsa eveniet earum vero deleniti corporis dolor sunt?"
              emoji='https://emoji.craftwork.design/images/modal/thought-balloon.png'
            />
            <PersonalGlassCard
              title="Zazz"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsum a saepe, ipsa eveniet earum vero deleniti corporis dolor sunt?"
              emoji='https://emoji.craftwork.design/images/modal/sparkles.png'
            />
            <PersonalGlassCard
              title="Vday @ Brown"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsum a saepe, ipsa eveniet earum vero deleniti corporis dolor sunt?"
              emoji='https://emoji.craftwork.design/images/modal/blue-heart.png'
            /> */}
            {/* <header className='glass-personal-header'>
              <a href="#" className='logo'>Personal Projects</a>
            </header>
            <div className='imgBox'>
              <img src='https://emoji.craftwork.design/images/modal/thought-balloon.png'></img>
            </div> */}
        </div>
      </section>

      {/* <section id='about-me-section' className='glass-prof-section'>
          <header className='glass-prof-header'>
                  <h2 className='glass-h2'>Professional Experience</h2>
          </header>
        
          <div className='prof-content-container'>
              <header className='glass-header'>
                <a href="#" className='logo'>Professional Experience</a>
              </header>
              <div className='prof-content'>
                <h2 className='glass-h2'>Professional Experience</h2>
              </div>
        </div>
      </section> */}

      <section id='prof-section' className={isMobile ? 'mobile-prof-section':'prof-section'}>
          <header className='prof-personal-header'>
                  <h2 className='glass-h2'>Professional Experience</h2>
          </header>
          <Timeline/>
          <div id='skills-section' className={isMobile ? 'mobile-skills':'prof-personal-box-content'}>
            <h2 className='glass-h2'>Skills</h2>
          <div className='skills-subdivision'>
            <h3 className='glass-h3'>Languages</h3>
            <div className='skill-container'>
              <p>Java</p>
              <p>C</p>
              <p>Python</p>
              <p>Solidity</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>Scala</p>
              <p>Javascript</p>
              <p>Typescript</p>
              <p>Go</p>
              <p>ReasonML</p>
              <p>Swift</p>
            </div>
          </div>
          <div className='skills-subdivision'>
          <h3 className='glass-h3'>Toolkits</h3>
            <div className='skill-container'>
                <p>React</p>
                <p>TensorFlow</p>
                <p>Numpy</p>
                <p>Xcode</p>
            </div>
          </div>
          <div className='skills-subdivision'>
            <h3 className='glass-h3'>Frameworks</h3>
              <div className='skill-container'>
                <p>Illustrator</p>
                <p>Photoshop</p>
                <p>Premiere Pro</p>
                <p>Figma</p>
                <p>SwiftUI</p>
                <p>Mocha</p>
                <p>Unity</p>
                <p>JUnit</p>
              </div>
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
          {/* </div> */}
          <SocialFollow/>
          <p className='made-by-me'>Made with &#128151; by me. </p>
      </section>

     
      
      



      {/* <div className='butterly-animation'>
        <img src={butterfly} className="butterfly" alt="butterfly" />
      </div>
      <div className='text-zone'>
        <span className='landing-reg'>Hi, my name is</span>
        <h1 className='landing-name'>Sam Gundotra</h1>
        <h1 classNameName='projects-title'>Academic Projects</h1>

      </div>
       */}
       
      {/* <div className='academic-projects'>
      <div className='project-cards'>
      {AcademicProjects && AcademicProjects.map( record => {
          return (
            <SamsCard key={record.id}
                img={record.img}
                title={record.title}
                description_short={record.description_short}
                description_long={record.description_long}
              />
            )
        })
      }
      </div>
      </div>
      <div className='personal-projects'>
        <div className='personal-proj-title-wrapper'>
          <p className='personal-projects-title'>Personal Projects</p>
        </div>
        <div className='project-cards-personal'>
          <PersonalCard
          img='https://i.pinimg.com/564x/b4/29/03/b42903bb925c000138e256ad46b400f6.jpg'
          title='Search'
          description_short='An implementation of the pagerank algorithm using Java.'
          description_long='This is a paragraph containing an explanation related to the image displayed above.'
          />
          <PersonalCard
          img='https://i.pinimg.com/564x/fe/f4/a8/fef4a80a253c528cb0f39fcb374baa39.jpg'
          title='RedWood'
          description_short='A smart contract that allows a user to swap different assets at an algorithmically determined price without the need for a trusted third party.      '
          description_long='
          • Wrote smart contracts in Solidity for a decentralized exchange
          • Implemented liquidity pool functionality so that more tokens could be added to the exchange
          • Utilized a local Ethereum development blockchain to ensure minimal gas was consumed during deployment
          • Unit tested with mocha framework'/>
          <PersonalCard
          img='https://i.pinimg.com/474x/e1/59/bb/e159bb24dcd38e73c6209c757d5ed327.jpg'
          title='Zazz'
          description_short=''
          description_long=''
          />
        </div>
      </div> */}
      {/* <SocialFollow /> */}
    </div>
  );
}

export default App;
