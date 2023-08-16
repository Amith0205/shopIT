import React from 'react';
import { useSelector } from 'react-redux';
import CartCard from '../Card/CartCard';


const Cart = () => {
    const items=useSelector(store=>store.cart.items);
    console.log(items);
  return (
    <div className='grid grid-cols-4 gap-3 p-5'>
        {items.map((item)=>{
            return <CartCard product={item}/>            
        })}
    </div>
  )
}

export default Cart