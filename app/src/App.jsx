import React from 'react'
import UserContext from './context/UserContext'

const App = () => {
  const [user, setUser] = React.useState({
    username: '',
    password: '',
    isLoggedIn: false
  })

  // setUser({
  //   username: 'JohnDoe',
  //   password: 'SuperSecretPassword',
  //   isLoggedIn: true
  // }); 

  return (
    < UserContext.Provider value={{ user, setUser}}>
      <HomePage/>
      <LoginPage/>
    </ UserContext.Provider>
  )
}

export default App