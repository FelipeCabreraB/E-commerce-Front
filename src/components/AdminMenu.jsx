import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function AdminMenu() {
  const dispatch = useDispatch();

  return (
    <div className="myAccount">
      <ListGroup as="ul" className="dark" variant="flush dark">
        <ListGroup.Item>
          {" "}
          <Link to="/admin/dashboard">Dashboard</Link>
        </ListGroup.Item>
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

        <ListGroup.Item as="li" onClick={() => dispatch({ type: "LOGOUT" })}>
          <Link to="/">Logout</Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default AdminMenu;
