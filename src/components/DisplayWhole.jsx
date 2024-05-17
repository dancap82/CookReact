import OneCard from '../components/OneCard';

const DisplayWhole = ({ recipes }) => {
  return (
    <div className="display-section flex flex-col items-center justify-center">
      <h2 className="h2-Display text-3xl font-bold dark:text-white">
        Explore<span className="underline underline-offset-3 decoration-8 decoration-lime-600 dark:decoration-green-600"> all the recipes</span>
      </h2>
      <div className="display-container">
        {recipes.map(recipe => (
          <OneCard key={recipe.sys.id} id={recipe.sys.id} image={recipe.fields.image.fields.file.url} title={recipe.fields.title} style={{ maxWidth: '20rem' }} />
        ))}
      </div>
    </div>
  );
};

export default DisplayWhole;