import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart, clearCart, fetchCart, removeCourseFromCart, fetchCartByClientId } from '../../redux/cartSlice';
import Header from '../layout/header.jsx';
import FooterPage from '../layout/footerPages.jsx';
import { Link } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../payment/checkout';

const stripePromise = loadStripe('pk_test_51PL0xDRwmrKMd7zLBpbOLYaoiIYMJeGsSBhSHlbqzcznom6yzAfVwXhZrX4b0tAxELOInSm9EmLYS3rL2KQ76jMa00HBC7L8R0');

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.students);
  const { courses, totalPrice, client } = useSelector((state) => state.cart);
  const [showPaymentPage, setShowPaymentPage] = useState(false);

  useEffect(() => {
    if (students._id) {
      dispatch(fetchCartByClientId(students._id));
    }
  }, [dispatch, students._id]);

  const handleRemoveCourse = (courseId) => {
    dispatch(removeCourseFromCart({ client: students._id, courseId }));
  };

  const handleProceedToCheckout = () => {
    setShowPaymentPage(true);
  };

  const handleClosePaymentPage = () => {
    setShowPaymentPage(false);
  };

  if (!courses) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <section className="bg-white py-8 w-full px-10 antialiased dark:bg-gray-900 md:py-16">
        <div className="max-w-screen-xl mx-auto px-4 2xl:px-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-4xl mb-8 flex items-center">
            <svg
              className="h-6 w-6 text-gray-900 dark:text-white mr-2"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 3h18l-2 13H5L3 3zm0 0L1 5v2h22V5l-2-2z" />
              <path d="M6 21a2 2 0 11-4 0 2 2 0 014 0zm16 0a2 2 0 11-4 0 2 2 0 014 0zM5 8h14M5 12h14M5 16h14" />
            </svg>
            Shopping Cart
          </h2>
          <div className="flex flex-wrap lg:flex-nowrap lg:gap-6">
            <div className="w-full lg:w-3/4 space-y-6">
              {courses.map((course) => (
                <div key={course._id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                  <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <a href="#" className="shrink-0 md:order-1">
                      <img className="h-20 w-20" src={course.Image} alt={course.Title} />
                    </a>
                    <div className="flex items-center justify-between md:order-3 md:justify-end">
                      <div className="text-end md:order-4 md:w-32">
                        <p className="text-base font-bold text-gray-900 dark:text-white">${course.Price}</p>
                      </div>
                    </div>
                    <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                      <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">{course.Title}</a>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                          onClick={() => handleRemoveCourse(course._id)}
                        >
                          <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L17.94 6M18 18L6.06 6" />
                          </svg>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full lg:w-1/4">
              <div className="space-y-4 mb-6">
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="text-base font-medium text-gray-900 dark:text-white">Subtotal</p>
                      <p className="text-end text-base font-medium text-gray-900 dark:text-white">${totalPrice}</p>
                    </div>
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-lg bg-gray-900 px-4 py-4 text-base font-semibold text-white transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800"
                      onClick={handleProceedToCheckout}
                    >
                      Proceed to Checkout
                    </button>
                    <Link
                      to="/usersPg/CoursesPage"
                      className="block text-center mt-4 text-sm font-medium text-gray-900 underline hover:underline dark:text-white"
                    >
                    Or Continue Shopping
                    </Link>
                    <label className="block font-medium text-gray-900 dark:text-white" htmlFor="promo-code">
                      Promo Code
                    </label>
                    <input
                      type="text"
                      id="promo-code"
                      className="w-full rounded-lg border border-gray-300 p-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      placeholder="Enter promo code"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showPaymentPage && (
        <section className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <button onClick={handleClosePaymentPage} className="float-right text-gray-500 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-xl font-semibold mb-4">Payment</h2>
            <Elements stripe={stripePromise}>
              <CheckoutForm clientId={students._id} totalPrice={totalPrice} />
            </Elements>
          </div>
        </section>
      )}
      <FooterPage />
    </>
  );
};

export default ShoppingCart;
