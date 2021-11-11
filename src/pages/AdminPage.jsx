import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function AdminPage() {
  return (
    <div className="admin-page">
      <Container>
        <Row>
          {/* Menu */}
          <Col xs={3}>
            <ListGroup>
              <ListGroup.Item>Products</ListGroup.Item>
              <ListGroup.Item>Categories</ListGroup.Item>
              <ListGroup.Item>Admins</ListGroup.Item>
              <ListGroup.Item>Orders</ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Tables */}
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminPage;
