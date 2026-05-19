import { Link } from "react-router-dom"
import { useFavorites } from "../context/FavoritesContext"
import { motion } from "framer-motion"

function CharacterCard({ character }) {

  const {
    addFavorite,
    removeFavorite,
    isFavorite
  } = useFavorites()

  const favorite = isFavorite(character.id)

return (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.0 }}
    backdrop-blur-md
  >
      <Link

      className="
  card
  hover:-translate-y-2
  hover:shadow-[0_0_25px_rgba(255,166,0,0.4)]
  duration-300
"
    to={`/character/${character.id}`}
    className="
      card
      hover:scale-105
      duration-300
      flex
      flex-col
    "
  >
        <img
    src={character.image}
    alt={character.name}
    className="
      w-full
      h-[350px]
      object-contain
    "
  />

        <div className="card-content">

          <h2>{character.name}</h2>

          <p>
            <strong>Raça:</strong> {character.race}
          </p>

          <p>
            <strong>Ki:</strong> {character.ki}
          </p>

          <button
          className="
    favorite-action
    hover:scale-105
    duration-300
  "
            className="favorite-action"
            onClick={(event) => {

              event.preventDefault()

              if (favorite) {

                removeFavorite(character.id)

              } else {

                addFavorite(character)

              }

            }}
          >
            {
              favorite
                ? "❤️ Favoritado"
                : "🤍 Favoritar"
            }
          </button>

        </div>

      </Link>
      </motion.div>
      

    )
    
  }
export default CharacterCard