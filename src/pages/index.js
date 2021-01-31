// Imports
// React Imports
import React from "react";
// Stripe js Imports
import { loadStripe } from "@stripe/stripe-js";

// Configure stripe store
const stripePromise = loadStripe("pk_test_51IFmaEEKbjR9lGIBPgyCVzUgtqE5CmDfl85dn8CzauY9GfbqwMfSpvORr9MxmDEP5PmWSuQoa6qR99czaRvwESh500huXBL1AJ")

// Page Exports
export default function Home({location}) {
 
  // On Checkout Function
  const redirectToCheckout = async()=>{
    // load stripe from configration
    const stripe = await stripePromise;
    // Function to be execyted while checkout
    const result = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: "price_1IFmpxEKbjR9lGIBEk9T5OKD", quantity: 1 },
                  { price: "price_1IFmnREKbjR9lGIBfLo3GnbE", quantity: 2 }],
      successUrl: `${location.origin}/payment-success/`,
      cancelUrl: `${location.origin}/payment-error`,
    })

  }

  return (
    <div>
      <div>Hello world!</div>
      <button onClick={redirectToCheckout}>Checkout</button>
    </div>
    
  )
}
