import React from 'react'
import { useState, useEffect } from 'react'

const useCartCount = () => {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    // We want to see how many items are in the cart for a specific user '5'
    // Where we would normally fetch to a database or our backend service, we will be using the fakestore API 
    fetchCartCount()

  }, [])

  const fetchCartCount = async () => {
    const response = await fetch('https://fakestoreapi.com/carts/5')
    const data = await response.json()
    console.log(data)

    // Set cart count to data 
    setCartCount(data.products.length)

  }

  // Return cart count instead of jsx 
  return cartCount
}

export default useCartCount