import OneCard from '../components/OneCard';

const Featured = ({ recipes }) => {

const featuredRecipes = recipes.slice(0, 2);

  return (
    <div className="featured-section flex flex-col items-center justify-center">
      <h2 className="h2-featured text-3xl font-bold dark:text-white">
        This week's <span className="underline underline-offset-3 decoration-8 decoration-lime-600 dark:decoration-green-600">favorites</span>
      </h2>
      <div className="cards-container">
        {featuredRecipes.map(recipe => (
          <OneCard key={recipe.sys.id} image={recipe.fields.image.fields.file.url} title={recipe.fields.title} />
        ))}
      </div>
    </div>
  );
};

export default Featured;