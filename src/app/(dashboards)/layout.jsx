import React from 'react'

function layout({children}) {
  return (
    <div className='grid grid-cols-12'>
    {/* side nav  */}
        <div className='col-span-3 bg-gray-900 min-h-screen p-4'>
            DashBoard
        </div>
        {/* dashboard content */}
        <div className='col-span-9 bg-gray-600 p-4'>
            {children}
        </div>
    </div>
  )
}

export default layout