import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import DisplayWhole from './components/DisplayWhole';
import { createClient } from 'contentful';
import OneRecipe from './components/OneRecipe';

const App = () => {
/*   const [recipes, setRecipes] = useState([]);
  const [showOneRecipe, setShowOneRecipe] = useState(false);
  const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(null); */

/*   useEffect(() => {
    const client = createClient({
      accessToken: import.meta.env.VITE_APP_CONTENTFUL_ACCESS_TOKEN,
      space: import.meta.env.VITE_APP_CONTENTFUL_SPACE_ID
    });

    const fetchRecipes = async () => {
      try {
        const entries = await client.getEntries({
          content_type: 'cookbook'
        });
        setRecipes(entries.items);
        console.log('Fetched recipes:', entries.items); // Log the fetched recipes
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

   */

  const showRecipe = (index) => {
    setSelectedRecipeIndex(index); // Set the index of the selected recipe
    setShowOneRecipe(true); // Show OneRecipe when this function is called
  };


  const [recipes, setRecipes] = useState([]);
  const [showOneRecipe, setShowOneRecipe] = useState(false);
  const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/recipes')
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