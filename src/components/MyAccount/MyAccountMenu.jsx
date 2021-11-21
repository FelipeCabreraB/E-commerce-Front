import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function MyAccount({ handleClose }) {
  const dispatch = useDispatch();
  return (
    <div className="myAccount">
      <ListGroup as="ul" className="dark" variant="flush dark">
        <ListGroup.Item as="li">
          <Link to="/my-account/orders" onClick={() => handleClose()}>
            Orders
          </Link>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <Link to="/my-account/account-details" onClick={() => handleClose()}>
            Account details
          </Link>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <Link to="/my-account/address" onClick={() => handleClose()}>
            Address
          </Link>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          onClick={() => {
            dispatch({ type: "LOGOUT" });
            handleClose();
          }}
        >
          <Link to="/">Logout</Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default MyAccount;
