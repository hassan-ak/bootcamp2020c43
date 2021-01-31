import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51IFmaEEKbjR9lGIBPgyCVzUgtqE5CmDfl85dn8CzauY9GfbqwMfSpvORr9MxmDEP5PmWSuQoa6qR99czaRvwESh500huXBL1AJ")

export default function Home() {
 
  const redirectToCheckout = async()=>{
    const stripe = await stripePromise;
    const result = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: "price_1IFmpxEKbjR9lGIBEk9T5OKD", quantity: 1 }],
      successUrl: `http://localhost:8888/payment-success/`,
      cancelUrl: `http://localhost:8888/payment-error`,
    })

  }

  return (
    <div>
      <div>Hello world!</div>
      <button onClick={redirectToCheckout}>Checkout</button>
    </div>
    
  )
}
