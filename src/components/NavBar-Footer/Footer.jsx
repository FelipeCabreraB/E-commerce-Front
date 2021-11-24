import React from "react";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function Footer() {
  const popover = (
    <Tooltip id="overlay-example">
      Sorry, this feature is outside the scope of this project
    </Tooltip>
  );

  return (
    <footer className="main-footer footer">
      <div className="container">
        <div className="row pt-5 mt-3">
          <div className="col-md-3">
            <p>
              <strong>Contact</strong>
            </p>
            <p>hola@cultocafe.uy</p>
            <p>T: 094 787 478</p>
            <p>
              <a
                className="me-1"
                href="https://www.instagram.com/culto.uy/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <i class="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/culto.uy/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <i class="bi bi-facebook"></i>{" "}
              </a>
            </p>
            <p>Privacy policy</p>
          </div>
          <div className="col-md-3">
            <p>
              <strong>Locals</strong>
            </p>
            <ul className="list-unstyled">
              <li>La Tostaduría</li>
              <li>Canelones 2154 - Mapa</li>
              <li>Horario: 9:00-20:00hs</li>
            </ul>
            <ul className="list-unstyled">
              <li>Ciudad Vieja</li>
              <li>Sarandí 499 - Mapa</li>
              <li>Horario: 8:00–19:00hs</li>
            </ul>
          </div>
          <div className="col-md-3">
            <p>
              <strong>Store</strong>
            </p>

            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/subscription"
            >
              <p>SUBSCRIPTIONS</p>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/coffee"
            >
              <p>COFFEE</p>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/accessories"
            >
              <p>ACCESSORIES</p>
            </Link>
          </div>
          <div className="col-md-3">
            <p>CHECK OUR NEWSLETTER</p>
            <form className="form-inline d-flex flex-row">
              <input
                className="form-control form-control-sm mr-3 w-75 mx-2"
                type="text"
                placeholder="Email"
                aria-label="Search"
              />
              <OverlayTrigger
                trigger="click"
                rootClose
                placement="bottom"
                overlay={popover}
              >
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  style={{ outline: "none", boxShadow: "none" }}
                >
                  <i class="far fa-paper-plane"></i>
                </button>
              </OverlayTrigger>
            </form>
          </div>
        </div>
        <div className="row p-3">
          <h3
            className="text-center text-white"
            style={{
              letterSpacing: "4px",
            }}
          >
            CULTO
          </h3>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <p>&copy; {new Date().getFullYear()} culto coffee shop</p>
          </div>
          <div className="col text-end">
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
