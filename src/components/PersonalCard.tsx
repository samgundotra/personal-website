import React, { useState } from "react";
import './PersonalCard.css';




function PersonalCard(props: { img: string, title: string, description_short: string, description_long: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovering, setIsHovering] = useState(true)
    
    return (
            <div className="white-card-outline" 
                onMouseEnter={() => setIsHovering(!isHovering)} 
                onMouseLeave={() => setIsHovering(!isHovering)}>
                {/* <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 226.5"><defs><style>.b{fill:none;stroke:#000;stroke-miterlimit:10;}</style></defs><path className="b" d="M285.2,115.2c2.7-6.3,4.1-13.1,4.1-20.2,0-31.1-28-56.4-62.5-56.4s-13.3,1-19.4,2.8C200,17.8,175.9,.5,147.3,.5s-51.7,16.7-59.7,39.6c-4.6-1-9.3-1.5-14.2-1.5-34.5,0-62.5,25.2-62.5,56.4s4.1,22.9,11.1,32C8.9,137.4,.5,152.6,.5,169.7c0,31.1,28,56.4,62.5,56.4s46.3-13.1,56.4-32.1c10.1,19,31.5,32.1,56.4,32.1s35.2-7.3,46.6-18.9c11.4,11.6,28.1,18.9,46.6,18.9,34.5,0,62.5-25.2,62.5-56.4s-19.6-48-46.3-54.5Z"/></svg> */}
                <h3 className="project-title">{props.title}</h3>
                <p className="project-description">
                    {props.description_short}
                </p>
                <button className="more-button-personal" onClick={() => setIsOpen(!isOpen)}>{ isOpen ? 'Less':'My Role'}</button>
                {isOpen &&
                <div className="bottom" >
                    <p className = "project-description-expanded" >
                        {props.description_long}
                        </p>
                    <div className="line">
                    </div>
                </div>}
            </div>
    );
}


// {isHovering &&
//     <div className="bottom" >
//         <p className = "project-description-expanded" >
//             {props.description_long}
//             </p>
//         {/* <button className="my-role" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Less" : "More"}</button> */}
//     </div>}

export default PersonalCard