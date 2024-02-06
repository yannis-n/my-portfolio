function Introduction(props) {
 
    
    return (
        <section aria-label="Introduction" id="introduction" className={" relative flex justify-center flex-col items-start"+(props.siteEntered ? ' moved-in' : ' opacity-0')}>
            <h1  className="w-full text-4xl md:text-6xl  font-bold whitespace-nowrap details-color">
                I am Yannis.
            </h1>

            <h3 className="heading  font-bold flex h-fit ">
                I build stuff for<br/>the web.
            </h3>
            <p className="">
            I work as a Full Stack Developer, expanding the skills attained through rigorous training and hands-on experience as well as various courses. 

            </p>

            <a href="mailto: yannis.nikolaidis.nt@gmail.com" className="text-2xl  flex rounded-full p-5 my-pink-bg">
                Contact Me
            </a>
        </section>
    );
  }

  export default Introduction;
