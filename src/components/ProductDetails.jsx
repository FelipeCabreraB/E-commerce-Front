import React from "react";
import { Link } from "react-router-dom";
import "./ProductDetails.css";

const product = [
  {
    id: 1,
    name: "Sabanera",
    price: "550",
    image:
      "https://cultocafe.uy/wp-content/uploads/2020/03/DSC09435-600x750.jpg",
  },
  {
    id: 2,
    name: "Mamba Negra",
    price: "750",
    image:
      "https://cultocafe.uy/wp-content/uploads/2020/03/DSC09429-600x750.jpg",
  },
  {
    id: 3,
    name: "Naja",
    price: "650",
    image:
      "https://cultocafe.uy/wp-content/uploads/2020/03/DSC09428-600x750.jpg",
  },
  {
    id: 4,
    name: "Cascabel",
    price: "500",
    image:
      "https://cultocafe.uy/wp-content/uploads/2020/03/DSC09427-600x750.jpg",
  },
  {
    id: 5,
    name: "Cascabel",
    price: "500",
    image:
      "https://cultocafe.uy/wp-content/uploads/2020/03/DSC09427-600x750.jpg",
  },
  {
    id: 6,
    name: "Cascabel",
    price: "500",
    image:
      "https://cultocafe.uy/wp-content/uploads/2020/03/DSC09427-600x750.jpg",
  },
];

function ProductDetails(product) {
  console.log(product);
  return (
    <div className="movie text-center">
      <Link
        style={{ textDecoration: "none" }}
        to={`/product/${product.product.name}`}
      >
        <div className="product-details">
          <img
            className="mt-5 img-fluid"
            src={product.product.image}
            alt={product.product.name}
          />
          <h3 className="productName mt-3">{product.product.name}</h3>
        </div>
      </Link>
      <p className="productPrice">{product.product.price}</p>
      <Link to="/cart" className="productAddToCart">
        {" "}
        ADD TO CART
      </Link>
    </div>
  );
}

export default ProductDetails;
