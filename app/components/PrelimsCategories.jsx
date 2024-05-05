import Image from 'next/image'
import React from 'react'

export const PrelimsCategories = () => {
  return (
    <div relative className='relative w-11/12 max-w-[1080px] mx-auto pt-4'>
<h1 className='text-3xl p-5'>Prelims Categories</h1>

<div className='border flex border-pink-600  ' >
  {/* left */}
  <div className='border border-yellow-600 bg-pink-300 w-[20%] h-1/2' >
    <h1>hjello</h1>
  </div>
  {/* right */}
  <div className='border border-purple-600 bg-lime-300 w-[80%] h-1/2' >
  <h1>hjello</h1>
  </div>
</div>
 
    </div>
  )
}
