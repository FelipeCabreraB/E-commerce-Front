import React from "react";
import { Container, Dropdown, Row, Col, Button } from "react-bootstrap";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Counter from "../components/Counter";

function DetailedProduct() {
  return (
    <>
      <NavBar />
      <div className="detailed-product">
        <Container className="my-4">
          <Row>
            <Col xs={12} md={6}>
              <img
                src="https://cultocafe.uy/wp-content/uploads/2021/07/Kiosco__0001_Layer-14.jpg"
                alt="Timbo coffee pack"
                className="img-fluid"
              />
            </Col>
            <Col xs={12} md={4} className="mt-3">
              <h2>
                <strong>Timbo</strong>
              </h2>
              <h4 className="my-4">
                <strong>$ 620</strong>
              </h4>
              <p>
                In 2005 the Santa Ana Volcano erupted for the first time in 85
                years and its ashes became natural fertilizer for the entire
                area of El Salvador. The Las Nubes farm –with more than 100
                years producing high quality coffee– benefited from this sudden
                change in the character of the soil, which resulted in a rich
                acidity in the bean, manifested in the particular “glint” of
                each sip.
              </p>
              <p className="pt-4">Grinding type: </p>
              <div>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-basic"
                    className="rounded-0 border-dark my-3"
                  >
                    Choose an option
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Cold Brew</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Grain</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Aeroress</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Turkish coffee
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Chemex</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Espresso</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Filtered</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">French</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Moka</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <form className="d-flex">
                <Counter />
                <Button variant="secondary" className="my-3 rounded-pill px-4">
                  Add to cart
                </Button>
              </form>

              <p className="mt-3">
                PROVENANCE
                <br />
                <strong>El Salvador</strong>
              </p>
              <p className="mt-3">
                FARM
                <br />
                <strong>Las Nubes</strong>
              </p>
              <p className="mt-3">
                NOTES
                <br />
                <strong>Grapefruit, cinnamon, light caramel</strong>
              </p>
              <p className="mt-3">
                ASSORTMENT
                <br />
                <strong>Red bourbon, bales</strong>
              </p>
              <p className="mt-3">
                PROCESS
                <br />
                <strong>Honey</strong>
              </p>
              <p className="mt-3">
                RATING
                <br />
                <strong>87</strong>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default DetailedProduct;
