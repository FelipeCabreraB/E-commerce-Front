import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function AdminMenu() {
  const dispatch = useDispatch();

  return (
    <div className="myAccount">
      <ListGroup as="ul" className="dark " variant="flush dark  ">
        <ListGroup.Item action>
          <i class="bi bi-house"></i>{" "}
          <Link to="/admin/dashboard">Dashboard</Link>
        </ListGroup.Item>
        <ListGroup.Item action>
          <i class="bi bi-bag"></i> <Link to="/admin/products/1">Products</Link>
        </ListGroup.Item>
        <ListGroup.Item action>
          {" "}
          <i class="bi bi-tag"></i>{" "}
          <Link to="/admin/categories">Categories</Link>
        </ListGroup.Item>
        <ListGroup.Item action>
          <i class="bi bi-people"></i> <Link to="/admin/users">Users</Link>
        </ListGroup.Item>
        <ListGroup.Item action>
          {" "}
          <i class="bi bi-card-checklist"></i>{" "}
          <Link to="/admin/orders">Orders</Link>
        </ListGroup.Item>

        <ListGroup.Item as="li" onClick={() => dispatch({ type: "LOGOUT" })}>
          <i class="bi bi-box-arrow-in-left"></i> <Link to="/">Logout</Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default AdminMenu;
