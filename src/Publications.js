import React from "react";
import Publication from "./Publication";
import publicationsData from "./data";
import PublicationsMenu from "./PublicationsMenu";

export default function Publications() {
  return (
    <main>
      <PublicationsMenu />
      <Monographs />
    </main>
  );
}

function Monographs() {
  return (
    <div className="publications">
      <ul className="publications-list row">
        {publicationsData
          .filter((obj) => obj.category === "monograph")
          .map((publication) => (
            <Publication
              publicationObj={publication}
              key={publication.namePublication}
            />
          ))}
      </ul>
    </div>
  );
}
