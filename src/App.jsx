import { Route, Routes } from "react-router-dom"
import CaliforniaPage from "./Components/CaliforniaPage"
import EastCoastPage from "./Components/EastCoastPage"
import FloridaPage from "./Components/FloridaPage"
import HomeRecipeUSA from "./Components/HomeRecipeUsa"
import MidwestPage from "./Components/MidwestPage"
import NorthwestPage from "./Components/NorthWestPage"
import SouthernPage from "./Components/SouthernPage"
import SouthwestPage from "./Components/SouthWestPage"

function App(){
  return(
    <>
       <Routes>
          <Route path="/" element={<HomeRecipeUSA/>} />
          <Route path="/california" element={<CaliforniaPage/>} />
          <Route path="/midwest" element={<MidwestPage/>} />
          <Route path="/florida" element={<FloridaPage/>} />
          <Route path="/northwest" element={<NorthwestPage/>} />
          <Route path="/southern" element={<SouthernPage/>} />
          <Route path="/southwest" element={<SouthwestPage/>} />
          <Route path="/east-coast" element={<EastCoastPage/>} />
        </Routes>
    </>
  )
}
export default App


