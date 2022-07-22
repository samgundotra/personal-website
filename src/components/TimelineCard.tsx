import React from 'react';
import './Timeline.css';

function TimelineCard(props: {title: string, icon: string, description: string, time: string}) {

  return (
    <div className="timeline-container primary">
        <div className="timeline-icon">
        {/* <i className="far fa-grin-wink"></i> */}
          <img src={props.icon}></img>
        </div>
        <div className="timeline-body">
        <h4 className="timeline-title"><span className="badge">{props.title}</span></h4>
        <p>{props.description}</p>
        <p className="timeline-subtitle">{props.time}</p>
        </div>
    </div>
  );

}

export default TimelineCard;