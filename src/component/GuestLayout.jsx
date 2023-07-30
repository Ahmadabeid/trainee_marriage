import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

const GuestLayout = () => {
  const { token } = useStateContext()

  if (token) {
    return <Navigate to="/dashboard" replace={true} />
  }
  return <Outlet />
}

export default GuestLayout
