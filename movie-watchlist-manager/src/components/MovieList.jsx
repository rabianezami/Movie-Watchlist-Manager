import MovieItem from "./MovieItem";

export default function MovieList({ movies, onDeleteMovie, onToggle }) {
    if (movies.length === 0) {
        return (
            <p className="opacity-80 py-2">
                No movies yet. Add your first movie
            </p>
        )
    }

    return (
        <ul>
            {movies.map((movie) => (
                <MovieItem
                    key={movie.id}
                    movie={movie}
                    onDeleteMovie={onDeleteMovie}
                    onToggle={onToggle}
                />
            ))}
        </ul>
    )
}