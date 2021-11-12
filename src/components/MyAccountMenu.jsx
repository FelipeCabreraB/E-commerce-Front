import React from "react";
import { Row, Col, Container, ListGroup } from "react-bootstrap";
import MyAccountOrder from "./MyAccountOrder";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function MyAccount() {
  const dispatch = useDispatch();
  return (
    <div className="myAccount">
      <ListGroup as="ul" className="dark" variant="flush dark">
        <ListGroup.Item as="li">
          <Link to="/my-account/orders">Orders</Link>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <Link to="/my-account/account-details">Account details</Link>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <Link to="/my-account/address">Address</Link>
        </ListGroup.Item>
        <ListGroup.Item as="li" onClick={() => dispatch({ type: "LOGOUT" })}>
          <Link to="/">Logout</Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default MyAccount;
