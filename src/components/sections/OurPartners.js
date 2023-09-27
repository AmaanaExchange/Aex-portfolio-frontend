import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoPartner1 from "../../assets/images/logo-partner-1.png";
import LogoPartner2 from "../../assets/images/logo-partner-2.png";
import LogoPartner3 from "../../assets/images/logo-partner-3.png";
import LogoPartner4 from "../../assets/images/logo-partner-4.png";
import LogoPartner5 from "../../assets/images/logo-partner-5.png";

import LogoEthereum from "../../assets/images/logo-exchange-curreny-ethereum.svg";
import LogoBitcoin from "../../assets/images/logo-exchange-curreny-bitcoin.svg";
import LogoTether from "../../assets/images/logo-exchange-curreny-tether.svg";
import LogoRipple from "../../assets/images/logo-exchange-curreny-ripple.svg";
export const OurPartners = () => {
  return (
    <>
     
      <section className="our-partners" id="ourF-partners">
  <Container>
    <Row className="align-items-center">
      <Col lg={4} md={12}>
        <h1 className="section-title">Our Partners</h1>
      </Col>
      <Col lg={8} md={12}>
        <div className="d-flex flex-wrap justify-content-center">
          <Link to="#" className="partner-link">
            <Image src={LogoPartner1} alt="Partner 1" />
          </Link>
          <Link to="#" className="partner-link">
            <Image src={LogoPartner2} alt="Partner 2" />
          </Link>
          <Link to="#" className="partner-link">
            <Image src={LogoPartner3} alt="Partner 3" />
          </Link>
          <Link to="#" className="partner-link">
            <Image src={LogoPartner4} alt="Partner 4" />
          </Link>
          <Link to="#" className="partner-link">
            <Image src={LogoPartner5} alt="Partner 5" />
          </Link>
        </div>
      </Col>
    </Row>
  </Container>
</section>
<section>
  <Container>
    <Row className="text-center">
      <Col lg={3} md={6} sm={6}>
        <Image src={LogoEthereum} alt="Ethereum" />
      </Col>
      <Col lg={3} md={6} sm={6}>
        <Image src={LogoBitcoin} alt="Bitcoin" />
      </Col>
      <Col lg={3} md={6} sm={6}>
        <Image src={LogoTether} alt="Tether" />
      </Col>
      <Col lg={3} md={6} sm={6}>
        <Image src={LogoRipple} alt="Ripple" />
      </Col>
    </Row>
  </Container>
</section>

    </>
  );
};
