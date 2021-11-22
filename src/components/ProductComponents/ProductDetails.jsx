import React from "react";
import { Link } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails({ product }) {
  return (
    <div className="movie text-center">
      <Link
        style={{ textDecoration: "none" }}
        to={`/product/${product.categoryId}/${product.productName}`}
      >
        <div className="product-details">
          <img
            className="mt-5 img-fluid"
            src={
              "https://hxxxiarcaeviegtlscdm.supabase.in/storage/v1/object/public/culto-coffee-img/" +
              product.picture
            }
            alt={product.productName}
          />
          <h3 className="productName mt-3">{product.productName}</h3>
        </div>
      </Link>
      <p className="productPrice">$ {product.price}</p>
      <Link
        to={`/product/${product.categoryId}/${product.productName}`}
        className="productChoose"
      >
        CHOOSE OPTIONS
      </Link>
    </div>
  );
}

export default ProductDetails;
