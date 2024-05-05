import Image from 'next/image'
import React from 'react'

export const MainsCategories = () => {
    return (
        <div>
            <div class="relative w-11/12 max-w-[1080px] mx-auto pt-4">
            <h1 className='text-3xl p-5'>Mains Category</h1>
                <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 relative z-[100]">
                  
                    {/* card 1 */}
                    <div
                        className="p-10  w-full max-h-[300px] cursor-pointer
                bg-no-repeat hover:scale-105 transition-all duration-200
                border border-blue-500
                bg-[#E4E4E4] rounded-2xl" >
                        <Image src="/GS1.png" alt="" width={30} height={20}
                        />
                        <h3 className=" text-lg font-bold pt-4">GS1 TODAY</h3>
                        <p
                            className="py-3 text-grayText leading-normal"
                        >True wisdom remains agnostic to parties and candidates, recognizing only the buttons of truth and integrity</p>
                        <div className="flex flex-row items-center cursor-pointer group">
                            <div className='flex float-end bg-black rounded-full'>
                                <Image src="/plus.png" alt="" width={30} height={20}
                                />
                            </div>


                        </div>

                    </div>

                    {/* card 2*/}
                    <div
                        className="p-10  w-full max-h-[300px] cursor-pointer
                bg-no-repeat hover:scale-105 transition-all duration-200
                border border-blue-500
                bg-gradient-to-r from-red-500 to-purple-600 rounded-2xl" >
                        <Image src="/GS2.png" alt="" width={30} height={20}
                        />
                        <h3 className=" text-lg font-bold pt-4">GS2 TODAY</h3>
                        <p
                            className="py-3 text-grayText leading-normal"
                        >True wisdom remains agnostic to parties and candidates, recognizing only the buttons of truth and integrity</p>
                        <div className="flex flex-row items-center cursor-pointer group">
                            <div className='flex float-end bg-black rounded-full'>
                                <Image src="/plus.png" alt="" width={30} height={20}
                                />
                            </div>


                        </div>

                    </div>

                    {/* card */}
                    <div
                        className="p-10  w-full max-h-[300px] cursor-pointer
                bg-no-repeat hover:scale-105 transition-all duration-200
                border border-blue-500
                bg-gradient-to-r from-blue-500 to-gray-300 rounded-2xl" >
                        <Image src="/GS3.png" alt="" width={30} height={20}
                        />
                        <h3 className=" text-lg font-bold pt-4">GS3 TODAY</h3>
                        <p
                            className="py-3 text-grayText leading-normal"
                        >True wisdom remains agnostic to parties and candidates, recognizing only the buttons of truth and integrity</p>
                        <div className="flex flex-row items-center cursor-pointer group">
                            <div className='flex float-end bg-black rounded-full'>
                                <Image src="/plus.png" alt="" width={30} height={20}
                                />
                            </div>


                        </div>

                    </div>

                    {/* card */}
                    <div
                        className="p-10  w-full max-h-[300px] cursor-pointer
                bg-no-repeat hover:scale-105 transition-all duration-200
                border border-blue-500
                bg-gradient-to-r from-red-500 to-purple-600 rounded-2xl" >
                        <Image src="/GS4.png" alt="" width={30} height={20}
                        />
                        <h3 className=" text-lg font-bold pt-4">GS4 TODAY</h3>
                        <p
                            className="py-3 text-grayText leading-normal"
                        >True wisdom remains agnostic to parties and candidates, recognizing only the buttons of truth and integrity</p>
                        <div className="flex flex-row items-center cursor-pointer group">
                            <div className='flex float-end bg-black rounded-full'>
                                <Image src="/plus.png" alt="" width={30} height={20}
                                />
                            </div>


                        </div>

                    </div>

                    {/* card */}
                    <div
                        className="p-10  w-full max-h-[300px] cursor-pointer
                bg-no-repeat hover:scale-105 transition-all duration-200
                border border-blue-500
                bg-gradient-to-r from-lime-400 to-gray-300 rounded-2xl" >
                        <Image src="/GS5.png" alt="" width={30} height={20}
                        />
                        <h3 className=" text-lg font-bold pt-4">ESSAY TODAY</h3>
                        <p
                            className="py-3 text-grayText leading-normal"
                        >True wisdom remains agnostic to parties and candidates, recognizing only the buttons of truth and integrity</p>
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
