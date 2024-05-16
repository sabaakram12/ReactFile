import React from 'react'

const primaryButton=()=> {
  return (
    <>
    <div >
    {/* <div className='flex items-center group'>
         <button className='bg-primary h-[40px]
          text-white px-3 py-2'>
            Choose your Meal plan
        </button>
         */}
      <div FaArrowRight className='inline-block 
         justify-center  items-center  bg-pink-500  pl-2 pr-2 pt-1 pb-1
        text-xl h-[40px] text-white py-5 group-hover:!translate-x-2 duration-300'> Choose your Meal plan </div> 
    </div>

    </>
  )
}

export default primaryButton;