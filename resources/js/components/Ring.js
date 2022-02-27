import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

export function Ring(props) {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.z = mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
     <mesh
     {...props}
         visible
        castShadow
        ref={mesh}>
           <ringBufferGeometry args={props.args} />
           <meshStandardMaterial
              attach="material"
              color="#9BB9D0"
              transparent
              roughness={0.1}
              metalness={0.1}
          />
     </mesh>
  );
}