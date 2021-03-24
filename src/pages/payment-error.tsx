import { navigate } from "gatsby";
import React from "react";

export default function paymentFail() {
  return (
    <div>
      <h1>Payment Failed</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        HOME
      </button>
    </div>
  );
}
