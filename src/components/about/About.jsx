import React from 'react'
import './about.css'
import Card from '../Card/Card'
import frontend from  '../../assets/frontend-image.png'
import reactimg from '../../assets/react.svg'
import redux from '../../assets/pngwing.com.png'
import javascript from '../../assets/javascript.png'
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
const About = () => {
  useGSAP(()=>{
    gsap.from(".circle",{
      x:-100,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".circle",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }

    })

     gsap.from(".line",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".line",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }

    })

    gsap.from(".leftcontent h1",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".leftcontent  h1",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }

    })

    //  gsap.from(".leftcontent ul",{
    //   y:100,
    //   duration:1,
    //   opacity:0,
    //   stagger:1,
    //   scrollTrigger:{
    //     trigger:".leftcontent ul",
    //     scroll:"body",
    //     scrub:2,
    //     markers:true,
    //     start:"top 60%",
    //     end:"top 30%"
    //   }

    // })

   
  })
  return (
    <div id='about'>
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="leftcontent">
          <div className="personal-info">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>Name</span> : Harsh Pandey
              </li>
              <li>
                <span>Age</span> : 23
              </li>
              <li>
                <span>Gender</span> : Male
              </li>
              <li>
                <span>Language Known</span> : Hindi,English
              </li>
            </ul>
          </div>

          <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>Graduation</span> : Bsc Mathematics,CGPA-7.8
              </li>
              <li>
                <span>Poat Graduation</span> : MCA
              </li>

            </ul>
          </div>

             <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>
               Html , Css , Tailwind Css
              </li>
              <li>
               ReactJs
              </li>
              <li>
                Redux
              </li>
              <li>
                NextJs
              </li>
             
            </ul>
          </div>


        </div>

      </div>

      <div className="rightabout">
    <Card title='ReactJs' image={reactimg}/>
     <Card title='Redux' image={redux}/>
      <Card title='Javascript' image={javascript}/>
      
      </div>
    </div>
  )
}

export default About
