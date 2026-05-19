import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react"

const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {

  const [favorites, setFavorites] = useState(() => {

    const savedFavorites =
      localStorage.getItem("favorites")

    return savedFavorites
      ? JSON.parse(savedFavorites)
      : []

  })

  useEffect(() => {

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    )

  }, [favorites])

  function addFavorite(character) {
    setFavorites([...favorites, character])
  }

  function removeFavorite(id) {
    setFavorites(
      favorites.filter(
        character => character.id !== id
      )
    )
  }

  function isFavorite(id) {
    return favorites.some(
      character => character.id === id
    )
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  return useContext(FavoritesContext)
}