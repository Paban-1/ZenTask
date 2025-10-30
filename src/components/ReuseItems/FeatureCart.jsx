import React from 'react'

const FeatureCart = ({ headding = "", subheading = "" }) => {
    return (
        <div className="mt-5 text-[#8a898b]">
          <div className="flex flex-col gap-2">
            <h2 className="tracking-tighter text-xl font-semibold">
                <span className="border-b text-white">
                    {headding}
                </span>
                </h2>
            <p className="tracking-tight md:w-[400px] text-xl">{subheading}</p>
          </div>
        </div>
      );
}

export default FeatureCart