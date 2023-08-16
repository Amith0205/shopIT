import React from 'react';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {addItem} from '../../utils/Slices/CartSlice';
import Quantity from './Quantity';

const Card = ({product}) => {
    

    const dispatch = useDispatch();
    
    const handleAdd = (product) => {
        dispatch(addItem(product));
    }

    return (        
        <div className='m-5 p-2 max-w-xs flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md h-100'>
            <img src={
                    product.images[0]
                }
                className='object-fill m-3 rounded-lg h-52 w-auto mx-auto'/>

            <div className='h-48 flex flex-col items-center justify-between'>
                <h5 className="text-xl font-semibold tracking-normal text-slate-900 text-center ">
                    {
                    product.title
                }</h5>
                <p className="text-2xl font-bold text-slate-900 text-center">
                    $ {product.price}
                </p>
                
                <Quantity/>
                <button className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 my-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 w-full"
                    onClick={
                        () => handleAdd(product)
                }>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    Add to cart
                </button>
            </div>
        </div>
        // <div className='flex flex-col  min-h-screen m-4 border-4'>
        //     <img src={product.image} className='h-40'></img>
        //     <div className='flex flex-col'>
        //     <p>{product.title}</p>
        //     <button className='self-end'>Add to Cart</button>
        //     </div>
        // </div>
    )
}

export default Card
