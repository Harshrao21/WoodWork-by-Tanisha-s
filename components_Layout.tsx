import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { itemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? "text-wood-600 font-semibold" : "text-stone-600 hover:text-wood-600";

  return (
    <nav className="bg-white border-b border-wood-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl sm:text-2xl font-bold text-wood-800 font-serif">WoodWork by Tanisha's</span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:space-x-8 sm:items-center">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/shop" className={isActive('/shop')}>Shop</Link>
            <Link to="/about" className={isActive('/about')}>About</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            <Link to="/login" className="text-stone-600 hover:text-wood-600 text-sm font-medium">Log In</Link>
            <Link to="/cart" className="relative p-2 text-stone-600 hover:text-wood-600">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
               </svg>
               {itemCount > 0 && (
                 <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-wood-600 rounded-full">
                   {itemCount}
                 </span>
               )}
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-stone-500 hover:bg-stone-100 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path className={isMenuOpen ? "hidden" : "inline-flex"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                <path className={isMenuOpen ? "inline-flex" : "hidden"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden bg-white border-t border-gray-100`}>
        <div className="pt-2 pb-3 space-y-1 px-4">
          <Link to="/" className="block px-3 py-2 text-base font-medium text-stone-700 hover:bg-wood-50 hover:text-wood-700">Home</Link>
          <Link to="/shop" className="block px-3 py-2 text-base font-medium text-stone-700 hover:bg-wood-50 hover:text-wood-700">Shop</Link>
          <Link to="/about" className="block px-3 py-2 text-base font-medium text-stone-700 hover:bg-wood-50 hover:text-wood-700">About</Link>
          <Link to="/contact" className="block px-3 py-2 text-base font-medium text-stone-700 hover:bg-wood-50 hover:text-wood-700">Contact</Link>
           <Link to="/cart" className="block px-3 py-2 text-base font-medium text-stone-700 hover:bg-wood-50 hover:text-wood-700 flex justify-between">
            <span>Cart</span>
            <span className="bg-wood-100 text-wood-800 py-0.5 px-2 rounded-full text-xs">{itemCount}</span>
          </Link>
          <Link to="/login" className="block px-3 py-2 text-base font-medium text-stone-700 hover:bg-wood-50 hover:text-wood-700">Log In</Link>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-white text-lg font-serif font-bold mb-4">WoodWork by Tanisha's</h3>
            <p className="text-sm text-stone-400">
              Sustainable, handcrafted furniture made to last generations. Bringing the warmth of nature into your home.
            </p>
          </div>
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="hover:text-wood-300 text-sm">All Products</Link></li>
              <li><Link to="/shop" className="hover:text-wood-300 text-sm">New Arrivals</Link></li>
              <li><Link to="/shop" className="hover:text-wood-300 text-sm">Best Sellers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-wood-300 text-sm">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-wood-300 text-sm">About Us</Link></li>
              <li><Link to="/" className="hover:text-wood-300 text-sm">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Stay Connected</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-stone-400 hover:text-wood-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-stone-400 hover:text-wood-300">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.06h.63zm1.673 5.378-1.288 1.288 1.288 1.288c.95.95 1.57 2.22 1.693 3.635l.006.273c0 1.545-.63 3.033-1.745 4.149-1.116 1.115-2.604 1.745-4.15 1.745-1.545 0-3.033-.63-4.149-1.745-1.115-1.116-1.745-2.604-1.745-4.15 0-1.545.63-3.033 1.745-4.149 1.116-1.115 2.604-1.745 4.15-1.745.284 0 .563.022.836.064l-.56 1.733c-.092-.008-.184-.013-.276-.013-1.034 0-2.028.406-2.76 1.138-.732.732-1.138 1.726-1.138 2.76 0 1.034.406 2.028 1.138 2.76.732.732 1.726 1.138 2.76 1.138 1.034 0 2.028-.406 2.76-1.138.732-.732 1.138-1.726 1.138-2.76 0-.276-.029-.545-.083-.807l1.78-5.556z" clipRule="evenodd" /></svg>
              </a>
            </div>
            <div className="mt-6">
                <p className="text-xs text-stone-500">Secure Payments via:</p>
                <div className="flex space-x-2 mt-2">
                     <div className="h-6 px-2 bg-stone-700 rounded flex items-center justify-center text-xs font-bold text-stone-300">UPI</div>
                     <div className="h-6 px-2 bg-stone-700 rounded flex items-center justify-center text-xs font-bold text-stone-300">RuPay</div>
                     <div className="h-6 px-2 bg-stone-700 rounded flex items-center justify-center text-xs font-bold text-stone-300">VISA</div>
                     <div className="h-6 px-2 bg-stone-700 rounded flex items-center justify-center text-xs font-bold text-stone-300">MC</div>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-stone-500">&copy; 2024 WoodWork by Tanisha's. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-xs text-stone-500 hover:text-stone-300 cursor-pointer">Privacy Policy</span>
              <span className="text-xs text-stone-500 hover:text-stone-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};