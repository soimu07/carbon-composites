import React from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";

const MainBody = React.forwardRef(
  ({ title, message }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        className="banner title bg-black text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <Container className="text-center">
          <h1 ref={ref} className="display-1">
            {title}
          </h1>
          <Typist>
            <div className="lead typist">
              {message}
            </div>
          </Typist>
          <a
            className="btn btn-outline-light btn-lg "
            href="#projects"
            role="button"
            aria-label="Projects"
          >
            Projects
          </a>          
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
