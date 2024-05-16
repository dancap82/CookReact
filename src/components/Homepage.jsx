import Hero from "./Hero"
import Featured from "./Featured"
import DisplayWhole from "./DisplayWhole"
import OneCard from "./OneCard"

function Homepage({recipes}) {
    
    
    
    return (
      <div>
        <Hero />
        {/* {recipes.map(recipe => (
                <OneCard key={recipe.sys.id} recipe={recipe} />
            ))} */}
       
       <Featured recipes={recipes} />
       <DisplayWhole recipes={recipes} />
        
      </div>
    )
  }
  
  export default Homepage