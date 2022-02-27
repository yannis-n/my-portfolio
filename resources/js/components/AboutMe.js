import React, { useState, useRef, useEffect } from 'react';

export function AboutMe(props) {
    let section = useRef(null)
    let threshold = window.innerHeight / 2
    function handleScroll(e){
        
        let distance = ( window.pageYOffset - section.current.offsetTop )/ threshold * 100
       
        let opacity = (distance > 1) ? (1 -2 * distance / 100 ): 1 + 2 * distance / 100
        let introduction = section.current.children[0];
        introduction.style.transform = 'translate(' + distance + '%)'
        introduction.style.opacity = opacity - 0.2

        let introduction2 = section.current.children[1];
        introduction2.style.transform = 'translate(' + -distance + '%)'
        introduction2.style.opacity = opacity - 0.2

        let introduction3 = section.current.children[2];
        introduction3.style.opacity = opacity + 0.5

        let introduction4 = section.current.children[3];
        introduction4.style.opacity = opacity + 0.5

        let introduction5 = section.current.children[4];
        introduction5.style.opacity = opacity + 0.5
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
    })

    useEffect(() => {
        if (!props.siteEntered) return
        for (let i = 0; i < section.current.children.length; i++) {
            setTimeout(() => {
                let element = section.current.children[i];
                   element.style.opacity = 1
            }, 400 * i);
        }
    },[props.siteEntered])

    
    return (
        <section id="introduction" ref={section} className={" lg:px-40 relative flex justify-center flex-col items-start"+(props.siteEntered ? ' moved-in' : ' opacity-0')}>
            <h1 className="w-full text-6xl font-bold opacity-0 details-color">
                Hi,
            </h1>

            <h2  className="w-full text-6xl font-bold opacity-0 whitespace-nowrap details-color">
                I am Yannis.
            </h2>

            <h3 className="heading mt-10 font-bold flex h-fit opacity-0">
                I build stuff for the web. (Currently)
            </h3>
            <p className="opacity-0">
            I work as a Full Stack Developer, expanding the skills attained through rigorous training and hands-on experience as well as various courses. 

            </p>

            <button className="text-2xl flex rounded-full opacity-0 mt-10 p-5 my-pink-bg">
                Make it happen
            </button>
        </section>
    );
  }