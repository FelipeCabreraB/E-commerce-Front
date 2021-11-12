import React from "react";
import { Link } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails({ product }) {
  return (
    <div className="movie text-center">
      <Link
        style={{ textDecoration: "none" }}
        to={`/product/${product.productName}`}
      >
        <div className="product-details">
          <img
            className="mt-5 img-fluid"
            src={product.picture}
            alt={product.productName}
          />
          <h3 className="productName mt-3">{product.productName}</h3>
        </div>
      </Link>
      <p className="productPrice">$ {product.price}</p>
      <Link to={`/product/${product.productName}`} className="productChoose">
        {" "}
        CHOOSE OPTIONS
      </Link>
    </div>
  );
}

export default ProductDetails;
