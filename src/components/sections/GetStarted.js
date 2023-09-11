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
          <Col lg={12} className="text-center">
            <h1 className="section-title mx-auto">Get Started In Just a Few Minutes</h1>
            <p className="section-sub">We make buying, trading and selling safe and secure </p>
          </Col>
          <Col lg={11} className="mx-auto">
            <Row>
              <Col md={4}>
                <Card>
                  <Link to="#">
                    <Image src={IconRegister} />
                    <h4>Register</h4>
                    <p>Buy Bitcoin or Ethereum, the securely store it in your wallet or send it on easily to friends </p>
                  </Link>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Link to="#">
                    <Image src={IconDeposit} />
                    <h4>Deposit</h4>
                    <p>Choose you preferred payment method such as bank transfer or credit card to top up your wallet </p>
                  </Link>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Link to="#">
                    <Image src={IconGetCrypto} />
                    <h4>Get Crypto</h4>
                    <p>Sign up for free wallet on web, IOS or Android and follow our easy process to set up your profile</p>
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
