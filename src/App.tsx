/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { mainRouteList } from "./app/routes/mainRoutes"
import "./App.scss"
import PrivateRouteWrapper from "./app/shared/auth/PrivateRouteWrapper"
import PublicRouteWrapper from "./app/shared/auth/PublicRouteWrapper"

const App = () => {
  return (
    <Router>
      <Routes>
        {mainRouteList.map((route, index: number) => (
          <Route
            key={index}
            path={route.path}
            element={
              route.isPrivate ? (
                <PrivateRouteWrapper component={route.component} layout={route.layout} />
              ) : (
                <PublicRouteWrapper component={route.component} layout={route.layout} />
              )
            }
          />
        ))}
      </Routes>
    </Router>
  )
}

export default App
