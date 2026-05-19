import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

function CharacterDetails() {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters/${id}`)
      .then(response => response.json())
      .then(data => {
        setCharacter(data)
      })
  }, [id])

  if (!character) {
    return <h1>Carregando...</h1>
  }

  return (
    <main className="details-container">

      <Link to="/" className="back-link">
        Voltar
      </Link>

      <section className="details-card">

        <img
          src={character.image}
          alt={character.name}
        />

        <div>
          <h1>{character.name}</h1>

          <p><strong>Raça:</strong> {character.race}</p>
          <p><strong>Ki:</strong> {character.ki}</p>
          <p><strong>Máximo Ki:</strong> {character.maxKi}</p>
          <p><strong>Afiliação:</strong> {character.affiliation}</p>

          <p>{character.description}</p>
        </div>

      </section>

    </main>
  )
}

export default CharacterDetails