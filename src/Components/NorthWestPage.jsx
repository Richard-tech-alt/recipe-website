import React, { useState } from "react"
import {
  ArrowLeft,
  Star,
  Timer,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Waves,
  Mountain,
  Coffee,
} from "lucide-react"

const NorthwestPage = () => {
  const [email, setEmail] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const featuredRecipes = [
    {
      id: 1,
      title: "Pacific Salmon Cedar Plank",
      image: "🐟",
      time: "25 min",
      difficulty: "Medium",
      rating: 4.9,
      description: "Wild-caught salmon grilled on cedar with lemon and dill",
      category: "seafood"
    },
    {
      id: 2,
      title: "Dungeness Crab Bisque",
      image: "🦀",
      time: "35 min", 
      difficulty: "Hard",
      rating: 4.8,
      description: "Rich, creamy bisque with fresh Dungeness crab and sherry",
      category: "soups"
    },
    {
      id: 3,
      title: "Coffee-Rubbed Steak",
      image: "☕",
      time: "20 min",
      difficulty: "Medium",
      rating: 4.9,
      description: "Premium beef with espresso rub and caramelized onions",
      category: "mains"
    },
    {
      id: 4,
      title: "Wild Mushroom Risotto",
      image: "🍄",
      time: "30 min",
      difficulty: "Hard", 
      rating: 4.7,
      description: "Creamy arborio rice with foraged mushrooms and truffle oil",
      category: "vegetarian"
    },
    {
      id: 5,
      title: "Clam Chowder Bread Bowl",
      image: "🍞",
      time: "40 min",
      difficulty: "Medium",
      rating: 4.8,
      description: "Classic New England chowder served in a sourdough bread bowl",
      category: "soups"
    },
    {
      id: 6,
      title: "Blackberry Lavender Tart",
      image: "🫐",
      time: "45 min",
      difficulty: "Hard",
      rating: 4.6,
      description: "Buttery tart shell with blackberry filling and lavender cream",
      category: "desserts"
    },
    {
      id: 7,
      title: "Smoked Oyster Flatbread",
      image: "🦪",
      time: "18 min",
      difficulty: "Medium",
      rating: 4.5,
      description: "Crispy flatbread with smoked oysters, capers, and fresh herbs",
      category: "appetizers"
    },
    {
      id: 8,
      title: "Marionberry Cobbler",
      image: "🍇",
      time: "35 min",
      difficulty: "Easy",
      rating: 4.7,
      description: "Oregon marionberries with buttery biscuit topping and vanilla ice cream",
      category: "desserts"
    }
  ]

  const categories = [
    { id: "all", name: "All Recipes", count: 8 },
    { id: "seafood", name: "Fresh Seafood", count: 2 },
    { id: "soups", name: "Cozy Soups", count: 2 },
    { id: "mains", name: "Hearty Mains", count: 1 },
    { id: "vegetarian", name: "Forest Finds", count: 1 },
    { id: "desserts", name: "Berry Desserts", count: 2 },
    { id: "appetizers", name: "Coastal Apps", count: 1 }
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
              <button className="text-teal-600 hover:text-teal-700 transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-2">
                <span className="text-4xl">🐟</span>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Northwest Kitchen</h1>
                  <p className="text-sm text-gray-600">Seafood & cozy soups</p>
                </div>
              </div>
            </div>
            <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors">
              Subscribe Free
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-500 via-blue-500 to-green-500 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Pacific Northwest
              <br />
              <span className="text-teal-100">Coastal Comfort</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Fresh seafood and warming soups inspired by the rugged Pacific coast. From cedar-plank salmon to 
              hearty chowders, taste the essence of the Northwest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                🐟 Ocean Fresh
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                🍲 Cozy Recipes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Stats */}
      <section className="py-12 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">28min</div>
              <div className="text-gray-600">Average Cook Time</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">4.7★</div>
              <div className="text-gray-600">Comfort Rating</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">2-6</div>
              <div className="text-gray-600">Servings</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-teal-500 mb-2">$12</div>
              <div className="text-gray-600">Cost Per Serving</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Northwest Specialties</h2>
            <p className="text-xl text-gray-600">Fresh seafood and warming comfort foods from the Pacific coast</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? "bg-teal-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Recipe Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredRecipes.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                <div className="bg-gradient-to-br from-teal-100 via-blue-100 to-green-100 h-48 flex items-center justify-center">
                  <span className="text-8xl">{recipe.image}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">
                      🏔️ {recipe.difficulty}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-teal-400 text-teal-400" />
                      <span className="text-sm font-semibold">{recipe.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-teal-600 transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{recipe.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Timer className="w-4 h-4 mr-1" />
                      {recipe.time}
                    </div>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors text-sm font-semibold">
                      Get Recipe
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Northwest Style */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Northwest Style?</h2>
            <p className="text-xl opacity-90">Where ocean meets mountains in culinary harmony</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🌊</div>
              <h3 className="text-2xl font-bold mb-4">Ocean Fresh</h3>
              <p className="text-lg opacity-90">
                Daily catches from the Pacific bring unmatched freshness to every dish.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">🏔️</div>
              <h3 className="text-2xl font-bold mb-4">Mountain Comfort</h3>
              <p className="text-lg opacity-90">
                Hearty, warming dishes perfect for cozy evenings and cool weather.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">☕</div>
              <h3 className="text-2xl font-bold mb-4">Coffee Culture</h3>
              <p className="text-lg opacity-90">
                Rich coffee flavors and artisanal ingredients elevate every meal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Northwest Benefits */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Northwest Benefits</h2>
            <p className="text-xl text-gray-600">Nutrient-rich ingredients from land and sea</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🐟</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Omega-3 Rich</h3>
              <p className="text-gray-600 text-sm">Wild salmon provides essential fatty acids</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🍄</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Antioxidant Power</h3>
              <p className="text-gray-600 text-sm">Wild mushrooms boost immune system</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">☕</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Mental Focus</h3>
              <p className="text-gray-600 text-sm">Coffee culture enhances alertness and mood</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Farm Fresh</h3>
              <p className="text-gray-600 text-sm">Local herbs and vegetables at peak nutrition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Northwest Culture Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Northwest Heritage</h2>
            <p className="text-xl text-gray-600">Where rugged coastlines inspire exceptional cuisine</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Waves className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Pacific Bounty</h3>
                    <p className="text-gray-600">Fresh seafood from the pristine waters of the Pacific Northwest</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mountain className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Mountain Comfort</h3>
                    <p className="text-gray-600">Hearty dishes that warm the soul during misty Pacific days</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Coffee className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Artisan Culture</h3>
                    <p className="text-gray-600">Coffee roasting and craft cooking traditions that define the region</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-100 via-blue-100 to-green-100 rounded-2xl p-12 text-center">
              <div className="text-8xl mb-6">🏔️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Coastal Comfort</h3>
              <p className="text-gray-600 text-lg">
                Bring the rugged beauty and fresh flavors of the Pacific Northwest to your kitchen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Get Northwest Recipes Weekly</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join coastal food lovers getting fresh seafood recipes and comfort food tips every Friday
          </p>

          <div className="bg-white p-8 rounded-xl max-w-md mx-auto">
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900"
              />
              <button className="bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors font-semibold flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Get Coastal Recipes
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-4">Fresh Northwest flavors. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🐟</span>
                <span className="text-xl font-bold">Northwest Kitchen</span>
              </div>
              <p className="text-gray-400">Fresh seafood and cozy comfort foods from the Pacific coast.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Popular Recipes</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Cedar Plank Salmon</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dungeness Crab Bisque</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Coffee-Rubbed Steak</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Clam Chowder</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">All Regions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fresh Seafood</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cozy Soups</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Coastal Apps</a></li>
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
            <p>&copy; 2025 Home Recipe USA - Northwest Kitchen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default NorthwestPage