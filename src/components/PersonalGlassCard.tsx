import React, { useState } from 'react';
import './PersonalGlassCard.css';
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";



function PersonalGlassCard(props: {title:string, description: string, emoji:string, projectType:string, linkDescription: string, repo:string}) {
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
          <p className='proj-type'>{props.projectType}</p>
          <p>{props.description}</p>
          <div className='repo-container'>
            {props.repo.length === 0 ? <p className='no-link-repo'>🚧 Coming soon 🚧</p> : 
            <a className='repo-button' href={props.repo}>{props.linkDescription}
              <svg className='arrow-to-repo' viewBox="0 0 9 14" width="9" height="14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.0166 6.99998L6.87975 8.13683L0.219466 1.57206L1.42035 0.40378L8.0166 6.99998Z" fill="currentColor"></path>
                      <path d="M6.87975 5.86314L8.0166 6.99998L1.42041 13.5962L0.260401 12.3108L6.87975 5.86314Z" fill="currentColor"></path>
                    </svg>
            </a>
            }
            {/* <p className='no-link-repo'>Repo</p> */}
            {/* <a className='link-repo'href={props.repo}><FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a> */}
          </div> 
        </div>
      </div>
  );

}

export default PersonalGlassCard;
