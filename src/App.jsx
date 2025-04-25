import { MovieProvider } from "./context/MovieContext";
import MovieForm from "./components/MovieForm";
import MovieFilters from "./components/MovieFilters";
import MovieList from "./components/MovieList";
import FavoriteList from "./components/FavoriteList";

export default function App() {
  return (
    <MovieProvider>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-semibold text-center text-blue-700 mb-6">
          Películas
        </h1>
        
        <MovieForm />
        
        <div className="my-6">
          <MovieFilters />
        </div>

        <div className="my-6">
          <FavoriteList />
        </div>

        <MovieList />
      </div>
    </MovieProvider>
  );
}
