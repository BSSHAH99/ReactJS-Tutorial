import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import PaymentsForm from "./PaymentsForm";

const PUBLIC_KEY =
  "pk_test_51LSvw0SBWyAI63IMs7nk5mJzCYcuVynlPRI5G9FdEfivPeP2dKyKUZ2jk8TcTHOgJ0Wa6XGGjY6Xv6NQeXvIcRWi007HBYCKc7";

const stripePromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <PaymentsForm />
      </Elements>
    </div>
  );
};

export default StripeContainer;
