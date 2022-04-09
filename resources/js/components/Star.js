

import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
export function Star(props) {
    let color = "#fff"
    let firstPosition = {
     x : props.position[0],
     y : props.position[1],
     z : props.position[2],
   }
 
   let radius = getRandomInt(0,20)
   let rate = getRandomInt(1,4)
    const mesh = useRef();
    var t = 0;
    let zSpeed = 0.001
    useFrame(({ clock, camera }) => {
    if( mesh.current.material.opacity < 0.7 ) mesh.current.material.opacity += 0.002

    if (camera.position.z < 0){
        mesh.current.visible = true
          mesh.current.position.z -= zSpeed 
      if (mesh.current.position.z > -50 || mesh.current.position.z < -100) {
        zSpeed = -zSpeed
    }
    }else{
        mesh.current.visible = false
    }
    if (camera.position.z < mesh.current.position.z){
        mesh.current.position.z = camera.position.z - 400
    }



        t += 0.001;          
        mesh.current.position.x = firstPosition.x + radius * Math.cos(rate * t) + 0;
        mesh.current.position.y = firstPosition.y + radius * Math.sin(rate * t) + 0; // These to strin

    })
    return (
    <mesh
      {...props}
          visible
         castShadow
         ref={mesh}>
           <sphereBufferGeometry args={[0.1, 30, 30]} attach="geometry" />
            
           <meshBasicMaterial
               attach="material"
               color= {color}
               transparent
               opacity={0}
               brightness={10}
               />
      </mesh>
   );
 }