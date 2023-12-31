import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Stack } from "react-bootstrap";

import { ReactComponent as BrandIcon } from "../../../assets/images/brand-icon.svg";
// import { ReactComponent as BrandLogoText } from "../../../assets/images/brand-logo-text.svg";
import { ReactComponent as BrandLogoText } from "../../../assets/images/brand-logo-name.svg";

import { useEffect, useState } from "react";

function AppHeader() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);
  return (
    <header className={`app-header ${"sticky-top"}`}>
      <Navbar expand="lg" className="bg-none" fixed="top" data-bs-theme="dark">
        <Container>
          <Navbar.Brand
            as={NavLink}
            to="/"
            className={`${scroll ? "p-0" : "ps-lg-4"}`}
          >
            <Stack className="brand-logo" direction="horizontal">
              <BrandIcon style={{ maxWidth: 100 }} />
              <BrandLogoText />
            </Stack>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/coming-soon">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/coming-soon">
                Contact
              </Nav.Link>
              <Nav.Link as={NavLink} className="btn" to="/coming-soon">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default AppHeader;
