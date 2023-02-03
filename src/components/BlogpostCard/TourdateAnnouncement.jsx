import React from 'react';

const TourDateAnnouncement = (props) => {
  return (
    <div>
      <img src={props.imgSrc} alt={props.location} />
      <div>
        <h3>Upcoming Tour: {props.location}</h3>
        <p>Dates: {props.dates}</p>
      </div>
    </div>
  );
}

export default TourDateAnnouncement;