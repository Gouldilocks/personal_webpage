import React from "react";
import Sticky from "react-stickynode";
import { Link } from "react-scroll";
import { Button } from "@material-ui/core";
import { useNavigate } from 'react-router-dom'

export default function Navbar({mClass, mContainer, mainlogo, stickylogo, changeBlog}) {
    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <nav className={`navbar navbar-expand-lg navbar-light ${mClass}`}>
          <div className={`container ${mContainer}`}>
            <a className="navbar-brand logo_h" href="./">
              <img src={require("../../image/" + mainlogo)} alt="" />
              <img src={require("../../image/" + stickylogo)} alt="" />
            </a>
            {/* <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button> */}
            <div
              className="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav m-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="service"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Experience
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="testimonial"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Testimonial
                  </Link>
                </li> */}
                {/* <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="blog"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Blog
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              {/* <ul className="nav navbar-nav navbar-right d-md-none d-lg-block">
                <Button onClick={() => {
                  changeBlog();
                }}>
                  Blog
                </Button>
              </ul> */}
            </div>
          </div>
        </nav>
      </Sticky>
    );
}