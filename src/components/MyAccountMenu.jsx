import React from "react";
import { Row, Col, Container, ListGroup } from "react-bootstrap";
import MyAccountOrder from "./MyAccountOrder";
import { Link } from "react-router-dom";

function MyAccount() {
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
        <ListGroup.Item as="li" action href="/">
          <Link to="/">Logout</Link>{" "}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default MyAccount;
