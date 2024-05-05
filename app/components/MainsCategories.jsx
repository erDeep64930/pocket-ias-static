import Image from 'next/image'
import React from 'react'

export const MainsCategories = () => {
    return (
        <section>

            <div>
                <h1 className='text-black text-[32px] leading-5 tracking-wider'>Mains Category</h1>
            </div>
            <div className='w-full h-[305px] flex rounded-2xl'>
                {/* card 1*/}
                <div className='w-[405px] h-[305px] bg-[#E4E4E4] m-4'>
                    <div className='pl-[32px] pt-[32px]'>
                        <Image src="/GS1.png" width={42} height={39} />
                    </div>

                    <div>
                        <h1 className='text-[32px] pl-[32px] pt-[32px]'>GS1 Today</h1>
                    </div>

                    <div>
                        <p className='text-[17px] tracking-tight pl-[32px] pt-[32px] w-[95%]'>True wisdom remains agnostic to parties and candidates, recognizing only the buttons of truth and integrity</p>
                    </div>
                    <div className='bg-[#D6D6D7] flex float-end  mr-6'>
                        <Image src="/plus.png" width={20} height={20} className='bg-black rounded-full' />
                    </div>
                </div>
                {/* card 2*/}
                <div className='w-[405px] h-[305px]  bg-gradient-to-r from-red-500 to-purple-600 m-4'>
                    <div className='pl-[32px] pt-[32px]'>
                        <Image src="/GS2.png" width={42} height={39} />
                    </div>

                    <div>
                        <h1 className='text-[32px] pl-[32px] pt-[32px]'>GS2 Today</h1>
                    </div>

                    <div>
                        <p className='text-[17px] tracking-tight pl-[32px] pt-[32px] w-[95%]'>Healthy citizens build strong nations; affordable insurance fuels the motivation.</p>
                    </div>
                    <div className='bg-[#D6D6D7] flex float-end  mr-6'>
                        <Image src="/plus.png" width={20} height={20} className='bg-black rounded-full' />
                    </div>
                </div>
            </div>




        </section>
    )
}
