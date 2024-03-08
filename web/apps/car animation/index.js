const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(100, 100, 50);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

// Create ground plane
const planeGeometry = new THREE.PlaneGeometry(300, 300);
const planeMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
});

const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = Math.PI / 2; // Rotate the plane to be horizontal
plane.position.set(0, 0, 0); // Set position at the origin
scene.add(plane);

// car body (cube)
const carBody = new THREE.Mesh(
  new THREE.BoxGeometry(20, 10, 10), // Width, Height, Depth
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
carBody.position.set(-30, 7, 0);
scene.add(carBody);

// Create wheels (circles)
const wheelGeometry = new THREE.CircleGeometry(2, 32);
const wheelMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// Front left wheel
const frontLeftWheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
frontLeftWheel.position.set(-35, 2, 7); // X, Y, Z
scene.add(frontLeftWheel);

// Front right wheel
const frontRightWheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
frontRightWheel.position.set(-22, 2, 7); // X, Y, Z
scene.add(frontRightWheel);

// Rear left wheel
const rearLeftWheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
rearLeftWheel.position.set(-35, 2, -7); // X, Y, Z
scene.add(rearLeftWheel);

// Rear right wheel
const rearRightWheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
rearRightWheel.position.set(-22, 2, -7); // X, Y, Z
scene.add(rearRightWheel);

// Handle keydown events
document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  const keyCode = event.keyCode;
  const speed = 0.5;
  const rotationspeed = 0.05;

  switch (keyCode) {
    // case 37: // Left arrow
    //   rotatino(-speed, 0);
    //   break;
    case 38: // Up arrow
      moveCar(-speed, 0);
      break;
    // case 39: // Right arrow
    //   moveCar(speed, 0);
    //   break;
    case 40: // Down arrow
      moveCar(speed, 0);
  }
}

function moveCar(dx, dy) {
  carBody.position.x += dx;
  frontLeftWheel.position.x += dx;
  frontRightWheel.position.x += dx;
  rearLeftWheel.position.x += dx;
  rearRightWheel.position.x += dx;

  // Update camera position to follow the car
  camera.position.copy(carBody.position).add(new THREE.Vector3(100, 100, 50));
  camera.lookAt(carBody.position);
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Render the scene
  renderer.render(scene, camera);
}

// Start animation loop
animate();
