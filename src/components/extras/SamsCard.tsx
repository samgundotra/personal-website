import React, { useState } from "react";
import './SamsCard.css';




function SamsCard(props: { img: string, title: string, description_short: string, description_long: string[]}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovering, setIsHovering] = useState(true)

    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((numbers) =>
        <li>{numbers}</li>
    );

    const bullets = props.description_long.map((item) =>
        <li className="bullets">{item}</li>
    );
    
    // const valuesArray = JSON.parse(props.description_long);
    // const valItems = valuesArray.map((item: any) =>
    //     <li>{item}</li>);
    
    return (
            <div className="card-outline" 
                onMouseEnter={() => setIsHovering(!isHovering)} 
                onMouseLeave={() => setIsHovering(!isHovering)}>

                <div className="img-wrapper">
                    <img src={props.img} className="collage-photo" alt="" />
                    {/* <button className="more-button" onClick={() => setIsOpen(!isOpen)}>My Role</button> */}
                </div>
                <h3 className="project-title">{props.title}</h3>
                <p className="project-description">
                    {props.description_short}
                </p>
                <button className="more-button" onClick={() => setIsOpen(!isOpen)}>{ isOpen ? 'Less':'My Role'}</button>
                {isOpen &&
                <div className="bottom" >
                    <ul className="project-description-expanded">{bullets}</ul>
                    {/* <p className = "project-description-expanded" >
                        {props.description_long}
                        </p> */}
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

export default SamsCard