import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Container, Dropdown, Row, Col, Button } from "react-bootstrap";
import Counter from "../components/Counter";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";

function DetailedProduct() {
  const [product, setProduct] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getProduct = async (ev) => {
      try {
        const response = await axios.get(
          `http://localhost:8888/product/${params.productName}`,
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
                <Counter count={count} setCount={setCount} />
                <Button
                  onClick={() =>
                    dispatch({
                      type: "ADD_ITEM",
                      payload: {
                        quantity: count,
                        productName: product.productName,
                        price: product.price,
                        picture: product.picture,
                      },
                    })
                  }
                  variant="secondary"
                  className="my-3 rounded-pill px-4"
                >
                  Add to cart
                </Button>
              </form>

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
