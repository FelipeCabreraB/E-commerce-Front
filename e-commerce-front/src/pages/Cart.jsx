import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import { Col, Container, Row, Button, Table } from "react-bootstrap";

function Cart() {
  return (
    <>
      <Navbar />
      <div className="cart">
        <Container className="my-4 py-4">
          <Row>
            {/* Table of products in cart */}
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>SUBTOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Col>

            {/* Total numbers */}
            <Col className="border border-2 py-4">
              <p>
                <strong>TOTAL FROM CART</strong>
              </p>
              <hr />
              <div>
                <div className="d-flex justify-content-between">
                  <p>Subtotal</p>
                  <p>
                    <strong>$2.000</strong>
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Total</p>
                  <strong>$2.000</strong>
                </div>
              </div>
              <div className="btn-block">
                <Button
                  variant="dark"
                  type="button"
                  className="my-3 rounded-pill px-4 btn-block"
                >
                  Proceed to checkout
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
