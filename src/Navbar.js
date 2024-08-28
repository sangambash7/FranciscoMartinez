import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  faGoogleScholar,
  faInstagram,
  faXTwitter,
  // faSearchengin,
} from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md pb-3">
        <div className="container-xl">
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            className="navbar-toggler bg-white"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="text-dark text-decoration-none">
                  <span className="fs-5 d-block">Francisco Martinez</span>

                  <span
                    className="keywords d-none d-lg-block"
                    style={{ fontSize: "0.7rem", lineHeight: "0.8rem" }}
                  >
                    Material Culture • Experimental Ethnography <br />• Waste &
                    Repair • European Peripheries <br />• Art & Anthropology
                  </span>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item navbar-menu-item">
                <Link to="/" className="nav-link active text-dark">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown navbar-menu-item">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle text-dark"
                  id="publicationsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Publications
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="publicationsDropdown"
                >
                  <li>
                    <Link to="/Publications" className="dropdown-item">
                      Monographs
                    </Link>
                  </li>
                  <li>
                    <Link to="/EditedVolumes" className="dropdown-item">
                      Edited Volumes
                    </Link>
                  </li>
                  <li>
                    <Link to="/SpecialIssues" className="dropdown-item">
                      Special Issues
                    </Link>
                  </li>
                  <li>
                    <Link to="/SelectedArticles" className="dropdown-item">
                      Selected Articles
                    </Link>
                  </li>
                  <li>
                    <Link to="/SelectedChapters" className="dropdown-item">
                      Selected Chapters
                    </Link>
                  </li>
                  <li>
                    <Link to="/Novel" className="dropdown-item">
                      Novel
                    </Link>
                  </li>
                  <li>
                    <Link to="/español" className="dropdown-item">
                      En español
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item navbar-menu-item">
                <Link to="/Teaching" className="nav-link text-dark">
                  Teaching
                </Link>
              </li>

              <li className="nav-item navbar-menu-item">
                <Link to="/Supervision" className="nav-link text-dark">
                  Supervision
                </Link>
              </li>

              <li className="nav-item navbar-menu-item">
                <Link to="/Exhibitions" className="nav-link text-dark">
                  Exhibitions
                </Link>
              </li>

              <li className="nav-item navbar-menu-item">
                <Link to="/Interviews" className="nav-link text-dark">
                  Interviews & Talks
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  href="https://scholar.google.com/citations?user=vJekQ1kAAAAJ&hl=en"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGoogleScholar} />
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.instagram.com/fmanthropology/"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://x.com/FManthro"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              {/* <li className="nav-item">
                <a href="#" className="nav-link">
                  <FontAwesomeIcon icon={faSearchengin} size="2x" />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
