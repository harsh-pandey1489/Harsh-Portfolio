import React from 'react'
import './home.css'
import man from "../../assets/man.png.jpg"
import profile from "../../assets/profile-pic.jpg"
import { Typewriter } from 'react-simple-typewriter'
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { Timeline } from 'gsap/gsap-core';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom'


const Home = () => {

  useGSAP(()=>{
    let tl1=gsap.timeline();
    tl1.from(".line1",{
      y:80,
      duration:0.5,
      opacity:0,
    })
     tl1.from(".line2",{
      y:80,
      duration:0.5,
      opacity:0,
    })
     tl1.from(".line3",{
      y:80,
      duration:0.5,
      opacity:0,
    })
    gsap.from(".righthome .imagebox",{
        x:200,
      duration:2,
      opacity:0,
    })

  })
  return (
    <div id='home'>
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I AM</div>
          <div className="line2">HARSH PANDEY</div>
          <div className="line3">
            <Typewriter
              words={['Frontend Developer', 'Editor']}
              loop
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
             
          </div>

          <div className='icon-box'>
            <div className='icon'>
              <a href=' https://www.linkedin.com/in/harsh-pandey-10b670253/'><FaLinkedin /> </a> 
             <a href='https://github.com/harsh-pandey1489'>  <FaGithub /></a>
            </div>
              
          <button className='hire-btn'>Hire ME</button>
         
          </div>
         
        </div>
      </div>
      <div className="righthome">
        <div className='imagebox'>
              <img src={profile} alt='' />
        </div>
       
      </div> 
    </div>
  )
}

export default Home
