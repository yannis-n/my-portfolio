import React, { useRef } from 'react';

export function Sun(props) {
    const mesh = useRef();
    return (
       <mesh
       {...props}
           visible
          castShadow
          ref={mesh}>
            <sphereBufferGeometry args={[2, 30, 30]} attach="geometry" />
             
            <meshStandardMaterial
                attach="material"
                color="#f9d71c"
                transparent
                roughness={0.1}
                metalness={0.1}
                brightness={10}
            />
       </mesh>
    );
 }