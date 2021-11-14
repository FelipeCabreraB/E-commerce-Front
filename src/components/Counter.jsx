import { useState } from "react";

function Counter({ count, setCount }) {
  return (
    <div className="align-self-center mt-3 me-3">
      <div className="input-group mb-3 align-self-center">
        <button
          className="btn btn-outline-secondary btn-block px-1"
          style={{ outline: "none", boxShadow: "none" }}
          type="button"
          onClick={
            count > 0 ? () => setCount((prev) => --prev) : () => setCount(0)
          }
        >
          <i class="fas fa-minus"></i>
        </button>
        <input
          type="text"
          className="text-center form-control"
          value={count}
          style={{ maxWidth: "41px" }}
        />
        <button
          className="btn btn-outline-secondary px-1"
          style={{ outline: "none", boxShadow: "none" }}
          type="button"
          onClick={
            count < 10 ? () => setCount((prev) => ++prev) : () => setCount(10)
          }
        >
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
}

export default Counter;
