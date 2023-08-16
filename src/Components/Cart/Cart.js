import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartCard from '../Card/CartCard';


const Cart = () => {
    const items=useSelector(store=>store.cart.items);
    // console.log(items);
    
    // useEffect(() => {
    //   localStorage.setItem('products',JSON.stringify(items));
    // }, [items])
    
  return (    
    <div className='grid grid-cols-4 gap-3 p-5'>
        {items.map((item)=><CartCard product={item} key={item.id}/>)}
    </div>
  )
}

export default Cart