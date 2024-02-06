import React, { useState, useRef, useEffect } from 'react';

function Project(props) {
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
            project.current.children[1].classList.remove('faded-project')    
                    const element = project.current.children[0].classList.add('turned-on')
        }
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);      
        }
    },[onScreen])
        
    let technologies = []
    props.info.technologies.forEach((element, i) => {
        technologies.push(
            <li key={i}><span className="inline-block">{element}</span></li>
        )
    });

    return (
        <div ref={project} className={'section-container--project' + (props.isMobile && !onScreen ? ' faded-project-container' : '')}>
                    <div className='image-container'>
                        <img 
                            width="100%" 
                            height="200" 
                            data-main-image="" alt="project-image" sizes="(min-width: 200px) 200px, 100vw" 
                            src={'https://thisisyannis.ams3.cdn.digitaloceanspaces.com/images/'+props.info.image}/>
                    </div>
                    <div className={'section-container--project-info' + (props.isMobile && !onScreen ? '' : ' faded-project')}>
                        <div className='section-container--project-info--title'>
                            {props.info.title}
                        </div>

                        <div className='section-container--project-info--description'>
                            {props.info.description}
                        </div>
                        <ul> 

                        {technologies}
                                                   </ul>

                        <a href={props.info.link} target="_blank" className='section-container--project-info--link'>
                        <img 
                            
                            data-main-image="" alt="project-image" 
                            src={'../../storage/images/link.svg'}/>
                        </a>
                    </div>
                </div>
    );
  }

  export default Project;
