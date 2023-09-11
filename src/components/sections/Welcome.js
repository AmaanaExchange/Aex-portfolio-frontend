import { Link } from "react-router-dom";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import IconScrollTo from "../../assets/images/icon-scroll-down.png";
export const HomeWelcome = () => {
  return (
    <section className="welcome-wrapper pb-0">
      <Container>
        <Row>
          <Col lg={10}>
            <Stack gap={3} className="text-block">
              <h1>
                Welcome to AMAANA EXCHANGE <br /> Africa’s Gateway to the Crypto Universe!
              </h1>
              <h4>Get early access and a chance to win $10 in Bitcoin</h4>
              <p>
                At Amaana Exchnage we believe in the power of cryptocurrencies to revolutionize financial access and inclusion across Africa. Our
                platform is designed to provide seamless and secure cryptocurrency trading using popular mobile wallets like M-Pesa, EVC plus,
                CBE-birr and more. With our user-friendly interface and innovative technology, we're dedicated to making cryptocurrency trading
                simple, accessible, and beneficial for everyone!
              </p>
              <Button className="float-start">Register Now</Button>
            </Stack>
          </Col>
          <a href="#our-partners" className="scroll-down d-flex justify-content-center my-5 py-5">
            <img src={IconScrollTo} />
          </a>
        </Row>
      </Container>
    </section>
  );
};
