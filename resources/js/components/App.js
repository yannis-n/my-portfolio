import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { HomeCanvas } from './HomeCanvas'
import { Navbar } from './Navbar'
import { Introduction } from './Introduction'
import { Projects } from './Projects'
import { AboutMe } from './AboutMe'
import { SocialLinksNav } from './SocialLinksNav'
import { Contact } from './Contact'


function App() {
  const [gradientOn, setGradientOn] = useState(false);
  const [siteEntered, setsiteEntered] = useState(false);
  const [intro, setIntro] = useState(true); // this is to determine if the enter screen will appear
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [topOfPage, setTopOFPage] = useState(true);
  const [bottomOfPage, setBottomOfPage] = useState(false);


  const toggleGradient = function(){
    // setGradientOn(!gradientOn)
    setsiteEntered(!gradientOn)
  }

  function handleScroll(e){
    let top = window.pageYOffset < 150
    let bottom =  Math.ceil(window.innerHeight + document.documentElement.scrollTop) >= document.body.offsetHeight
    let condition = top || bottom
    if (condition != topOfPage) setTopOFPage(condition)
    if (bottom != bottomOfPage) setBottomOfPage(bottom)
  }

    function changeIntro(){
      setIntro(false)

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
    <div className={"app-container relative w-full "+(siteEntered ? '' : 'h-screen')}>
      <Navbar isMobile={isMobileFunction(windowDimensions)} topOfPage={topOfPage} gradientOn={siteEntered}/>
      <SocialLinksNav visible={siteEntered && topOfPage}/>
      {/* <Controls gradientOn={siteEntered} topOfPage={topOfPage} /> */}
      <main className=''>
      <div id="home" className={"fixed w-screen min-h-screen h-screen" + (siteEntered ? '' : ' z-10')}>
        <div className="canvas-container">
        <React.StrictMode>
          <HomeCanvas loop={intro} toggleGradient={toggleGradient} gradientOn={siteEntered} />
          </React.StrictMode>
          <div             
            className={
              siteEntered ? 'gradient gradientOn' : 'gradient gradientOff'
            }>      
          </div>
        </div>      
      </div>
      <button ref={enterTag} 
      id ="enter-button"
                onClick={changeIntro} 
                className={"container z-20 animate-pulse cursor-pointer absolute flex w-fit top-2/3 left-1/2 transform -translate-x-1/2 " + (!intro ? 'faded' : '' )}>
          Enter
        </button>
      <Introduction siteEntered={siteEntered}/>
      <AboutMe siteEntered={siteEntered} isMobile={isMobileFunction(windowDimensions)}/>
      <Projects siteEntered={siteEntered} isMobile={isMobileFunction(windowDimensions)}/>
      <Contact siteEntered={siteEntered}/>
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