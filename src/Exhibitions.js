import React, { useRef } from "react";
import exhibitionsData from "./exhibitionsData";
import { Link } from "react-router-dom";

export default function Exhibitions() {
  return (
    <main>
      <div className="exhibitions">
        <div className="container-fluid">
          <ul className="exhibitions-list row">
            {exhibitionsData.map((exhibition) => (
              <Exhibition
                exhibitionObj={exhibition}
                key={exhibition.describtion}
              />
            ))}
          </ul>
        </div>
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
        className="col-12 col-md-6"
      />
      <div className="align-self-center col-12 col-md-6">
        <p>{exhibitionObj.describtion}.</p>
      </div>
    </li>
  );
}
