import React from "react";
import TourDateAnnouncement from "../components/BlogpostCard/TourdateAnnouncement";
import BlogPost from "../components/BlogpostCard/BlogPost";
import img1 from "../assets/Zürich2023/img1.jpeg";
import img2 from "../assets/Zürich2023/img2.jpeg";
import img3 from "../assets/Zürich2023/img3.jpeg";
import img4 from "../assets/Zürich2023/img4.jpeg";
import img5 from "../assets/Zürich2023/img5.jpeg";
import img6 from "../assets/Zürich2023/img6.jpeg";
import img7 from "../assets/Zürich2023/img7.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7];

const LandingPage = () => (
  <div>
    ;
    <TourDateAnnouncement
      location="London"
      dates="13.2-15.2"
      imgSrc={require("../assets/ukpost.jpeg")}
    />
    <BlogPost
      title="Zürich"
      text="Here some Tattoos i made during my last Visit at Varg. unfortunately the weather made it extremely unpleasant to be outside so i havent really seen anything else then the Way from the Central Stattion to Varg and from the Studio to the Hotel. But thanks to my lovely Clients, Oscar and Oscars Father to get his third Tattoo by me. And special thaks to Coop to provide the only affordable Food in Zürich."
      images={images}
    />
    ;
  </div>
);
export default LandingPage;
