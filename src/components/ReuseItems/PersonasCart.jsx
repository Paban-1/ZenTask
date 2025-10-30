import React from 'react'

const PersonasCart = ({ img, color, roal, sub }) => {
  return (
    <div className={`${color} relative w-60 h-80 overflow-hidden `}>
      <img src={img} alt="Img" className="object-cover scale-105 relative z-40" />
      <h2 className="text-3xl absolute bottom-9 left-4 tracking-tighter flex flex-col leading-tight z-40">
        {roal}
        <span className="text-[17px]">{sub}</span>
      </h2>
      <div className="bg-white/40 rounded-full h-10 w-10 absolute top-6 right-6 z-10"></div>
      <div className="rounded-md border border-gray-900 p-2 absolute top-40  left-2 w-60 rotate-[40deg] flex justify-between items-center">
        <div className="h-10 w-10 rounded-full bg-green-400"></div>
        <div className="h-10 w-10 rounded-full bg-red-400"></div>
      </div>
    </div>
  )
}

export default PersonasCart