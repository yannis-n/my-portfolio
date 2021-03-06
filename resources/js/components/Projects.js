import { Suspense, useState, useRef, useEffect, lazy } from 'react';
const Project = lazy(() => import('./Project'));

function Projects(props) {
    let items = [
        {
            title: 'Jetpack VC',
            description: `A one-page web app deticaed to the company profile of my longest-standing partnership.
                            `,
            technologies: ['PHP', 'Jquery', 'HandleBar'],
            image: 'jeptack.svg',
            link: "https://jetpack.vc/",
            alt: 'jetpack site homepage'
        },
        {
            title: 'Athens Rhythm Hop',
            description: 'A web app designed for the registration and the administration of an Athenian dance festival.',
            technologies: ['Wordpress', 'Javascript', 'Sass'],
            image: 'arh.svg',
            link: "https://athensrhythmhop.com",
            alt: 'athensrhythmhop site homepage'
        },
        {
            title: 'Rhythm Hoppers',
            description: 'A simple Wordpress application deticated to the portfolio of a local dancing studio.',
            technologies: ['Wordpress', 'Javascript', 'Sass'],
            image: 'rhythmhoppers.svg',
            link: "https://rhythmhoppers.com/",
            alt: 'rhythmhoppers site homepage'
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
                <Suspense>
                {projects}

                </Suspense>
            </div>
        </section>
    );
  }

  export default Projects;
