import React from "react";
import { useLocation } from "react-router";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const location = useLocation()
  const bgStyle = { backgroundColor: "#f5f5f5" };
  const contact = {
    show: true,
    heading: "Get In Touch",
    message:
      "",
    email: "soimu_07@yahoo.com",
  };
  return (
    <footer style={bgStyle} className={location.pathname.includes('projects') ? 'mt-auto py-5 text-center stickyFooter' : 'mt-auto py-5 text-center'}>
      <Container className="fontFamilyMonospace">        
        <div id='contact'>
          <h1>{contact.heading}</h1>
          <h3>{contact.message}</h3>
          <h3>{contact.email}</h3>
        </div>
        {props.children}
        <div>
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
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
