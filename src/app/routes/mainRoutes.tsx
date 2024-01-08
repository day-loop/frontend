import { Login } from "../pages/auth/login"
import { Home } from "../pages/home/home"
import { Error404 } from "../pages/error/error-404"
import AuthLayout from "../layouts/auth/layout"
import MainLayout from "../layouts/main/layout"

export const mainRouteList = [
  {
    path: "/home",
    component: Home,
    layout: MainLayout,
    isPrivate: true
  },
  {
    path: "/auth/login",
    component: Login,
    layout: AuthLayout,
    isPrivate: false
  },
  {
    path: "*",
    component: Error404,
    layout: AuthLayout,
    isPrivate: false
  }
]
