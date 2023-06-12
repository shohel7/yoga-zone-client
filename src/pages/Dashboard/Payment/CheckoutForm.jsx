import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import "./CheckoutForm.css";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const CheckoutForm = ({ closeModal, item }) => {
  console.log(item.price);
  const price = item.price;
  const { user } = useAuth();
  // const [axiosSecure] = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  // useEffect(() => {
  //   console.log(price);
  //   // if (price > 0) {
  //   fetch("https://yoga-zone-server.vercel.app/create-payment-intent", {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(price),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.clientSecret);
  //       setClientSecret(data.clientSecret);
  //     });
  //   // }
  // }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment method", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    //   if (confirmError) {
    //     console.log(confirmError);
    //   }
    //   console.log(paymentIntent);

    if (confirmError) {
      console.log(confirmError);
    }

    console.log("payment intent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // save payment information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: cart.length,
        cartItems: cart.map((item) => item._id),
        menuItems: cart.map((item) => item.menuItemId),
        status: "service pending",
        itemNames: cart.map((item) => item.name),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.result.insertedId) {
          // display confirm
        }
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {/* <button type="submit" className="btn mt-3" disabled={!stripe}>
          Pay
        </button> */}
        <div className="modal-action flex justify-around">
          {/* if there is a button in form, it will close the modal */}
          <button
            disabled={!stripe || !clientSecret}
            type="submit"
            className="btn"
          >
            Payment
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-600 ml-8 mt-3">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
