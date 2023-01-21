import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch } from "../../app/store/configureStore";
import { setBasket } from "../basket/basketSlice";
import CheckoutPage from "./CheckoutPage";

const stripePromise = loadStripe("pk_test_RattEfDluUm29dBhDp9NDDQJ00X0QWPcDl");

export default function CheckoutWrapper() {
  const dispath = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.PaymentIntent.createPaymentIntent()
      .then((basket) => dispath(setBasket(basket)))
      .catch((err) => console.log("error get paymentintent id", err))
      .finally(() => setLoading(false));
  }, [dispath]);

  if (loading) return <LoadingComponent message="Loading checkout" />;
  return (
    <Elements stripe={stripePromise}>
      <CheckoutPage />
    </Elements>
  );
}
