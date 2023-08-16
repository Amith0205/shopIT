import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const cartItems=useSelector(store=>store.cart.cnt)
    return (        
            <nav className='flex justify-between text-lg font-medium  shadow-md py-2 sticky top-0 bg-white'>
                <p className='m-3 text-4xl font-bold'>ShopIT!</p>
                <ul className='px-28 py-4 flex space-x-8 justify-end'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li>Offers</li>                    
                    <li className="flex">   
                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-md text-white mt-0.5 mr-2"> {cartItems}</p>                                         
                    <Link to={'./cart'}>Cart</Link>                               
                    </li>
                </ul>
            </nav>
        
    )
}

export default Navbar
