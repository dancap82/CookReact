import {Link} from "react-router-dom"
import OneCard from "../components/OneCard"


function Featured({recipes}){
    const featuredRecipes = recipes.slice(0, 2);
    return(
        <div className="featured-section">
            <h2 className=" h2-featured text-3xl font-bold dark:text-white">This week's <span class="underline underline-offset-3 decoration-8 decoration-lime-600 dark:decoration-green-600">favourite's</span></h2>   
            
            <div className="cards-container">
            {featuredRecipes.map(recipe => (
               <Link key={recipe.sys.id} to={`/recipe/${recipe.sys.id}`}>
                 <OneCard key={recipe.sys.id} 
                   image={recipe.fields.image.fields.file.url} 
                   title={recipe.fields.title} 
                   style={{ marginLeft: '1.5rem', bgColor:"#EBEBEB" }}  
                   />

                </Link>
        ))}
        
                {/* <OneCard image={Rec1} title="Healthy Bowl" />
                <OneCard image={Rec1} title="Healthy Bowl" style={{ marginLeft: '1.5rem' }}  /> */}
            </div>
        </div>

    )
}
export default Featured;
