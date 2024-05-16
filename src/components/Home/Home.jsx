import React from 'react'
import { FaBus } from "react-icons/fa";


const WhyChoose = () => {
  return (
    <>
    <div className='py-14 md:py-28 bg-gray-50'>
        <div className='container'>
            {/* heading section */}
            <h1 
              data-aos="fade"
            className='pb-16  tracking-wider text-2xl 
        font-semibold text-gray-700 text-center '> why Choose Us</h1>

        {/* card section */}
        <div   data-aos="fade"data-aos-delay="300"  >
            <div className='grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4'>



                {/* 1st card */}
                <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                    <p className='text-gray-800 font-semibold'>
                    Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit.
                    </p>
                    <p className='text-5xl rotate-90 text-pink-400 text-center translate-x-5'>...</p>
                    <FaBus className='text-5xl text-pink-400' />
                </div>



                  {/* second card */}
                  <div className='text-center flex justify-center items-center flex-col gap-1 px-3'>
                  <FaBus className='text-5xl text-emerald-400' />
                  <p className='text-5xl rotate-90 text-emerald-400 text-center translate-x-5'>...</p>
            
                    <p className='text-gray-800 font-semibold'>
                    Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit.
                    </p>
                  
                </div>




               {/* 3rd card */}
                  < div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                    <p className='text-gray-800 font-semibold'>
                    Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit.
                    </p>
                    <p className='text-5xl rotate-90 text-pink-400 text-center translate-x-5'>...</p>
                    <FaBus className='text-5xl text-pink-400' />
                </div>



                  {/* 4th card */}
                  <div className='text-center flex justify-center items-center flex-col gap-1 px-3'>
                  <FaBus className='text-5xl text-emerald-400' />
                  <p className='text-5xl rotate-90 text-emerald-400 text-center translate-x-5'>...</p>
                 
                    <p className='text-gray-800 font-semibold'>
                    Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit.
                    </p>
                   
                </div>




            </div>
            
        </div>
        </div>
    </div>
    </>
  )
}

export default WhyChoose;