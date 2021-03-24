import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { graphql, useStaticQuery } from "gatsby";

const stripePromise = loadStripe(
  "pk_test_51IFmaEEKbjR9lGIBPgyCVzUgtqE5CmDfl85dn8CzauY9GfbqwMfSpvORr9MxmDEP5PmWSuQoa6qR99czaRvwESh500huXBL1AJ"
);

export default function ProductList({ location }) {
  const data = useStaticQuery(
    graphql`
      query ProductPrices {
        prices: allStripePrice {
          edges {
            node {
              id
              active
              currency
              unit_amount
              product {
                id
                name
                images
              }
            }
          }
        }
      }
    `
  );
  console.log("Stripe Data = ", data);

  const redirectToCheckout = async (id) => {
    const stripe = await stripePromise;
    const result = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: id, quantity: 1 }],
      successUrl: `${location.origin}/payment-success/`,
      cancelUrl: `${location.origin}/payment-error`,
    });
  };

  return (
    <div>
      <h1>Product List</h1>
      {data.prices.edges.map((node) => (
        <div key={node.node.id}>
          <div>Product Name: {node.node.product.name}</div>
          <div>Product Price: {node.node.unit_amount}</div>
          <div>
            <img width='200px' src={node.node.product.images[0]} alt='' />{" "}
          </div>
          <button
            onClick={() => {
              redirectToCheckout(node.node.id);
            }}
          >
            Checkout
          </button>
        </div>
      ))}
    </div>
  );
}
