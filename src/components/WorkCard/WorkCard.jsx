import React from "react";
import styles from "./workcard.module.css";

const WorkCard = ({ img, title, description }) => (
  <div className={styles.workcard}>
    <img src={img} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default WorkCard;
