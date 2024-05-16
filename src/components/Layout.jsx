import { useContentful } from 'react-contentful';
import { useEffect } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import NavBar from "./NavBar"


function Layout(){
    return(
        <div>
            <NavBar />
             <Outlet />
        
      
          </div>
    )
}
export default Layout