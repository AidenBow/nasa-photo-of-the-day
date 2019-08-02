import React from "react";

export default function NasaPhotoCard({ imgUrl }) {
  return (
    <div style={{ width: "400px" }}>
      <img alt = "phtot" src={imgUrl} />
    </div>
  );
}