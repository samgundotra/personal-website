import React from "react";
import { useState } from 'react';

function ExpandableCard() {
    const [isOpen, setIsOpen] = useState(false);

    
    return (
        <div className="expandable-card">
            <div className="top">
                <img src="https://via.placeholder.com/150" alt=""></img>
                <button className="btn btn-primary btn-block" onClick={() => setIsOpen(!isOpen)}>More…</button>
            </div>
            {isOpen &&
            <div className="bottom" >
                <h3 className="my-role">Heading</h3>
                <p>This is a paragraph containing an explanation related to the image displayed above.</p>
            </div>
            }
        </div>
        
    )
}

export default ExpandableCard