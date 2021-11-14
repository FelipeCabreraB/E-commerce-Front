import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Container, Dropdown, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

function DetailedProduct() {
  const cart = useSelector((state) => state.cart);
  const [product, setProduct] = useState([]);
  const [counterMessage, setCounterMessage] = useState("");
  const [addToCartMessage, setAddToCartMessage] = useState("");
  const [grindingType, setGrindingType] = useState("Choose an option");
  const [selectGrindingType, setSelectGrindingType] = useState("");
  const params = useParams();
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

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
  }, []);

  return (
    <>
      <div className="detailed-product">
        <Container className="my-4">
          <Row>
            <Col xs={12} md={6}>
              <div className="img-hover-zoom">
                <img
                  src={product.picture}
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
              <hr />
              <p className="pt-1">Grinding type: </p>
              <div>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-basic"
                    className="rounded-0 border-dark my-3"
                  >
                    {grindingType}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => {
                        setGrindingType("Cold Brew");
                        setSelectGrindingType("");
                      }}
                    >
                      Cold Brew
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setGrindingType("Grain");
                        setSelectGrindingType("");
                      }}
                    >
                      Grain
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setGrindingType("Aeroress");
                        setSelectGrindingType("");
                      }}
                    >
                      Aeroress
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setGrindingType("Turkish coffee");
                        setSelectGrindingType("");
                      }}
                    >
                      Turkish coffee
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setGrindingType("Chemex");
                        setSelectGrindingType("");
                      }}
                    >
                      Chemex
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setGrindingType("Espresso");
                        setSelectGrindingType("");
                      }}
                    >
                      Espresso
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setGrindingType("Filtered");
                        setSelectGrindingType("");
                      }}
                    >
                      Filtered
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setGrindingType("French");
                        setSelectGrindingType("");
                      }}
                    >
                      French
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setGrindingType("Moka");
                        setSelectGrindingType("");
                      }}
                    >
                      Moka
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
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
                          count > 0
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
                          10
                            ? () => {
                                setCount((prev) => ++prev);
                                setAddToCartMessage("");
                              }
                            : () => {
                                setCount(
                                  10 -
                                    cart.filter(
                                      (cartProduct) =>
                                        cartProduct.productName ===
                                        product.productName
                                    )[0].quantity
                                );
                                setCounterMessage(
                                  "You've reached the maximum amount of the same product allowed in one order."
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
                          count > 0
                            ? () => setCount((prev) => --prev)
                            : () => setCount(0)
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
                          count < 10
                            ? () => {
                                setCount((prev) => ++prev);
                                setAddToCartMessage("");
                              }
                            : () => {
                                setCount(10);
                                setAddToCartMessage("");
                                setCounterMessage(
                                  "You've reached the maximum amount of the same product allowed in one order."
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
                  onClick={
                    grindingType !== "Choose an option"
                      ? () => {
                          dispatch({
                            type: "ADD_ITEM",
                            payload: {
                              quantity: count,
                              productName: product.productName,
                              price: product.price,
                              picture: product.picture,
                              grindingType: grindingType,
                            },
                          });
                          setCount(0);
                          setCounterMessage("");
                          setAddToCartMessage(
                            "Product added to cart correctly."
                          );
                          setSelectGrindingType("");
                          setGrindingType("Choose an option");
                        }
                      : () =>
                          setSelectGrindingType(
                            "Please select a grinding type."
                          )
                  }
                  variant="secondary"
                  className="my-3 rounded-pill px-4"
                >
                  Add to cart
                </Button>
              </form>
              <p className="text-danger">{counterMessage}</p>
              <p className="text-success">{addToCartMessage}</p>
              <p className="text-danger">{selectGrindingType}</p>
              <p className="mt-3">
                ORIGIN
                <br />
                <strong>{product.origin}</strong>
              </p>
              <p className="mt-3">
                FARM
                <br />
                <strong>{product.farm}</strong>
              </p>
              <p className="mt-3">
                NOTES
                <br />
                <strong>{product.notes}</strong>
              </p>
              <p className="mt-3">
                VARIETY
                <br />
                <strong>{product.variety}</strong>
              </p>
              <p className="mt-3">
                HEIGHT
                <br />
                <strong>{product.height}</strong>
              </p>
              <p className="mt-3">
                PROCESS
                <br />
                <strong>{product.process}</strong>
              </p>
              <p className="mt-3 mb-5">
                RATING
                <br />
                <strong>{product.rating}</strong>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default DetailedProduct;
