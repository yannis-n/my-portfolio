import { useState, useRef, useEffect, lazy } from 'react';

const Logo = lazy(() => import('./Logo'));

function Navbar(props) {
  const [menuToggled, setMenuToggled] = useState(false);
  let navBar = useRef([])

  const toggleMenu = function(){
    if (props.isMobile) setMenuToggled(!menuToggled)
  }

  let links = [
    {
      'name': 'Home',
      'link': '#introduction'
    },{
      'name': 'About me',
      'link': '#about-me'
    },{
      'name': 'Projects',
      'link': '#projects'
    },{
      'name': 'Contact',
      'link': '#contact'
    }
  ]
  let navList=[];

  for (let index = 0; index < links.length; index++) {
    navList.push( <li key={index} aria-label={links[index].name + ' Link'} onClick={() => {toggleMenu()}} className="mx-5"><a href={links[index].link}>{links[index].name}</a></li> )
  }

  useEffect(() => {
    let timeouts = []

    let links = navBar.current.children
    if (!props.gradientOn) return 

    if (!props.isMobile && props.resized){
      for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.style.opacity = 1
        element.style.transform = 'none'
      }
      return
    }
    
    if (menuToggled){
        for (let i = 0; i < links.length; i++) {
          setTimeout(() => {
            const element = links[i];
          element.style.opacity = 1
          element.style.transform = 'none'
        }, i * 200 + 600);
      }
    }else if(props.isMobile){
      timeouts = []
      for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.style.opacity = 0
        
        let timeoutId = setTimeout(() => {
          if (props.isMobile){
            element.style.transform = 'translateY(200%)'
            element.classList.add('clmobile-links')
          }
        }, 1000);
        timeouts.push(timeoutId)
      }     
    }

    // in case the window is resized while timeout are in place clean them up
    return () => {
      for (let i = 0; i < timeouts.length; i++) {
        const element = timeouts[i];
        clearTimeout(element);
      }
    }
  });
    return (
      <header aria-label="header">
        <nav aria-label="navigation bar" className={"links-nav z-20 flex list-none "+ (props.gradientOn ? '' : 'md:faded-right opacity-0') + (menuToggled ? 'open' : '')  + ((!props.isMobile && !props.topOfPage) ? 'background' : '')}>
        <Logo />
        <button aria-label="mobile navigation toggler" onClick={() => {toggleMenu()}} className={"menu-toggle md:hidden "+ (menuToggled ? 'toggled' : '')}>
          <span className="menu-toggle-bar"></span>
          <span className="menu-toggle-bar"></span>
          <span className="menu-toggle-bar"></span>
        </button>
        <ul ref={navBar} aria-label="List of Links" className={"flex flex-col md:flex-row md:items-center "+ (menuToggled ? 'open' : '')}>
          {navList}
          <li aria-label="Resume Link" className="mx-5 resume" target="_blank"><a href="https://thisisyannis.ams3.cdn.digitaloceanspaces.com/Yannis_Nikolaidis_CV.pdf">Resume</a></li> 
        </ul>
      </nav>
      </header>
    );
  }

  export default Navbar;
