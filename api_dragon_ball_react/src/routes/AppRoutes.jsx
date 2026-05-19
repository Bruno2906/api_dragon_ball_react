import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../components/Navbar"
import Home from "../pages/Home"
import CharacterDetails from "../pages/CharactersDetails"
import Favorites from "../pages/Favorites"

function AppRoutes() {
  return (

    <BrowserRouter>
  <Navbar />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/character/:id" element={<CharacterDetails />} />
    <Route path="/favorites" element={<Favorites />} />
  </Routes>
</BrowserRouter>

  )
}

export default AppRoutes