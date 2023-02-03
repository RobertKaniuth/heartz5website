import React from "react";
import styles from "./tourdatecard.module.css";

const TourDateAnnouncement = (props) => {
  return (
    <div
      className={styles.tourDateAnnouncement}
      style={{ backgroundImage: `url(${props.imgSrc})` }}
    >
      <div>
        <h3>Upcoming Tour: {props.location}</h3>
        <p>Dates: {props.dates}</p>
      </div>
    </div>
  );
};

export default TourDateAnnouncement;
