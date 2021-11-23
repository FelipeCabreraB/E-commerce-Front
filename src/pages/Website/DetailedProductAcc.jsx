import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DetailedProductAcc() {
  const cart = useSelector((state) => state.cart);
  const [product, setProduct] = useState([]);
  const [counterMessage, setCounterMessage] = useState("");
  const [addToCartMessage, setAddToCartMessage] = useState("");
  const params = useParams();
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const notify = () =>
    toast.success(
      `Accessory: ${product.productName} x ${count} -- Successfully added to cart`,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );

  useEffect(() => {
    const getProduct = async (ev) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL_BACKEND}/product/${params.productName}`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [params.productName]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="detailed-product">
        {product.length < 1 ? (
          <div className="container text-center mb-5">
            <div style={{ marginBottom: "150px", marginTop: "150px" }}>
              <Spinner animation="border" />
            </div>
          </div>
        ) : (
          <Container className="my-4">
            <Row>
              <Col xs={12} md={6}>
                <div className="img-hover-zoom">
                  <img
                    src={
                      "https://hxxxiarcaeviegtlscdm.supabase.in/storage/v1/object/public/culto-coffee-img/" +
                      product.picture
                    }
                    alt={product.productName}
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col xs={12} md={4} className="mt-3">
                <h2>
                  <strong>{product.productName}</strong>
                </h2>
                <h4 className="my-4">
                  <strong>$ {product.price}</strong>
                </h4>
                <p>{product.description}</p>

                <form className="d-flex">
                  {cart.filter(
                    (cartProduct) =>
                      cartProduct.productName === product.productName
                  )[0] ? (
                    <div className="align-self-center mt-3 me-3">
                      <div className="input-group mb-3 align-self-center">
                        <button
                          className="btn btn-outline-secondary btn-block px-1"
                          style={{ outline: "none", boxShadow: "none" }}
                          type="button"
                          onClick={
                            count > 1
                              ? () => {
                                  setCount((prev) => --prev);
                                  setCounterMessage("");
                                }
                              : () => {
                                  setCount(0);
                                  setCounterMessage("");
                                }
                          }
                        >
                          <i class="fas fa-minus"></i>
                        </button>
                        <input
                          type="text"
                          className="text-center form-control"
                          value={count}
                          style={{ maxWidth: "41px" }}
                        />
                        <button
                          className="btn btn-outline-secondary px-1"
                          style={{ outline: "none", boxShadow: "none" }}
                          type="button"
                          onClick={
                            cart.filter(
                              (cartProduct) =>
                                cartProduct.productName === product.productName
                            )[0].quantity +
                              count <
                            product.stock
                              ? () => {
                                  setCount((prev) => ++prev);
                                  setAddToCartMessage("");
                                }
                              : () => {
                                  setCount(
                                    product.stock -
                                      cart.filter(
                                        (cartProduct) =>
                                          cartProduct.productName ===
                                          product.productName
                                      )[0].quantity
                                  );
                                  setCounterMessage(
                                    "No more product available."
                                  );
                                  setAddToCartMessage("");
                                }
                          }
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="align-self-center mt-3 me-3">
                      <div className="input-group mb-3 align-self-center">
                        <button
                          className="btn btn-outline-secondary btn-block px-1"
                          style={{ outline: "none", boxShadow: "none" }}
                          type="button"
                          onClick={
                            count > 1
                              ? () => {
                                  setCount((prev) => --prev);
                                  setCounterMessage("");
                                }
                              : () => {
                                  setCount(1);
                                  setCounterMessage("");
                                }
                          }
                        >
                          <i class="fas fa-minus"></i>
                        </button>
                        <input
                          type="text"
                          className="text-center form-control"
                          value={count}
                          style={{ maxWidth: "41px" }}
                        />
                        <button
                          className="btn btn-outline-secondary px-1"
                          style={{ outline: "none", boxShadow: "none" }}
                          type="button"
                          onClick={
                            count < product.stock
                              ? () => {
                                  setCount((prev) => ++prev);
                                  setAddToCartMessage("");
                                }
                              : () => {
                                  setCount(product.stock);
                                  setAddToCartMessage("");
                                  setCounterMessage(
                                    "No more product available."
                                  );
                                }
                          }
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  )}

                  <Button
                    onClick={() => {
                      // eslint-disable-next-line
                      {
                        count !== 0 &&
                          dispatch({
                            type: "ADD_ITEM",
                            payload: {
                              quantity: count,
                              productName: product.productName,
                              price: product.price,
                              picture: product.picture,
                              stock: product.stock,
                              id: product.id,
                            },
                          });
                      }
                      notify();
                      setCount(0);
                      setCounterMessage("");
                      // eslint-disable-next-line
                      {
                        count !== 0 &&
                          setAddToCartMessage(
                            "Product added to cart correctly."
                          );
                      }
                    }}
                    variant="secondary"
                    className="my-3 rounded-pill px-4"
                  >
                    Add to cart
                  </Button>
                </form>
                <p className="text-danger">{counterMessage}</p>
                <p className="text-success">{addToCartMessage}</p>
                <p className="mt-3">
                  Characteristics:
                  <br />
                  <ul>
                    <li>{product.accessoriesChar1}</li>
                    <li>{product.accessoriesChar2}</li>
                    <li>{product.accessoriesChar3}</li>
                  </ul>
                </p>
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </>
  );
}

export default DetailedProductAcc;
