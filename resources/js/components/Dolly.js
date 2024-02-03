import { useFrame } from 'react-three-fiber';

export function Dolly(props) {
    let acceleration = 0
   // // This one makes the camera move in and out
   useFrame(({ clock, camera }) => {
     if (acceleration < 1) acceleration += .01
     // if (acceleration < 1) acceleration += .01
     if (props.loop){
        camera.position.z = 50 + Math.sin(clock.getElapsedTime()) * 30
     }
     
 
     if(camera.position.z < 0){
       camera.position.z = -.1
     }else{
       camera.position.z -= .5
       camera.rotation.z -= acceleration
     }
   })
   return null
 }