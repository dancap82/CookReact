import OneCard from './OneCard';

const DisplayWhole = ({ recipes, showRecipe }) => {
  return (
    <div className="display-section flex flex-col items-center justify-center">
      <h2 className="h2-Display text-3xl font-bold dark:text-white">
        Explore<span className="underline underline-offset-3 decoration-8 decoration-lime-600 dark:decoration-green-600"> all the recipes</span>
      </h2>
      <div className="display-container">
        {recipes.map((recipe, index) => (
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

export default DisplayWhole;