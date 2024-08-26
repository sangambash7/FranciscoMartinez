import React from "react";
import Publication from "./Publication";
import publicationsData from "./data";
import PublicationsMenu from "./PublicationsMenu";

export default function PublicationEspanol() {
  return (
    <main>
      <div className="espanol">
        <div className="container">
          <PublicationsMenu />
          <Espanol />
        </div>
      </div>
    </main>
  );
}

function Espanol() {
  return (
    <div className="publications">
      <ul className="publications-list row">
        {publicationsData
          .filter((obj) => obj.category === "espanol")
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
