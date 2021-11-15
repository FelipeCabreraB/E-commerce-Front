import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

function AdminPage() {
  return (
    <div className="admin-page">
      <Container>
        <Row className="my-3">
          {/* Menu */}
          <Col xs={12} md={3}>
            <ListGroup>
              <ListGroup.Item>Products</ListGroup.Item>
              <ListGroup.Item>Categories</ListGroup.Item>
              <ListGroup.Item>Admins</ListGroup.Item>
              <ListGroup.Item>Orders</ListGroup.Item>
              <ListGroup.Item>Dashboard</ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Tables */}
          <Col xs={12} md={9}>
            <i class="fas fa-users fa-2x"></i>
            <h2 className="py-3">Welcome to the Admin Dashboard</h2>
            <p></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminPage;
