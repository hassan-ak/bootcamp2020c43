import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51IFmaEEKbjR9lGIBPgyCVzUgtqE5CmDfl85dn8CzauY9GfbqwMfSpvORr9MxmDEP5PmWSuQoa6qR99czaRvwESh500huXBL1AJ"
);

export default function MutlipleProducts({ location }) {
  const redirectToCheckout = async () => {
    const stripe = await stripePromise;
    const result = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [
        { price: "price_1IFmpxEKbjR9lGIBEk9T5OKD", quantity: 1 },
        { price: "price_1IFmnREKbjR9lGIBfLo3GnbE", quantity: 1 },
      ],
      successUrl: `${location.origin}/payment-success/`,
      cancelUrl: `${location.origin}/payment-error`,
    });
  };

  return (
    <div>
      <h1>Multiple Products</h1>
      <button onClick={redirectToCheckout}>Checkout</button>
    </div>
  );
}
