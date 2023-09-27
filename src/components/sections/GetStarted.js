import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import IconRegister from "../../assets/images/icon-register.svg";
import IconDeposit from "../../assets/images/icon-deposit.svg";
import IconGetCrypto from "../../assets/images/icon-get-crypto.svg";

export const GetStarted = () => {
  return (
  
    <section className="get-started">
  <Container>
    <Row className="align-items-center">
          <Col lg={12} className="text-center " style={{ position: "relative" }}>
        <h1 className="section-title mx-auto">Get Started In Just a Few Minutes</h1>
        <p className="section-sub">We make buying, trading, and selling safe and secure</p>
      </Col>
      <Col lg={10} className="mx-auto">
        <Row>
          <Col md={6} lg={4}>
            <Card className="mb-4">
              <Link to="#" className="d-flex flex-column align-items-center">
                <Image src={IconRegister} alt="Register" />
                <h4>Register</h4>
                <p>Buy Bitcoin or Ethereum, then securely store it or send it to friends</p>
              </Link>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="mb-4">
              <Link to="#" className="d-flex flex-column align-items-center">
                <Image src={IconDeposit} alt="Deposit" />
                <h4>Deposit</h4>
                <p>Top up your wallet using your preferred payment method, like bank transfer or credit card</p>
              </Link>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="mb-4" style={{ position: "relative", zIndex: "1" }}>
              <Link to="#" className="d-flex flex-column align-items-center">
                <Image src={IconGetCrypto} alt="Get Crypto" />
                <h4>Get Crypto</h4>
                <p>Sign up for a free wallet on the web, iOS, or Android and follow our easy profile setup process</p>
              </Link>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
</section>

  );
};
