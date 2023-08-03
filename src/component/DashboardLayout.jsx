import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const DashboardLayout = () => {
  const { user, token } = useStateContext()

  if (!token) {
    return <Navigate to="/login" replace={true} />
  }
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <Outlet />
        <center>
          <footer className="main-footer">
            <strong> @Copyright All rights reserved..</strong>
          </footer>
        </center>
        <aside className="control-sidebar control-sidebar-dark"></aside>
      </div>
    </>
  )
}

export default DashboardLayout
