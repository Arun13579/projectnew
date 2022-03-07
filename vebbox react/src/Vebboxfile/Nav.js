import React from "react";
import Vebboxstyle from "./Vebboxstyle.css";
import Logo from "./Assets/LOGO.png";

import { Container, Row, Col } from "react-bootstrap";

function Nav(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light navcolor fixed-top">
      <div class="container-lg">
        <a class="navbar-brand" href="#">
          <div class="">
            <img src={Logo} alt="" width="170px" />
          </div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0 navfont ms-auto">
            <li class="nav-item mx-2 my-2">
              <a class="nav-link active" aria-current="page" href="#pagehome">
                Home
              </a>
            </li>
            <li class="nav-item mx-2 my-2">
              <a
                class="nav-link active"
                aria-current="page"
                href="#pageservices"
              >
                Services
              </a>
            </li>
            <li class="nav-item mx-2 my-2">
              <a
                class="nav-link active"
                aria-current="page"
                href="#pageproducts"
              >
                Products
              </a>
            </li>
            <li class="nav-item mx-2 my-2">
              <a class="nav-link active" aria-current="page" href="#pageteam">
                Team
              </a>
            </li>
            <li class="nav-item mx-2 col-2 my-2">
              <a class="nav-link active" aria-current="page" href="#pageabout">
                AboutUs
              </a>
            </li>
            <li class="nav-item mx-2 col-4 col-sm-3 col-md-2 col-lg-3 col-xl-3 col-xxl-3 text-center">
              <a class="nav-link active" aria-current="page" href="#contact">
                <div class="b1">
                  <button className="btn btn-outline-info navbutton">
                    <b>Get Started</b>
                  </button>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
