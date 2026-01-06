import { useState } from "react"
import Card from "./components/Card"
import MovieForm from "./components/MovieForm"
import MovieList from "./components/MovieList"
import Header from "./components/Header"
import Summary from "./components/Summary"

function createId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID()
  }
  return `${Date.now()}-${Math.random()}`
}



export default function App() {
  const [movies, setMovies] = useState([])
  const [filter, setFilter] = useState("All")

  
  const visibleMovies = movies.filter((m) => {
    if (filter === "Watched") return m.watched;
    if (filter === "Unwatched") return !m.watched
    return true;
  })

  const totalMovies = movies.length
  const watchedCount = movies.filter(m => m.watched).length
  const unwatchedCount = totalMovies - watchedCount
  const allWatched = totalMovies > 0 && watchedCount === totalMovies

  function handleAddMovie(data) {
    setMovies((prev) => [
      { id: createId(), ...data },
      ...prev,
    ])
  }

  function handleToggleMovie(id) {
    setMovies((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, watched: !m.watched } : m
      )
    )
  }

  function handleDeleteMovie(id) {
    setMovies((prev) => prev.filter((m) => m.id !== id));
  }

  return (
    <div className="max-w-[980px] mx-auto p-4 font-sans">
      <Header />
      <Summary 
       total={totalMovies}
       watched={watchedCount}
       unwatched={unwatchedCount}
       allWatched={allWatched}
      />

      <Card title="Add Movie">
        <MovieForm onAddMovie={handleAddMovie} />
      </Card>

      <Card
        title="Watchlist"
        right={
          <select
            className="border border-gray-200 rounded px-2 py-1 text-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Watched">Watched</option>
            <option value="Unwatched">Unwatched</option>
          </select>
        }
      >
        <MovieList
          movies={visibleMovies}
          onDeleteMovie={handleDeleteMovie}
          onToggle={handleToggleMovie}
        />
      </Card>
    </div>
  )
}
