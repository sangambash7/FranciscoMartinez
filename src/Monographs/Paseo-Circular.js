import React from "react";

export default function PaseoCircular() {
  return (
    <main>
      <div className="publication-container">
        <div className="publication-upper">
          <img src="media/publications-imgs/30.jpg" alt="Publication" />
        </div>

        <div className="publication-text mt-5">
          <h2 className="mb-4">
            <a
              className="publication-link"
              target="_blank"
              rel="noreferrer"
              href="https://editorial.bifurcaciones.cl/producto/paseo-circular/"
            >
              Paseo Circular.
            </a>
            <br />
            Bifurcaciones, 2021
            <br />
            Translated into Estonian as{" "}
            <a
              className="publication-link"
              target="_blank"
              rel="noreferrer"
              href="https://www.vikerkaar.ee/archives/29728"
            >
              Kuidas Asju Lõpetada
            </a>{" "}
            (Vikerkaar, 2023).
            <br />
            Some excerpts have been published in English in the article{" "}
            <a
              className="publication-link"
              target="_blank"
              rel="noreferrer"
              href="https://ee.openlibhums.org/article/id/9032/"
            >
              ‘How to write things. Fiction, anthropology and foreignness in
              Berlin’.
            </a>
            Ethnologia Europaea, 2023.
          </h2>
          <p>
            "To travel, a dream. To travel, a story. To travel, an imposture, a
            private plot, a great lie that you tell yourself, like everything
            you've done in recent years."
            <br />
            This is a novel about unlearning and strangeness, a Bildungsroman in
            reverse, in which maturing is shown as a game of balance between
            emotional and material coordinates.
          </p>
          <h4>Praise</h4>
          <p className="font-monospace">
            This is the work of an imitator.
            <br />
            <span className="fw-bold fst-italic text-decoration-underline">
              Enrique Vilas-Boas.
            </span>
          </p>
          <p className="font-monospace">
            It would have been better not to write this novel, or whatever it
            is.
            <br />
            <span className="fw-bold fst-italic text-decoration-underline">
              Anna Gorenko.
            </span>
          </p>
          <p className="font-monospace">
            In these times, to travel has become obsolete.
            <br />
            <span className="fw-bold fst-italic text-decoration-underline">
              Jiangian Han.
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
