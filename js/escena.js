/* =====================================================================
   ESCENA, CÁMARA Y LUCES
   ===================================================================== */
const escenario = document.getElementById('escenario');
const contEtiquetas = document.getElementById('etiquetas');

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha: se ve el fondo de la página
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
escenario.insertBefore(renderer.domElement, escenario.firstChild);

const escena = new THREE.Scene();
const camara = new THREE.PerspectiveCamera(40, 1, 0.1, 100);

escena.add(new THREE.HemisphereLight(0xffffff, 0x8899aa, 0.95));
const sol = new THREE.DirectionalLight(0xffffff, 0.8);
sol.position.set(5, 10, 7);
sol.castShadow = true;
sol.shadow.camera.left = -12; sol.shadow.camera.right = 12;
sol.shadow.camera.top = 12;   sol.shadow.camera.bottom = -12;
sol.shadow.mapSize.set(1024, 1024);
escena.add(sol);

// suelo invisible que solo muestra las sombras (escenario minimalista)
const suelo = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.ShadowMaterial({ opacity: 0.16 }));
suelo.rotation.x = -Math.PI / 2;
suelo.receiveShadow = true;
escena.add(suelo);

// base circular del CEO
const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.3, 40), mate(0xcfd6dc));
pedestal.receiveShadow = true;
escena.add(pedestal);
