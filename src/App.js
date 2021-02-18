import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import Recipe from "./Recipe";

function App() {

  const APP_ID = "7e4e168c";
  const APP_KEY = "54e49ff22ea8eda4d523b9e498efd2e3";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Chicken");
  
  useEffect( ()=> {
    getRecipes();
  }, [query])
  
  async function getRecipes(){
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  function handleInput(e) {
    const newSearch = e.target.value;
    setSearch(newSearch);
  }

  function handleClick(e) {
    e.preventDefault();
    setQuery(search);
  }
  
  return (
    <div className="app">
       <form className="search-form">
         <input onChange={handleInput} value={search} className="search-bar" type="text"></input>
         <button onClick={handleClick} className="search-button" type="submit">Search</button>
       </form>
       <div className="recipes">
       {recipes.map(recipe => {
         return (
           <Recipe
           key={recipe.recipe.label}
           title = {recipe.recipe.label}
           ingredients = {recipe.recipe.ingredientLines}
           img = {recipe.recipe.image}
            />
         )
       })}
       </div>
    </div>
  );
}

export default App;
