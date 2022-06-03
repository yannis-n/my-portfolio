import { useState, useRef, useEffect } from 'react';

function AboutMe(props) {
    let section = useRef(null)
    let portrait = useRef(null)
    let skillList = useRef(null)
    let [onScreen, setOnScreen] = useState(false)
    let [listOnScreen, setListOnScreen] = useState(false)
    let threshold = window.innerHeight
    let thresholdForList = (props.isMobile) ? window.innerHeight / 8 : window.innerHeight / 4
    
    function handleScroll(){  
        let distance = Math.abs( window.pageYOffset - section.current.offsetTop )
        if (distance < threshold){        
            setOnScreen(true)
        }        
    }

    function handleListScroll(){        
        let distance = Math.abs( window.pageYOffset - section.current.offsetTop )
        if (distance < thresholdForList){        
            setListOnScreen(true)
        }        
    }
    
    useEffect(() => {
        if (!onScreen){
            window.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleScroll);      
        }else{
            let title = section.current.children[0];
            let content = section.current.children[1].children[0];
            let portraitDiv = portrait.current;
          
                title.classList.remove('faded-left')
                portraitDiv.classList.remove('faded-right')  
                content.classList.remove('faded')
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);      
        }
    },[onScreen])

    useEffect(() => {
        if (!onScreen){
            window.addEventListener('scroll', handleListScroll);
            window.addEventListener('resize', handleListScroll);      
        }else{                
            for (let i = 0; i < skillList.current.children.length; i++) {
                const element = skillList.current.children[i];
                setTimeout(() => {
                    element.children[0].classList.remove('faded-right')  
                }, 400 * (1 + i % 2));
            }
        }

        return () => {
            window.removeEventListener('scroll', handleListScroll);
            window.removeEventListener('resize', handleListScroll);      
        }
    },[listOnScreen])
    let itemList = [

    ]
    let itemNames = [
        'JavaScript (ES6+)',
        'Laravel',
        'Jquery',
        'PHP',
        'React',
        'WordPress'
    ]
    for (let index = 0; index < itemNames.length; index++) {
        itemList.push( 
            <li key={index} >
                <span className = "faded-right inline-block">{itemNames[index]}</span>
            </li>
        )
    }
        
    
    return (
        <section id="about-me" ref={section} className={"relative flex justify-center flex-col items-start"+(props.siteEntered ? '' : ' opacity-0')}>
            <div  className="section-heading faded-left">
                About Me
            </div>
            
            <div className="section-container">
                <div className="faded">               

                    <p>
                    Two years ago, I delved into the fundamentals of computer science and started learning various
                    programming languages (including Python, PHP, and Javascript) through every possible
                    channel, seminar and University course I could lay my hands on and I haven't stopped ever
                    since. As my interest in the field grew even more, I quickly realized that this is something I
                    would love to do professionally.
                    </p>
                    <p>
                    Since then, I started creating web apps of my own to gain practical knowledge using the Django
                    framework. I have also freelanced and created or redesigned various WordPress Projects, thus
                    coming in contact and learning PHP as well. You can view a few of my projects, on my GitHub
                    account, of which I realized the value from the beginning of my journey as a developer. A year
                    ago, I started working for a start-up company as a Full-Stack Developer. 
                    </p>

                    <div>
                        <ul ref={skillList}>
                            {itemList}
                        </ul>
                    </div>
                </div>

                    <div className="image-container">
                        <div className="portrait faded-right" ref={portrait}>
                            <img 
                            width="200" 
                            height="200" 
                            data-main-image="" sizes="(min-width: 200px) 200px, 100vw" 
                            alt="photo of me"
                            src={'../../storage/images/portrait.svg'}/>
                        </div>
                    </div>
            </div>

        </section>
    );
  }

  export default AboutMe