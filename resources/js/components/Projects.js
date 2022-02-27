import React, { useState, useRef, useEffect } from 'react';

export function Projects(props) {
    let section = useRef(null)
    let threshold = window.innerHeight / 2
    function handleScroll(e){
        
        // let distance = ( window.pageYOffset - section.current.offsetTop )/ threshold * 100
        // console.log('----')
        // console.log('----')
        // console.log('----')
        // console.log(window.innerHeight)
        // console.log(distance)
        // console.log(section.current.children)
        // let opacity = (distance > 20) ? ((120 - distance) / 100 ): 1
        // let introduction = section.current.children[0];
        // introduction.style.left = 50 + distance + '%'
        // introduction.style.opacity = opacity

        // let introduction2 = section.current.children[1];
        // introduction2.style.right = 50 + distance + '%'
        // introduction2.style.opacity = opacity

        // let introduction3 = section.current.children[2];
        // introduction3.style.opacity = opacity + 0.5

        // let introduction4 = section.current.children[3];
        // introduction4.style.opacity = opacity + 0.5
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
    })

    
    return (
        <div id="projects" ref={section} className={"w-screen relative flex justify-center flex-col items-center"+(props.siteEntered ? '' : ' opacity-0')}>
            <div style={{ top:'15%' }} className="text-6xl fixed flex left-0 opacity-0 -translate-x-1/2">
                Hi,
            </div>

            <div style={{ top:'25%' }} className="text-6xl fixed flex right-0 opacity-0 whitespace-nowrap translate-x-1/2">
                I am Yannis.
            </div>

            <div className="text-2xl mt-10 lg:text-4xl flex text-center top-1/4 right-1/2 whitespace-nowrap -translate-1/2 h-fit opacity-0">
                I create beautiful  web apps <br /> your users will love
            </div>

            <button className="text-2xl flex rounded-full opacity-0 mt-10 p-5 my-pink-bg">
                Make it happen
            </button>
        </div>
    );
  }