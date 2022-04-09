import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three'

  

export function Contact(props) {
    let section = useRef(null)
    let [onScreen, setOnScreen] = useState(false)
    let threshold = 1

    function handleScroll(){ 
      let distance = Math.floor(Math.abs( window.pageYOffset - section.current.offsetTop ))
      console.log(threshold)
      console.log(window.pageYOffset)
      console.log(section.current.offsetTop)
      if (distance < threshold){
          setOnScreen(true)
      }        
    }

  
        useEffect(() => {
          if (!onScreen){
              window.addEventListener('scroll', handleScroll);
              window.addEventListener('resize', handleScroll);      
          }else{
            for (let i = 0; i < section.current.children.length; i++) {
              let element = section.current.children[i];
              element.classList.remove('faded')  

            }
          }
          
          return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);      
          }
      },[onScreen])

  return (
    <section id="contact" ref={section} className="w-screen relative flex justify-center flex-col items-center">
            <h2  className=" text-4xl md:text-6xl faded font-bold whitespace-nowrap ">
                Get In Touch
            </h2>


            <a className="text-2xl faded flex rounded-full  mt-4 md:mt-8 p-5 my-pink-bg">
                Contact Me
            </a>
    </section>
  );
}