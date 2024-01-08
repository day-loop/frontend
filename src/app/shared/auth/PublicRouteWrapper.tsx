/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "./authContext"

interface PublicRouteWrapperProps {
  component: React.ComponentType<any>
  layout: React.ComponentType<any>
}

const PublicRouteWrapper: React.FC<PublicRouteWrapperProps> = ({ component, layout }) => {
  const { isLoggedIn } = useAuth()

  return !isLoggedIn ? (
    React.createElement(layout, null, React.createElement(component))
  ) : (
    <Navigate to="/" />
  )
}

export default PublicRouteWrapper
