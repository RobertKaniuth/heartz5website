import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./blogpost.module.css";

const BlogPost = (props) => {
  return (
    <div className={styles.blogPostContainer}>
      <h2 className={styles.blogPostTitle}>{props.title}</h2>
      <p className={styles.blogPostText}>{props.text}</p>
      <Carousel className={styles.blogPostCarousel} showArrows={true}>
        {props.images.map((image, index) => (
          <div key={index}>
            <img className={styles.blogPostImage} src={image} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BlogPost;
