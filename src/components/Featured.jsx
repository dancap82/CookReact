import Rec1 from "../assets/Rec1_Bowl.png"
import OneCard from "../components/OneCard"

function Featured(){
    return(
        <div className="featured-section">
            <h2 className=" h2-featured text-3xl font-bold dark:text-white">This week's <span class="underline underline-offset-3 decoration-8 decoration-lime-600 dark:decoration-green-600">favourite's</span></h2>   
            
            <div className="cards-container">
                <OneCard image={Rec1} title="Healthy Bowl" />
                <OneCard image={Rec1} title="Healthy Bowl" style={{ marginLeft: '1.5rem' }}  />
            </div>
        </div>

    )
}
export default Featured;
