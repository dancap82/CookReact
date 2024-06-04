import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import DisplayWhole from './components/DisplayWhole';
import { createClient } from 'contentful';
import OneRecipe from './components/OneRecipe';

const App = () => {


  const showRecipe = (index) => {
    setSelectedRecipeIndex(index); // Set the index of the selected recipe
    setShowOneRecipe(true); // Show OneRecipe when this function is called
  };


  const [recipes, setRecipes] = useState([]);
  const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(null);
  const [showOneRecipe, setShowOneRecipe] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://cookreact-4plq.onrender.com/recipes')
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        console.log(data); // Log the fetched data here
      })
      .catch((error) => setError(error));
  }, []);




  return (
    <div>
  {!showOneRecipe && (
        <> 
          <NavBar />
          <Hero />
          <Featured recipes={recipes} showRecipe={showRecipe} />
          <DisplayWhole recipes={recipes} showRecipe={showRecipe} />
        </>
      )}
      {showOneRecipe && selectedRecipeIndex !== null && (
        <OneRecipe recipe={recipes[selectedRecipeIndex]} />
      )} 
    </div>
  );
};

export default App;