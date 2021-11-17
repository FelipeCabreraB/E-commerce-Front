import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./ProductList.css";
import ProductDetails from "./ProductDetails";
import { Spinner } from "react-bootstrap";

function ProductList({ categoryId }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async (ev) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL_BACKEND}/products/${categoryId}`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div clasName="mb-5">
      <div className="container text-center mb-5">
        <div className="row">
          {products.length > 0 ? (
            products.map((product) => (
              <div className="col-md-4">
                <ProductDetails product={product} key={product.id} />
              </div>
            ))
          ) : (
            <div style={{ marginBottom: "80px", marginTop: "50px" }}>
              <Spinner animation="border" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
