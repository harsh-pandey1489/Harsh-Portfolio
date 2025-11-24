import React from 'react'
import "./project.css"
import Card from '../Card/Card'
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmallCard from './Smallcard/SmallCard';

gsap.registerPlugin(ScrollTrigger)

const Project = () => {

  useGSAP(() => {
    gsap.from(".slider", {
       y:100,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".slider",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%"
      }
    })

    gsap.from(".message", {
       x:-300,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".message",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%"
      }
    })

    
  })
  return (
    <div id='project'>
      <h1 className='heading'>Projects</h1>
      <div className='message'>
        <h1>OnGoing Project</h1>
        <h2>AI Resume Analyzer </h2>
      </div>
      <div className="slider">
        <SmallCard title='Expense-Tracker' link='http://expense-tracker-chi-nine-29.vercel.app' />
        <SmallCard title="WorldAtlas" link="https://world-atlas-app-lemon.vercel.app" />
        <SmallCard title="Note App" link="https://note-app-project-nine.vercel.app/" />
    



      </div>
    </div>
  )
}

export default Project
