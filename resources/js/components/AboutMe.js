import React, { useState, useRef, useEffect } from 'react';

export function AboutMe(props) {
    const [distance, setDistance] = useState(0);
    let section = useRef(null)
    let threshold = window.innerHeight / 2
    function handleScroll(e){
        
        setDistance(( window.pageYOffset - section.current.offsetTop )/ threshold * 100)
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
        <section id="about-me" ref={section} className={" lg:px-40 relative flex justify-center flex-col items-start"+(props.siteEntered ? ' moved-in' : ' opacity-0')}>
            <div  className="section-heading">
                About Me
            </div>

            <p>
            Two years ago, I delved into the fundamentals of computer science and started learning various
programming languages (including Python, PHP, and Javascript) through every possible
channel, seminar and University course I could lay my hands on and I haven't stopped ever
since. As my interest in the field grew, even more, I quickly realized that this is something I
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
    <ul>
    <li>JavaScript (ES6+)</li>
    <li>PHP</li>
    </ul>
</div>

        </section>
    );
  }