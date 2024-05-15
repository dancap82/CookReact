import Logo from "../assets/logo.png"


const NavBar=()=>{
    return(
        <nav className="backgroundNav">

            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 ">
            <div className="flex content-center">
                <img className="w-32"   src={Logo} alt="Our Logo" />
            <div className="flex ml-20  md:visible">
            <ul className="flex self-center no-wrap space-x-8 hidden md:inline-flex font-semibold text-lg">
                <li class="hover:text-purple-700">
                    <a href="#">Home </a>
                </li>
                <li className="hover:text-purple-700">
                    <a href="#">Recipees </a>
                </li>
                <li className="hover:text-purple-700">
                    <a href="#">About</a>
                </li>
             </ul>
            </div>
           </div>
           {/* <!-- here goes the trial button --> */}
           <div className="flex  lg:hidden mr-4">
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
            <svg className="w-5 h-5 mr-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search</span>
          </button>
            
            <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          </div>
           {/* <!-- end of trial button --> */}
            <section className="flex relative hidden md:inline-flex">
            <div className=" searchBar relative top-0 search-navbar">
                <input type="text" id="search-navbar" className=" relative block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search"/>
                <svg className="absolute w-4 h-4 left-3 top-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path>
                </svg>
                </div>
            </section>
           
            
         </div>
         </nav>
    )
}
export default NavBar;