import { SocialLinksNav } from './SocialLinksNav'

export function Controls(props) {

    return (
        <div id="home-controls" className='z-10 absolute w-screen h-screen'>
            <h1 className="flex-col container z-10 cursor-pointer absolute flex w-fit transform top-custom-gap left-custom-gap">
            
            <span className={"container "+((props.gradientOn && props.topOfPage) ? '' : 'faded-left opacity-0')}>
            Yannis
            </span>
            <span className={"container "+((props.gradientOn && props.topOfPage) ? '' : 'faded-right opacity-0')}>
            Nikolaidis
            </span>
            </h1>
            <SocialLinksNav visible={props.gradientOn && props.topOfPage}/>

            
            <div className={"container absolute flex w-fit left-custom-gap bottom-custom-gap " + ((props.gradientOn && props.topOfPage) ? '' : 'faded-left')}>
                FullStack Developer
            </div>
        </div>
    );
  }