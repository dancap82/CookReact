const OneRecipe = ({ recipe }) => {
  const handleRefresh = () => {
    window.location.reload(); // Reload the page
  };

  if (!recipe) {
    return <div>No recipe selected</div>;
  }

  return (
    <div className="recipe-details flex justify-center items-center min-h-screen">
      <div className="container flex justify-center items-center">
        {/* Left container for the image */}
        <div className="w-1/2 p-4">
          <button className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-2 rounded" onClick={handleRefresh}>Back</button>
          <img src={recipe.fields.image.fields.file.url} alt={recipe.fields.title} className="max-h-full max-w-full" />
        </div>
        {/* Right container for the recipe details */}
        <div className="w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">{recipe.fields.title}</h2>
          <p className="mb-4">{recipe.fields.description}</p>
          <ul>
            {recipe.fields.ingredients.map((ingredient, index) => (
              <li key={index} className="mb-2">
                &bull; {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OneRecipe;