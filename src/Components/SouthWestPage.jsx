import React, { useState } from "react"
import {
  ArrowLeft,
  Star,
  Timer,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Flame,
  Sun,
  Zap,
} from "lucide-react"

const SouthwestPage = () => {
  const [email, setEmail] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const featuredRecipes = [
    {
      id: 1,
      title: "Loaded Breakfast Burrito",
      image: "🌯",
      time: "15 min",
      difficulty: "Easy",
      rating: 4.9,
      description: "Scrambled eggs, chorizo, cheese, and hash browns wrapped in a warm tortilla",
      category: "breakfast"
    },
    {
      id: 2,
      title: "Spicy Chicken Quesadillas",
      image: "🧀",
      time: "12 min", 
      difficulty: "Easy",
      rating: 4.8,
      description: "Grilled chicken with jalapeños, peppers, and melted cheese blend",
      category: "mains"
    },
    {
      id: 3,
      title: "Street Corn Elote Bowl",
      image: "🌽",
      time: "10 min",
      difficulty: "Easy",
      rating: 4.9,
      description: "Charred corn with cotija cheese, lime, chili powder, and cilantro",
      category: "sides"
    },
    {
      id: 4,
      title: "Chipotle Black Bean Tacos",
      image: "🌮",
      time: "18 min",
      difficulty: "Medium", 
      rating: 4.7,
      description: "Smoky black beans with avocado, pico de gallo, and lime crema",
      category: "tacos"
    },
    {
      id: 5,
      title: "Jalapeño Popper Dip",
      image: "🌶️",
      time: "20 min",
      difficulty: "Easy",
      rating: 4.8,
      description: "Creamy cheese dip with jalapeños, bacon, and crispy breadcrumbs",
      category: "appetizers"
    },
    {
      id: 6,
      title: "Carnitas Bowl Supreme",
      image: "🍖",
      time: "25 min",
      difficulty: "Medium",
      rating: 4.6,
      description: "Slow-cooked pork with cilantro rice, beans, and fresh salsa",
      category: "bowls"
    },
    {
      id: 7,
      title: "Tres Leches Cake Cups",
      image: "🍰",
      time: "15 min",
      difficulty: "Medium",
      rating: 4.5,
      description: "Individual tres leches cakes with cinnamon and fresh berries",
      category: "desserts"
    },
    {
      id: 8,
      title: "Spicy Mango Margarita",
      image: "🥭",
      time: "5 min",
      difficulty: "Easy",
      rating: 4.7,
      description: "Fresh mango with lime, jalapeño, and a chili-salt rim",
      category: "drinks"
    }
  ]

  const categories = [
    { id: "all", name: "All Recipes", count: 8 },
    { id: "tacos", name: "Tacos & Wraps", count: 1 },
    { id: "mains", name: "Tex-Mex Mains", count: 1 },
    { id: "bowls", name: "Power Bowls", count: 1 },
    { id: "sides", name: "Spicy Sides", count: 1 },
    { id: "appetizers", name: "Party Apps", count: 1 },
    { id: "breakfast", name: "Southwest Breakfast", count: 1 },
    { id: "desserts", name: "Sweet Heat", count: 1 },
    { id: "drinks", name: "Refreshing Drinks", count: 1 }
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
              <button className="text-orange-600 hover:text-orange-700 transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-2">
                <span className="text-4xl">🌮</span>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Southwest Kitchen</h1>
                  <p className="text-sm text-gray-600">Tex-Mex made easy</p>
                </div>
              </div>
            </div>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Subscribe Free
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Southwest Spice
              <br />
              <span className="text-orange-100">Tex-Mex Fusion</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Bold flavors and vibrant spices from the American Southwest. From sizzling fajitas to loaded nachos, 
              experience the perfect fusion of Texan and Mexican cuisine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                🌮 Spice It Up
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                🌶️ Tex-Mex Recipes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Stats */}
      <section className="py-12 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">15min</div>
              <div className="text-gray-600">Average Cook Time</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">4.7★</div>
              <div className="text-gray-600">Spice Rating</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">2-4</div>
              <div className="text-gray-600">Servings</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">$7</div>
              <div className="text-gray-600">Cost Per Serving</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Southwest Favorites</h2>
            <p className="text-xl text-gray-600">Bold Tex-Mex flavors that pack a punch</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? "bg-orange-500 text-white"
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
                <div className="bg-gradient-to-br from-orange-100 via-red-100 to-yellow-100 h-48 flex items-center justify-center">
                  <span className="text-8xl">{recipe.image}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                      🌶️ {recipe.difficulty}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                      <span className="text-sm font-semibold">{recipe.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{recipe.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Timer className="w-4 h-4 mr-1" />
                      {recipe.time}
                    </div>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm font-semibold">
                      Get Recipe
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Southwest Style */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Southwest Style?</h2>
            <p className="text-xl opacity-90">Where Texan boldness meets Mexican tradition</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🌶️</div>
              <h3 className="text-2xl font-bold mb-4">Bold Spices</h3>
              <p className="text-lg opacity-90">
                Cumin, chili powder, and fresh peppers create layers of complex heat.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">🌮</div>
              <h3 className="text-2xl font-bold mb-4">Tex-Mex Fusion</h3>
              <p className="text-lg opacity-90">
                The perfect marriage of Texas comfort and Mexican tradition.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">🔥</div>
              <h3 className="text-2xl font-bold mb-4">Grilled Perfection</h3>
              <p className="text-lg opacity-90">
                High-heat cooking that locks in flavors and creates perfect char.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Southwest Benefits */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Southwest Benefits</h2>
            <p className="text-xl text-gray-600">Nutritious ingredients with bold, satisfying flavors</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🌶️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Metabolism Boost</h3>
              <p className="text-gray-600 text-sm">Capsaicin from peppers increases calorie burn</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🥑</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Healthy Fats</h3>
              <p className="text-gray-600 text-sm">Avocados provide heart-healthy monounsaturated fats</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🌽</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fiber Rich</h3>
              <p className="text-gray-600 text-sm">Beans and corn provide digestive health benefits</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Protein Power</h3>
              <p className="text-gray-600 text-sm">Lean meats and beans for muscle building</p>
            </div>
          </div>
        </div>
      </section>

      {/* Southwest Culture Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Southwest Culture</h2>
            <p className="text-xl text-gray-600">Where desert meets flavor in perfect harmony</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Flame className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Desert Heat</h3>
                    <p className="text-gray-600">Spicy seasonings that reflect the intensity of the Southwest landscape</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Sun className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sunshine Cooking</h3>
                    <p className="text-gray-600">Bright, vibrant dishes that celebrate the endless Southwest sun</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <span className="text-yellow-600 text-xl">🏜️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Desert Traditions</h3>
                    <p className="text-gray-600">Ancient cooking methods adapted for modern kitchens</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 via-red-100 to-yellow-100 rounded-2xl p-12 text-center">
              <div className="text-8xl mb-6">🌵</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fiesta Flavors</h3>
              <p className="text-gray-600 text-lg">
                Bring the vibrant spirit of the Southwest to your table with bold, easy-to-make Tex-Mex favorites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Get Southwest Recipes Weekly</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join spice lovers getting authentic Tex-Mex recipes and cooking tips every Friday
          </p>

          <div className="bg-white p-8 rounded-xl max-w-md mx-auto">
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
              />
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Get Spicy Secrets
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-4">Bold Southwest flavors. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🌮</span>
                <span className="text-xl font-bold">Southwest Kitchen</span>
              </div>
              <p className="text-gray-400">Tex-Mex fusion that brings bold flavors to your table.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Popular Recipes</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Breakfast Burrito</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Chicken Quesadillas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Street Corn Bowl</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Black Bean Tacos</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">All Regions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tacos & Wraps</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tex-Mex Mains</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Party Apps</a></li>
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
            <p>&copy; 2025 Home Recipe USA - Southwest Kitchen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SouthwestPage