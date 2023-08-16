import React from 'react';
import Card from '../Card/Card';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Shimmer from '../Shimmer';
import { useSelector } from 'react-redux';

const ProductsContainer = () => {
    const [products,setProducts]=useState([]);
    const [error, setError] = useState(false);
    const [state, setState] = useState('');

    const cat=useSelector(store=>store.cat.category)   
   
    useEffect(() => {
        setState('loading');
        const url=cat?`https://dummyjson.com/products/category/${cat}`:`https://dummyjson.com/products/`;
        axios.get(url)
            .then((res) => {
                // console.log(res.data);
                setState('success');
                setProducts(res.data.products);
            })
            .catch((err) => {
                console.error('Error:', err);
                setState('error');
                setError(err);
            });        
    }, [cat])

    if (state === 'error')
        return (
            <h1>
                {error.toString()}
            </h1>
        );
    
    return (
        <>
        {state === 'loading' ? (
            <Shimmer />
        ) : (
            <div className='grid grid-cols-4 grid-flow-row gap-3 p-5'>
            {products.map((product)=>{
           return <Card key={product.id} product={product} />
           })
            }
            </div>
           
        )}
        </>
  )
}

export default ProductsContainer