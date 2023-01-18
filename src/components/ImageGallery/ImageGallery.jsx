import React, { useEffect, useState } from "react";
import axios from "axios";

function Flashes() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://ik.imagekit.io/harz555/flashbook/", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <img src={image.url} alt={image.name} />
        </li>
      ))}
    </ul>
  );
}

export default Flashes;
