import React, { useRef } from "react";
import exhibitionsData from "./exhibitionsData";

export default function Exhibitions() {
  return (
    <main>
      <div className="exhibitions pt-5">
        <ul className="exhibitions-list row">
          {exhibitionsData.map((exhibition) => (
            <Exhibition
              exhibitionObj={exhibition}
              key={exhibition.describtion}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

function Exhibition({ exhibitionObj }) {
  const imgRef = useRef();

  const openFullscreen = () => {
    if (imgRef.current.requestFullscreen) {
      imgRef.current.requestFullscreen();
    }
  };

  return (
    <li className="exhibition col-12 col-md-6 col-xxl-4 mb-3">
      <img
        ref={imgRef}
        src={`media/exhibitions-imgs/${exhibitionObj.image}`}
        alt={exhibitionObj.describtion}
        style={{ cursor: "pointer" }}
        onClick={openFullscreen}
      />
      <div>
        <p>{exhibitionObj.describtion}</p>
      </div>
    </li>
  );
}
