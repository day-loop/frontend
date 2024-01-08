/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { mainRouteList } from "./app/routes/mainRoutes"
import "./App.scss"
import React from "react"

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
                <route.component />
              )
            }
          />
        ))}
      </Routes>
    </Router>
  )
}

interface PrivateRouteWrapperProps {
  component: React.ComponentType<any>
  layout: React.ComponentType<any>
}

const PrivateRouteWrapper: React.FC<PrivateRouteWrapperProps> = ({ component, layout }) => {
  const isLoggedIn = false

  return isLoggedIn ? (
    React.createElement(layout, null, React.createElement(component))
  ) : (
    <Navigate to="/auth/login" />
  )
}

export default App
