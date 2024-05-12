import OneCard from "../components/OneCard"
import Rec2 from "../assets/Rec2_Cake.png"

function DisplayWhole(){
    return(
     <div className="display-section">
        <h2 className="h2-Display text-3xl font-bold dark:text-white">Explore<span class="underline underline-offset-3 decoration-8 decoration-lime-600 dark:decoration-green-600"> all the recipees</span></h2>
        <div className="display-container">
           
        <OneCard image={Rec2} title="Blueberry Cake" style={{ maxWidth: "20rem"}} />
        <OneCard image={Rec2} title="Blueberry Cake" style={{ maxWidth: "20rem",marginLeft: '0.5rem'}}  />
        <OneCard image={Rec2} title="Blueberry Cake" style={{ maxWidth: "20rem", marginLeft: '0.5rem'}}  />
        </div>
     </div>
    )
}
export default DisplayWhole;