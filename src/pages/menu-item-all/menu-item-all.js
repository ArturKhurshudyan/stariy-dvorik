import React, { useState } from 'react'
import Menu from '../../Menu';
import MenuItems from '../menu-items/menu-items';
import Paginate from '../Paginate/paginate';
import "../../index.css"

import { useSelector } from 'react-redux';



export default function MenuItem() {
    const items = useSelector(state => state.cart.itemsInCart);
    const [menu, setMenuUtest] = useState(Menu.slice(0,50))
    const [pageNumber, setPageNumber] = useState(0)
    
    let contactsPerPage = "";
    const media = window.matchMedia ("(min-width: 769px).").matches;
    if(items.length> 0 || media.matches <= "769px"){
            contactsPerPage = 6;
    }else{
        contactsPerPage=8;
    }
    const pageVisited = pageNumber * contactsPerPage;
    
    const  displayContacts = menu
    .slice(pageVisited, pageVisited + contactsPerPage)
    .map((menu,index) => {
    
        
            return (
                
                <MenuItems menu={menu} key={index}/>
                
        )
                


    })

    console.log(pageNumber);

    const pageCount = Math.ceil(menu.length / contactsPerPage);
    const changePage = ({selected}) =>{
    setPageNumber(selected);
}



    return ( 
        <div className="flex_block">
            {displayContacts}
            <Paginate pageCount={pageCount} changePage={changePage}/>
            
        </div>
        


    )
}