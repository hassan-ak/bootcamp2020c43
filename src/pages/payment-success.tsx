import { navigate } from "gatsby";
import React from "react";

export default function paymentSuccess() {
  return (
    <div>
      <h1>Payment Succeeded</h1>
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
