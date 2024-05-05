import Image from 'next/image'
import React from 'react'

export const PrelimsCategories = () => {
  return (
    <div relative className='relative w-11/12 max-w-[1080px] mx-auto pt-4'>
      <h1 className='text-3xl p-5'>Prelims Categories</h1>

      <div className=' flex sm:flex-col mt-1 mb-1' >
        {/* left */}
        <div className='sm:w-full w-[35%] rounded-lg shadow-xl' >
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
          {/* card layer 4 */}
          <div className='flex justify-between items-center p-4'>

            <div>
              <Image src="/ver4.png" alt="" width={50} height={50} />
            </div>
            <div>
              <div className='bg-red-500 inline-block m-3 rounded-lg p-1'>Rivision</div>
              <h2 className='font-bold text-md text-center'>The Motor Vehicles (Amendment) Act, 2019</h2>
            </div>

          </div>

        </div>


        {/* right */}
        <div className='w-[65%] sm:w-full mt-1 mb-1' >
       <div>
        <Image src="/ir.png" alt="" width={700} height={350} />
       </div>
        </div>
      </div>

    </div>
  )
}
