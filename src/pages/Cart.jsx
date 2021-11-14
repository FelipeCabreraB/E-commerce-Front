import { Col, Container, Row, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
                    <th className="text-center">PRICE</th>
                    <th className="text-center">QUANTITY</th>
                    <th className="text-center">SUBTOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product) => (
                    <tr>
                      <td>
                        <div>
                          <Row>
                            <Col>
                              <img
                                src={product.picture}
                                alt=""
                                className="img-fluid img-cart"
                              />
                            </Col>
                            <Col>
                              <p>
                                <strong>{product.productName}</strong>
                              </p>
                              <p>Grinding type: Chemex</p>
                              <p
                                className="pointer"
                                onClick={() =>
                                  dispatch({
                                    type: "REMOVE_ITEM",
                                    payload: {
                                      productName: product.productName,
                                    },
                                  })
                                }
                              >
                                Remove
                              </p>
                            </Col>
                          </Row>
                        </div>
                      </td>
                      <td className="text-center">$ {product.price}</td>
                      <td className="text-center">
                        {" "}
                        <div className="align-self-center text-center me-3">
                          <div
                            className="input-group mb-3 align-self-center text-center"
                            style={{ minWidth: "88px" }}
                          >
                            <button
                              className="btn btn-outline-secondary btn-block px-1"
                              style={{ outline: "none", boxShadow: "none" }}
                              type="button"
                              onClick={() =>
                                dispatch({
                                  type: "REMOVE_ONE_QUANTITY",
                                  payload: {
                                    productName: product.productName,
                                    quantity: product.quantity,
                                  },
                                })
                              }
                            >
                              <i class="fas fa-minus"></i>
                            </button>
                            <input
                              type="text"
                              className="text-center form-control"
                              style={{ maxWidth: "41px", minWidth: "41px" }}
                              value={product.quantity}
                            />
                            <button
                              className="btn btn-outline-secondary px-1"
                              style={{ outline: "none", boxShadow: "none" }}
                              type="button"
                              onClick={() =>
                                dispatch({
                                  type: "ADD_ONE_QUANTITY",
                                  payload: {
                                    productName: product.productName,
                                    quantity: product.quantity,
                                  },
                                })
                              }
                            >
                              <i class="fas fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>$ {product.price * product.quantity}</td>
                    </tr>
                  ))}
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
                      <strong>
                        ${" "}
                        {cart.reduce(
                          (acc, value) => acc + value.price * value.quantity,
                          0
                        )}
                      </strong>
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Total</p>
                    <strong>
                      {" "}
                      ${" "}
                      {cart.reduce(
                        (acc, value) => acc + value.price * value.quantity,
                        0
                      )}
                    </strong>
                  </div>
                </div>
                <div className="btn-block">
                  <Link to="/checkout">
                    <Button
                      variant="dark"
                      type="button"
                      className="my-3 rounded-pill px-4 w-100"
                    >
                      Proceed to checkout
                    </Button>
                  </Link>
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
