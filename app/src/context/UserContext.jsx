import { createContext } from "react";

// createContext() is a function that creates a new context object.
// You could compare it to the useState() function that creates a new state variable.
// it is going accept state data that we can pass down to other components. 

const UserContext = React.createContext({
  user: {
    username: '',
    password: '',
    isLoggedIn: false
  },
  // We have to make the setter equal a function because the setter is always a function 
  setUser: () => {} // This is the same set function we used in the useState() hook, just destructured .
});

export default UserContext;