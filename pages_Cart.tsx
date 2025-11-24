import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, total, itemCount } = useCart();

  // Indian context constants
  const SHIPPING_COST = 999;
  const GST_RATE = 0.18; // 18% GST

  if (itemCount === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 p-4">
        <div className="text-center">
          <h2 className="text-3xl font-serif text-stone-800 mb-4">Your cart is empty</h2>
          <p className="text-stone-500 mb-8">Looks like you haven't added any unique pieces yet.</p>
          <Link to="/shop" className="bg-wood-600 text-white px-6 py-3 rounded hover:bg-wood-700 transition">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold font-serif text-stone-900 mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {items.map(item => (
                <li key={item.id} className="p-6 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3><Link to={`/product/${item.id}`}>{item.name}</Link></h3>
                      <p className="ml-4">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{item.material}</p>
                    <div className="flex items-center justify-between text-sm mt-4">
                      <div className="flex items-center border border-gray-300 rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        >-</button>
                        <span className="px-3 py-1 text-gray-900 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        >+</button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="font-medium text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
            <h2 className="text-lg font-medium text-stone-900 mb-6 font-serif">Order Summary</h2>
            <div className="flow-root">
              <dl className="-my-4 text-sm divide-y divide-gray-200">
                <div className="py-4 flex items-center justify-between">
                  <dt className="text-gray-600">Subtotal</dt>
                  <dd className="font-medium text-gray-900">₹{total.toLocaleString('en-IN')}</dd>
                </div>
                <div className="py-4 flex items-center justify-between">
                  <dt className="text-gray-600">Shipping Estimate</dt>
                  <dd className="font-medium text-gray-900">₹{SHIPPING_COST.toLocaleString('en-IN')}</dd>
                </div>
                <div className="py-4 flex items-center justify-between">
                  <dt className="text-gray-600">GST (18%)</dt>
                  <dd className="font-medium text-gray-900">₹{(total * GST_RATE).toLocaleString('en-IN')}</dd>
                </div>
                <div className="py-4 flex items-center justify-between border-t border-gray-200">
                  <dt className="text-base font-bold text-gray-900">Order Total</dt>
                  <dd className="text-base font-bold text-wood-700">₹{(total + SHIPPING_COST + total * GST_RATE).toLocaleString('en-IN')}</dd>
                </div>
              </dl>
            </div>
            <div className="mt-6">
              <Link
                to="/checkout"
                className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-wood-600 hover:bg-wood-700 transition"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;