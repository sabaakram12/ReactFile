import React from 'react'
import bgpolygon from "../../assets/polygon.png";
import Vector from "../../assets/vector-wave.png";





const BgStyle = {
    backgroundImage:`url(${bgpolygon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    position: "relative",
};











const About=({HandlePopup})=> {
  return (
    <>
    <div style={BgStyle} className='py-14'>
       <div className='container min-h-[500px] relative z-10'>
        <h1 data-aos="fade" className='pt-20 tracking-wider text-4xl font-semibold text-white text-center' >
            About Us
            </h1>
            {/* card section */}
            <div data-aos="fade"
            data-aos-delay="300" 
             className='bg-white/80 p-10 my-10 justify-center items-center ml-10'> 
            Lorem ipsum, dolor sit amet 
            consectetur adipisicing elit.
             Aliquam expedita ea error iure possimus
              deleniti dolor ducimus libero magni
               quaerat ab, officiis illum consequatur 
               nostrum a vitae? Tenetur, fugit eum.
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque rem error expedita dolores autem qui non maiores molestias quam laboriosam? Rerum deleniti amet porro voluptate laboriosam ducimus non necessitatibus earum!
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, impedit necessitatibus vitae eligendi nostrum delectus, doloribus alias quaerat aspernatur, voluptas dicta molestias possimus temporibus consectetur suscipit quis officiis? Cum, illum.
              <div className='pt-10 flex justify-center'>
              <button 
              onClick={HandlePopup}
              className="flex justify-center  items-center gap-2 bg-pink-500  pl-2 pr-2 pt-1 pb-1
                text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300">
                     {/* <FaUser/>  */}
                    My Account
                </button>

</div>

            </div>
       </div>
{/* wave vector */}
<div  className='absolute top-0 right-0  w-full' >
    <img src={Vector} alt="" className='mx-auto' />
</div>

    </div>
    </>
  )
}

export default About