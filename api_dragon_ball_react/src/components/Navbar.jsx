import { Link } from "react-router-dom"
import { useFavorites } from "../context/FavoritesContext"

function Navbar() {
  const { favorites } = useFavorites()

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        Dragon Ball Universe
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/favorites">
          Favoritos ({favorites.length})
        </Link>
      </div>

    </nav>
  )
}

export default Navbar