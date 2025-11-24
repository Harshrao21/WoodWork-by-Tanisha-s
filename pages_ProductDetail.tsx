import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { getProductInsights } from '../services/geminiService';
import { DesignAdvice } from '../types';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === Number(id));

  const [advice, setAdvice] = useState<DesignAdvice | null>(null);
  const [isLoadingAdvice, setIsLoadingAdvice] = useState(false);

  // Fetch advice when product loads (simulate automatic or user-triggered)
  // Let's make it user-triggered to save tokens and show interactivity
  const handleGetAdvice = async () => {
    if (!product) return;
    setIsLoadingAdvice(true);
    const data = await getProductInsights(product.name, product.material);
    setAdvice(data);
    setIsLoadingAdvice(false);
  };

  if (!product) return <div className="p-10 text-center">Product not found.</div>;

  return (
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/shop" className="text-stone-500 hover:text-wood-600 mb-6 inline-block">&larr; Back to Shop</Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="rounded-lg overflow-hidden bg-gray-100 h-96 md:h-[600px]">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Info */}
          <div className="flex flex-col">
             <h1 className="text-3xl md:text-4xl font-bold text-stone-900 font-serif mb-2">{product.name}</h1>
             <p className="text-xl text-wood-600 font-medium mb-6">₹{product.price.toLocaleString('en-IN')}</p>

             <div className="prose prose-stone mb-8 text-stone-600">
               <p>{product.description}</p>
               <p className="mt-4"><strong>Material:</strong> {product.material}</p>
             </div>

             <div className="mb-8">
               <button
                 onClick={() => addToCart(product)}
                 className="w-full md:w-auto bg-wood-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-wood-700 transition-colors shadow-lg"
               >
                 Add to Cart
               </button>
             </div>

             {/* AI Section */}
             <div className="mt-8 bg-stone-50 border border-stone-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold font-serif text-stone-800 flex items-center">
                    <span className="mr-2 text-xl">✨</span> Artisan AI Insights
                  </h3>
                  {!advice && !isLoadingAdvice && (
                     <button
                       onClick={handleGetAdvice}
                       className="text-sm bg-white border border-wood-200 text-wood-700 px-3 py-1 rounded hover:bg-wood-50 transition"
                     >
                       Ask for Styling Tips
                     </button>
                  )}
                </div>

                {isLoadingAdvice && (
                  <div className="flex items-center space-x-2 text-stone-500 py-4">
                    <svg className="animate-spin h-5 w-5 text-wood-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Consulting our digital artisan...</span>
                  </div>
                )}

                {advice && (
                   <div className="animate-fade-in space-y-4">
                      <div>
                        <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide mb-2">Styling Advice</h4>
                        <ul className="list-disc list-inside text-stone-600 space-y-1 text-sm">
                           {advice.tips.map((tip, i) => <li key={i}>{tip}</li>)}
                        </ul>
                      </div>
                      <div className="pt-4 border-t border-stone-200">
                        <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide mb-1">Care Instruction</h4>
                        <p className="text-stone-600 text-sm italic">"{advice.careInstructions}"</p>
                      </div>
                   </div>
                )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;