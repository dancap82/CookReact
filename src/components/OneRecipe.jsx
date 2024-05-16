import OneCard from "./OneCard";

const OneRecipe = ({ recipes }) => {
    return (
      <div className="flex justify-center items-center min-h-screen">
        {recipes && ( // Check if recipes is not null or undefined
          <>
            <div className="container flex justify-center items-center w-1/4 h-3/4">
              {/* Left container for image */}
              <img src={recipes[1].fields.image.fields.file.url} alt={recipes[1].fields.title} className="max-h-full max-w-full" />
            </div>
            <div className="container flex flex-col justify-center items-center w-3/4 h-3/4">
              {/* Right container for recipe details */}
              <h2 className="text-3xl font-bold">{recipes[1].fields.title}</h2>
              <p>{recipes[1].fields.description}</p>
              <ul>
                {recipes[1].fields.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    );
  };
  
  export default OneRecipe;