import Image from 'next/image'
import React from 'react'

export const PrelimsCategories = () => {
  return (
    <div>
      <div class="relative w-11/12 max-w-[1080px] mx-auto pt-4">
        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 relative z-[100]">
          <div
            className="p-10  w-full max-h-[300px] cursor-pointer
              bg-no-repeat hover:scale-105 transition-all duration-200
              border border-blue-500
              bg-white rounded-2xl" >
            <Image src="/GS1.png" alt="" width={30} height={20}
            />
            <h3 className=" text-lg font-bold pt-4">GS1 TODAY</h3>
            <p
              className="py-3 text-grayText leading-normal"
            >Simplify your recurring, international and team expenses with savings on every spend. Save upto 10 lacs every month.</p>
            <div className="flex flex-row items-center cursor-pointer group">
              <div className='flex float-end bg-black rounded-full'>
                <Image src="/plus.png" alt="" width={30} height={20}
                />
              </div>


            </div>

          </div>

        </div>

      </div>



    </div>
  )
}
