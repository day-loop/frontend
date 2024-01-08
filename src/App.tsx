/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { mainRouteList } from "./app/routes/mainRoutes"
import "./App.scss"
import React from "react"

function App() {
  return (
    // <Router>
    //   <Routes>
    //     {mainRouteList.map((route, index: number) => (
    //       <Route
    //         key={index}
    //         path={route.path}
    //         element={
    //           <route.layout>
    //             {route.isPrivate ? (
    //               <PrivateRoute component={route.component} />
    //             ) : (
    //               <route.component />
    //             )}
    //           </route.layout>
    //         }
    //       />
    //     ))}
    //   </Routes>
    // </Router>

    <Router>
      <Routes>
        {mainRouteList.map((route, index: number) => (
          <CustomRoute
            key={index}
            path={route.path}
            component={route.component}
            layout={route.layout}
            private={route.isPrivate}
          />
        ))}
      </Routes>
    </Router>
  )
}

interface CustomRouteProps {
  path: string
  component: any
  layout: any
  private: boolean
}

const CustomRoute: React.FC<CustomRouteProps> = ({
  path,
  component,
  layout,
  private: isPrivate
}) => {
  const isLoggedIn = true // Burada gerçek bir oturum kontrolü yapmalısınız

  if (isPrivate && !isLoggedIn) {
    return <Navigate to="/auth/login" />
  }

  return (
    <Route
      path={path}
      element={React.createElement(layout, null, React.createElement(component))}
    />
  )
}

export default App
