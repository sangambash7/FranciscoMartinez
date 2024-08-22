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

export default function Navbar2() {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-xl">
          <Link to="/" className="text-dark text-decoration-none">
            <span className="fs-5 d-block">Francisco Martinez</span>

            <span className="keywords d-none d-lg-block">
              Material Culture • Experimental Ethnography • Waste & Repair
              <br />• European Peripheries • Art & Anthropology
            </span>
          </Link>

          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* SideBar */}
          <div
            className="sidebar offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            {/* SideBar Header */}
            <div className="offcanvas-header text-white border-bottom">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <Link to="/" className="text-dark text-decoration-none">
                  <span className="fs-5 d-block">Francisco Martinez</span>

                  <span className="keywords d-none d-lg-block">
                    Material Culture • Experimental Ethnography • Waste & Repair
                    <br />• European Peripheries • Art & Anthropology
                  </span>
                </Link>
              </h5>
              <button
                type="button"
                class="btn-close shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            {/* SideBar Body */}
            <div className="offcanvas-body d-flex flex-columns p-4 p-md-0">
              <ul className="navbar-nav justify-content-start justify-content-md-end fs-5 flex-grow-1 pe-3">
                <li className="nav-item navbar-menu-item mx-2">
                  <Link to="/" className="nav-link active text-dark">
                    Home
                  </Link>
                </li>

                <li class="nav-item navbar-menu-item dropdown mx-2 text-dark">
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
                  <ul class="dropdown-menu">
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
                  </ul>
                </li>

                <li className="nav-item navbar-menu-item mx-2">
                  <Link to="/Teaching" className="nav-link text-dark">
                    Teaching
                  </Link>
                </li>
                <li className="nav-item navbar-menu-item mx-2">
                  <Link to="/Exhibitions" className="nav-link text-dark">
                    Exhibitions
                  </Link>
                </li>
                <li className="nav-item navbar-menu-item mx-2">
                  <Link to="/Interviews" className="nav-link text-dark">
                    Interviews
                  </Link>
                </li>
                <li className="nav-item navbar-menu-item mx-2">
                  <Link to="/Español" className="nav-link text-dark">
                    En español
                  </Link>
                </li>
              </ul>
              {/* Social Icons */}
              <div className="d-flex justify-content-center align-items-start gap-3">
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
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
