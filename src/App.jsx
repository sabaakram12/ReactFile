import React ,{useState,useEffect} from 'react';
import Navbar from "./components/Navbar/Navbar.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Hero from './components/Hero/Hero.jsx';
import  Footer   from "./components/Footer/Footer.jsx";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Popup from './components/Popup/Popup.jsx';
import AOS from "aos";
import "aos/dist/aos.css";



const App= ({})=> {
  const [showPopup, setShowPopup] = useState(false);
  const HandlePopup = () =>{
    setShowPopup (true);
  }



  React . useEffect(()=>{
    AOS.init({
    offset:100,
   duration: 800,
easing:"ease-in-sine",
delay:100,
    });
    AOS.refresh();
  },[]);

return (
   <div 
  className='overflow-x-hidden'>
    <Navbar HandlePopup = {HandlePopup}/>
    <Hero/>
    <Banner/>
    <Home/>
   <About HandlePopup={HandlePopup} />
    <Banner/>
    <Footer />
    <Popup  showPopup = {showPopup}  setShowPopup=
    {setShowPopup}/>
    
  </div>
  )
}

export default App;
