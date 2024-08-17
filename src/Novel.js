import React from "react";
import Publication from "./Publication";
import publicationsData from "./data";
import PublicationsMenu from "./PublicationsMenu";

export default function Novel() {
  return (
    <main>
      <PublicationsMenu />
      <NovelItem />
    </main>
  );
}

function NovelItem() {
  return (
    <div className="publications">
      <ul className="publications-list row">
        {publicationsData
          .filter((obj) => obj.category === "novel")
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
