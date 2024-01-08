/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "./authContext"

interface PrivateRouteWrapperProps {
  component: React.ComponentType<any>
  layout: React.ComponentType<any>
}

const PrivateRouteWrapper: React.FC<PrivateRouteWrapperProps> = ({ component, layout }) => {
  const { isLoggedIn } = useAuth()

  return isLoggedIn ? (
    React.createElement(layout, null, React.createElement(component))
  ) : (
    <Navigate to="/auth/login" />
  )
}

export default PrivateRouteWrapper
