import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51IFmaEEKbjR9lGIBPgyCVzUgtqE5CmDfl85dn8CzauY9GfbqwMfSpvORr9MxmDEP5PmWSuQoa6qR99czaRvwESh500huXBL1AJ"
);

export default function CheckOutSess() {
  const redirectToCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch("/.netlify/functions/checkout");
    const data = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: data.id,
    });
  };
  return (
    <div>
      <h1>CheckOut Session 1</h1>
      <button onClick={redirectToCheckout}>Checkout</button>
    </div>
  );
}
