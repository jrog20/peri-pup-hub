import { useState } from 'react';
import { Star, Heart, ShoppingCart, ThumbsUp, ThumbsDown, Gift } from 'lucide-react';

const PeriPicks = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const picks = [
    {
      id: 1,
      name: "Kong Classic Dog Toy",
      category: "toys",
      price: "$12.99",
      rating: 5,
      description: "My absolute favorite! Perfect for stuffing with peanut butter and keeping me entertained for hours. The durability is impressive - I've been trying to destroy it for months with no success.",
      pros: ["Durable", "Stuffable", "Great for mental stimulation"],
      cons: ["Sometimes gets stuck under the couch"],
      image: "🦴",
      link: "#",
      featured: true
    },
    {
      id: 2,
      name: "Freeze-Dried Salmon Treats",
      category: "treats",
      price: "$18.99",
      rating: 5,
      description: "These are like little pieces of heaven! The salmon flavor is divine, and they're healthy too. My humans love that they're single-ingredient and grain-free.",
      pros: ["Single ingredient", "Grain-free", "Irresistible flavor"],
      cons: ["Expensive", "I want them all the time"],
      image: "🐟",
      link: "#",
      featured: true
    },
    {
      id: 3,
      name: "Orthopedic Memory Foam Bed",
      category: "beds",
      price: "$89.99",
      rating: 4,
      description: "This bed is like sleeping on a cloud! Perfect for my beauty sleep and joint health. The memory foam molds to my body perfectly.",
      pros: ["Comfortable", "Good for joints", "Washable cover"],
      cons: ["Takes up space", "Expensive"],
      image: "🛏️",
      link: "#"
    },
    {
      id: 4,
      name: "Interactive Puzzle Feeder",
      category: "toys",
      price: "$24.99",
      rating: 4,
      description: "Great for keeping my mind sharp! I have to figure out how to get the treats out, which makes me feel like a genius when I succeed.",
      pros: ["Mental stimulation", "Slows down eating", "Fun challenge"],
      cons: ["Can be frustrating", "Not for impatient dogs"],
      image: "🧩",
      link: "#"
    },
    {
      id: 5,
      name: "Natural Peanut Butter",
      category: "treats",
      price: "$8.99",
      rating: 5,
      description: "The perfect treat spread! I love it in my Kong, on lick mats, or just by the spoonful. My humans appreciate that it's natural and doesn't have xylitol.",
      pros: ["Natural ingredients", "Versatile", "No xylitol"],
      cons: ["Can be messy", "High in calories"],
      image: "🥜",
      link: "#"
    },
    {
      id: 6,
      name: "Grooming Brush Set",
      category: "grooming",
      price: "$34.99",
      rating: 4,
      description: "Essential for maintaining my fabulous coat! The different brush types handle everything from detangling to finishing touches. I feel like a princess after grooming sessions.",
      pros: ["Multiple brush types", "Gentle on skin", "Professional results"],
      cons: ["Grooming sessions can be long", "Requires patience"],
      image: "🪮",
      link: "#"
    },
    {
      id: 7,
      name: "LED Collar Light",
      category: "accessories",
      price: "$15.99",
      rating: 3,
      description: "Perfect for evening walks! I feel like a superstar with my glowing collar. The humans can always see me, and I get lots of attention from neighbors.",
      pros: ["Safety feature", "Rechargeable", "Multiple colors"],
      cons: ["Battery life could be better", "Makes me look like a UFO"],
      image: "💡",
      link: "#"
    },
    {
      id: 8,
      name: "Portable Water Bottle",
      category: "accessories",
      price: "$22.99",
      rating: 5,
      description: "Essential for adventures! This bottle has a built-in bowl that's perfect for staying hydrated on walks. I feel so sophisticated drinking from it.",
      pros: ["Convenient", "Built-in bowl", "Leak-proof"],
      cons: ["Takes up space in bag", "Needs regular cleaning"],
      image: "💧",
      link: "#"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Picks', icon: '🌟' },
    { id: 'toys', name: 'Toys', icon: '🦴' },
    { id: 'treats', name: 'Treats', icon: '🍖' },
    { id: 'beds', name: 'Beds', icon: '🛏️' },
    { id: 'grooming', name: 'Grooming', icon: '🪮' },
    { id: 'accessories', name: 'Accessories', icon: '🎀' }
  ];

  const filteredPicks = selectedCategory === 'all' 
    ? picks 
    : picks.filter(pick => pick.category === selectedCategory);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center gap-3 mb-6">
        <Gift className="text-purple-500" size={24} />
        <h2 className="text-3xl font-bold">🛍️ Peri's Picks</h2>
      </div>

      <p className="text-gray-600 mb-8">
        My carefully curated selection of the finest products that have earned my royal approval. These are the items that make my life more fabulous, comfortable, and entertaining!
      </p>

      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-purple-600">Shop by Category</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                selectedCategory === category.id
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-purple-100'
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Picks */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-purple-600">🌟 Featured Picks</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {picks.filter(pick => pick.featured).map((pick) => (
            <div key={pick.id} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{pick.image}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-bold text-lg">{pick.name}</h4>
                    <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs">Featured</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">{renderStars(pick.rating)}</div>
                    <span className="text-sm text-gray-500">({pick.rating}/5)</span>
                  </div>
                  <p className="text-purple-600 font-semibold mb-2">{pick.price}</p>
                  <p className="text-gray-700 text-sm mb-3">{pick.description}</p>
                  <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors text-sm">
                    <ShoppingCart size={16} className="inline mr-1" />
                    Get This Pick
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Picks Grid */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-purple-600">All My Recommendations</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPicks.map((pick) => (
            <div key={pick.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{pick.image}</div>
                <h4 className="font-bold text-lg mb-1">{pick.name}</h4>
                <div className="flex justify-center mb-2">
                  {renderStars(pick.rating)}
                </div>
                <p className="text-purple-600 font-semibold">{pick.price}</p>
              </div>
              
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">{pick.description}</p>
              
              <div className="mb-4">
                <div className="flex items-center gap-1 mb-2">
                  <ThumbsUp size={14} className="text-green-500" />
                  <span className="text-xs font-medium text-green-600">Pros:</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {pick.pros.map((pro, index) => (
                    <span key={index} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                      {pro}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center gap-1 mb-2">
                  <ThumbsDown size={14} className="text-red-500" />
                  <span className="text-xs font-medium text-red-600">Cons:</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {pick.cons.map((con, index) => (
                    <span key={index} className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs">
                      {con}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors text-sm">
                <ShoppingCart size={16} className="inline mr-1" />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Shopping Stats */}
      <div className="mt-8 pt-6 border-t-2 border-purple-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-purple-600">{picks.length}</div>
            <div className="text-sm text-gray-500">Products Reviewed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">4.8⭐</div>
            <div className="text-sm text-gray-500">Average Rating</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">100%</div>
            <div className="text-sm text-gray-500">Poodle Approved</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">∞</div>
            <div className="text-sm text-gray-500">Style Points</div>
          </div>
        </div>
      </div>

      {/* Fun footer */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500 italic">
          "Every product has been personally tested and approved by yours truly" 🐩✨
        </p>
      </div>
    </div>
  );
};

export default PeriPicks; 