import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

type PaymentMethod = 'upi' | 'card' | 'wallet' | 'cod';

const Checkout: React.FC = () => {
  const { total, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');

  const SHIPPING_COST = 999;
  const GST_RATE = 0.18;
  const grandTotal = total + SHIPPING_COST + total * GST_RATE;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      alert("Order placed successfully! Thank you for choosing WoodWork by Tanisha's.");
      navigate('/');
    }, 2000);
  };

  if (total === 0) return <div className="p-10 text-center">Your cart is empty.</div>;

  return (
    <div className="bg-stone-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold font-serif text-stone-900 mb-8 text-center">Secure Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="md:col-span-2 space-y-6">
             <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
              {/* Shipping Details */}
              <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Shipping Information</h3>
                  <p className="mt-1 text-sm text-gray-500">Delivering to Indian Pincodes.</p>
                </div>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">First name</label>
                    <input type="text" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-wood-500 focus:border-wood-500 sm:text-sm" />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">Last name</label>
                    <input type="text" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-wood-500 focus:border-wood-500 sm:text-sm" />
                  </div>
                  <div className="col-span-6">
                    <label className="block text-sm font-medium text-gray-700">Street address</label>
                    <input type="text" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-wood-500 focus:border-wood-500 sm:text-sm" />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">City</label>
                    <input type="text" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-wood-500 focus:border-wood-500 sm:text-sm" />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">State</label>
                    <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-wood-500 focus:border-wood-500 sm:text-sm">
                        <option>Maharashtra</option>
                        <option>Delhi</option>
                        <option>Karnataka</option>
                        <option>Tamil Nadu</option>
                        <option>Uttar Pradesh</option>
                        <option>Other</option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">PIN Code</label>
                    <input type="text" required pattern="[0-9]{6}" title="Six digit PIN code" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-wood-500 focus:border-wood-500 sm:text-sm" />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                     <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                     <div className="mt-1 flex rounded-md shadow-sm">
                       <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                         +91
                       </span>
                       <input type="tel" required pattern="[0-9]{10}" className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-wood-500 focus:border-wood-500 sm:text-sm" placeholder="10-digit mobile number" />
                     </div>
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Payment Method</h3>
                  <p className="mt-1 text-sm text-gray-500">Select your preferred payment mode.</p>
                </div>
                
                {/* Payment Tabs */}
                <div className="flex space-x-4 mb-6 border-b border-gray-200 pb-2 overflow-x-auto">
                    <button type="button" onClick={() => setPaymentMethod('card')} className={`pb-2 px-1 text-sm font-medium whitespace-nowrap ${paymentMethod === 'card' ? 'border-b-2 border-wood-600 text-wood-600' : 'text-gray-500 hover:text-gray-700'}`}>
                        Credit/Debit Card
                    </button>
                    <button type="button" onClick={() => setPaymentMethod('upi')} className={`pb-2 px-1 text-sm font-medium whitespace-nowrap ${paymentMethod === 'upi' ? 'border-b-2 border-wood-600 text-wood-600' : 'text-gray-500 hover:text-gray-700'}`}>
                        UPI
                    </button>
                    <button type="button" onClick={() => setPaymentMethod('wallet')} className={`pb-2 px-1 text-sm font-medium whitespace-nowrap ${paymentMethod === 'wallet' ? 'border-b-2 border-wood-600 text-wood-600' : 'text-gray-500 hover:text-gray-700'}`}>
                        Wallets
                    </button>
                </div>

                <div className="mt-4">
                  {paymentMethod === 'card' && (
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6">
                        <label className="block text-sm font-medium text-gray-700">Card number</label>
                        <input type="text" placeholder="0000 0000 0000 0000" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-wood-500 focus:border-wood-500 sm:text-sm" />
                      </div>
                      <div className="col-span-3">
                        <label className="block text-sm font-medium text-gray-700">Expiration date (MM/YY)</label>
                        <input type="text" placeholder="MM/YY" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-wood-500 focus:border-wood-500 sm:text-sm" />
                      </div>
                      <div className="col-span-3">
                        <label className="block text-sm font-medium text-gray-700">CVC</label>
                        <input type="text" placeholder="123" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-wood-500 focus:border-wood-500 sm:text-sm" />
                      </div>
                      <div className="col-span-6 flex items-center space-x-2 mt-2">
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded border">Visa</span>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded border">MasterCard</span>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded border">RuPay</span>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'upi' && (
                      <div className="space-y-4">
                          <div>
                              <label className="block text-sm font-medium text-gray-700">Enter UPI ID</label>
                              <input type="text" placeholder="username@oksbi" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-wood-500 focus:border-wood-500 sm:text-sm" />
                              <p className="mt-1 text-xs text-gray-500">Google Pay, PhonePe, Paytm, BHIM</p>
                          </div>
                          <div className="flex space-x-2">
                             <div className="h-8 px-3 bg-gray-100 border rounded flex items-center text-xs font-bold text-gray-600">GPay</div>
                             <div className="h-8 px-3 bg-gray-100 border rounded flex items-center text-xs font-bold text-gray-600">PhonePe</div>
                             <div className="h-8 px-3 bg-gray-100 border rounded flex items-center text-xs font-bold text-gray-600">Paytm</div>
                          </div>
                      </div>
                  )}

                  {paymentMethod === 'wallet' && (
                      <div className="space-y-3">
                          <div className="flex items-center">
                              <input id="paytm-wallet" name="wallet" type="radio" className="focus:ring-wood-500 h-4 w-4 text-wood-600 border-gray-300" defaultChecked />
                              <label htmlFor="paytm-wallet" className="ml-3 block text-sm font-medium text-gray-700">Paytm Wallet</label>
                          </div>
                          <div className="flex items-center">
                              <input id="phonepe-wallet" name="wallet" type="radio" className="focus:ring-wood-500 h-4 w-4 text-wood-600 border-gray-300" />
                              <label htmlFor="phonepe-wallet" className="ml-3 block text-sm font-medium text-gray-700">PhonePe Wallet</label>
                          </div>
                          <div className="flex items-center">
                              <input id="amazon-pay" name="wallet" type="radio" className="focus:ring-wood-500 h-4 w-4 text-wood-600 border-gray-300" />
                              <label htmlFor="amazon-pay" className="ml-3 block text-sm font-medium text-gray-700">Amazon Pay Balance</label>
                          </div>
                      </div>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="md:col-span-1">
             <div className="bg-white shadow rounded-lg p-6 sticky top-24">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
                <div className="flow-root">
                  <dl className="-my-4 text-sm divide-y divide-gray-200">
                    <div className="py-4 flex items-center justify-between">
                      <dt className="text-gray-600">Subtotal</dt>
                      <dd className="font-medium text-gray-900">₹{total.toLocaleString('en-IN')}</dd>
                    </div>
                    <div className="py-4 flex items-center justify-between">
                      <dt className="text-gray-600">Shipping</dt>
                      <dd className="font-medium text-gray-900">₹{SHIPPING_COST.toLocaleString('en-IN')}</dd>
                    </div>
                    <div className="py-4 flex items-center justify-between">
                      <dt className="text-gray-600">GST (18%)</dt>
                      <dd className="font-medium text-gray-900">₹{(total * GST_RATE).toLocaleString('en-IN')}</dd>
                    </div>
                    <div className="py-4 flex items-center justify-between border-t border-gray-200">
                      <dt className="text-base font-bold text-gray-900">Total</dt>
                      <dd className="text-base font-bold text-wood-700">₹{grandTotal.toLocaleString('en-IN')}</dd>
                    </div>
                  </dl>
                </div>
                <div className="mt-6">
                    <button
                    type="submit"
                    form="checkout-form"
                    disabled={isProcessing}
                    className={`w-full bg-wood-600 border border-transparent rounded-md shadow-sm py-3 px-6 inline-flex justify-center items-center text-base font-medium text-white hover:bg-wood-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wood-500 ${isProcessing ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                    {isProcessing ? (
                        <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                        </>
                    ) : `Pay ₹${grandTotal.toLocaleString('en-IN')}`}
                    </button>
                    <p className="mt-4 text-xs text-center text-gray-500">
                        By placing this order, you agree to WoodWork by Tanisha's <a href="#" className="text-wood-600 underline">Terms of Service</a> and <a href="#" className="text-wood-600 underline">Privacy Policy</a>.
                    </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;