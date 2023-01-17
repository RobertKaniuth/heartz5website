import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import useFetch from "../../hooks/useFetch";

const [resp, error, loading] = useFetch("https://ik.imagekit.io/harz555/");

const handleDragStart = (e) => e.preventDefault();

const items = [];

const ImageSlider = () => <div></div>;

export default ImageSlider;
