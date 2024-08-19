import React, { useContext, useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import UserContext from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import useCartCount from '../hooks/useCartCount'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate(); 
  const cartCount = useCartCount()

  const handleSubmit = (event) => {
    event.preventDefault() // prevent default form behavior (refresh page)

    setUser({
      username: username,
      password: password,
      isLoggedIn: true
    })

    handleLogin(); 
  }

  const handleLogin = () => {
    navigate('/')
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" placeholder="Enter username" onChange={(event) => setUsername(event.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password: </Form.Label>
        <Form.Control type="password" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      </Form>
      <h2>Using our cart count again: {cartCount}</h2>
    </Container>
  )
}

export default LoginPage