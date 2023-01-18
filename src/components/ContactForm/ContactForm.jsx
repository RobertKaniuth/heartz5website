import React, { useState } from "react";
import styles from "./contactform.module.css";
import nodemailer from "nodemailer";
require("dotenv").config();

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [pronouns, setPronouns] = useState([]);
  const [files, setFiles] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handlePronounChange = (e) => {
    const selectedPronoun = e.target.value;
    if (pronouns.includes(selectedPronoun)) {
      setPronouns(pronouns.filter((pronoun) => pronoun !== selectedPronoun));
    } else {
      setPronouns([...pronouns, selectedPronoun]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pronounsString = pronouns.join(", ");

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender address
      to: "receiver_email@example.com", // list of receivers
      subject: "${city}", // Subject line
      text: `Name: ${name}\nEmail: ${email}\nCity: ${city}\nPronouns: ${pronounsString}\nMessage: ${message}`, // plain text body
      attachments: files, // add attachments
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  };
  return (
    <form className={styles.container}>
      <label className={styles.label}>
        Name:
        <input
          className={styles.input}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className={styles.label}>
        Email:
        <input
          className={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className={styles.label}>
        City:
        <input
          className={styles.input}
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <label className={styles.label}>
        Pronouns:
        <br />
        <input
          type="checkbox"
          value="he/him"
          checked={pronouns.includes("he/him")}
          onChange={handlePronounChange}
        />
        He/Him
        <input
          type="checkbox"
          value="she/her"
          checked={pronouns.includes("she/her")}
          onChange={handlePronounChange}
        />
        She/Her
        <input
          type="checkbox"
          value="they/them"
          checked={pronouns.includes("they/them")}
          onChange={handlePronounChange}
        />
        They/Them
        <input
          type="checkbox"
          value="other"
          checked={pronouns.includes("other")}
          onChange={handlePronounChange}
        />
        Other
      </label>
      <br />

      <label className={styles.label}>
        File:
        <input type="file" onChange={handleFileChange} multiple />
      </label>

      <br />
      <label className={styles.label}>
        Message:
        <textarea
          className={styles.textarea}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <button className={styles.button} type="submit">
        Send
      </button>
    </form>
  );
}

export default ContactForm;
