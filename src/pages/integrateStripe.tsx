import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51IFmaEEKbjR9lGIBPgyCVzUgtqE5CmDfl85dn8CzauY9GfbqwMfSpvORr9MxmDEP5PmWSuQoa6qR99czaRvwESh500huXBL1AJ"
);

export default function IntegrateStripe() {
  const redirectToCheckout = async () => {
    const stripe = await stripePromise;
    const result = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: "price_1IYQFKEKbjR9lGIBTSmcVcuA", quantity: 1 }],
      successUrl: `http://localhost:8888/payment-success/`,
      cancelUrl: `http://localhost:8888/payment-error`,
    });
  };

  return (
    <div>
      <h1>Integrate Stripe</h1>
      <button onClick={redirectToCheckout}>Checkout</button>
    </div>
  );
}
