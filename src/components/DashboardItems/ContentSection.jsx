import React from 'react'
import { Outlet } from 'react-router-dom'

const ContentSection = () => {
  return (
    <div className="h-[200vh] w-full p-2">
      <Outlet/>
    </div>
  )
}

export default ContentSection