import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import AdminMenu from "../components/AdminMenu";

function AdminPage() {
  return (
    <div className="admin-page">
      <Container>
        <Row className="my-3">
          {/* Menu */}
          <Col xs={12} md={3}>
            <AdminMenu />
          </Col>

          {/* Tables */}
          <Col xs={12} md={9}>
            <i class="fas fa-users fa-2x"></i>
            <h2 className="py-3">Welcome to the Admin Dashboard</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminPage;
