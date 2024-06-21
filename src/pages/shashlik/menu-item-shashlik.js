import React, { useState } from 'react'
import Menu from '../../Menu';
import Paginate from '../Paginate/paginate';
import MenuItems from '../menu-items/menu-items';
import { useSelector } from 'react-redux';



export default function Shashlik() {
    const items = useSelector(state => state.cart.itemsInCart);
    const [menu, setMenuUtest] = useState(Menu.filter(menu => menu.category === "Shashlik"))
    const [pageNumber, setPageNumber] = useState(0)
    
    let contactsPerPage = "";
    if(items.length> 0){
            contactsPerPage = 6;
    }else{
        contactsPerPage=8;
    }
    const pageVisited = pageNumber * contactsPerPage;
    
    const  displayContacts = menu
    .slice(pageVisited, pageVisited + contactsPerPage)
    .map((menu,index) => {
    
        
            return (
                <MenuItems menu={menu} index={index}/>
        )
        
        


    })

    const pageCount = Math.ceil(menu.length / contactsPerPage);
    const changePage = ({selected}) =>{
    setPageNumber(selected);
}



    return ( 
        <div className='flex_block'>
            {displayContacts}
            <Paginate pageCount={pageCount} changePage={changePage}/>
        </div>
        


    )
}