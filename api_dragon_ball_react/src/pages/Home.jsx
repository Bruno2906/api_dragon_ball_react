import { useEffect, useState } from "react"
import CharacterCard from "../components/CharacterCard"
import { api } from "../services/api"
import SkeletonCard from "../components/SkeletonCard"

function Home() {
  const [search, setSearch] = useState("")
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    api.get("/characters?limit=58")
      .then(response => {
        setCharacters(response.data.items)
        setError(false)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        setError(true)
        setLoading(false)
      })
  }, [])

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) {

  return (

    <section
      id="characters-container"
      className="mt-10"
    >
      {
        Array.from({ length: 8 }).map((_, index) => (

          <SkeletonCard key={index} />

        ))
      }
    </section>
  )
}

  if (error) {
    return (
      <h1 className="error-message">
        Erro ao carregar personagens...
      </h1>
    )
  }

  return (
    <div>
      <header>
        
        <h1>Universo Dragon Ball Z</h1>

        <p>Explore os guerreiros mais poderosos do universo</p>

        <input
          id="searchInput"
          type="text"
          placeholder="Buscar personagem..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      <main>
        <section id="characters-container">
          {filteredCharacters.map(character => (
            <CharacterCard
              key={character.id}
              character={character}
            />
          ))}
        </section>
      </main>
    </div>
  )
}

export default Home