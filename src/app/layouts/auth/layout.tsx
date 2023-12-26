import React, { ReactNode } from "react"

type LayoutProps = {
  children: ReactNode
}

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="p-20 m-20 border border-gray-500">{children}</div>
}

export default AuthLayout
