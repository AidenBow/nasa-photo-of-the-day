import React from "react";
import { Image } from "semantic-ui-react";

// const roundedImage () => (
//   <Image 
// )

export default function NasaPhotoCard({ imgUrl }) {
  return (
    <div >
      <Image style={{ maxWidth: 400 }} alt = "photo" src={imgUrl} circular centered/>
    </div>
  );
}