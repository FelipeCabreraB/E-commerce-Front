import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function FixedButton({ hideButton, setHideButton }) {
  return (
    <>
      {hideButton === true ? (
        ""
      ) : (
        <div id="fixed-button">
          <Link to="/about-this-project">
            <Button className="border border-2" variant="light">
              <strong>ABOUT THIS PROJECT</strong>
            </Button>
          </Link>

          <Button
            className="border border-2"
            variant="light"
            onClick={() => setHideButton(true)}
          >
            <i class="fas fa-times"></i>
          </Button>
        </div>
      )}
    </>
  );
}

export default FixedButton;
