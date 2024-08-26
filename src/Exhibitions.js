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
      />
      <div>
        <p>
          {exhibitionObj.describtion}.<br></br>
        </p>

        {/* {exhibitionObj.hyperlink ? (
          <span>
            <a
              href={exhibitionObj.hyperlink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </span>
        ) : null} */}
      </div>
    </li>
  );
}
