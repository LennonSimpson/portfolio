import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const RotatingCube = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Set up the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create a cube geometry
    const geometry = new THREE.BoxGeometry(2, 2, 2);

    // Create materials for each side of the cube
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Red - Side 1
      new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Green - Side 2
      new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Blue - Side 3
      new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Yellow - Side 4
      new THREE.MeshBasicMaterial({ color: 0xff00ff }), // Magenta - Side 5
      new THREE.MeshBasicMaterial({ color: 0x00ffff })  // Cyan - Side 6
    ];

    // Create the cube mesh and add it to the scene
    const cube = new THREE.Mesh(geometry, materials);

    // Assign userData to each face of the cube
    cube.children.forEach((child, index) => {
      child.userData.side = index; // Assign side identifier to userData
    });
    
    scene.add(cube);

    // Set up animation
    function animate() {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    // Set up camera position
    camera.position.z = 5;

    // Start the animation
    animate();

    // Handle cube click
    function handleCubeClick(event) {
      // Get the mouse coordinates relative to the canvas
      const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );

      // Raycasting to detect intersected objects
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects([cube], true);

      if (intersects.length > 0) {
        // Get the side identifier from the clicked object
        const clickedSide = intersects[0].faceIndex;

        // Perform actions based on the clicked side
        switch (clickedSide) {
          case 0:
            // Side 1 clicked
            console.log('Side 1 clicked!');
            break;
          case 1:
            // Side 2 clicked
            console.log('Side 2 clicked!');
            break;
          case 2:
            // Side 3 clicked
            console.log('Side 3 clicked!');
            break;
          case 3:
            // Side 4 clicked
            console.log('Side 4 clicked!');
            break;
          case 4:
            // Side 5 clicked
            console.log('Side 5 clicked!');
            break;
          case 5:
            // Side 6 clicked
            console.log('Side 6 clicked!');
            break;
          default:
            break;
        }
      }
    }

    // Add event listener for mouse clicks on the canvas
    renderer.domElement.addEventListener('click', handleCubeClick);

    // Clean up the Three.js scene when the component unmounts
    return () => {
      renderer.domElement.removeEventListener('click', handleCubeClick);
      scene.remove(cube);
      geometry.dispose();
      materials.forEach(material => material.dispose());
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default RotatingCube;
