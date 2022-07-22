import React, { useState } from 'react';
import './PersonalGlassCard.css';
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";



function PersonalGlassCard(props: {title:string, description: string, emoji:string, repo:string}) {
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
  const className = isMobile ? 'mobile-glass-box-personal' : 'glass-box-personal';
  
  
    return (
      
        <div className={className}>
        <div className={isMobile ? 'mobile-personal-header-wrapper' : 'glass-personal-header-wrapper'}>
           <div className='glass-personal-proj-title'>
              <h2>{props.title}</h2>
          </div>
          <div className={isMobile? 'mobile-personal-proj-emoji' : 'glass-personal-proj-emoji'}>
            <img src={props.emoji}></img>
          </div>
        </div>
       
        <div className={isMobile ? 'mobile-personal-box-content' : 'glass-personal-box-content'}>
          {/* <h2>Card One</h2> */}
          <p>{props.description}</p>
          {props.repo.length === 0 ? <p className='no-link-repo'>🚧 Coming soon 🚧</p> : 
          <div className='repo-container'>
            <p className='no-link-repo'>Repo</p>
            <a className='link-repo'href={props.repo}><FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
          </div> }
        </div>
      </div>
  );

}

export default PersonalGlassCard;
