import React from 'react'
import "./contact.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  useGSAP(()=>{
    gsap.from("form",{
       y:200,
      duration:0.5,
      opacity:0,
       scrollTrigger:{
        trigger:".slider",
        scroll:"body",
        scrub:2,
    
      }
    })
  })
  return (
    <div id="contact">
        <h1 className='contact-heading'>Contact</h1>
      <form action="https://formspree.io/f/xdkwjedp" method='POST'>
        <input
         type='text'
         name='UserName' 
         placeholder='enter  your name '
         required
         />
          <input
          name='Email'
         type='email' 
         placeholder='enter  your email '
         required
         />
         <textarea name='message' id='textarea' placeholder='message'></textarea>
         <button type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default Contact
