import React, { useState, useRef, useEffect } from 'react';

export function Introduction(props) {
    let section = useRef(null)
    let threshold = window.innerHeight / 4
    function handleScroll(e){
        
        let distance = ( window.pageYOffset - section.current.offsetTop )/ threshold * 100
       

    

        if (Math.abs(distance) > threshold){

            for (let i = 2; i < section.current.children.length; i++) {
                let element = section.current.children[i];
                element.classList.add('faded')  

            }

        }else{
            for (let i = 2; i < section.current.children.length; i++) {
                let element = section.current.children[i];
                element.classList.remove('faded')  

            }
        }

    }


    useEffect(() => {
        if (!props.siteEntered) return


        for (let i = 0; i < section.current.children.length; i++) {
            let timeOut = (i < 2) ? 400 : 400 * (i-1)
            setTimeout(() => {
                let element = section.current.children[i];
                if (i < 2){
                    element.classList.remove('faded-right')  
                    element.classList.remove('faded-left')  

                }else{
                    element.classList.remove('faded')  
                }
            }, timeOut);
        }
    },[props.siteEntered])

    
    return (
        <section id="introduction" ref={section} className={" relative flex justify-center flex-col items-start"+(props.siteEntered ? ' moved-in' : ' opacity-0')}>
            <h1 className="w-full  text-4xl md:text-6xl font-bold faded-right details-color">
                Hi,
            </h1>

            <h2  className="w-full text-4xl md:text-6xl faded-left font-bold whitespace-nowrap details-color">
                I am Yannis.
            </h2>

            <h3 className="heading mt-4 md:mt-8 faded font-bold flex h-fit ">
                I build stuff for the web.
            </h3>
            <p className=" faded  mt-4 md:mt-8">
            I work as a Full Stack Developer, expanding the skills attained through rigorous training and hands-on experience as well as various courses. 

            </p>

            <a className="text-2xl faded flex rounded-full  mt-4 md:mt-8 p-5 my-pink-bg">
                Contact Me
            </a>
        </section>
    );
  }