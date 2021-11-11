import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyAccountMenu from "./MyAccountMenu";

function MyAccountDetail() {
  return (
    <div>
      {" "}
      <Container className="py-5">
        <Row>
          <Col sm={3}>
            <MyAccountMenu />
          </Col>
          <Col className="myAccountResponsive" sm={9}>
            <p>Adress. </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyAccountDetail;
