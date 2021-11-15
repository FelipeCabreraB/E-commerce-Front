import React from "react";
import { ListGroup } from "react-bootstrap";

function AdminMenu() {
  return (
    <div className="admin-component">
      <ListGroup>
        <ListGroup.Item>Products</ListGroup.Item>
        <ListGroup.Item>Categories</ListGroup.Item>
        <ListGroup.Item>Admins</ListGroup.Item>
        <ListGroup.Item>Orders</ListGroup.Item>
        <ListGroup.Item>Dashboard</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default AdminMenu;
