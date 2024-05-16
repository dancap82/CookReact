import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import DisplayWhole from './components/DisplayWhole';
import { createClient } from 'contentful';
import OneRecipe from './components/OneRecipe';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
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

  return (
    <div>
      <NavBar />
      <Hero />
      <Featured recipes={recipes} />
      <DisplayWhole recipes={recipes} />
      {recipes.length > 0 && <OneRecipe recipes={recipes} />}
    </div>
  );
};

export default App;