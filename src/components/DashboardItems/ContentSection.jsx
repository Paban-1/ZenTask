import React from 'react'
import { Outlet } from 'react-router-dom'

const ContentSection = () => {
  return (
    <div className="flex-1 h-screen overflow-y-auto bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default ContentSection