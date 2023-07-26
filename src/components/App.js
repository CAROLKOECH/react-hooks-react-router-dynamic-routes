import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import MoviesPage from "./MoviesPage";

function App() {
  // Dummy movie data
  const [movies, setMovies] = useState({
    1: { id: 1, title: "A River Runs Through It" },
    2: { id: 2, title: "Se7en" },
    3: { id: 3, title: "Inception" },
  });

  // Function to update the movies state if needed
  const updateMovies = (newMovies) => {
    setMovies(newMovies);
  };

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/movies">
          <MoviesPage movies={movies} updateMovies={updateMovies} />
        </Route>
        <Route exact path="/">
          <div>Home</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
