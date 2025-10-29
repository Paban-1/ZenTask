import React from 'react'

const ProductValueCart = ({ className = "", des = "", ren = "", link = "" }) => {
  return (
    <div className="py-2 w-72 text-[#8a898b] flex-shrink-0 mb-4">
    <p className="w-full">{des}</p>
    <p className="mt-6">{ren}</p>
    <p className="font-bold">
      <span className="border-b-2 border-[#8a898b] hover:border-white pb-1 hover:text-white cursor-pointer duration-200">
        {link}
      </span>
    </p>

  </div>
  )
}

export default ProductValueCart