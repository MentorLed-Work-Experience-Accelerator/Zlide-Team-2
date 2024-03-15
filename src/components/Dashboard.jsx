// import React from 'react'
import DashboardNavbar from './DashboardNavbar'
import SideNav from './SideNav'
import Presentations from './Presentations'


const Dashboard = () => {
  return (
    <div >
        <div className="fixed top-0 z-50 w-full">
            <DashboardNavbar />
        </div>
        <div className="flex mt-20">
            <SideNav />
            <Presentations />
        </div>
    </div>
  )
}

export default Dashboard
