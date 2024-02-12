import { Suspense, useState, useRef, useEffect, lazy } from 'react';
const Project = lazy(() => import('./Project'));

function Projects(props) {
    let items = [
        {
            title: 'My Brainforce',
            description: 'a brain training program designed to improve cognitive abilities through a variety of online games and exercises.',
            technologies: ['Laravel', 'React', 'Sass', 'Tailwind'],
            image: 'mybrainforce.webp',
            link: "https://mybrainforce.com/",
            alt: 'mybrainforce site homepage'
        },
        {
            title: 'Jetpack VC',
            description: `A one-page web app deticaed to the company profile of my longest-standing partnership.
                            `,
            technologies: ['PHP', 'Jquery', 'HandleBar'],
            image: 'jeptack.webp',
            link: "https://jetpack.vc/",
            alt: 'jetpack site homepage'
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
