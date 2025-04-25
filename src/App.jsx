// src/App.jsx
import React from "react";
import { MovieProvider } from "./context/MovieContext"; // Proveedor del contexto
import MovieList from "./components/MovieList"; // Componente simplificado

function App() {
  return (
    <MovieProvider>
      <div>
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
