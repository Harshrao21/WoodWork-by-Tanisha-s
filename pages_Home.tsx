import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-stone-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80"
            alt="Workshop background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-serif mb-6">
            Crafted for Indian Homes. <br/> Designed for You.
          </h1>
          <p className="mt-6 text-xl text-stone-300 max-w-3xl">
            Discover our collection of ethically sourced, handcrafted wood furniture.
            Timeless designs that bring the warmth of nature into your modern home.
          </p>
          <div className="mt-10">
            <Link
              to="/shop"
              className="inline-block bg-wood-600 border border-transparent py-3 px-8 rounded-md font-medium text-white hover:bg-wood-700 transition-colors"
            >
              Shop Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-stone-900 font-serif mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Living Room', 'Bedroom', 'Dining'].map((cat, idx) => (
             <Link to={`/shop?category=${cat}`} key={idx} className="group relative h-64 rounded-lg overflow-hidden cursor-pointer">
                <img
                  src={`https://images.unsplash.com/photo-${idx === 0 ? '1555041469-a586c61ea9bc' : idx === 1 ? '1505693542198-f4597871340c' : '1617806118233-18e1de247200'}?auto=format&fit=crop&w=600&q=80`}
                  alt={cat}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                    <h3 className="text-white text-2xl font-bold font-serif">{cat}</h3>
                </div>
             </Link>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-end mb-8">
              <h2 className="text-3xl font-bold text-stone-900 font-serif">Featured Arrivals</h2>
              <Link to="/shop" className="text-wood-600 hover:text-wood-800 font-medium">View All &rarr;</Link>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <div key={product.id} className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                  <div className="w-full h-64 overflow-hidden relative bg-gray-200">
                     <img
                       src={product.image}
                       alt={product.name}
                       className="w-full h-full object-cover object-center group-hover:opacity-90"
                     />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-lg font-medium text-stone-900 font-serif mb-1">
                      <Link to={`/product/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-stone-500 mb-2">{product.category}</p>
                    <div className="mt-auto flex justify-between items-center">
                      <p className="text-lg font-bold text-wood-700">₹{product.price.toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Newsletter / Story */}
      <div className="bg-wood-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white font-serif mb-4">Join the WoodWork Family</h2>
            <p className="text-wood-200 max-w-2xl mx-auto mb-8">
                Subscribe to receive updates on new collections, exclusive wood care tips from our master artisans, and special offers.
            </p>
            <div className="max-w-md mx-auto flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 min-w-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 border border-transparent rounded-l-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-wood-800 focus:ring-white"
                />
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-r-md text-wood-900 bg-wood-100 hover:bg-wood-200 focus:outline-none">
                    Subscribe
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;