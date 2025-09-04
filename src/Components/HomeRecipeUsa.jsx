import { useState } from "react"
import {
  MapPin,
  Clock,
  DollarSign,
  Heart,
  Users,
  ChefHat,
  Search,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  ArrowRight,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const HomeRecipeUSA = () => {
  const [selectedRegion, setSelectedRegion] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [email, setEmail] = useState("")
  const [showRegionModal, setShowRegionModal] = useState(false)
  const [showMapModal, setShowMapModal] = useState(false)
  const navigate = useNavigate()

   

  const handleNavClick = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleRegionSelect = (regionId) => {
    setSelectedRegion(regionId)
    setShowRegionModal(false)
    setShowMapModal(false)
    //  navigate(`/${regionId}`)
  }

   const handleRegion = (regionId) => {
     navigate(`/${regionId}`)
  }

  const handleZipCodeSearch = () => {
    if (zipCode.trim()) {
      // Simple ZIP code to region mapping logic
      const zipNum = Number.parseInt(zipCode, 10)
      let region = "east-coast"

      if (zipNum >= 90000) region = "california"
      else if (zipNum >= 80000) region = "northwest"
      else if (zipNum >= 70000) region = "south"
      else if (zipNum >= 60000) region = "midwest"
      else if (zipNum >= 40000) region = "south"
      else if (zipNum >= 30000) region = "florida"

      handleRegionSelect(region)
    } else {
      alert("Please enter a valid ZIP code")
    }
  }

  const stateRegionMap = {
    CA: "california",
    OR: "northwest",
    WA: "northwest",
    NV: "california",
    TX: "southwest",
    AZ: "southwest",
    NM: "southwest",
    CO: "southwest",
    FL: "florida",
    GA: "south",
    AL: "south",
    MS: "south",
    LA: "south",
    SC: "south",
    NC: "south",
    TN: "south",
    KY: "south",
    AR: "south",
    IL: "midwest",
    IN: "midwest",
    OH: "midwest",
    MI: "midwest",
    WI: "midwest",
    MN: "midwest",
    IA: "midwest",
    MO: "midwest",
    ND: "midwest",
    SD: "midwest",
    KS: "midwest",
    NE: "midwest",
    NY: "east-coast",
    NJ: "east-coast",
    PA: "east-coast",
    CT: "east-coast",
    MA: "east-coast",
    RI: "east-coast",
    VT: "east-coast",
    NH: "east-coast",
    ME: "east-coast",
    MD: "east-coast",
    DE: "east-coast",
    VA: "east-coast",
    WV: "east-coast",
  }

  const USMap = () => (
    <div className="relative bg-blue-50 p-8 rounded-xl">
      <h3 className="text-xl font-bold text-center mb-6">Click Your State</h3>
      <div className="grid grid-cols-6 gap-2 text-xs">
        {/* Simplified state grid representation */}
        <div className="col-span-6 grid grid-cols-12 gap-1">
          {/* Row 1 */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["ME"])}
            className="bg-green-200 hover:bg-green-300 p-2 rounded text-center transition-colors"
          >
            ME
          </button>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          {/* Row 2 */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["VT"])}
            className="bg-green-200 hover:bg-green-300 p-2 rounded text-center transition-colors"
          >
            VT
          </button>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["NH"])}
            className="bg-green-200 hover:bg-green-300 p-2 rounded text-center transition-colors"
          >
            NH
          </button>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          {/* Row 3 */}
          <button
            onClick={() => handleRegionSelect(stateRegionMap["WA"])}
            className="bg-teal-200 hover:bg-teal-300 p-2 rounded text-center transition-colors"
          >
            WA
          </button>
          <div></div>
          <div></div>
          <div></div>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["NY"])}
            className="bg-green-200 hover:bg-green-300 p-2 rounded text-center transition-colors"
          >
            NY
          </button>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["MA"])}
            className="bg-green-200 hover:bg-green-300 p-2 rounded text-center transition-colors"
          >
            MA
          </button>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          {/* Row 4 */}
          <button
            onClick={() => handleRegionSelect(stateRegionMap["OR"])}
            className="bg-teal-200 hover:bg-teal-300 p-2 rounded text-center transition-colors"
          >
            OR
          </button>
          <div></div>
          <div></div>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["PA"])}
            className="bg-green-200 hover:bg-green-300 p-2 rounded text-center transition-colors"
          >
            PA
          </button>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["CT"])}
            className="bg-green-200 hover:bg-green-300 p-2 rounded text-center transition-colors"
          >
            CT
          </button>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["RI"])}
            className="bg-green-200 hover:bg-green-300 p-2 rounded text-center transition-colors"
          >
            RI
          </button>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          {/* Row 5 */}
          <button
            onClick={() => handleRegionSelect(stateRegionMap["CA"])}
            className="bg-green-400 hover:bg-green-500 p-2 rounded text-center transition-colors"
          >
            CA
          </button>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["NV"])}
            className="bg-green-400 hover:bg-green-500 p-2 rounded text-center transition-colors"
          >
            NV
          </button>
          <div></div>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["OH"])}
            className="bg-yellow-200 hover:bg-yellow-300 p-2 rounded text-center transition-colors"
          >
            OH
          </button>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["NJ"])}
            className="bg-green-200 hover:bg-green-300 p-2 rounded text-center transition-colors"
          >
            NJ
          </button>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          {/* Row 6 */}
          <div></div>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["CO"])}
            className="bg-orange-200 hover:bg-orange-300 p-2 rounded text-center transition-colors"
          >
            CO
          </button>
          <div></div>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["IL"])}
            className="bg-yellow-200 hover:bg-yellow-300 p-2 rounded text-center transition-colors"
          >
            IL
          </button>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["IN"])}
            className="bg-yellow-200 hover:bg-yellow-300 p-2 rounded text-center transition-colors"
          >
            IN
          </button>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["MD"])}
            className="bg-green-200 hover:bg-green-300 p-2 rounded text-center transition-colors"
          >
            MD
          </button>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          {/* Row 7 */}
          <div></div>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["NM"])}
            className="bg-orange-200 hover:bg-orange-300 p-2 rounded text-center transition-colors"
          >
            NM
          </button>
          <div></div>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["MO"])}
            className="bg-yellow-200 hover:bg-yellow-300 p-2 rounded text-center transition-colors"
          >
            MO
          </button>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["KY"])}
            className="bg-red-200 hover:bg-red-300 p-2 rounded text-center transition-colors"
          >
            KY
          </button>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["VA"])}
            className="bg-green-200 hover:bg-green-300 p-2 rounded text-center transition-colors"
          >
            VA
          </button>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          {/* Row 8 */}
          <div></div>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["AZ"])}
            className="bg-orange-200 hover:bg-orange-300 p-2 rounded text-center transition-colors"
          >
            AZ
          </button>
          <div></div>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["AR"])}
            className="bg-red-200 hover:bg-red-300 p-2 rounded text-center transition-colors"
          >
            AR
          </button>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["TN"])}
            className="bg-red-200 hover:bg-red-300 p-2 rounded text-center transition-colors"
          >
            TN
          </button>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["NC"])}
            className="bg-red-200 hover:bg-red-300 p-2 rounded text-center transition-colors"
          >
            NC
          </button>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          {/* Row 9 */}
          <div></div>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["TX"])}
            className="bg-orange-200 hover:bg-orange-300 p-2 rounded text-center transition-colors"
          >
            TX
          </button>
          <div></div>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["LA"])}
            className="bg-red-200 hover:bg-red-300 p-2 rounded text-center transition-colors"
          >
            LA
          </button>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["MS"])}
            className="bg-red-200 hover:bg-red-300 p-2 rounded text-center transition-colors"
          >
            MS
          </button>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["SC"])}
            className="bg-red-200 hover:bg-red-300 p-2 rounded text-center transition-colors"
          >
            SC
          </button>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          {/* Row 10 */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["AL"])}
            className="bg-red-200 hover:bg-red-300 p-2 rounded text-center transition-colors"
          >
            AL
          </button>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["GA"])}
            className="bg-red-200 hover:bg-red-300 p-2 rounded text-center transition-colors"
          >
            GA
          </button>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          {/* Row 11 */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <button
            onClick={() => handleRegionSelect(stateRegionMap["FL"])}
            className="bg-pink-200 hover:bg-pink-300 p-2 rounded text-center transition-colors"
          >
            FL
          </button>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">Click any state to explore regional recipes</p>
      </div>
    </div>
  )

  const regions = [
    {
      id: "east-coast",
      name: "East Coast",
      icon: "🍕",
      description: "Quick pizza & global flavors",
      color: "bg-blue-500",
    },
    {
      id: "midwest",
      name: "Midwest",
      icon: "🍲",
      description: "Comfort casseroles & family meals",
      color: "bg-yellow-500",
    },
    {
      id: "california",
      name: "California",
      icon: "🥗",
      description: "Healthy bowls & plant-based power",
      color: "bg-green-500",
    },
    { id: "south", name: "South", icon: "🍗", description: "BBQ & lighter fried chicken", color: "bg-red-500" },
    { id: "southwest", name: "Southwest", icon: "🌮", description: "Tex-Mex made easy", color: "bg-orange-500" },
    { id: "northwest", name: "Northwest", icon: "🐟", description: "Seafood & cozy soups", color: "bg-teal-500" },
    { id: "florida", name: "Florida", icon: "🍹", description: "Tropical light bites", color: "bg-pink-500" },
  ]

  const solutions = [
    { icon: <Clock className="w-8 h-8" />, title: "No Time?", solution: "15-min recipes", color: "text-blue-600" },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "On a Budget?",
      solution: "$10 family dinners",
      color: "text-green-600",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Want Healthy?",
      solution: "Keto, Low-Carb, Gluten-Free",
      color: "text-red-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Picky Eaters?",
      solution: "Kid-approved meals",
      color: "text-purple-600",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <ChefHat className="w-8 h-8 text-red-600" />
              <span className="text-2xl font-bold text-gray-900">Home Recipe USA</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => handleNavClick("regions")}
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Regions
              </button>
              <button
                onClick={() => handleNavClick("recipes")}
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Recipes
              </button>
              <button
                onClick={() => handleNavClick("community")}
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Blog
              </button>
              <button
                onClick={() => handleNavClick("newsletter")}
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick("newsletter")}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Subscribe Free
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Your Recipes.
                <br />
                Your Region.
                <br />
                <span className="text-red-600">Your Way.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get quick, healthy, and budget-friendly recipes personalized for your U.S. lifestyle.
              </p>

              {/* ZIP Code Finder */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg mb-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-red-600" />
                  Find Recipes for Your Area
                </h3>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <input
                    type="text"
                    placeholder="Enter ZIP code..."
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleZipCodeSearch}
                    className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center sm:justify-start"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Find Recipes
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => setShowMapModal(true)}
                  className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors text-lg font-semibold"
                >
                  🔍 Choose Your Region
                </button>
                <button
                  onClick={() => handleNavClick("newsletter")}
                  className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg hover:bg-red-50 transition-colors text-lg font-semibold"
                >
                  📰 Free Meal Plans
                </button>
              </div>
            </div>

            {/* Interactive US Map Placeholder */}
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-semibold mb-6 text-center">Select Your Region</h3>
                <div className="grid grid-cols-2 gap-4">
                  {regions.slice(0, 6).map((region) => (
                    <button
                      key={region.id}
                      onClick={() => handleRegionSelect(region.id)}
                      className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                        selectedRegion === region.id
                          ? "border-red-500 bg-red-50"
                          : "border-gray-200 hover:border-red-300"
                      }`}
                    >
                      <div className="text-3xl mb-2">{region.icon}</div>
                      <div className="font-semibold text-sm">{region.name}</div>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setShowMapModal(true)}
                  className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  🗺️ View Full US Map
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cooking Made Simple in 3 Steps</h2>
            <p className="text-xl text-gray-600">From selection to satisfaction</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center group hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Select Your Region</h3>
              <p className="text-gray-600">
                Tell us where you're cooking from (East Coast, Midwest, West Coast, South, etc.).
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center group hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                <span className="text-2xl font-bold text-red-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Get Tailored Recipes</h3>
              <p className="text-gray-600">See dishes, hacks, and meal plans made for your lifestyle and budget.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center group hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Cook Smarter</h3>
              <p className="text-gray-600">Save time, eat better, and enjoy stress-free meals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Highlights */}
      <section id="regions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Cooking Across America?</h2>
            <p className="text-xl text-gray-600">Discover flavors from every corner of the country</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {regions.map((region) => (
              <div
                key={region.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => handleRegionSelect(region.id)}
              >
                <div className={`h-32 ${region.color} flex items-center justify-center`}>
                  <span className="text-6xl">{region.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 transition-colors">
                    {region.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{region.description}</p>
                  <button className="text-red-600 font-semibold flex items-center group-hover:text-red-700 transition-colors" onClick={() => handleRegion(region.id)}>
                    Explore Recipes{" "}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem-Solving Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Kitchen, Your Challenges — Solved</h2>
            <p className="text-xl text-gray-600">Whatever your cooking challenge, we've got the solution</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div
                  className={`${solution.color} mb-6 flex justify-center group-hover:scale-110 transition-transform`}
                >
                  {solution.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                <p className="text-red-600 font-semibold">{solution.solution}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors text-lg font-semibold">
              Find My Solution
            </button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Cooking Is Better Together</h2>
            <p className="text-xl opacity-90">Join our community of home cooks across America</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <div className="text-4xl mb-4">🗣️</div>
              <h3 className="text-xl font-semibold mb-4">Kitchen Helpdesk</h3>
              <p className="mb-4">"What can I make with chicken, rice, and spinach?"</p>
              <button className="bg-white text-red-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Ask Now
              </button>
            </div>

            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-semibold mb-4">Share Your Dish</h3>
              <p className="mb-4">Get featured on our homepage</p>
              <button className="bg-white text-red-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Upload Photo
              </button>
            </div>

            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-4">Weekly Challenge</h3>
              <p className="mb-4">"Cook a $10 Dinner for 4"</p>
              <button className="bg-white text-red-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Join Challenge
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Get Free Weekly Meal Plans, Shopping Lists & Hacks</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of U.S. families solving dinner stress every week with our smart meal kits.
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
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Subscribe Now
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ChefHat className="w-8 h-8 text-red-600" />
                <span className="text-xl font-bold">Home Recipe USA</span>
              </div>
              <p className="text-gray-400">Your regional recipe destination for delicious, budget-friendly meals.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Select Region
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Recipes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Popular Regions</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    East Coast
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    California
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    South
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Midwest
                  </a>
                </li>
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
            <p>&copy; 2025 Home Recipe USA. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Interactive US Map Modal */}
      {showMapModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Choose Your State</h2>
                <button onClick={() => setShowMapModal(false)} className="text-gray-500 hover:text-gray-700 text-2xl">
                  ×
                </button>
              </div>
              <USMap />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomeRecipeUSA

