import { useFavorites } from "../context/FavoritesContext"
import CharacterCard from "../components/CharacterCard"

function Favorites() {
  const { favorites } = useFavorites()

  return (
    <main className="favorites-page">

      <h1>Personagens Favoritos</h1>

      <section id="characters-container">

        {
          favorites.length > 0 ? (

            favorites.map(character => (
              <CharacterCard
                key={character.id}
                character={character}
              />
            ))

          ) : (

            <p>Nenhum personagem favoritado.</p>

          )
        }

      </section>

    </main>
  )
}

export default Favorites