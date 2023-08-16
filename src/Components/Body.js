import React from 'react'
import ProductsContainer from './Products/ProductsContainer'
import FilterBar from './FilterBar'
import Hero from '../Hero'

const Body = () => {
  return (
    <div>
        <Hero />
        <FilterBar />
        <ProductsContainer />
    </div>
  )
}

export default Body