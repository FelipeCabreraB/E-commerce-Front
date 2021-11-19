import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyAccountMenu from "../../components/MyAccount/MyAccountMenu";

function MyAccount() {
  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col sm={3}>
            <MyAccountMenu />
          </Col>
          <Col sm={9}>
            <p>Hi USER, welcome to Culto community!</p>
            <p>
              From your account control panel you can view your recent orders,
              manage your shipping and billing addresses and edit your password
              and account details.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyAccount;
