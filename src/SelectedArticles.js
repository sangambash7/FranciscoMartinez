import React from "react";
import Publication from "./Publication";
import publicationsData from "./data";
import PublicationsMenu from "./PublicationsMenu";

export default function PublicationSelectedArticles() {
  return (
    <main>
      <PublicationsMenu />
      <SelectedArticles />
    </main>
  );
}

function SelectedArticles() {
  return (
    <div className="publications">
      <ul className="publications-list row">
        {publicationsData
          .filter((obj) => obj.category === "article")
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
