import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Col, ListGroup, ListGroupItem, Row, Stack } from "react-bootstrap";

import BrandLogo from "../../../assets/images/brand-logo.png";
import { ReactComponent as IconFacebook } from "../../../assets/images/icon-Facebook.svg";
import { ReactComponent as IconTwitter } from "../../../assets/images/icon-Twitter.svg";
import { ReactComponent as IconInstagram } from "../../../assets/images/icon-Instagram.svg";
import { ReactComponent as IconLinkedIn } from "../../../assets/images/icon-LinkedIn.svg";
import { ReactComponent as IconYoutube } from "../../../assets/images/icon-Youtube.svg";

function AppFooter() {
  return (
    <footer className={`app-footer`}>
      <Container>
        <Row>
          <Col lg={3}>
            <img src={BrandLogo} alt="brand logo" />
            <p>Take your crypto to the next level</p>
            <Stack className="social-icons" direction="horizontal" gap={2}>
              <Link to="#">
                <IconFacebook />
              </Link>
              <Link to="#">
                <IconTwitter />
              </Link>
              <Link to="#">
                <IconInstagram />
              </Link>
              <Link to="#">
                <IconLinkedIn />
              </Link>
              <Link to="#">
                <IconYoutube />
              </Link>
            </Stack>
          </Col>
          <Col lg={3}>
            <ListGroup>
              <label>Company</label>
              <NavLink to="#">About Us</NavLink>
              <NavLink to="#">Blog</NavLink>
              <NavLink to="#">Careers</NavLink>
              <NavLink to="#">Trust and Safety</NavLink>
            </ListGroup>
          </Col>
          <Col lg={3}>
            <ListGroup>
              <label>Support</label>
              <NavLink to="#">Support Center</NavLink>
              <NavLink to="#">Contact Us</NavLink>
              <NavLink to="#">System Status</NavLink>
              <NavLink to="#">Areas of Availability</NavLink>
            </ListGroup>
          </Col>
          <Col lg={3}>
            <ListGroup>
              <label>Resources</label>
              <NavLink to="#">Prices</NavLink>
              <NavLink to="#">Site Widgets</NavLink>
              <NavLink to="#">Tax</NavLink>
              <NavLink to="#">Support</NavLink>
            </ListGroup>
          </Col>
        </Row>
        <hr />
        <div className="text-copyright">2023 © Amana Exchange. All rights reserved.</div>
      </Container>
    </footer>
  );
}

export default AppFooter;
