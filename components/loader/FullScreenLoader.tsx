import React from 'react'

const FullScreenLoader = () => {
  return (
    <div className="flex justify-center items-center h-[75vh]">
      <div
        className="inline-block w-24 h-24 
            border-t-8 
            border-[#264FAD]
            rounded-full
            animate-spin"
      ></div>
    </div>
  )
}

export default FullScreenLoader