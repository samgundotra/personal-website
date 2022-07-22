import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './Timeline.css';
import TimelineCard from './TimelineCard';
import ProfExperiences from './prof_exp.json'

function Timeline() {
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

  return (
    <div className="container">
    <div className={isMobile ? 'timeline' : 'timeline'}>
    
    {ProfExperiences && ProfExperiences.map( job => {
              return (
                <TimelineCard key={job.id}
                  title={job.title}
                  icon = {job.icon}
                  description={job.description}
                  time={job.time}
                />
                )
            })
    }
    </div>
  </div>
  );

}

export default Timeline;