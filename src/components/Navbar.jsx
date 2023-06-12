import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";
import {HashLink} from 'react-router-hash-link'
import { useLocation } from "react-router";
import classNames from "classnames";

const Navigation = React.forwardRef((props, ref) => {
  const location = useLocation()
  const isProjectsPage = location.pathname.includes('projects')
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  const classes = classNames('navbar-brand', {
    'text-black' : !isTop && !isProjectsPage,
    'text-white' : isTop && !isProjectsPage,
    'text-black' : isProjectsPage
  })
  const hashLinkClasses = classNames('hashLink', {
    'text-black' : !isTop && !isProjectsPage,
    'text-white' : isTop && !isProjectsPage,
    'text-black' : isProjectsPage || location.hash.includes('projects')
  })
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)      
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);
  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top ${!isTop ? "navbar-white" : "navbar-transparent"
        }`}
      expand="lg"
    >
      <Navbar.Brand className={classes} href={process.env.PUBLIC_URL + "/#home"}>
        {`<${mainBody.firstName + " " + mainBody.lastName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {/* {
            <NavLink className="nav-item lead">
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
            </NavLink>
          } */}
          {repos.show && (

            <HashLink
              to={process.env.PUBLIC_URL + "/#projects"}
              className={hashLinkClasses}
            >
              Projects
            </HashLink>
          )}
          {/* <NavLink
            className="nav-item lead"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </NavLink> */}
          {/* {about.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              About
            </NavLink>
          )} */}
          {/* {skills.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              Skills
            </NavLink>
          )} */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
