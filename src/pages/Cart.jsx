import { Col, Container, Row, Button, Table } from "react-bootstrap";
import Counter from "../components/Counter";

function Cart() {
  return (
    <>
      <div className="cart">
        <Container className="my-4 py-4">
          <Row>
            {/* Table of products in cart */}
            <Col xs={12} md={7} className="pt-4">
              <Table hover className="table-borderless">
                <thead style={{ borderBottom: "1px solid rgb(200, 200, 200)" }}>
                  <tr>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>SUBTOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <Row>
                          <Col>
                            <img
                              src="https://cultocafe.uy/wp-content/uploads/2020/03/DSC09432-768x960.jpg"
                              alt=""
                              className="img-fluid img-cart"
                            />
                          </Col>
                          <Col>
                            <p>
                              <strong>SABANERA</strong>
                            </p>
                            <p>Grinding type: Chemex</p>
                            <p>Remove</p>
                          </Col>
                        </Row>
                      </div>
                    </td>
                    <td>$ {550}</td>
                    <td>
                      <Counter />
                    </td>
                    <td>$ {1100}</td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <Row>
                          <Col>
                            <img
                              src="https://cultocafe.uy/wp-content/uploads/2020/03/DSC09428-768x960.jpg"
                              alt=""
                              className="img-fluid img-cart"
                            />
                          </Col>
                          <Col>
                            <p>
                              <strong>CASCABEL</strong>
                            </p>
                            <p>Grinding type: Chemex</p>
                            <p>Remove</p>
                          </Col>
                        </Row>
                      </div>
                    </td>
                    <td>$ {500}</td>
                    <td>
                      <Counter />
                    </td>
                    <td>$ {1100}</td>
                  </tr>
                </tbody>
              </Table>
              <div className="d-flex justify-content-between">
                <p>
                  {" "}
                  <i class="bi bi-ticket-perferated"></i> Enter your promotional
                  code
                </p>
                <p>
                  {" "}
                  <i class="fas fa-less-than"></i> Return to shop
                </p>
              </div>
            </Col>

            {/* Total numbers */}
            <Col xs={12} md={5} className="">
              <div className="border border-2 p-4">
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
                    className="my-3 rounded-pill px-4 w-100"
                  >
                    Proceed to checkout
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Cart;
