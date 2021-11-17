import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function FixedButton() {
  return (
    <div id="fixed-button">
      <Link to="/about-this-project">
        <Button className="border border-2" variant="light">
          <strong>ABOUT THIS PROJECT</strong>
        </Button>
      </Link>
    </div>
  );
}

export default FixedButton;
