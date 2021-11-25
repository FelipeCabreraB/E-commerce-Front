import React from "react";
import { Link } from "react-router-dom";

function FixedButton({ hideButton, setHideButton }) {
  return (
    <>
      {hideButton === true ? (
        ""
      ) : (
        <div id="fixed-button">
          <Link to="/about-this-project">
            <button className="fixedButton">
              <strong>ABOUT THIS PROJECT</strong>
            </button>
          </Link>
          <button className="fixedButton2" onClick={() => setHideButton(true)}>
            <i class="fas fa-times"></i>
          </button>
        </div>
      )}
    </>
  );
}

export default FixedButton;
