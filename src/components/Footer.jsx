import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import "../css/footer.css";
import logo from "../assets/logo-earthcare.png";

export default function Footer() {
  return (
    <footer>
      <Container fluid className="component__footer">
        <Row className="row d-flex justify-content-sm-start justify-content-lg-center align-content-lg-center align-items-lg-stretch flex-wrap mx-lg-5 mx-auto">
          <Col
            lg={2}
            md={4}
            // sm={3}
            className="d-flex align-items-lg-center align-items-sm-start flex-column text-start ms-lg-1 ms-sm-0 me-lg-1 me-sm-0"
          >
            <h1 className="d-flex justify-content-lg-center align-items-lg-center">
              <img
                className="me-1 d-flex justify-content-lg-center align-items-lg-center"
                src={logo}
                alt="logo"
              />
              EarthCare
            </h1>
            <p>&copy; 2023 All Rights reserved</p>
          </Col>
          <Col
            lg={2}
            md={4}
            // sm={3}
            className="d-flex align-items-lg-center align-items-sm-start flex-column text-start"
          >
            <div className="content__footer">
              <h3>Content</h3>
              <ul>
                <li>
                  <a href="#">Event</a>
                </li>
                <li>
                  <a href="#">Article</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col
            lg={2}
            md={4}
            // sm={3}
            className="d-flex align-items-lg-center align-items-sm-start flex-column text-start"
          >
            <div className="about__footer">
              <h3>About Us</h3>
              <ul className="about__link">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col
            lg={2}
            md={4}
            // sm={3}
            className="d-flex justify-content-sm-end align-items-lg-center align-items-sm-start flex-column text-start col"
          >
            <div className="social__footer mb-lg-5">
              <h3 className="text-center text-lg-start ">Connect With Us</h3>
              <div className="icon__social d-flex justify-content-lg-center align-items-lg-center justify-content-lg-start">
                <span className="icons pe-3">
                  <FaInstagram />
                </span>
                <span className="icons pe-3">
                  <FaTwitter />
                </span>
                <span className="icons pe-3">
                  <FaYoutube />
                </span>
                <span className="icons pe-3">
                  <FaFacebook />
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
