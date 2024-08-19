import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
import { Container } from 'react-bootstrap'
import useCartCount from '../hooks/useCartCount'

const HomePage = () => {
  const { user } = useContext(UserContext)
  const cartCount = useCartCount() // Should be set to whatever the cart count is 

  return (
    <Container>
      <h1>Home page</h1>
      {user.username ? (
        <h2>Welcome, {user.username}</h2>
      ) :  (
        <h2>Not logged in</h2>
      )}

      <h3>Your current cart has: {cartCount} items. </h3>
    </Container>
  )
}

export default HomePage