import HeroImg from "../assets/HeroBG.svg"


function Hero(){
    return(
        <div className="hero-container">
           
        <img src={HeroImg} className="HeroImg h-112 md:bg-fixed" />
        
        <button className="custom-button hero"> Learn more</button>
        </div>
      
    )
}
export default Hero;