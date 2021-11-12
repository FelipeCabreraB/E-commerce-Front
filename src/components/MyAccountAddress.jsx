import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyAccountMenu from "./MyAccountMenu";

function MyAccountAdress() {
  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col sm={3}>
            <MyAccountMenu />
          </Col>
          <Col className="myAccountResponsive" sm={9}>
            <h3>BILLING ADDRESS</h3>
            <form className="mt-3">
              <label
                className="form-label"
                htmlFor="fullname"
                style={{ fontSize: "0.85rem" }}
              >
                Full name *
              </label>
              <input
                className="form-control"
                type="text"
                id="fullname"
                name="fullname"
              />
              <label
                className="form-label mt-3"
                htmlFor="phone"
                style={{ fontSize: "0.85rem" }}
              >
                Phone number *
              </label>
              <input
                className="form-control"
                type="text"
                id="phone"
                name="phone"
              />
              <label
                className="form-label mt-3"
                htmlFor="email"
                style={{ fontSize: "0.85rem" }}
              >
                Email address *
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
              />
              <label
                className="form-label mt-3"
                htmlFor="deliveryAdress"
                style={{ fontSize: "0.85rem" }}
              >
                Delivery address *
              </label>
              <input
                className="form-control"
                type="text"
                id="deliveryAdress"
                name="deliveryAdress"
              />

              <button
                type="submit"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "0.65rem",
                }}
                className="btn px-4 mt-4 py-2"
              >
                <strong>SAVE ADDRESS</strong>
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyAccountAdress;
