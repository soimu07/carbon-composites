import React from "react";
import { useLocation } from "react-router";
import Container from "react-bootstrap/Container";


const Footer = (props) => {
  const location = useLocation()
  const bgStyle = { backgroundColor: "#f5f5f5" };
  return (
    <footer style={bgStyle} className={location.pathname.includes('projects') ? 'mt-auto py-5 text-center stickyFooter' : 'mt-auto py-5 text-center'}>
      <Container>
        {props.children}
        <i className="fas fa-code" /> by{" "}
        <a
          rel="noopener"
          href="# "
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            șoimu
          </span>
        </a>{" "}
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted">
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
