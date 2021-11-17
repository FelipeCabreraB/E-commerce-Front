import React from "react";
import { Link } from "react-router-dom";

function PurchaseConfirmation() {
  return (
    <div className="purchase-confirmation">
      <div className="container">
        <div className="text-center mt-4 mb-4 py-4">
          <i class="fas fa-shopping-bag fa-2x"></i>
          <h2 className="py-3">Thank you for your order!</h2>

          <p>A confirmation has been sent to your email.</p>
          <p>
            Since you're here, check our stores of{" "}
            <Link to="/coffee">coffees</Link> and{" "}
            <Link to="/accessories">accesories</Link> for more options.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PurchaseConfirmation;
