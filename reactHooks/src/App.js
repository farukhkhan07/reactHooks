import React, { useEffect, useState } from "react";
import "./App.css";
import "./Components/Recipee";
import Recipe from "./Components/Recipee";

const App = () => {
  const APP_ID = "4bfd2969";
  const API_KEY = "9176627551d0883cd1a21d9cd53ee42a";
  const exampleReq = `https://api.edamam.com/search?q=vegetable&app_id=${APP_ID}&app_key=${API_KEY}`;

  const [counter, setCounter] = useState(0);
  const [recipees, setRecipees] = useState([""]);

  useEffect(() => {
    console.log("My Effect");
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();

    setRecipees(data.hits);
    console.log(data.hits);
  };
  return (
    <div className="App">
      <form className="search_form">
        <input type="text" className="search-bar" />
        <button type="button" className="search-button">
          {" "}
          SEARCH
        </button>
      </form>

      {recipees.map(rec => (
        <Recipe title={rec.rec.label}></Recipe>
      ))}
    </div>
  );
};

export default App;
