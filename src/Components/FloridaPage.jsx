import React, { useState } from "react"
import {
  ArrowLeft,
  Star,
  Timer,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Sun,
  Waves,
} from "lucide-react"

const FloridaPage = () => {
  const [email, setEmail] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const featuredRecipes = [
    {
      id: 1,
      title: "Tropical Mango Tuna Poke Bowl",
      image: "🥭",
      time: "12 min",
      difficulty: "Easy",
      rating: 4.9,
      description: "Fresh sushi-grade tuna with mango, avocado, and coconut rice",
      category: "poke"
    },
    {
      id: 2,
      title: "Key Lime Coconut Bites",
      image: "🥥",
      time: "8 min", 
      difficulty: "Easy",
      rating: 4.8,
      description: "No-bake coconut balls with zesty key lime and graham crumbs",
      category: "desserts"
    },
    {
      id: 3,
      title: "Cuban Mojo Shrimp Skewers",
      image: "🍤",
      time: "15 min",
      difficulty: "Medium",
      rating: 4.9,
      description: "Citrus-marinated shrimp with garlic mojo and bell peppers",
      category: "seafood"
    },
    {
      id: 4,
      title: "Watermelon Feta Summer Salad",
      image: "🍉",
      time: "10 min",
      difficulty: "Easy", 
      rating: 4.7,
      description: "Refreshing watermelon with crumbled feta, mint, and lime",
      category: "salads"
    },
    {
      id: 5,
      title: "Passion Fruit Smoothie Bowl",
      image: "🍹",
      time: "6 min",
      difficulty: "Easy",
      rating: 4.8,
      description: "Creamy passion fruit base topped with tropical fruits and granola",
      category: "smoothies"
    },
    {
      id: 6,
      title: "Coconut Ceviche Cups",
      image: "🐟",
      time: "20 min",
      difficulty: "Medium",
      rating: 4.6,
      description: "Fresh fish 'cooked' in citrus with coconut milk and peppers",
      category: "seafood"
    },
    {
      id: 7,
      title: "Pineapple Jalapeño Salsa",
      image: "🍍",
      time: "10 min",
      difficulty: "Easy",
      rating: 4.5,
      description: "Sweet and spicy salsa perfect with tortilla chips",
      category: "appetizers"
    },
    {
      id: 8,
      title: "Frozen Piña Colada Bites",
      image: "🥶",
      time: "5 min",
      difficulty: "Easy",
      rating: 4.7,
      description: "Bite-sized frozen treats with coconut, pineapple, and rum extract",
      category: "desserts"
    }
  ]

  const categories = [
    { id: "all", name: "All Recipes", count: 8 },
    { id: "poke", name: "Poke Bowls", count: 1 },
    { id: "seafood", name: "Fresh Seafood", count: 2 },
    { id: "smoothies", name: "Tropical Smoothies", count: 1 },
    { id: "salads", name: "Light Salads", count: 1 },
    { id: "desserts", name: "Cool Desserts", count: 2 },
    { id: "appetizers", name: "Beach Bites", count: 1 }
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
              <button className="text-pink-600 hover:text-pink-700 transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-2">
                <span className="text-4xl">🍹</span>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Florida Kitchen</h1>
                  <p className="text-sm text-gray-600">Tropical light bites & coastal flavors</p>
                </div>
              </div>
            </div>
            <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors">
              Subscribe Free
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-400 via-orange-400 to-yellow-400 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Florida Fresh
              <br />
              <span className="text-pink-100">Tropical Paradise</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Light, refreshing bites inspired by coastal Florida. From fresh ceviche to tropical smoothies, 
              taste the sunshine in every dish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-pink-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                🍹 Taste The Tropics
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                🏖️ Beach Recipes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Stats */}
      <section className="py-12 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">12min</div>
              <div className="text-gray-600">Average Prep Time</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">4.7★</div>
              <div className="text-gray-600">Taste Rating</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">1-3</div>
              <div className="text-gray-600">Servings</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-pink-500 mb-2">$6</div>
              <div className="text-gray-600">Cost Per Serving</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tropical Light Bites</h2>
            <p className="text-xl text-gray-600">Fresh, coastal flavors that transport you to paradise</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? "bg-pink-500 text-white"
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
                <div className="bg-gradient-to-br from-pink-100 via-orange-100 to-yellow-100 h-48 flex items-center justify-center">
                  <span className="text-8xl">{recipe.image}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold">
                      🏖️ {recipe.difficulty}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-pink-400 text-pink-400" />
                      <span className="text-sm font-semibold">{recipe.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-pink-600 transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{recipe.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Timer className="w-4 h-4 mr-1" />
                      {recipe.time}
                    </div>
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors text-sm font-semibold">
                      Get Recipe
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Florida Lifestyle */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Florida Style?</h2>
            <p className="text-xl opacity-90">Coastal living meets tropical paradise</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🏖️</div>
              <h3 className="text-2xl font-bold mb-4">Beach Fresh</h3>
              <p className="text-lg opacity-90">
                Light, refreshing dishes perfect for sunny days and coastal living.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">🌴</div>
              <h3 className="text-2xl font-bold mb-4">Tropical Fusion</h3>
              <p className="text-lg opacity-90">
                Caribbean and Latin influences create bold, vibrant flavors.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">🐟</div>
              <h3 className="text-2xl font-bold mb-4">Ocean to Table</h3>
              <p className="text-lg opacity-90">
                Fresh seafood and citrus combinations that celebrate coastal cuisine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Florida Benefits */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sunshine Benefits</h2>
            <p className="text-xl text-gray-600">Light bites packed with tropical nutrition</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🌞</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Vitamin D Boost</h3>
              <p className="text-gray-600 text-sm">Seafood rich in vitamin D and omega-3s</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hydration</h3>
              <p className="text-gray-600 text-sm">Water-rich fruits keep you refreshed</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🍊</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Vitamin C Power</h3>
              <p className="text-gray-600 text-sm">Citrus fruits boost immune system</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Light & Fresh</h3>
              <p className="text-gray-600 text-sm">Low-calorie options for active lifestyles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tropical Vibes Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tropical Vibes</h2>
            <p className="text-xl text-gray-600">Every bite brings you closer to paradise</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Sun className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sunshine Flavors</h3>
                    <p className="text-gray-600">Bright citrus and tropical fruits that capture Florida's endless summer</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Waves className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Coastal Fresh</h3>
                    <p className="text-gray-600">Ocean-to-table ingredients with the purest, cleanest flavors</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <span className="text-yellow-600 text-xl">🌺</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Island Inspiration</h3>
                    <p className="text-gray-600">Caribbean and Latin influences create exotic, memorable dishes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-100 via-orange-100 to-yellow-100 rounded-2xl p-12 text-center">
              <div className="text-8xl mb-6">🏝️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Escape to Paradise</h3>
              <p className="text-gray-600 text-lg">
                Transform your kitchen into a tropical getaway with recipes that bring the beach to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Get Tropical Recipes Weekly</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join beach lovers getting fresh coastal recipes and tropical cooking tips every Friday
          </p>

          <div className="bg-white p-8 rounded-xl max-w-md mx-auto">
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900"
              />
              <button className="bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition-colors font-semibold flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Get Tropical Recipes
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-4">Fresh coastal content. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🍹</span>
                <span className="text-xl font-bold">Florida Kitchen</span>
              </div>
              <p className="text-gray-400">Tropical light bites that bring the beach to your table.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Popular Recipes</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Mango Tuna Poke Bowl</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Key Lime Coconut Bites</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cuban Mojo Shrimp</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Coconut Ceviche</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">All Regions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Poke Bowls</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fresh Seafood</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Beach Bites</a></li>
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
            <p>&copy; 2025 Home Recipe USA - Florida Kitchen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default FloridaPage