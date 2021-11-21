import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div className="text-center my-5 py-5">
      <h1>
        <i className="far fa-window-close" style={{ fontSize: "5rem" }}></i>
      </h1>
      <h1 className="my-5 pb-5">Error 404: Page not found</h1>

      <Link style={{ textDecoration: "none", color: "black" }} to="/">
        <p className="mt-4 py-0 align-self-center">
          <i class="fas fa-less-than"></i> Return to home
        </p>
      </Link>
    </div>
  );
}

export default NoMatch;
