import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home">
      <div className="home-intro">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-md-9 d-flex flex-column justify-content-center">
              <p>
                I am an anthropologist dealing with contemporary issues of
                material culture through ethnographic experiments.
              </p>
              <p>
                In recent years I have completed four ethnographically based
                monographs and several edited volumes, which have been reviewed
                over a dozen times.
              </p>
              <p>
                Concerned with continuity and change, I have been studying how
                political discourses have material resonances in contexts such
                as Estonia, Georgia and Portugal.
              </p>
              <p>As my publications have shown:</p>
              <p>
                <ul>
                  <li>
                    Repair practices challenge the economic reasoning of
                    accelerated cycles of production-consumption-disposal
                    through an alternative ecology of care; Indeed, we do not
                    repair things because they break, but because we look after
                    them.
                  </li>
                  <li>
                    The investigation of what does not disappear properly makes
                    visible broken relationships and where the mark between the
                    old and the new lays.
                  </li>
                  <li>
                    The gap between anthropology as a practice and as a
                    discipline is overgrowing, therefore there is a need to
                    innovate ethnographically with experimental collaborations.
                  </li>
                </ul>
              </p>

              <p>
                I consider myself a fieldworker because I engage in live
                experience research with others. But I also make use of
                exhibitions for social research and to reach audiences outside
                academia. I believe that these efforts to expand ethnographic
                registers through experimental collaborations animate
                transdisciplinary research and creative ways of disseminating
                knowledge.
              </p>
              <Link to="/Introduction" className="btn-home">
                More About Me &#8594;
              </Link>
            </div>
            <div className="col-12 col-md-3">
              <img
                src="media/1.jpeg"
                alt="Francisco"
                className="img-fluid home-img img-radius"
              />
              <img
                src="media/2.jpg"
                alt="Francisco"
                className="img-fluid home-img img-radius mt-3"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
