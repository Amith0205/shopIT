import React,{useState} from 'react'

const Quantity = () => {
    const [qty,setQty]=useState(1);

    const inc = () => {
        if(qty<10){
            setQty(qty + 1);
        }        
      };
    const dec=()=>{
        if (qty !== 1) {
            setQty(qty - 1);
         }
    }
  return (
    <div className="h-10 w-24">
    <div className="flex flex-row h-10 w-full rounded-lg bg-transparent mt-1">
        <button className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none" onClick={dec}>
            <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <p className="mx-auto my-auto text-center w-full py-2 bg-gray-300 font-semibold text-md">{qty}</p>
        <button className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer" onClick={inc}>
            <span className="m-auto text-2xl font-thin">+</span>
        </button>
    </div>
</div>
  )
}

export default Quantity