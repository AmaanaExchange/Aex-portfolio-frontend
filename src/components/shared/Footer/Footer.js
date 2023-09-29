import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Col, ListGroup, Row, Stack } from "react-bootstrap";

import BrandLogo from "../../../assets/images/brand-logo.png";
import { ReactComponent as IconFacebook } from "../../../assets/images/icon-Facebook.svg";
import { ReactComponent as IconTwitter } from "../../../assets/images/icon-Twitter.svg";
import { ReactComponent as IconInstagram } from "../../../assets/images/icon-Instagram.svg";
import { ReactComponent as IconLinkedIn } from "../../../assets/images/icon-LinkedIn.svg";
import { ReactComponent as IconYoutube } from "../../../assets/images/icon-Youtube.svg";

function AppFooter() {
  return (
    <footer className={`app-footer mt-5`}>
      <Container>
        <Row>
          <Col className="footerlogo"  lg={3}>
            <img src={BrandLogo} alt="brand logo" />
            <p>Take your crypto to the next level</p>
            <Stack className="social-icons " direction="horizontal" gap={2}>
              <Link to="/coming-soon">
                <IconFacebook />
              </Link>
              <Link to="/coming-soon">
                <IconTwitter />
              </Link>
              <Link to="/coming-soon">
                <IconInstagram />
              </Link>
              <Link to="/coming-soon">
                <IconLinkedIn />
              </Link>
              <Link to="/coming-soon">
                <IconYoutube />
              </Link>
            </Stack>
          </Col>
          {/* <div className="listGroup"> */}
          <Col xs={4} md={3}>
            <ListGroup>
              <label>Company</label>
              <NavLink to="/coming-soon">About Us</NavLink>
              <NavLink to="/coming-soon">Blog</NavLink>
              <NavLink to="/coming-soon">Careers</NavLink>
              <NavLink to="/coming-soon">Trust and Safety</NavLink>
            </ListGroup>
          </Col>
          <Col xs={4} md={3}>
            <ListGroup>
              <label>Support</label>
              <NavLink to="/coming-soon">Support Center</NavLink>
              <NavLink to="/coming-soon">Contact Us</NavLink>
              <NavLink to="/coming-soon">System Status</NavLink>
              <NavLink to="/coming-soon">Areas of Availability</NavLink>
            </ListGroup>
          </Col>
          <Col xs={4} md={3}>
            <ListGroup>
              <label>Resources</label>
              <NavLink to="/coming-soon">Prices</NavLink>
              <NavLink to="/coming-soon">Site Widgets</NavLink>
              <NavLink to="/coming-soon">Tax</NavLink>
              <NavLink to="/coming-soon">Support</NavLink>
            </ListGroup>
          </Col>
          {/* </div> */}
        </Row>
        <hr />
        <div className="text-copyright">
          2023 © Amana Exchange. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default AppFooter;
