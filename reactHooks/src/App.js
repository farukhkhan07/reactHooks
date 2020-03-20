import React, { useEffect, useState } from "react";
import "./App.css";
import "./Components/Recipee";
import Recipe from "./Components/Recipee";

const App = () => {
  const [recipees, setRecipees] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const APP_ID = "xxxxxx";
  const API_KEY = "xxxxxxxxxxx";
  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`;

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("My Effect");
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();

    setRecipees(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <div className="row mx-auto">
        <input
          type="text"
          className="form-control"
          value={search}
          onChange={updateSearch}
        />
        <form onSubmit={getSearch}>
          <div className="col-lg"></div>
          <div className="col-lg-6">
            <button type="submit" className="btn btn-primary">
              {" "}
              SEARCH
            </button>
          </div>
        </form>
      </div>

      {recipees.map(rec => (
        <Recipe
          key={rec.recipe.label}
          title={rec.recipe.label}
          calories={rec.recipe.calories}
          image={rec.recipe.image}
          ingredients={rec.recipe.ingredients}
        ></Recipe>
      ))}
    </div>
  );
};

export default App;
