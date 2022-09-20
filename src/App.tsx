import React, { useState } from 'react';
import './App.css';
import SocialFollow from './components/SocialFollow';
import AcademicProjects from './academic_projects.json'
import PersonalProjects from './personal_projects.json'
import AcademicCard from './components/AcademicCard';
import PersonalGlassCard from './components/PersonalGlassCard';
import { useMediaQuery } from 'react-responsive';
import LandingMobile from './components/LandingMobile';
import LandingDesktop from './components/LandingDesktop';
import NavBar from './components/NavBar';
import charHorse from './horse-icon-3d.png'
import Timeline from './components/Timeline';

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
  const className = isMobile ? 'mobile-glass-box-personal' : 'glass-box-personal';
  const [showNav, setShowNav] = useState(true);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  
  const description = "My name is Sam and I’m a junior at Brown University studying Computer Science. I believe that design and creativity should be playful and collaborative. I synthesize my technical expertise and affinity for design to create refined and accessible products."

  return (
    <div className="App">
      {!isMobile && <LandingDesktop img={charHorse} description={description}/>}
      {isMobile && <div className='mobile-landing-wrapper'><LandingMobile img='https://superscene.pro/images/modal/victory-hand-dark.png' description={description}/></div>}
      <NavBar/>
      <div  className='glass-card-wrapper'>
        <div className='academic-test'></div>
        <header id='academic-section' className='glass-academic-header'>
                <h2 className='glass-h2'>Academic Projects</h2>
        </header>

        <div className='glass-card-container'>
            {AcademicProjects && AcademicProjects.map( project => {
              return (
                <AcademicCard key={project.id}
                    title={project.title}
                    description={project.description_short}
                    course={project.course}
                  />
                )
            })
          }
        </div>
        <h3 className='glass-h3'>* repositories are unavailable to the public so courses can continue using the same projects.</h3>
      </div>

      <section className='glass-personal-section'>
          <header id='personal-section' className='glass-personal-header'>
                  <h2 className='glass-h2'>Passion Projects</h2>
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
        </div>
      </section>

      <section  className={isMobile ? 'mobile-prof-section':'prof-section'}>
          <header id='prof-section' className='prof-personal-header'>
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
          <SocialFollow/>
          <p className='made-by-me'>Made with &#128151; by me. </p>
      </section>
    </div>
  );
}

export default App;
