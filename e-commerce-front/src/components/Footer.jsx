import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row pt-5 mt-3">
          <div className="col-3">
            <p>
              <strong>Contact</strong>
            </p>
            <p>hola@cultocafe.uy</p>
            <p>T: 094 787 478</p>
            <p>
              <i class="bi bi-instagram"></i> <i class="bi bi-facebook"></i>
            </p>
            <p>Privacy policy</p>
          </div>
          <div className="col-3">
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
          <div className="col-3">
            <p>
              <strong>Tienda</strong>
            </p>
            <p>SUBSCRIPTIONS</p>
            <p>COFFEE</p>
            <p>ACCESSORIES</p>
          </div>
          <div className="col-3">
            <p>CHECK OUR NEWSLETTER</p>
            <form className="form-inline d-flex flex-row">
              <input
                className="form-control form-control-sm mr-3 w-75 mx-2"
                type="text"
                placeholder="Email"
                aria-label="Search"
              />
              <i class="far fa-paper-plane"></i>
              {/* <i className="fas fa-search" aria-hidden="true"></i> */}
            </form>
          </div>
        </div>
        <div className="row p-3">
          <h3 className="text-center">CULTO</h3>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <p>&copy; {new Date().getFullYear()} cultocafé</p>
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
