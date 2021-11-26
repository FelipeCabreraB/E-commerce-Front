import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterLoginOffcanvas from "../Home/RegisterLoginOffcanvas";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";

function NavBar({ setHideButton }) {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  return (
    <div style={{ borderBottom: "1px solid rgb(200, 200, 200)" }}>
      <Navbar collapseOnSelect expand="lg" bg="white">
        <Container>
          <Navbar.Brand>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "2rem",
                letterSpacing: "4px",
              }}
              to="/"
              onClick={() => setHideButton(false)}
            >
              <strong>CULTO</strong>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-auto">
              {user.role === "admin" && (
                <Nav.Link>
                  <Link
                    className="pe-3 py-3"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      borderRight: "1px solid gray",
                    }}
                    to="/admin/dashboard"
                    onClick={() => setHideButton(false)}
                  >
                    <strong>
                      ADMIN <i class="fas fa-key"></i>
                    </strong>
                  </Link>
                </Nav.Link>
              )}

              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/subscription"
                  onClick={() => setHideButton(false)}
                >
                  <strong>SUBSCRIPTION</strong>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/coffee"
                  onClick={() => setHideButton(false)}
                >
                  <strong>COFFEE</strong>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/accessories"
                  onClick={() => setHideButton(false)}
                >
                  <strong>ACCESSORIES</strong>
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <RegisterLoginOffcanvas />
              <SearchBar />
              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/cart"
                  onClick={() => setHideButton(false)}
                >
                  {cart.reduce((acc, value) => acc + value.quantity, 0) !==
                  0 ? (
                    <i
                      className="fas fa-shopping-cart"
                      style={{ color: "black" }}
                    >
                      {" "}
                      <div
                        style={{
                          color: "white",
                          backgroundColor: "black",
                          borderRadius: "50%",
                          fontWeight: "bolder",
                          width: "17px",
                          height: "17px",
                          fontSize: "0.7rem",
                        }}
                        className="numberOfCart text-center"
                      >
                        <p className="innerNumerOfCart">
                          {cart.reduce((acc, value) => acc + value.quantity, 0)}
                        </p>
                      </div>
                    </i>
                  ) : (
                    <i
                      class="fas fa-shopping-cart"
                      style={{ color: "black" }}
                    ></i>
                  )}
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
