import React from 'react'
import  HeroImg from "../../assets/hero.png";
import HeroBg from "../../assets/heroBg.png";
import PrimaryButton from '../Shared/primaryButton';



const BgStyle = {
    backgroundImage: `url(${HeroBg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
};

const Hero=()=> {
  return(
    <>
  
    <div style={BgStyle} className='relative z-[-1]'>
        <div className='container py-16 sm:py-0'>
            <div className='grid grid-cols-1 sm:grid-cols gap-4 place-items-center 
            min-h-[600px]'>
                {/* text-content section */}
                <div className='flex'>
                <div className='lg:mt-10  md:ml- md:mt-12 '>
                <div className='space-y-7 text-gray-800 order-2 sm:order-1'>
                    <h1 data-aos="fade-up"
                    className='text-5xl' >Fresh & Healthy<br/> Meal plan 

                    <span className='text-emerald-400 italic  font-cursive text-6xl'>Delivery
                        </span> {" "}<br/> in Miami</h1>
                    <p  data-aos="fade-up"data-aos-delay="300" 
                    className=' lg:pr-64 text-3xl'>Delicious Meals Delivered<br/> to your Door From<br/> $132.95 per week</p>


                    {/* button section */}
                    <div  data-aos="fade-up"data-aos-delay="500">
                        <PrimaryButton/>
                    </div>
                </div>
                </div>
                {/* Image section */}
                <div data-aos="zoom-in"
                     data-aos-delay="500"

                className='  mb-20 relative z-30 order-1 sm:order-2'>
                    
                    <img src={HeroImg} alt="" className='w-full  sm:scale-125 max-h-96  bg-cover
                    sm:translate-y-16' />
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    </>
  );
}

export default Hero;