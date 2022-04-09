import React, { useRef, Suspense } from 'react';
import { Canvas, useThree, useFrame } from 'react-three-fiber';
import * as THREE from 'three'

import { Sphere } from './Sphere'
import { Star } from './Star'
import { Dolly } from './Dolly'
import { Ring } from './Ring'

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

function Rig({ children }) {
  const ref = useRef()
  const vec = new THREE.Vector3()
  useFrame(({camera, mouse}) => {
    ref.current.children.forEach(element => {
      element.position.lerp(vec.set(mouse.x * 1, mouse.y * 1, element.position.z), 0.3)
      // element.rotation.y = THREE.MathUtils.lerp(element.rotation.y, (-mouse.x * Math.PI) / 20, 0.1)
    });
    // camera.position.lerp(vec.set(mouse.x * 2, 0, 3.5), 0.05)

  })
  return <group ref={ref}>{children}</group>
}

export function HomeCanvas(props) {
  let cameraZ = (props.intro) ? 100 : 0;
  return (
    <Canvas 
      pixelRatio={window.devicePixelRatio}  
      camera={{ position: [0, 0, cameraZ], fov: 50 }} 
      dpr={window.devicePixelRatio}
    > 
  {/* <fogExp2 attach="fog" color="#e2e8f0" density={0.3} /> */}

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


      <Suspense fallback={null}>
      {/* <Rig> */}
        {itemList}

      {/* </Rig> */}
        {/* <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.6} />
        </EffectComposer> */}
      </Suspense>
    
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