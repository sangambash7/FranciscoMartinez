import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  faGoogleScholar,
  faInstagram,
  faXTwitter,
  faSearchengin,
} from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md pb-4">
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

                  <span className="keywords d-none d-lg-block">
                    Material Culture • Experimental Ethnography • Waste & Repair
                    <br />• European Peripheries • Art & Anthropology
                  </span>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mx-auto">
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
                    <a href="/Publications" className="dropdown-item">
                      Monographs
                    </a>
                  </li>
                  <li>
                    <a href="/EditedVolumes" className="dropdown-item">
                      Edited Volumes
                    </a>
                  </li>
                  <li>
                    <a href="/SpecialIssues" className="dropdown-item">
                      Special Issues
                    </a>
                  </li>
                  <li>
                    <a href="/SelectedArticles" className="dropdown-item">
                      Selected Articles
                    </a>
                  </li>
                  <li>
                    <a href="/SelectedChapters" className="dropdown-item">
                      Selected Chapters
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item navbar-menu-item">
                <a href="/Introduction" className="nav-link text-dark fs-5 ">
                  Introduction
                </a>
              </li>
              <li className="nav-item navbar-menu-item">
                <a href="/" className="nav-link active text-dark fs-4">
                  Home
                </a>
              </li>
              <li className="nav-item navbar-menu-item">
                <a href="/Teaching" className="nav-link text-dark fs-5">
                  Teaching
                </a>
              </li>
              <li className="nav-item navbar-menu-item">
                <a href="/Exhibitions" className="nav-link text-dark fs-5">
                  Exhibitions
                </a>
              </li>
              <li className="nav-item navbar-menu-item">
                <a href="/Interviews" className="nav-link text-dark">
                  Interviews
                </a>
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
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <FontAwesomeIcon icon={faSearchengin} size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
