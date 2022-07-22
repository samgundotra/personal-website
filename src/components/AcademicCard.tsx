import React, { useState } from 'react';
import './AcademicCard.css';


function AcademicCard(props: {title:string, description: string}) {
    return (
    <div className='glass-box'>
        <span></span>
        <div className='glass-box-content'>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          {/* <a href="#">Read More</a> */}
        </div>
    </div>
  );

}

export default AcademicCard;
