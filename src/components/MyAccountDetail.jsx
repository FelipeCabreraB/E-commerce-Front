import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyAccountMenu from "./MyAccountMenu";

function MyAccountDetail() {
  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col sm={3}>
            <MyAccountMenu />
          </Col>
          <Col className="myAccountResponsive" sm={9}>
            <h3>ACCOUNT DETAILS</h3>
            <form className="mt-3">
              <label
                className="form-label"
                htmlFor="firstName"
                style={{ fontSize: "0.85rem" }}
              >
                First name *
              </label>
              <input
                className="form-control"
                type="text"
                id="firstName"
                name="firstName"
              />

              <label
                className="form-label"
                htmlFor="lastName"
                style={{ fontSize: "0.85rem" }}
              >
                Last name *
              </label>
              <input
                className="form-control"
                type="text"
                id="lastName"
                name="lastName"
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

              <button
                type="submit"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "0.65rem",
                }}
                className="btn px-4 mt-4 py-2"
              >
                <strong>SAVE CHANGES</strong>
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyAccountDetail;
