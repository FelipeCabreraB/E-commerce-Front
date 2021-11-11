import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyAccountMenu from "./MyAccountMenu";

function MyAccountOrder() {
  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col sm={3}>
            <MyAccountMenu />
          </Col>
          <Col className="myAccountResponsive" sm={9}>
            <p>No orders have been placed yet. </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyAccountOrder;
