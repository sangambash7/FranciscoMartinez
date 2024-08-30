import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Offcanvas } from "bootstrap"; // Import the specific Bootstrap module
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  faGoogleScholar,
  faInstagram,
  faXTwitter,
  //   faSearchengin,
} from "@fortawesome/free-brands-svg-icons";

export default function Navbar2() {
  const navigate = useNavigate();

  // Function to handle navigation and close offcanvas
  const handleNavClick = (event, targetPath) => {
    event.preventDefault(); // Prevent default link behavior
    const offcanvas = document.getElementById("offcanvasNavbar");
    const bootstrapOffcanvas = Offcanvas.getInstance(offcanvas); // Use Offcanvas directly

    // Navigate to the target path
    navigate(targetPath);

    // Close the offcanvas
    if (bootstrapOffcanvas) {
      bootstrapOffcanvas.hide();
      console.log(bootstrapOffcanvas);

      // Remove any leftover backdrop manually
      const backdrop = document.querySelector(".offcanvas-backdrop");
      if (backdrop) {
        backdrop.remove();
      }
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary sticky-mobile">
        <div className="container-xl">
          <Link to="/" className="text-dark text-decoration-none">
            <span className="fs-5 d-block">Francisco Martinez</span>

            <span className="keywords d-none d-lg-block">
              Material Culture • Experimental Ethnography <br />• Waste & Repair
              • European Peripheries <br />• Art & Anthropology
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
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            {/* SideBar Header */}
            <div className="offcanvas-header text-white border-bottom">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <Link to="/" className="text-dark text-decoration-none">
                  <span className="fs-5 d-block">Francisco Martinez</span>

                  <span
                    className="keywords d-none d-lg-block"
                    style={{ lineHeight: "0.8rem" }}
                  >
                    Material Culture • Experimental Ethnography <br />• Waste &
                    Repair • European Peripheries <br />• Art & Anthropology
                  </span>
                </Link>
              </h5>
              <button
                type="button"
                className="btn-close shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            {/* SideBar Body */}
            <div className="offcanvas-body d-flex flex-columns p-4 p-md-0">
              <ul className="navbar-nav justify-content-start justify-content-md-end fs-5 flex-grow-1 pe-3">
                <li className="nav-item navbar-menu-item mx-2">
                  <Link
                    to="/"
                    className="nav-link active text-dark"
                    onClick={(event) => handleNavClick(event, "/")}
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item navbar-menu-item dropdown mx-2 text-dark">
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
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        to="/Publications"
                        className="dropdown-item"
                        onClick={(event) =>
                          handleNavClick(event, "/Publications")
                        }
                      >
                        Monographs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/EditedVolumes"
                        className="dropdown-item"
                        onClick={(event) =>
                          handleNavClick(event, "/EditedVolumes")
                        }
                      >
                        Edited Volumes
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/SpecialIssues"
                        className="dropdown-item"
                        onClick={(event) =>
                          handleNavClick(event, "/SpecialIssues")
                        }
                      >
                        Special Issues
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/SelectedArticles"
                        className="dropdown-item"
                        onClick={(event) =>
                          handleNavClick(event, "/SelectedArticles")
                        }
                      >
                        Selected Articles
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/SelectedChapters"
                        className="dropdown-item"
                        onClick={(event) =>
                          handleNavClick(event, "/SelectedChapters")
                        }
                      >
                        Selected Chapters
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Novel"
                        className="dropdown-item"
                        onClick={(event) => handleNavClick(event, "/Novel")}
                      >
                        Novel
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/español"
                        className="dropdown-item"
                        onClick={(event) => handleNavClick(event, "/español")}
                      >
                        En español
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item navbar-menu-item mx-2">
                  <Link
                    to="/Teaching"
                    className="nav-link text-dark"
                    onClick={(event) => handleNavClick(event, "/Teaching")}
                  >
                    Teaching
                  </Link>
                </li>
                <li className="nav-item navbar-menu-item mx-2">
                  <Link
                    to="/Supervision"
                    className="nav-link text-dark"
                    onClick={(event) => handleNavClick(event, "/Supervision")}
                  >
                    Supervision
                  </Link>
                </li>
                <li className="nav-item navbar-menu-item mx-2">
                  <Link
                    to="/Exhibitions"
                    className="nav-link text-dark"
                    onClick={(event) => handleNavClick(event, "/Exhibitions")}
                  >
                    Exhibitions
                  </Link>
                </li>
                <li className="nav-item navbar-menu-item mx-2">
                  <Link
                    to="/Interviews"
                    className="nav-link text-dark"
                    onClick={(event) => handleNavClick(event, "/Interviews")}
                  >
                    Interviews & Talks
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
              {/* Search */}
              {/* <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <FontAwesomeIcon icon={faSearchengin} size="2x" />
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
