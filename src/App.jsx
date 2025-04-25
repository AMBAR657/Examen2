// src/App.jsx
import React from "react";
import { MovieProvider } from "./context/MovieContext";
import MovieList from "./components/MovieList";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;

