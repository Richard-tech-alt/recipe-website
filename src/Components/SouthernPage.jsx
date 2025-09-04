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
  Heart,
} from "lucide-react"

const SouthernPage = () => {
  const [email, setEmail] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const featuredRecipes = [
    {
      id: 1,
      title: "Classic BBQ Pulled Pork",
      image: "🍖",
      time: "25 min",
      difficulty: "Medium",
      rating: 4.9,
      description: "Slow-smoked pork shoulder with tangy BBQ sauce and coleslaw",
      category: "bbq"
    },
    {
      id: 2,
      title: "Crispy Buttermilk Fried Chicken",
      image: "🍗",
      time: "30 min", 
      difficulty: "Medium",
      rating: 4.8,
      description: "Golden-fried chicken with secret spice blend and honey drizzle",
      category: "chicken"
    },
    {
      id: 3,
      title: "Smokehouse Brisket Sandwich",
      image: "🥪",
      time: "20 min",
      difficulty: "Easy",
      rating: 4.9,
      description: "Tender smoked brisket with pickles and tangy BBQ sauce",
      category: "bbq"
    },
    {
      id: 4,
      title: "Southern Mac & Cheese",
      image: "🧀",
      time: "18 min",
      difficulty: "Easy", 
      rating: 4.7,
      description: "Three-cheese blend with crispy breadcrumb topping",
      category: "sides"
    },
    {
      id: 5,
      title: "Hot Honey Chicken Tenders",
      image: "🌶️",
      time: "22 min",
      difficulty: "Medium",
      rating: 4.8,
      description: "Crispy chicken strips with spicy honey glaze and ranch",
      category: "chicken"
    },
    {
      id: 6,
      title: "BBQ Ribs with Dry Rub",
      image: "🍖",
      time: "35 min",
      difficulty: "Hard",
      rating: 4.6,
      description: "Fall-off-the-bone ribs with smoky dry rub seasoning",
      category: "bbq"
    },
    {
      id: 7,
      title: "Southern Biscuits & Gravy",
      image: "🥐",
      time: "15 min",
      difficulty: "Easy",
      rating: 4.5,
      description: "Fluffy buttermilk biscuits smothered in sausage gravy",
      category: "comfort"
    },
    {
      id: 8,
      title: "Peach Cobbler Parfait",
      image: "🍑",
      time: "12 min",
      difficulty: "Easy",
      rating: 4.7,
      description: "Layered peach cobbler with vanilla cream and cinnamon crumble",
      category: "desserts"
    }
  ]

  const categories = [
    { id: "all", name: "All Recipes", count: 8 },
    { id: "bbq", name: "BBQ Classics", count: 3 },
    { id: "chicken", name: "Fried Chicken", count: 2 },
    { id: "sides", name: "Comfort Sides", count: 1 },
    { id: "comfort", name: "Soul Food", count: 1 },
    { id: "desserts", name: "Sweet Treats", count: 1 }
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
              <button className="text-red-600 hover:text-red-700 transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-2">
                <span className="text-4xl">🍗</span>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Southern Kitchen</h1>
                  <p className="text-sm text-gray-600">BBQ & lighter fried chicken</p>
                </div>
              </div>
            </div>
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
              Subscribe Free
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-500 via-orange-500 to-amber-500 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Southern Comfort
              <br />
              <span className="text-red-100">BBQ & Soul Food</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Authentic Southern flavors and BBQ traditions. From smoky brisket to crispy fried chicken, 
              experience the heart and soul of Southern cooking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                🍗 Fire Up The Grill
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                🔥 Southern Recipes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Stats */}
      <section className="py-12 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">22min</div>
              <div className="text-gray-600">Average Cook Time</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">4.8★</div>
              <div className="text-gray-600">Flavor Rating</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-amber-500 mb-2">2-4</div>
              <div className="text-gray-600">Servings</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">$8</div>
              <div className="text-gray-600">Cost Per Serving</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Southern Comfort Classics</h2>
            <p className="text-xl text-gray-600">Authentic BBQ and soul food that warms the heart</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? "bg-red-500 text-white"
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
                <div className="bg-gradient-to-br from-red-100 via-orange-100 to-amber-100 h-48 flex items-center justify-center">
                  <span className="text-8xl">{recipe.image}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                      🔥 {recipe.difficulty}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-red-400 text-red-400" />
                      <span className="text-sm font-semibold">{recipe.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{recipe.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Timer className="w-4 h-4 mr-1" />
                      {recipe.time}
                    </div>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm font-semibold">
                      Get Recipe
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Southern Style */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Southern Style?</h2>
            <p className="text-xl opacity-90">Tradition meets comfort in every bite</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🔥</div>
              <h3 className="text-2xl font-bold mb-4">Smoky BBQ</h3>
              <p className="text-lg opacity-90">
                Low and slow cooking methods that infuse deep, smoky flavors into every dish.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">🏡</div>
              <h3 className="text-2xl font-bold mb-4">Home Comfort</h3>
              <p className="text-lg opacity-90">
                Time-honored recipes passed down through generations of Southern families.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">🌶️</div>
              <h3 className="text-2xl font-bold mb-4">Bold Spices</h3>
              <p className="text-lg opacity-90">
                Cajun and Creole seasonings that bring heat and depth to traditional dishes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Southern Benefits */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Southern Comfort Benefits</h2>
            <p className="text-xl text-gray-600">Hearty meals that satisfy body and soul</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">High Protein</h3>
              <p className="text-gray-600 text-sm">BBQ meats packed with muscle-building protein</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Metabolism Boost</h3>
              <p className="text-gray-600 text-sm">Spicy seasonings help rev up your metabolism</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Soul Satisfying</h3>
              <p className="text-gray-600 text-sm">Comfort foods that nourish the spirit</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Family Bonding</h3>
              <p className="text-gray-600 text-sm">Recipes that bring families together</p>
            </div>
          </div>
        </div>
      </section>

      {/* Southern Heritage Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Southern Heritage</h2>
            <p className="text-xl text-gray-600">Every recipe tells a story of tradition and hospitality</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Flame className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">BBQ Mastery</h3>
                    <p className="text-gray-600">Time-tested smoking techniques that create legendary flavors</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Heart className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Made with Love</h3>
                    <p className="text-gray-600">Southern hospitality and care in every family recipe</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <span className="text-amber-600 text-xl">🌽</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Farm Fresh</h3>
                    <p className="text-gray-600">Local ingredients and farm-to-table Southern cooking</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-100 via-orange-100 to-amber-100 rounded-2xl p-12 text-center">
              <div className="text-8xl mb-6">🏠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Taste of Home</h3>
              <p className="text-gray-600 text-lg">
                Bring the warmth of Southern hospitality to your kitchen with recipes that comfort and satisfy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Get Southern Recipes Weekly</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join BBQ enthusiasts getting authentic Southern recipes and grilling tips every Friday
          </p>

          <div className="bg-white p-8 rounded-xl max-w-md mx-auto">
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
              />
              <button className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Get BBQ Secrets
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-4">Authentic Southern recipes. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🍗</span>
                <span className="text-xl font-bold">Southern Kitchen</span>
              </div>
              <p className="text-gray-400">BBQ & comfort food that brings families together.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Popular Recipes</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">BBQ Pulled Pork</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fried Chicken</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Smokehouse Brisket</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mac & Cheese</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">All Regions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">BBQ Classics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fried Chicken</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Soul Food</a></li>
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
            <p>&copy; 2025 Home Recipe USA - Southern Kitchen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SouthernPage