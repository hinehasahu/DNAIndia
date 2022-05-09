import React from 'react';
import './Navbar.css';

const Navbar = () =>{
    return (
       <div className='nav'>
            
            <div className='imag'>
                <img src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png"/>
            </div>
            <div className='lang'>
                <p>हिंदी में पढ़ें</p>
            </div>
            
            <div className='search'>
                <button {...{style:{backgroundColor:'rgb(255, 217, 0)', border:'0px',cursor:'pointer'}}}><img src='https://english.cdn.zeenews.com/static/public/menusearch.svg'/></button>
            </div>
       </div>

    );
};

export default Navbar;