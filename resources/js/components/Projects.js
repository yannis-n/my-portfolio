import React, { useState, useRef, useEffect } from 'react';
import { Project } from './Project'

export function Projects(props) {
    let items = [
        {
            title: 'Jetpack VC',
            description: 'My best work yet My best work yet My best work yet  My best work yet  My best work yet My best work yet  My best work yet  My best work yet ',
            image: 'jeptack.png',
            link: "https://jetpack.vc/"
        },
        {
            title: 'Athens Rhythm Hop',
            description: 'My best work yet My best work yet My best work yet  My best work yet  My best work yet My best work yet  My best work yet  My best work yet ',
            image: 'arh.png',
            link: "https://athensrhythmhop.com"
        },
        {
            title: 'Rhythm Hoppers',
            description: 'My best work yet My best work yet My best work yet  My best work yet  My best work yet My best work yet  My best work yet  My best work yet ',
            image: 'rhythmhoppers.png',
            link: "https://rhythmhoppers.com/"
        },
    ]

    let projects = []
    items.forEach((element, i) => {
        projects.push(
            <Project key={i} info={element} isMobile={props.isMobile}/>
        )
    });
    
    let section = useRef(null)
    let [onScreen, setOnScreen] = useState(false)
    let threshold = window.innerHeight
    
    function handleScroll(){        
        let distance = Math.abs( window.pageYOffset - section.current.offsetTop )
        if (distance < threshold){        
            setOnScreen(true)
        }        
    }

    useEffect(() => {
        if (!onScreen){
            window.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleScroll);      
        }else{
            let title = section.current.children[0];
            title.classList.remove('faded-right')
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);      
        }
    },[onScreen])

    return (
        <section id="projects" ref={section} className={"w-screen relative flex justify-center flex-col items-center"+(props.siteEntered ? '' : ' opacity-0')}>
            <div  className="section-heading faded-right">
                Projects
            </div>

            <div className='section-container'>
                {projects}
            </div>
        </section>
    );
  }