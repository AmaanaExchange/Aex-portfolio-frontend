import { Col, Container, Image, Row ,Card } from "react-bootstrap";
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
      <div className="d-flex flex-wrap justify-content-center position-fix">
        <Card className="partner-card">
          <Link to="#" className="partner-link">
            <Image src={LogoPartner1} alt="Partner 1" />
          </Link>
        </Card>
        <Card className="partner-card"  style={{height:"100px" , width:"130px"}}>
          <Link to="#" className="partner-link">
            <Image src={LogoPartner2} style={{width:"100%" ,margin:"10px 2px"}} alt="Partner 2" />
          </Link>
        </Card>
        <Card className="partner-card"  style={{height:"100px" , width:"130px"}} >
          <Link to="#" className="partner-link">
            <Image src={LogoPartner3} style={{margin:"19px 0 0 2px"}} alt="Partner 3" />
          </Link>
        </Card>
        <Card className="partner-card" style={{height:"100px" , width:"130px"}}>
          <Link to="#" className="partner-link">
            <Image src={LogoPartner4} style={{margin:"14px 0 0 9px"  }}  alt="Partner 4" />
          </Link>
        </Card>
        <Card className="partner-card" style={{height:"100px" , width:"130px"}}>
          <Link to="#" className="partner-link">
            <Image src={LogoPartner5} style={{    marginLeft:"19px" ,
    marginTop:"6px"}} alt="Partner 5" />
          </Link>
        </Card>
      </div>
    </Col>
  </Row>
</Container>
      </section>
      <section>
        <Container>
          <Row className="text-center">
            <Col lg={3} md={6}  xs={6} className="logo" >
              <Image src={LogoEthereum} alt="Ethereum" style={{width:"150px"}} />
            </Col>
            <Col lg={3} md={6}  xs={6} className="logo" >
              <Image src={LogoBitcoin} alt="Bitcoin" style={{width:"150px"}} />
            </Col>
            <Col lg={3} md={6}  xs={6} className="logo">
              <Image src={LogoTether} alt="Tether" style={{width:"150px"}} />
            </Col>
            <Col lg={3} md={6}  xs={6} className="logo">
              <Image src={LogoRipple} alt="Ripple" style={{width:"150px"}} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
