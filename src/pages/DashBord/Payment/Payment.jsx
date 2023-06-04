import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../hooks/useCart";


// to Provide publish key
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item)=> sum+ item.price, 0);
    const price = parseFloat(total.toFixed(2));

    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK_S);
    return (
        <div>
            <SectionTitle subHeading="Please Process" heading="Payment"></SectionTitle>
            payment koi gela teka pakhi
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;