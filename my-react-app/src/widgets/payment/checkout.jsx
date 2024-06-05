import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { enroll } from '../../redux/student/slice';
import { clearCart, fetchCartByClientId } from '../../redux/cartSlice';

const CheckoutForm = ({ clientId, totalPrice }) => {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.cart);
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [billingAddress, setBillingAddress] = useState({
    line1: '',
    line2: '',
    city: '',
    state: '',
    postal_code: '',
    country: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false); // New state for payment success

  useEffect(() => {
    if (clientId) {
      dispatch(fetchCartByClientId(clientId));
    }
  }, [clientId, dispatch]);

  const handleBillingAddressChange = (event) => {
    const { name, value } = event.target;
    setBillingAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setErrorMessage('');

    try {
      const { data: { clientSecret } } = await axios.post('http://localhost:3000/cart/create-payment-intent', { clientId });

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            email,
            name,
            address: billingAddress
          }
        }
      });

      if (paymentResult.error) {
        console.error(paymentResult.error.message);
        setErrorMessage(paymentResult.error.message);
      } else if (paymentResult.paymentIntent.status === 'succeeded') {
        console.log('Payment succeeded!');

        // Enroll the student in all courses in the cart
        const courseIdsInCart = courses.map(item => item._id);
        await dispatch(enroll({ studentId: clientId, courseId: courseIdsInCart.length === 1 ? courseIdsInCart[0] : courseIdsInCart }));

        // Clear the cart
        dispatch(clearCart());

        // Set payment success to true
        setPaymentSuccess(true);

        console.log('Enrollment and cart clearing succeeded!');
      } else {
        console.error('Payment not successful. Status:', paymentResult.paymentIntent.status);
        setErrorMessage('Payment not successful. Please try again.');
      }
    } catch (error) {
      console.error('Error during payment processing:', error);
      setErrorMessage('Error during payment processing. Please try again.');
    }

    setIsProcessing(false);
  };

  if (paymentSuccess) {
    return (
      <div className="flex items-center justify-center space-x-2">
        <svg
          className="h-12 w-12 text-green-500"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M9 12l2 2 4-4M7 12l-2 2 4 4M9 12L7 10l4-4m2 6l2 2 4-4m-2 2l-2 2m0 4l-4-4" />
        </svg>
        <span className="text-lg font-medium text-green-600">Payment Successful!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errorMessage && (
        <div className="text-red-500 text-sm">
          {errorMessage}
        </div>
      )}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-900 dark:text-white" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-gray-300 p-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-900 dark:text-white" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-gray-300 p-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-900 dark:text-white">
          Billing Address
        </label>
        <input
          type="text"
          name="line1"
          placeholder="Address Line 1"
          value={billingAddress.line1}
          onChange={handleBillingAddressChange}
          className="w-full rounded-lg border border-gray-300 p-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
        <input
          type="text"
          name="line2"
          placeholder="Address Line 2"
          value={billingAddress.line2}
          onChange={handleBillingAddressChange}
          className="w-full rounded-lg border border-gray-300 p-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={billingAddress.city}
          onChange={handleBillingAddressChange}
          className="w-full rounded-lg border border-gray-300 p-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={billingAddress.state}
          onChange={handleBillingAddressChange}
          className="w-full rounded-lg border border-gray-300 p-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
        <input
          type="text"
          name="postal_code"
          placeholder="Postal Code"
          value={billingAddress.postal_code}
          onChange={handleBillingAddressChange}
          className="w-full rounded-lg border border-gray-300 p-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={billingAddress.country}
          onChange={handleBillingAddressChange}
          className="w-full rounded-lg border border-gray-300 p-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-900 dark:text-white" htmlFor="card-element">
          Card Details
        </label>
        <CardElement
          id="card-element"
          className="w-full rounded-lg border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
      </div>
      <button
        type="submit"
        disabled={isProcessing}
        className="w-full rounded-lg bg-black px-4 py-2 text-white transition-all hover:bg-gray-800"
      >
        {isProcessing ? 'Processing...' : `Pay $${totalPrice}`}
      </button>
    </form>
  );
};

export default CheckoutForm;
