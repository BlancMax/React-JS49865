import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
    return (
        <>
            <div>
                <Link to={`/item/${product.id}`}>
                    <h1>{product.nombre}</h1>    
                </Link>         
                    <img src={product.image} alt={product.nombre}/>
            </div>
        </>
    );
};

export default Item;