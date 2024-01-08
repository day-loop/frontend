import { createContext, useContext, useState } from "react"

const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {}
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthProvider = ({ children }: any) => {
  const [isLoggedIn, setLoggedIn] = useState(false)

  const login = () => {
    // Burada gerçek giriş mekanizmanı olacak, örneğin API isteği gibi
    setLoggedIn(true)
  }

  const logout = () => {
    setLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>{children}</AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext)
}
