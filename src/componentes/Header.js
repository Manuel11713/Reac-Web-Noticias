import React from 'react';

const Header = props=>{
    return(
        <header>
            <div className="bg-dark">
                <h2  className="text-white p-3 text-center">{props.titulo}</h2> 
            </div>
        </header>
    )
};

export default Header