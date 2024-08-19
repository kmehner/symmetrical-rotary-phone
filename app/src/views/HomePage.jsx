import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
import { Container } from 'react-bootstrap'

const HomePage = () => {
  const { user } = useContext(UserContext)
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
  }


  return (
    <Container>
      <h1>Home page</h1>
      {user.username ? (
        <h2>Welcome, {user.username}</h2>
      ) :  (
        <h2>Not logged in</h2>
      )}
    </Container>
  )
}

export default HomePage