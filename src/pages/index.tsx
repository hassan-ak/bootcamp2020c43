import React from "react";
import { navigate } from "gatsby";

export default function Home() {
  return (
    <div>
      <h1>Stripe CheckOut</h1>
      <hr />
      <button
        onClick={() => {
          navigate("integrateStripe");
        }}
      >
        Integrate Stripe
      </button>
      <hr />
      <button
        onClick={() => {
          navigate("mutlipleProds");
        }}
      >
        Multiple Products
      </button>
      <hr />
      <button
        onClick={() => {
          navigate("productlist");
        }}
      >
        Products List
      </button>
    </div>
  );
}
