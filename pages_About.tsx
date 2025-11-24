import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative bg-stone-900 py-20 px-6 sm:px-12 text-center">
         <h1 className="text-4xl font-serif font-bold text-white mb-4">Our Story</h1>
         <p className="text-xl text-stone-300 max-w-2xl mx-auto">From a small garage workshop to a global community of wood lovers.</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <img src="https://picsum.photos/600/400?random=20" alt="Carpenter working" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2">
                <h2 className="text-2xl font-bold font-serif text-stone-900 mb-4">The Artisan Touch</h2>
                <p className="text-stone-600 leading-relaxed mb-4">
                    Founded in 2010, WoodCraft began with a simple mission: to create furniture that tells a story. We believe that wood is a living material, full of character and warmth.
                </p>
                <p className="text-stone-600 leading-relaxed">
                    Every piece in our collection is handcrafted by skilled artisans who have dedicated their lives to mastering traditional joinery techniques. We don't just build furniture; we create heirlooms meant to be passed down through generations.
                </p>
            </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
                <img src="https://picsum.photos/600/400?random=21" alt="Sustainable forest" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2">
                <h2 className="text-2xl font-bold font-serif text-stone-900 mb-4">Sustainability First</h2>
                <p className="text-stone-600 leading-relaxed mb-4">
                    We are committed to protecting the forests that provide us with our beautiful materials. That's why 100% of our wood is FSC-certified or reclaimed.
                </p>
                <p className="text-stone-600 leading-relaxed">
                   For every tree we use, we plant two more in partnership with global reforestation organizations. When you buy from WoodCraft, you're investing in a greener future.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
