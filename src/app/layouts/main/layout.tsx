import React, { ReactNode } from "react"

type LayoutProps = {
  children: ReactNode
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  console.log("MainLayout")
  return <div className="m-10">{children}</div>
}

export default MainLayout
