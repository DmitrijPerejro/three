window.onload = init;

var scene,
	camera,
	render;


function init() {
	var container = document.createElement('div');
	container.classList.add('container');
	document.body.appendChild(container);


	scene = new THREE.Scene(); // new scene
	camera = new THREE.PerspectiveCamera(65,window.innerWidth/window.innerHeight,0.1,2000);
	camera.position.y = 150;
	camera.position.z = 600;

	var line_geomerty = new THREE.Geometry();
	line_geomerty.vertices.push(new THREE.Vector3(0,0,0));
	line_geomerty.vertices.push(new THREE.Vector3(0,200,0));
	line_geomerty.vertices.push(new THREE.Vector3(400,200,0));
	line_geomerty.vertices.push(new THREE.Vector3(400,0,0));

	var material_line = new THREE.LineBasicMaterial({color:0xffffff});
	var line = new THREE.Line(line_geomerty,material_line);
	scene.add(line);

	var geometry = new THREE.PlaneGeometry(window.innerWidth,window.innerHeight);
	geometry.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
	var material = new THREE.MeshBasicMaterial({color:0xcccccc});
	var plane = new THREE.Mesh(geometry,material);
	scene.add(plane);

	render = new THREE.WebGLRenderer();
	render.setSize(window.innerWidth,window.innerHeight);

	container.appendChild(render.domElement);
	render.render(scene,camera);
}