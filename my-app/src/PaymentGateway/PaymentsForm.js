import React from "react";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      lineHeight: "27px",
      color: "#212529",
      fontSize: "1.1rem",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

const PaymentsForm = () => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  // console.log('stripe :>> ', stripe);
  // console.log('elements :>> ', elements);

  const hendlelSubmit = async (e) => {
    e.preventDefault()
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement)
    })

    if (!error) {
      try {
        console.log('success :>> ', success);
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:3000/payment", {
          amount: 10,
          id
        });
        if (response.data.success) {
          console.log("Success Payment :>> ");
          setSuccess(true);
        }
      } catch (error) {
        console.log("error :>> ", error);
      }
    } else {
      console.log("error.message :>> ", error.message);
    }
  };
  return (
    <>
      {!success ? (
        <>
          <div className="container my-3">
            <div className="container">
              <form className="row g-3" onSubmit={hendlelSubmit}>
                <fieldset className="FormGroup">
                  <div className="FormRow">
                    <CardElement options={CARD_ELEMENT_OPTIONS}></CardElement>
                  </div>
                  <button disabled={!stripe || !elements}>Pay</button>
                </fieldset>
                {/* <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div> */}
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2>Payments Successs</h2>
        </>
      )}
    </>
  );
};

export default PaymentsForm;
