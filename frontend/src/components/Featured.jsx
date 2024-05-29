import OneCard from './OneCard';

const Featured = ({ recipes, showRecipe }) => {
  // Slice the recipes array to only get the first two recipes
  const featuredRecipes = recipes.slice(0, 2);

  return (
    <div className="featured-section flex flex-col items-center justify-center">
      <h2 className="h2-Featured text-3xl font-bold dark:text-white">
        Featured Recipes
      </h2>
      <div className="flex flex-row space-x-4">
        {featuredRecipes.map((recipe, index) => (
          <OneCard 
            key={recipe.id} 
            image={recipe.image} 
            title={recipe.title} 
            style={{ maxWidth: '20rem' }} 
            onClick={() => showRecipe(index)} // Pass the index to showRecipe
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;