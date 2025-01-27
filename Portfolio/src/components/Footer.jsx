import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import "./Footer.css"
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="footer-logo">
            <h1>Dipun</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/dipun-mohapatra">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/DipunMohapatra">
                <img src={navIcon2} alt="GitHub" />
              </a>
            </div>
            <div className="footer-links">
              <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
              <a href="/terms-of-service" className="footer-link">Terms of Service</a>
            </div>
            <p className="footer-copyright">Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
