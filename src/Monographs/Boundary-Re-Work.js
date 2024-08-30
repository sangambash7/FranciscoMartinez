import React from "react";

export default function BoundaryReWork() {
  return (
    <main>
      <div className="publication-container">
        <div className="publication-upper">
          <img src="media/publications-imgs/11.jpeg" alt="Publication" />
        </div>

        <div className="publication-text mt-5">
          <h2 className="mb-4">
            <a
              className="publication-link"
              target="_blank"
              rel="noreferrer"
              href="https://www.berghahnjournals.com/view/journals/ajec/29/2/ajec.29.issue-2.xml"
            >
              Boundary Re-Work in European Anthropology: Conceptual and
              Historical Explorations.
            </a>
            <br />
            Anthropological Journal of European Cultures, 2020
          </h2>
          <p>
            Boundaries influence how we live, the way we do and see things – but
            how? This theme issue discusses the porosity of anthropology’s
            borders and the difficulty of establishing scholarly authority. We
            reopened the conversation about the permeability of academic
            boundaries, exploring different conceptual, methodological and
            historical reconfigurations within European anthropologies. We also
            discussed how the boundaries of our discipline are changing,
            affecting our sense of professional strength and vulnerability.
          </p>
        </div>
      </div>
    </main>
  );
}
