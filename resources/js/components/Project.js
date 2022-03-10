import React, { useState, useRef, useEffect } from 'react';

export function Project(props) {
    let project = useRef(null)
    
    let [onScreen, setOnScreen] = useState(false)
    let threshold = window.innerHeight + 50
    function handleScroll(){
        
        let distance = window.pageYOffset - project.current.offsetTop 
        if (distance > threshold){
        
            setOnScreen(true)
        }

        
    }

        
    useEffect(() => {
        if (!onScreen){
            window.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleScroll);      
        }else{
        
                
                    const element = project.current.children[0].classList.add('turned-on')
        }

    },[onScreen])
        

    return (
        <div ref={project} className='section-container--project'>
                    <div className='image-container'>
                        <img 
                            width="100%" 
                            height="200" 
                            data-main-image="" alt="project-image" sizes="(min-width: 200px) 200px, 100vw" 
                            src={'../../storage/images/'+props.info.image}/>
                    </div>
                    <div className='section-container--project-info'>
                        <div className='section-container--project-info--title'>
                            {props.info.title}
                        </div>

                        <div className='section-container--project-info--description'>
                            {props.info.description}
                        </div>

                        <a href={props.info.link} target="_blank" className='section-container--project-info--link'>
                        <img 
                            
                            data-main-image="" alt="project-image" 
                            src={'../../storage/images/link.svg'}/>
                        </a>
                    </div>
                </div>
    );
  }