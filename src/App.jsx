// src/components/MovieList.jsx
import React from "react";
import { useMovies } from "../context/MovieContext";

function MovieList() {
  const { filteredMovies, addMovie, deleteMovie, toggleFavorite, setFilter } =
    useMovies();

  return (
    <div className="movie-list-container">
      <h1 className="title">Gestión de Películas</h1>
      <button
        className="add-movie-button"
        onClick={() =>
          addMovie({ title: "Nueva Película", genre: "Drama", favorite: false })
        }
      >
        Agregar Película
      </button>

      <div className="filters">
        <input
          type="text"
          placeholder="Buscar por título"
          className="filter-input"
          onChange={(e) => setFilter((prev) => ({ ...prev, title: e.target.value }))}
        />
        <input
          type="text"
          placeholder="Buscar por género"
          className="filter-input"
          onChange={(e) => setFilter((prev) => ({ ...prev, genre: e.target.value }))}
        />
      </div>

      <ul className="movie-list">
        {filteredMovies.map((movie) => (
          <li key={movie.id} className="movie-item">
            <span className="movie-title">
              {movie.title} ({movie.genre})
            </span>
            <div className="movie-actions">
              <button
                className="favorite-button"
                onClick={() => toggleFavorite(movie.id)}
              >
                {movie.favorite ? "❤️ Favorito" : "🤍 Agregar a Favoritos"}
              </button>
              <button
                className="delete-button"
                onClick={() => deleteMovie(movie.id)}
              >
                🗑️ Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
