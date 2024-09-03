import React from "react";

export default function TheatreOfMemory() {
  return (
    <main>
      <div className="publication-container">
        <div className="publication-upper">
          <img src="media/publications-imgs/40.jpeg" alt="Publication" />
        </div>

        <div className="publication-text mt-5">
          <h2 className="mb-4">
            <a
              className="publication-link"
              target="_blank"
              rel="noreferrer"
              href="https://www.berghahnjournals.com/view/journals/ajec/26/1/ajec260106.xml"
            >
              To whom belongs history? The theatre of memory in Russia, Estonia
              and Georgia.
            </a>
            <br />
            Anthropological Journal of European Cultures, 2017
          </h2>
          <p>
            This article discusses different processes of appropriation of
            history in three former Soviet Republics. It provides a context for
            the recent historical retrofitting by taking the
            re-monumentalisation of the past in Estonia, the popularity of
            pseudo-history in Russia, and the current state of the Stalin museum
            in Georgia as symptomatic of wider social processes. New forms of
            convergence are shown between the historical and the political by
            the replacement, emptying of meaning, and remixability of past
            symbols. I conclude that the Soviet world has been put to political
            and communicative uses as a familiar context to refer to; also that
            the process of retrofitting historical narratives is not over yet in
            any of these societies.
          </p>
        </div>
      </div>
    </main>
  );
}
