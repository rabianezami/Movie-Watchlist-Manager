export default function MovieItem({ movie, onDeleteMovie, onToggle }) {
    return (
        <li className="flex justify-between items-center p-3 border-t">
            <div>
                <p className="font-bold">{movie.title}</p>
                <p className="text-xs opacity-70">
                    {movie.genre}
                </p>
            </div>

            <span className="font-bold">
                {movie.watched ? "✔ Watched" : "Pending"}
            </span>

            <div className="flex gap-1">
                <button
                    className="text-sm border px-3 py-1 rounded-lg"
                    onClick={() => onDeleteMovie(movie.id)}
                >
                    Delete
                </button>
                <button
                    className="text-sm border px-2 py-1 rounded-lg"
                    onClick={() => onToggle(movie.id)}
                >
                    {movie.watched ? "Unwatch" : "Watch"}
                </button>
            </div>
        </li>
    )
}