import React, { useState } from 'react';
import './AcademicCard.css';


function AcademicCard(props: {title:string, description: string, course: string}) {
  const [isHovering, setIsHovering] = useState(false)

    return (
    <div className='glass-box' 
    onMouseEnter={() => setIsHovering(!isHovering)} 
    onMouseLeave={() => setIsHovering(!isHovering)}>
        <span></span>
        <div className='glass-box-content'>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          
          {/* <a href="#">Read More</a> */}
          {isHovering && 
          <div className='course-container'>
            {/* <hr className='decorative-line'></hr> */}
            <div className='course-button'>
                <p className='course-text'>{props.course}</p>
            </div>   
          </div>
          }
        </div>
    </div>
  );

}

export default AcademicCard;
