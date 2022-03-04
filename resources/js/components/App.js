import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { HomeCanvas } from './HomeCanvas'
import { Controls } from './Controls'
import { Navbar } from './Navbar'
import { Introduction } from './Introduction'
import { Projects } from './Projects'
import { AboutMe } from './AboutMe'
import { SocialLinksNav } from './SocialLinksNav'
import { Logo } from './Logo'


function App() {
  const [gradientOn, setGradientOn] = useState(false);
  const [siteEntered, setsiteEntered] = useState(false);
  const [intro, setIntro] = useState(false); // this is to determine if the enter screen will appear
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [topOfPage, setTopOFPage] = useState(true);


  const toggleGradient = function(){
    // setGradientOn(!gradientOn)
    setsiteEntered(!gradientOn)
  }

  function handleScroll(e){
    const top = e.target;
    setTopOFPage(window.pageYOffset < 150)
  }

    function changeIntro(){
      setIntro(false)
      enterTag.current.classList.add('faded')
      enterTag.current.classList.add('scale-150')
      enterTag.current.classList.add('cursor-default')
      enterTag.current.classList.remove('cursor-pointer')
      setTimeout(() => {
        enterTag.current.classList.remove('animate-pulse')
      }, 1000);

    }

    let enterTag = useRef(null)

    useEffect(() => {
        setTimeout(() => {
          enterTag.current.classList.remove('faded')
        }, 300);
      }, []);

    useEffect(() => {
      function handleResize() {
        let dimensions = getWindowDimensions();
        setWindowDimensions(dimensions);
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
    })
  return (
      
      <div className={"app-container relative w-screen "+(siteEntered ? '' : 'h-screen')}>
        <Logo visible={siteEntered}/>
        <Navbar isMobile={isMobileFunction(windowDimensions)} gradientOn={siteEntered}/>
        <SocialLinksNav visible={siteEntered && topOfPage}/>

        {/* <Controls gradientOn={siteEntered} topOfPage={topOfPage} /> */}
        <main className=''>

        <div id="home" className="fixed w-screen min-h-screen h-screen">
          <div className="canvas-container">
            <HomeCanvas loop={intro} toggleGradient={toggleGradient} gradientOn={siteEntered} />
            <div             
              className={
                siteEntered ? 'gradient gradientOn' : 'gradient gradientOff'
              }>      
            </div>
          </div>
    

          
        </div>
        <button ref={enterTag} 
                  onClick={changeIntro} 
                  className={"container z-20 animate-pulse cursor-pointer absolute flex w-fit top-2/3 left-1/2 transform -translate-x-1/2 faded" + (!intro ? ' hidden' : '' )}>
            Enter
          </button>
        <Introduction siteEntered={siteEntered}/>
        <AboutMe siteEntered={siteEntered}/>
        <Projects siteEntered={siteEntered}/>
        </main>
      </div>
  );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
};

function isMobileFunction(windowDimensions){
  let condition = windowDimensions.width < 768
    return condition
};