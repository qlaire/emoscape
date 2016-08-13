function init() {
  
    // Create a scene
    scene = new THREE.Scene();

    // Add the camera
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0,0,200);
  
    // Add scene elements
    scene.add(mkTerrain())
   
    // Create the WebGL Renderer
    renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize( window.innerWidth, window.innerHeight );
  
    // Append the renderer to the body
    document.body.appendChild( renderer.domElement );
  
    // Add a resize event listener
    window.addEventListener( 'resize', onWindowResize, false );
  
    // Add the orbit controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target = new THREE.Vector3(0, 100, 0);

}