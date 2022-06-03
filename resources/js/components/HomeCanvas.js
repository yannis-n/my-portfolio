import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';

import { Sphere } from './Sphere'
import { Dolly } from './Dolly'
import { Ring } from './Ring'

const Star = lazy(() => import('./Star'));

function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}

let itemList=[];

for (let index = 0; index < 200; index++) {
itemList.push( <Star key={index}    
    position={[getRandomInt(-100,100), getRandomInt(-40,40), getRandomInt(-400,-50)]} />)

}

export function HomeCanvas(props) {
  let cameraZ = (props.intro) ? 100 : 0;
  return (
    <Canvas 
      pixelRatio={window.devicePixelRatio}  
      camera={{ position: [0, 0, cameraZ], fov: 50 }} 
      dpr={window.devicePixelRatio}
    > 

    <rectAreaLight
      width={5}
      height={5}
      color='#fff'
      intensity={6}
      position={[-2, 0, 5]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
    <>
        { props.loop ? null : (
        <Suspense fallback={null}>
          {itemList}
  
        </Suspense>

          )}
        </>
    
    {!props.gradientOn && (
      <Suspense>
        <Sphere position={[0, 0, 0]} />
            <Ring 
              position={[0, 0, 0]}  
              args={[2.2, 2.4, 300]} 
              dx={.01}
            />
      </Suspense>
            

      )}
    <Dolly toggleGradient={props.toggleGradient} loop={props.loop} gradientOn={props.gradientOn} />

    </Canvas>
  );
}