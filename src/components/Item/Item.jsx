import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
    return (
        <>
            <div>
                <Link to={`/item/${producto.id}`}>
                    <h1>{producto.nombre}</h1>    
                </Link>         
                <img src="{producto.image}" alt="{producto.nombre" />
            </div>
        </>
    );
};

export default Item;