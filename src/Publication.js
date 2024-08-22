import React from "react";
import { Link } from "react-router-dom";

export default function Publication({ publicationObj }) {
  return (
    <li className="publication col-12 col-md-6 col-xxl-3 mb-5">
      <img
        src={`media/publications-imgs/${publicationObj.image}`}
        alt={publicationObj.namePublication}
      />
      <div>
        <p>
          <div className="publication-nameCredit">
            <span style={{ fontStyle: "italic" }}>
              {publicationObj.namePublication}
            </span>
            {publicationObj.credit ? `, ${publicationObj.credit}.` : `.`}
          </div>
          {publicationObj.publisher ? `${publicationObj.publisher}, ` : null}
          {publicationObj.year}.
        </p>
        <span>
          <Link to={`/${publicationObj.hyperlink}`}>Read More</Link>
        </span>
      </div>
    </li>
  );
}
