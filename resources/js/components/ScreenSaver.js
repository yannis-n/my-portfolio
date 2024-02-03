function ScreenSaver(props) {
    return (     
      <div className="mask">
        <div className="svs">
        <img 
                            width="100" 
                            height="200" 
                            data-main-image="" alt="screensave" sizes="(min-width: 200px) 200px, 100%" 
                            src={'/icons/favicon.png'}/>
        </div>
      </div>
    );
  }
  
  export default ScreenSaver