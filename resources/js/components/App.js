import { StrictMode, useState, useRef, useEffect, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

import { HomeCanvas } from './HomeCanvas'

const Introduction = lazy(() => import('./Introduction'));
const Navbar = lazy(() => import('./Navbar'));
const Projects = lazy(() => import('./Projects'));
const AboutMe = lazy(() => import('./AboutMe'));
const SocialLinksNav = lazy(() => import('./SocialLinksNav'));
const Contact = lazy(() => import('./Contact'))

const Spinner = () => <div className="spinner"></div>

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
      if (!intro) return;
      setIntro(false)
    }

    useEffect(() => {
      function handleResize() {
        let dimensions = getWindowDimensions();
        setWindowDimensions(dimensions);
      }
      setTimeout(() => {
        changeIntro()
      }, 1000);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
    })
  return (
    <div className={"app-container relative w-full "+(siteEntered ? '' : 'h-screen')}>

      <>
        { intro ? null : (
          <Suspense fallback={<Spinner/>}>
          <Navbar isMobile={isMobileFunction(windowDimensions)} topOfPage={topOfPage} gradientOn={siteEntered}/>
 
          <SocialLinksNav visible={siteEntered && topOfPage}/>
          </Suspense>
          )}
      </>

      <main className=''>
      <div id="home" className={"fixed w-screen min-h-screen h-screen" + (siteEntered ? '' : ' z-10')}>
        <div className="canvas-container">
          <StrictMode>
            <HomeCanvas loop={intro} toggleGradient={toggleGradient} gradientOn={siteEntered} />
          </StrictMode>
          <div             
            className={
              siteEntered ? 'gradient gradientOn' : 'gradient gradientOff'
            }>      
          </div>
        </div>  
  
      </div>
     
       <Suspense fallback={<Spinner/>}>
        <Introduction siteEntered={siteEntered}/>
       </Suspense>
       <>
        { intro ? null : (
          <Suspense fallback={<Spinner/>}>

          <AboutMe siteEntered={siteEntered} isMobile={isMobileFunction(windowDimensions)}/>
          <Projects siteEntered={siteEntered} isMobile={isMobileFunction(windowDimensions)}/>

          <Contact siteEntered={siteEntered}/>
          </Suspense>

          )}
        </>
        
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