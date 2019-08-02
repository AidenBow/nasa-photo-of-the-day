import React from "react";

export default function NasaPhotoCard({ imgUrl }) {
  return (
    <div style={{ maxWidth: "400px" }}>
      <img alt = "phtot" src={imgUrl} />
    </div>
  );
}