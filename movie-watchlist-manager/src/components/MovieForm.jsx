import { useState } from "react"
import InputText from "./InputText"
import SelectInput from "./SelectInput"
import MovieList from "./MovieList"

const GENRES = ["Horror", "Drama", "Action", "Tragidy", "Comedy"]


export default function MovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("")
  const [genre, setGenre] = useState("Comedy")
  const [error, setError] = useState("")

  function submit() {
    setError("")

    const cleanTitle = title.trim()
    if (!cleanTitle) return setError("Movie title is required")

    onAddMovie({
      title: cleanTitle,
      genre,
      watched: false
    })

    setTitle("")
    setGenre("Commedy")
  }

  return (
    <>
      <div className="flex gap-6 flex-wrap">
        <InputText
          label="Title"
          value={title}
          onChange={setTitle}
          placeholder="e.g. Baharat"
        />

        <SelectInput
          label="Genre"
          value={genre}
          onChange={setGenre}
          options={GENRES}
        />
      </div>
      {error ? <p className="mt-1">{error}</p> : null}

      <button className="px-4 py-2 mt-2 rounded-md bg-white border font-medium" onClick={submit}>
        Add Movie
      </button>
    </>
  )
}