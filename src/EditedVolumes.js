import React from "react";
import Publication from "./Publication";
import publicationsData from "./data";
import PublicationsMenu from "./PublicationsMenu";

export default function PublicationEditedVolumes() {
  return (
    <main>
      <PublicationsMenu />
      <EditedVolumes />
    </main>
  );
}

function EditedVolumes() {
  return (
    <div className="publications">
      <ul className="publications-list row">
        {publicationsData
          .filter((obj) => obj.category === "volumes")
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
