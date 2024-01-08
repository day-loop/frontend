import { Navigate, Route } from "react-router-dom"
import { useAuth } from "./authContext"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { isLoggedIn } = useAuth()

  return (
    <Route
      {...rest}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render={(props: any) =>
        isLoggedIn ? <Component {...props} /> : <Navigate to="/auth/login" />
      }
    />
  )
}

export default PrivateRoute
