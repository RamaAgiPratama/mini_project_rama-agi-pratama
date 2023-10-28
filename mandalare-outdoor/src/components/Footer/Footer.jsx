import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quick__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/reviews",
    display: "Reviews",
  },
  {
    path: "/tours",
    display: "Items",
  },
];

const quick__links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>Enjoy The Nature</p>

              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <a href="https://www.youtube.com/@rramapra_" target="_blank">
                    <i class="ri-youtube-line"></i>
                  </a>
                </span>
                <span>
                  <a href="https://github.com/RamaAgiPratama" target="_blank">
                    <i class="ri-github-fill"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.linkedin.com/in/rama-agi-pratama/"
                    target="_blank"
                  >
                    <i class="ri-linkedin-line"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.instagram.com/rramapra_/"
                    target="_blank"
                  >
                    <i class="ri-instagram-line"></i>
                  </a>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Contact us</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  Address :
                </h6>
                <p className="mb-0">Kota Banjar</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  Email :
                </h6>
                <p className="mb-0">Rrama@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-phone-fill"></i>
                  </span>
                  Phone :
                </h6>
                <p className="mb-0">+6281223258587</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              @Copyright {year} Design and Developer by Rama Agi Pratama. All
              rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
