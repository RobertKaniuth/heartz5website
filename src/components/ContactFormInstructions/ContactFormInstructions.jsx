import React from "react";
import styles from "./contactforminstructions.module.css";

const ContactFormInstructions = () => (
  <div className={styles.instructionsContainer}>
    <h2>How to use the contact form:</h2>
    <ul className={styles.instructionsList}>
      <li>Enter your name in the designated field</li>
      <br />
      <li>Insert the city where you would like to schedule an appointment</li>
      <br />
      <li>
        Chose your pronouns in the designated field.If the given ones doesnt
        match, please tell me your pronouns in the Message field
      </li>
      <br />
      <li>
        You can attach screenshots from my flashbook that you're interested in
        by clicking on the "send files" button
      </li>
      <br />
      <li>
        In the message field, please provide details about your preferred
        motive, size, placement, budget, desired date and time of appointment,
        and any other important information to make it the most pleasant
        experience for the both of us
      </li>
      <br />
      <li>You can also contact me here for Graphic or Illustration Work</li>
    </ul>
  </div>
);

export default ContactFormInstructions;
