import heroBackground from '../assets/herobackground.jpg';

const Hero = () => {
  return (
    <div className="grid grid-rows-2 w-full h-96 content-center bg-cover bg-center" style={{backgroundImage: `url(${heroBackground})`}}>
      <div className="text-center text-sm sm:text-base md:text-lg lg:text-xl mt-20">
        Welcome to our recipe haven!<br/>
        Dive into a world of culinary delight with our recipe website.<br/>
        Explore a treasure trove of mouthwatering dishes, from quick weekday meals to indulgent desserts.<br/>
        Whether you're a seasoned chef or a kitchen novice, we've got something for everyone.<br/>
        Discover new flavors, unleash your creativity, and embark on a delicious journey with us.
      </div>
      <div className="flex justify-center mt-20">
        <button className="w-40 h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Hero;