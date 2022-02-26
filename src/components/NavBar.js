import React from 'react';
import Logo from "../logo1.png";
import {Link} from 'react-router-dom'



function NavBar(){
    return <>
      <div className="border  pl-12 flex space-x-8 item-center py-0.5">
       <img className="w-[50px] md:w-[60]" src={Logo}></img>
       <Link to="/" className="text-blue-400 font-bold
       text-xl
       md: text-3xl">Movies</Link>
       <Link to="favourites" className="text-blue-400 font-bold
       text-xl
        md:text-3xl">Favourites</Link>
     </div>

    </>

}
export default NavBar;