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
      y: -100,
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
  })
  return (
    <div id='project'>
      <h1 className='heading'>Projects</h1>
      <div className="slider">

        <SmallCard title="Note App" link="https://note-app-project-nine.vercel.app/" />
        <SmallCard title="Virtual Assistant" />
        <SmallCard title="WorldAtlas" link="https://world-atlas-app-lemon.vercel.app" />


      </div>
    </div>
  )
}

export default Project
