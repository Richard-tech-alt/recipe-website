import React, { useState } from "react"
import {
  ArrowLeft,
  Star,
  Timer,
  Mail,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react"

const MidwestPage = () => {
  const [email, setEmail] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const featuredRecipes = [
    {
      id: 1,
      title: "Classic Tuna Noodle Casserole",
      image: "🍲",
      time: "35 min",
      difficulty: "Easy",
      rating: 4.9,
      description: "Creamy, comforting family favorite that feeds a crowd",
      category: "casseroles"
    },
    {
      id: 2,
      title: "Hearty Beef & Potato Skillet",
      image: "🥔",
      time: "25 min", 
      difficulty: "Easy",
      rating: 4.8,
      description: "One-pan wonder with tender beef and crispy potatoes",
      category: "family"
    },
    {
      id: 3,
      title: "Slow Cooker Chicken & Dumplings",
      image: "🍗",
      time: "4 hrs",
      difficulty: "Easy",
      rating: 4.9,
      description: "Set it and forget it comfort food perfection",
      category: "comfort"
    },
    {
      id: 4,
      title: "Cheesy Broccoli Rice Bake",
      image: "🧀",
      time: "30 min",
      difficulty: "Easy", 
      rating: 4.7,
      description: "Kid-approved veggie dish that's secretly healthy",
      category: "casseroles"
    },
    {
      id: 5,
      title: "Sunday Pot Roast",
      image: "🥩",
      time: "3 hrs",
      difficulty: "Medium",
      rating: 4.9,
      description: "Fall-apart tender roast with carrots and potatoes",
      category: "comfort"
    },
    {
      id: 6,
      title: "Loaded Baked Potato Soup",
      image: "🥄",
      time: "40 min",
      difficulty: "Easy",
      rating: 4.6,
      description: "Thick, creamy soup with all your favorite toppings",
      category: "soups"
    }
  ]

  const categories = [
    { id: "all", name: "All Recipes", count: 6 },
    { id: "casseroles", name: "Casseroles", count: 2 },
    { id: "comfort", name: "Comfort Food", count: 2 },
    { id: "family", name: "Family Meals", count: 1 },
    { id: "soups", name: "Soups & Stews", count: 1 }
  ]

  const filteredRecipes = selectedCategory === "all" 
    ? featuredRecipes 
    : featuredRecipes.filter(recipe => recipe.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button className="text-yellow-600 hover:text-yellow-700 transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-2">
                <span className="text-4xl">🍲</span>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Midwest Kitchen</h1>
                  <p className="text-sm text-gray-600">Comfort casseroles & family meals</p>
                </div>
              </div>
            </div>
            <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
              Subscribe Free
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-400 via-orange-400 to-red-500 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Midwest Comfort
              <br />
              <span className="text-amber-100">Made Simple</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Hearty casseroles, family dinners, and comfort classics that warm the heart and feed the soul. 
              Real food for real families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                🍲 Start Cooking Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                📚 Get Family Recipes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Stats */}
      <section className="py-12 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">30min</div>
              <div className="text-gray-600">Average Prep Time</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">4.8★</div>
              <div className="text-gray-600">Family Rating</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">6-8</div>
              <div className="text-gray-600">People Fed</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$12</div>
              <div className="text-gray-600">Cost Per Meal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Midwest Family Favorites</h2>
            <p className="text-xl text-gray-600">Hearty meals that bring everyone to the table</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? "bg-yellow-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Recipe Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-48 flex items-center justify-center">
                  <span className="text-8xl">{recipe.image}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {recipe.difficulty}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">{recipe.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-600 transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{recipe.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Timer className="w-4 h-4 mr-1" />
                      {recipe.time}
                    </div>
                    <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors text-sm font-semibold">
                      Get Recipe
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Midwest Values */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Midwest Cooking?</h2>
            <p className="text-xl opacity-90">Values that matter, flavors that comfort</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">👨‍👩‍👧‍👦</div>
              <h3 className="text-2xl font-bold mb-4">Family First</h3>
              <p className="text-lg opacity-90">
                Every recipe feeds 6-8 people because family gatherings are sacred in the Midwest.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-2xl font-bold mb-4">Budget-Friendly</h3>
              <p className="text-lg opacity-90">
                Stretch your dollar with hearty ingredients that fill bellies without breaking the bank.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">🏠</div>
              <h3 className="text-2xl font-bold mb-4">Home Comfort</h3>
              <p className="text-lg opacity-90">
                Warm, satisfying meals that make any house feel like home, no matter the weather.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Get Midwest Family Recipes Weekly</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of families getting hearty, budget-friendly recipes every Sunday
          </p>

          <div className="bg-white p-8 rounded-xl max-w-md mx-auto">
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900"
              />
              <button className="bg-yellow-600 text-white px-8 py-3 rounded-lg hover:bg-yellow-700 transition-colors font-semibold flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Get Family Recipes
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-4">Free family meal plans. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🍲</span>
                <span className="text-xl font-bold">Midwest Kitchen</span>
              </div>
              <p className="text-gray-400">Comfort casseroles and family meals that bring everyone together.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Popular Recipes</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tuna Casserole</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pot Roast</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Chicken & Dumplings</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Loaded Potato Soup</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">All Regions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Family Meals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Slow Cooker</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Casseroles</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Youtube className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Home Recipe USA - Midwest Kitchen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MidwestPage