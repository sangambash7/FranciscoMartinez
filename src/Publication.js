import React from "react";

export default function Publication(props) {
  const handleClick = () => {
    window.location.href = props.publicationObj.hyperlink;
  };

  return (
    <li
      className="publication col-12 col-md-6 col-xxl-3 mb-5"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <img
        src={`media/publications-imgs/${props.publicationObj.image}`}
        alt={props.publicationObj.namePublication}
      />
      <div>
        <p>{props.publicationObj.namePublication}</p>
        <span>
          <a href={`${props.publicationObj.hyperlink}`}>Read More</a>
        </span>
      </div>
    </li>
  );
}
