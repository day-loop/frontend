import { useAuth } from "../../shared/auth/authContext"
import React from "react"

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  const { login } = useAuth()

  return (
    <div className="flex flex-row">
      <button
        className="px-10 py-5 text-white bg-gray-500"
        onClick={() => {
          login()
        }}
      >
        Login
      </button>
    </div>
  )
}
