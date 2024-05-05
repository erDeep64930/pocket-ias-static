import Image from 'next/image'
import React from 'react'

export const MainsCategories = () => {
    return (
        <section className='w-full'>

            <div>
                <h1 className='text-black text-[32px] leading-5 tracking-wider'>Mains Category</h1>
            </div>
            <div className='w-11/12 h-[450px] flex rounded-2xl'>
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
                  {/* card 3*/}
                  <div className='w-[405px] h-[305px] bg-gradient-to-r from-blue-500 to-gray-300 m-4'>
                    <div className='pl-[32px] pt-[32px]'>
                        <Image src="/GS3.png" width={42} height={39} />
                    </div>

                    <div>
                        <h1 className='text-[32px] pl-[32px] pt-[32px]'>GS3 Today</h1>
                    </div>

                    <div>
                        <p className='text-[17px] tracking-tight pl-[32px] pt-[32px] w-[95%]'>Plant seeds of nutrition, reap fields of vitality; a plate of health, our shared reality.</p>
                    </div>
                    <div className='bg-[#D6D6D7] flex float-end  mr-6'>
                        <Image src="/plus.png" width={20} height={20} className='bg-black rounded-full' />
                    </div>
                </div>
                 {/* card 4*/}
                 <div className='w-[405px] h-[305px]  bg-gradient-to-r from-pink-300 to-gray-300 m-4'>
                    <div className='pl-[32px] pt-[32px]'>
                        <Image src="/GS4.png" width={42} height={39} />
                    </div>

                    <div>
                        <h1 className='text-[32px] pl-[32px] pt-[32px]'>GS2 Today</h1>
                    </div>

                    <div>
                        <p className='text-[17px] tracking-tight pl-[32px] pt-[32px] w-[95%]'>Empower every hand, uplift every heart; prosperity blooms when equality is the art</p>
                    </div>
                    <div className='bg-[#D6D6D7] flex float-end  mr-6'>
                        <Image src="/plus.png" width={20} height={20} className='bg-black rounded-full' />
                    </div>
                </div>
                 {/* card 5*/}
                 <div className='w-[405px] h-[305px]  bg-gradient-to-r from-lime-400 to-gray-300 m-4'>
                    <div className='pl-[32px] pt-[32px]'>
                        <Image src="/GS5.png" width={42} height={39} />
                    </div>

                    <div>
                        <h1 className='text-[32px] pl-[32px] pt-[32px]'>ESSAY Today</h1>
                    </div>

                    <div>
                        <p className='text-[17px] tracking-tight pl-[32px] pt-[32px] w-[95%]'>Nature's wisdom, our shield unseen; against viral foes, new defenses convene.</p>
                    </div>
                    <div className='bg-[#D6D6D7] flex float-end  mr-6'>
                        <Image src="/plus.png" width={20} height={20} className='bg-black rounded-full' />
                    </div>
                </div>
               
            </div>




        </section>
    )
}
