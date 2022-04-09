import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

export function Sphere(props) {
    const mesh = useRef();
     useFrame(() => (mesh.current.rotation.z = mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
     useFrame(({ clock, camera }) => {
      if (camera.position.z < 0) mesh.current.visible = false
     });

    return (
       <mesh
       {...props}
           visible
          castShadow
          ref={mesh}>
            <sphereBufferGeometry args={[0.7, 30, 30]} attach="geometry" />
             
            <meshStandardMaterial
                attach="material"
                color="#E42C64"
                transparent
                roughness={0.1}
                metalness={0.1}
                brightness={10}
            />
       </mesh>
    );
 }