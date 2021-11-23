import React from "react";
import { Link } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails({ product }) {
  return (
    <div className="movie text-center">
      {product.stock < 1 ? (
        <div>
          <div className="product-details">
            <img
              style={{ filter: "brightness(30%)" }}
              className="mt-5 img-fluid"
              src={
                "https://hxxxiarcaeviegtlscdm.supabase.in/storage/v1/object/public/culto-coffee-img/" +
                product.picture
              }
              alt={product.productName}
            />
            <Link
              style={{ textDecoration: "none" }}
              to={`/product/${product.categoryId}/${product.productName}`}
            >
              <h3 className="productName mt-3">{product.productName}</h3>
            </Link>
          </div>
          <p className="productPrice mb-0">$ {product.price}</p>
          <h3 className="text-danger">Out of stock</h3>{" "}
          <Link
            to={`/product/${product.categoryId}/${product.productName}`}
            className="productChoose"
          >
            CHOOSE OPTIONS
          </Link>
        </div>
      ) : (
        <div>
          {" "}
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
      )}
    </div>
  );
}

export default ProductDetails;
