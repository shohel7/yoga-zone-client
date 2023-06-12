import React from "react";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// TODO: import.meta.env.VITE_Payment_Gateway_PK
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = ({ closeModal, item }) => {
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg text-center text-gray-600 mb-5">
            Please Proceed payment
          </h3>
          <Elements stripe={stripePromise}>
            <CheckoutForm closeModal={closeModal} item={item} />
          </Elements>
          <button className="btn">Close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Payment;
