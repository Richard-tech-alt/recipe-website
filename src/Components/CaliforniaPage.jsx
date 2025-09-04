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

const CaliforniaPage = () => {
  const [email, setEmail] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const featuredRecipes = [
    {
      id: 1,
      title: "Rainbow Buddha Bowl",
      image: "🥗",
      time: "15 min",
      difficulty: "Easy",
      rating: 4.9,
      description: "Vibrant mix of quinoa, roasted veggies, and tahini dressing",
      category: "bowls"
    },
    {
      id: 2,
      title: "Avocado Toast Supreme",
      image: "🥑",
      time: "10 min", 
      difficulty: "Easy",
      rating: 4.8,
      description: "Sourdough with smashed avocado, hemp seeds, and microgreens",
      category: "breakfast"
    },
    {
      id: 3,
      title: "Green Goddess Smoothie Bowl",
      image: "🥬",
      time: "8 min",
      difficulty: "Easy",
      rating: 4.9,
      description: "Spinach, mango, and coconut topped with fresh berries",
      category: "smoothies"
    },
    {
      id: 4,
      title: "Cauliflower Power Bowl",
      image: "🥦",
      time: "25 min",
      difficulty: "Medium", 
      rating: 4.7,
      description: "Roasted cauliflower with chickpeas and lemon herb sauce",
      category: "bowls"
    },
    {
      id: 5,
      title: "Acai Berry Bliss Bowl",
      image: "🫐",
      time: "12 min",
      difficulty: "Easy",
      rating: 4.8,
      description: "Antioxidant-rich acai topped with granola and coconut",
      category: "smoothies"
    },
    {
      id: 6,
      title: "Mediterranean Quinoa Salad",
      image: "🍅",
      time: "20 min",
      difficulty: "Easy",
      rating: 4.6,
      description: "Fresh quinoa with cucumber, tomatoes, and olive tapenade",
      category: "salads"
    }
  ]

  const categories = [
    { id: "all", name: "All Recipes", count: 6 },
    { id: "bowls", name: "Power Bowls", count: 2 },
    { id: "smoothies", name: "Smoothie Bowls", count: 2 },
    { id: "breakfast", name: "Breakfast", count: 1 },
    { id: "salads", name: "Fresh Salads", count: 1 }
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
              <button className="text-green-600 hover:text-green-700 transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-2">
                <span className="text-4xl">🥗</span>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">California Kitchen</h1>
                  <p className="text-sm text-gray-600">Healthy bowls & plant-based power</p>
                </div>
              </div>
            </div>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Subscribe Free
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-400 via-emerald-400 to-teal-500 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              California Fresh
              <br />
              <span className="text-green-100">Plant-Powered</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Vibrant bowls, fresh smoothies, and plant-based recipes that fuel your body and energize your soul. 
              Clean eating made delicious.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                🥗 Start Fresh Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                🌱 Get Plant Recipes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Stats */}
      <section className="py-12 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15min</div>
              <div className="text-gray-600">Average Prep Time</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">4.8★</div>
              <div className="text-gray-600">Health Rating</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">2-4</div>
              <div className="text-gray-600">Servings</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-lime-600 mb-2">$8</div>
              <div className="text-gray-600">Cost Per Bowl</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">California Fresh Favorites</h2>
            <p className="text-xl text-gray-600">Nourishing meals that energize and inspire</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? "bg-green-600 text-white"
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
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 h-48 flex items-center justify-center">
                  <span className="text-8xl">{recipe.image}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      🌱 {recipe.difficulty}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-green-400 text-green-400" />
                      <span className="text-sm font-semibold">{recipe.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{recipe.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Timer className="w-4 h-4 mr-1" />
                      {recipe.time}
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold">
                      Get Recipe
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* California Values */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why California Style?</h2>
            <p className="text-xl opacity-90">Fresh ingredients, vibrant flavors, mindful living</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🌱</div>
              <h3 className="text-2xl font-bold mb-4">Plant-Powered</h3>
              <p className="text-lg opacity-90">
                Nutrient-dense ingredients that fuel your body with natural energy and vitality.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">☀️</div>
              <h3 className="text-2xl font-bold mb-4">Sun-Fresh</h3>
              <p className="text-lg opacity-90">
                Farm-to-table freshness with seasonal produce that captures California sunshine.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">🧘‍♀️</div>
              <h3 className="text-2xl font-bold mb-4">Mindful Eating</h3>
              <p className="text-lg opacity-90">
                Recipes designed for wellness, balance, and sustainable healthy living habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Benefits */}
      <section className="py-16 bg-gradient-to-br from-lime-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Power Your Day</h2>
            <p className="text-xl text-gray-600">Every bowl is packed with nutrients your body craves</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Natural Energy</h3>
              <p className="text-gray-600 text-sm">Sustained energy without crashes</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Muscle Recovery</h3>
              <p className="text-gray-600 text-sm">Plant proteins for active lifestyles</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Glowing Skin</h3>
              <p className="text-gray-600 text-sm">Antioxidants for natural radiance</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Mental Clarity</h3>
              <p className="text-gray-600 text-sm">Brain foods for focus and mood</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Get Fresh California Recipes Weekly</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands getting plant-powered recipes and wellness tips every Sunday
          </p>

          <div className="bg-white p-8 rounded-xl max-w-md mx-auto">
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
              />
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Get Fresh Recipes
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-4">Fresh wellness content. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🥗</span>
                <span className="text-xl font-bold">California Kitchen</span>
              </div>
              <p className="text-gray-400">Fresh, plant-powered recipes that nourish body and soul.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Popular Recipes</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Rainbow Buddha Bowl</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Avocado Toast Supreme</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Green Smoothie Bowl</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Acai Berry Bowl</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">All Regions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Power Bowls</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Smoothies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Plant-Based</a></li>
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
            <p>&copy; 2025 Home Recipe USA - California Kitchen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default CaliforniaPage