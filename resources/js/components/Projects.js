import React, { useState, useRef, useEffect } from 'react';
import { Project } from './Project'

export function Projects(props) {
    let items = [
        {
            title: 'Jetpack VC',
            description: 'My best work yet',
            image: 'jeptack.png'
        },
        {
            title: 'Athens Rhythm Hop',
            description: 'My best work yet',
            image: 'arh.png'
        },
        {
            title: 'Rhythm Hoppers',
            description: 'My best work yet',
            image: 'rhythmhoppers.png'
        },
    ]

    let projects = []
    items.forEach((element, i) => {
        console.log(i)
        projects.push(
            <Project key={i} info={element}/>
        )
    });
    
    return (
        <section id="projects" className={"w-screen relative flex justify-center flex-col items-center"+(props.siteEntered ? '' : ' opacity-0')}>
            <div  className="section-heading">
                Projects
            </div>

            <div className='section-container'>
                {projects}
            </div>
        </section>
    );
  }