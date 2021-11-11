import React from "react";
import { Row, Col, Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useLocation, useRouteMatch } from "react-router-dom";
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
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque fuga unde distinctio veniam, iure deserunt quia
              consectetur, animi necessitatibus expedita enim quos error
              perspiciatis reiciendis ut eaque similique modi tenetur?
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyAccountOrder;
