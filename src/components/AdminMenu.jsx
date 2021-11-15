import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminMenu() {
  return (
    <div className="myAccount">
      <ListGroup as="ul" className="dark" variant="flush dark">
        <ListGroup.Item>
          <Link to="/admin/products">Products</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <Link to="/admin/categories">Categories</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <Link to="/admin/users">Users</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <Link to="/admin/orders">Orders</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <Link to="/admin/dashboard">Dashboard</Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default AdminMenu;
