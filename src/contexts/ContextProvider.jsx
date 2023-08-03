import { createContext, useContext, useState } from 'react'

const StateContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
})

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({})
  // const [token, _setToke] = useState(123)
  const [token, _setToke] = useState(localStorage.getItem('ACCESS_TOKEN'))
  const setToken = (token) => {
    _setToke(token)
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token)
    } else {
      localStorage.removeItem('ACCESS_TOKEN')
    }
  }
  return (
    <StateContext.Provider value={{ user, token, setToken, setUser }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
