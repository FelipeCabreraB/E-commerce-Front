import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterLoginOffcanvas from "../components/RegisterLoginOffcanvas";

function NavBar() {
  return (
    <div style={{ borderBottom: "1px solid rgb(200, 200, 200)" }}>
      <Navbar collapseOnSelect expand="lg" bg="white">
        <Container>
          <Navbar.Brand href="#home">
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "2rem",
                letterSpacing: "4px",
              }}
              to="/"
            >
              <strong>CULTO</strong>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-auto">
              <Nav.Link href="#features">
                <Link style={{ textDecoration: "none", color: "black" }} to="#">
                  <strong>SUBSCRIPTION</strong>
                </Link>
              </Nav.Link>
              <Nav.Link href="#features">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/coffee"
                >
                  <strong>COFFEE</strong>
                </Link>
              </Nav.Link>
              <Nav.Link href="#features">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/accessories"
                >
                  <strong>ACCESSORIES</strong>
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <RegisterLoginOffcanvas />
              <Nav.Link>
                <i class="fas fa-search text-muted"></i>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/cart"
                >
                  <i class="fas fa-shopping-cart text-muted"></i>
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