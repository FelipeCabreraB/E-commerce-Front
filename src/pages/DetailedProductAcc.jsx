import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Container, Dropdown, Row, Col, Button } from "react-bootstrap";
import Counter from "../components/Counter";
import { useParams } from "react-router";

function DetailedProductAcc() {
  const [product, setProduct] = useState([]);
  const params = useParams();

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

              <form className="d-flex">
                <Counter />
                <Button variant="secondary" className="my-3 rounded-pill px-4">
                  Add to cart
                </Button>
              </form>

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
      </div>
    </>
  );
}

export default DetailedProductAcc;
