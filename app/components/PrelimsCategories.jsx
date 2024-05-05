import Image from 'next/image'
import React from 'react'

export const PrelimsCategories = () => {
  return (
    <div relative className='relative w-11/12 max-w-[1080px] mx-auto pt-4'>
      <h1 className='text-3xl p-5'>Prelims Categories</h1>

      <div className='border flex border-pink-600  ' >
        {/* left */}
        <div className='border border-yellow-600 bg-pink-300 w-[35%] h-1/2' >
          <h3 className='text-center'>Indian Economy</h3>
          <h2 className='font-bold text-xl text-center'>GST: Removing Cascading Effects</h2>

          {/* card layer 1*/}
          <div className='flex justify-between items-center p-4'>

            <div>
              <Image src="/ver1.png" alt="" width={50} height={50} />
            </div>
            <div>
              <h2 className='font-bold text-md text-center'>The Central Goods and Services Tax (Second Amendment) Bill, 2023</h2>
            </div>

          </div>
          <div className='w-[80%] h-1 bg-slate-400 items-center justify-center ml-8'></div>

          {/* card layer 2 */}
          <div className='flex justify-between items-center p-4'>

            <div>
              <Image src="/ver2.png" alt="" width={50} height={50} />
            </div>
            <div>
              <h2 className='font-bold text-md text-center'>The Motor Vehicles (Amendment) Act, 2019</h2>
            </div>

          </div>
          <div className='w-[80%] h-1 bg-slate-400 items-center justify-center ml-8'></div>
          {/* card layer 3*/}
          <div className='flex justify-between items-center p-4'>

            <div>
              <Image src="/ver3.png" alt="" width={50} height={50} />
            </div>
            <div>
              <h2 className='font-bold text-md text-center'>The Central Goods and Services Tax (Second Amendment) Bill, 2023</h2>
            </div>

          </div>
          <div className='w-[80%] h-1 bg-slate-400 items-center justify-center ml-8'></div>

        </div>


        {/* right */}
        <div className='border border-purple-600 bg-lime-300 w-[65%] h-1/2' >
          <h1>hjello</h1>
        </div>
      </div>

    </div>
  )
}
