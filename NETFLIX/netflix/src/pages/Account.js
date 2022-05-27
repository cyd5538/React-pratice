import React from 'react'
import SavedShow from '../components/SavedShow'

const Account = () => {
  return (
    <div className='w-full text-white'>
    <img
      className="w-full h-[400px] object-cover"
      src="https://assets.nflxext.com/ffe/siteui/vlv3/970e664f-2df4-47ce-b4fa-446082f5abc1/c8338841-4eb6-4a33-b329-37eebbfaa002/KR-ko-20220523-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      alt="/"
    />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className='text-3xl md:text-5xl font-bold '>My Shows</h1>
        </div>
      </div>
      <SavedShow />
    </div>
  )
}

export default Account
