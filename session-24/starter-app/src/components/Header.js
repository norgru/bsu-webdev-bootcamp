import React from 'react';
import ReactDOM from 'react-dom/client';

function Header(){

    const links = [
        {
            name : "Home",
            ref: "#",
        },
        {
            name : "Search",
            ref: "#",
        },
        {
            name : "This",
            ref: "#",
        }

    ]

    return(
        <div>
            

            <ul className='navbar'>

                
                <li><a href="#">{links[0].name}</a></li>
                <li><a href="#">{links[1].name}</a></li>
                <li><a href="#">{links[2].name}</a></li>
            </ul>
            ^This is the header^
            
        </div>
        
    )
}

export default Header;