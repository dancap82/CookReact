import { useContentful } from 'react-contentful';
import { useEffect } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import NavBar from "./NavBar"


function Layout(){
    const { data, error, isLoading } = useContentful({
        contentType: 'Cookbook',
      });
    return(
        <div>
            <NavBar/>
             <Outlet  data={data} />
        
      
          </div>
    )
}
export default Layout