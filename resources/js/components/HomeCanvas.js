import { useEffect } from 'react';
import * as THREE from 'three';

export default function HomeCanvas(){
 
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1200);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    const stars = Array(200).fill().map(() => {
      const starGeometry = new THREE.SphereGeometry(0.1, 6, 6);
      const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(starGeometry, starMaterial);

      let x, y, z;
      do {
        // Initialize positions ensuring stars do not spawn too close to the camera
        x = THREE.MathUtils.randFloatSpread(200);
        y = THREE.MathUtils.randFloatSpread(200);
        z = THREE.MathUtils.randFloatSpread(200);
      } while (Math.abs(z) < 20); // Adjust the minimum distance from the camera

      star.position.set(x, y, z);

      // Set initial random change in each position
      const changeX = Math.random();
      const changeY = Math.random();
      const changeZ = Math.random();

      star.changeX = changeX;
      star.changeY = changeY;
      star.changeZ = changeZ;

      scene.add(star);

      return star;
    });

    camera.position.z = 15;

    const animate = () => {
      requestAnimationFrame(animate);

      stars.forEach((star) => {
        // Change positions slightly
        star.position.x += star.changeX * 0.05;
        star.position.y += star.changeY * 0.05;
        star.position.z += star.changeZ * 0.05;
        // // Check if star is too close or too far from the camera
        const isInFrustum = isObjectInCameraFrustum(star, camera);
        const isTooNear = isObjectTooNear(star, camera, 15); // Adjust the minimum distance as needed

        if (!isInFrustum || isTooNear) {
          // Reverse the direction of change
          star.position.x = THREE.MathUtils.randFloatSpread(200);
          star.position.y = THREE.MathUtils.randFloatSpread(200);
          star.position.z = THREE.MathUtils.randFloatSpread(200);    

        }
        
        
      });

      renderer.render(scene, camera);
    };

    const isObjectInCameraFrustum = (object, camera) => {
      const frustum = new THREE.Frustum();
      const cameraViewProjectionMatrix = new THREE.Matrix4();
    
      // Get the camera's view projection matrix
      camera.updateMatrixWorld();
      cameraViewProjectionMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    
      // Set the frustum's matrix
      frustum.setFromProjectionMatrix(cameraViewProjectionMatrix);
    
      // Check if the object's position is in the frustum
      return frustum.intersectsObject(object);
    };
    
        // Function to check if an object is too near the camera
    const isObjectTooNear = (object, camera, minDistance) => {
      const distance = object.position.distanceTo(camera.position);
      return distance < minDistance;
    };

    animate();

    // Handle cleanup
    return () => {
      document.getElementById('canvas-container').removeChild(renderer.domElement);
    };
  }, []); // Run only once on mount

  return null; // No need to render anything in React
};

