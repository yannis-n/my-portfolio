import { useRef, useEffect } from 'react';

function Introduction(props) {
    let section = useRef(null)
    useEffect(() => {
        if (!props.siteEntered) return

        for (let i = 0; i < section.current.children.length; i++) {
            let timeOut = (i < 2) ? 400 : 400 * (i-1)
            setTimeout(() => {
                let element = section.current.children[i];
                if (i < 2){
                    element.classList.remove('faded-right')  
                    element.classList.remove('faded-left')  

                }else{
                    element.classList.remove('faded')  
                }
            }, timeOut);
        }
    },[props.siteEntered])

    
    return (
        <section aria-label="Introduction" id="introduction" ref={section} className={" relative flex justify-center flex-col items-start"+(props.siteEntered ? ' moved-in' : ' opacity-0')}>
            <h1 className="w-full  text-4xl md:text-6xl font-bold faded-right details-color">
                Hi,
            </h1>

            <h2  className="w-full text-4xl md:text-6xl faded-left font-bold whitespace-nowrap details-color">
                I am Yannis.
            </h2>

            <h3 className="heading faded font-bold flex h-fit ">
                I build stuff for the web.
            </h3>
            <p className="faded">
            I work as a Full Stack Developer, expanding the skills attained through rigorous training and hands-on experience as well as various courses. 

            </p>

            <a href="mailto: yannis.nikolaidis.nt@gmail.com" className="text-2xl faded flex rounded-full p-5 my-pink-bg">
                Contact Me
            </a>
        </section>
    );
  }

  export default Introduction;
