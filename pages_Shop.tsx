import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../constants';
import { useCart } from '../context/CartContext';

const Shop: React.FC = () => {
  const { addToCart } = useCart();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'All';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  // Adjusted range for INR pricing (0 to 1 Lakh)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchPrice && matchSearch;
    });
  }, [selectedCategory, priceRange, searchQuery]);

  return (
    <div className="bg-stone-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-stone-900 font-serif mb-8">Shop Collection</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0 space-y-8">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Search</label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-wood-500 focus:border-wood-500 sm:text-sm"
              />
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-medium text-stone-900 font-serif mb-4">Categories</h3>
              <ul className="space-y-3">
                <li>
                   <button
                     onClick={() => setSelectedCategory('All')}
                     className={`text-sm ${selectedCategory === 'All' ? 'text-wood-600 font-bold' : 'text-stone-600 hover:text-wood-600'}`}
                   >
                     All Products
                   </button>
                </li>
                {CATEGORIES.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-sm ${selectedCategory === cat ? 'text-wood-600 font-bold' : 'text-stone-600 hover:text-wood-600'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Range */}
             <div>
              <h3 className="text-lg font-medium text-stone-900 font-serif mb-4">Price Range (₹)</h3>
              <div className="flex items-center space-x-2">
                 <input
                   type="number"
                   value={priceRange[0]}
                   onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                   className="w-20 border border-gray-300 rounded-md p-1 text-sm"
                 />
                 <span className="text-stone-500">-</span>
                 <input
                   type="number"
                   value={priceRange[1]}
                   onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                   className="w-20 border border-gray-300 rounded-md p-1 text-sm"
                 />
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
             {filteredProducts.length === 0 ? (
               <div className="text-center py-20 bg-white rounded-lg shadow-sm">
                 <p className="text-stone-500 text-lg">No products found matching your criteria.</p>
                 <button onClick={() => {setSelectedCategory('All'); setSearchQuery(''); setPriceRange([0, 100000])}} className="mt-4 text-wood-600 hover:underline">Clear Filters</button>
               </div>
             ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full border border-gray-100">
                      <Link to={`/product/${product.id}`} className="block relative h-64 overflow-hidden bg-gray-200">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </Link>
                      <div className="p-4 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs text-wood-600 uppercase tracking-wide font-bold">{product.category}</span>
                            <div className="flex text-yellow-400 text-xs">
                               {'★'.repeat(Math.round(product.rating))}
                               <span className="text-gray-300">{'★'.repeat(5 - Math.round(product.rating))}</span>
                            </div>
                        </div>
                        <Link to={`/product/${product.id}`} className="block">
                             <h3 className="text-lg font-medium text-stone-900 font-serif mb-2 hover:text-wood-600 transition-colors">{product.name}</h3>
                        </Link>
                        <p className="text-sm text-stone-500 line-clamp-2 mb-4 flex-grow">{product.description}</p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                          <span className="text-xl font-bold text-stone-900">₹{product.price.toLocaleString('en-IN')}</span>
                          <button
                            onClick={() => addToCart(product)}
                            className="bg-stone-900 hover:bg-wood-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;