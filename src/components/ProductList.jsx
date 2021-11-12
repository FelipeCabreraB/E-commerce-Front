import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./ProductList.css";
import ProductDetails from "./ProductDetails";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async (ev) => {
      try {
        const response = await axios.get(`http://localhost:8888/products`, {
          headers: { "Content-Type": "application/json" },
        });
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
            <p className="text-center">Lo siento no hay productos</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
