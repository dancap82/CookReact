import Rec1 from "../assets/Rec1_Bowl.png"

function Featured(){
    return(
        <div className="featured-section">
            <h2 className=" h2-featured text-3xl font-bold dark:text-white">This week's <span class="underline underline-offset-3 decoration-8 decoration-lime-600 dark:decoration-green-600">favourite's</span></h2>   
            
            <div className="cards-container">
            <div className="mt-20 max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src={Rec1} alt="" />
                </a>
                <div className="p-5">
            
                
                <a href="#" className="custom-button inline-flex items-center px-3 py-2 text-sm ">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
        <div className="mt-20 max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <a href="#">
                    <img class="rounded-t-lg" src={Rec1} alt="" />
                </a>
                <div className="p-5">
            
                
                <a href="#" className="custom-button inline-flex items-center px-3 py-2 text-sm ">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
        </div>
</div>

    )
}
export default Featured;
// function Featured(){
//     return(
//         <div>
        
//         <h2 class=" text-center text-balance font-extrabold text-black-100 text-2xl xl:text-3xl xl:text-4xl xl:text-4xl">Featured Recipes</h2>

//         <div class="my-[3em] flex flex-wrap justify-center gap-[2em]"> 
//             <article class="max-w-[80ch] overflow-hidden rounded-[5px] shadow-[2px_8px_15px_rgba(15,9,8,0.2)] cursor-pointer scale[1.02] element hover:scale-[1.02] transition-transform duration-[0.2] ease-in-out ">
//                 <figure class="h-[70%] overflow-hidden">
//                     <img class="w-[100%] h-[100%] object-cover object-center"
//                          src="./assets/hunterChicken.jpg"
//                          alt="Recipe 2"/>
//                </figure>
//                <div class="px-[1em] py-[1em]">
//                     <h2 class="font-bold text-emerald-600">Hunter's Chiken Recipe</h2>
//                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus ab, delectus adipisci quod tempora incidunt repellat ullam veritatis
//                     </p>
//                     <a href="http://127.0.0.1:5500/rec2.html" class="readmore-btn">Read more <i class="fas fa-chevron-right" title="Can be clicked to read more on this article."></i></a>
//                </div>     
//             </article>
//             <article id="" class="max-w-[80ch] overflow-hidden rounded-[5px] shadow-[2px_8px_15px_rgba(15,9,8,0.2)] cursor-pointer scale[1.02] element hover:scale-[1.02] transition-transform duration-[0.2] ease-in-out ">
//                 <figure class="h-[70%] overflow-hidden">
//                     <img class="w-[100%] h-[100%] object-cover object-center"
//                          src="./assets/BucatiniWithMushroom.jpg"
//                          alt="Recipe 4"/>
//                </figure>
//                <div class="px-[1em] py-[1em]">
//                     <h2 class="font-bold text-emerald-600">Bucatini With Mushroom Recipe</h2>
//                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus ab, delectus adipisci quod tempora incidunt repellat ullam veritatis
//                     </p>
//                     <a href="./rec4.html" class="readmore-btn">Read more <i class="fas fa-chevron-right" title="Can be clicked to read more on this article."></i></a>
//                </div>     
//             </article>
//         </div>
    
//     </div>
//     )
// } 

// export default Featured;