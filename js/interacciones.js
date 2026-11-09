/* =====================================================================
   INTERACCIONES LEVES
   - pasar el cursor: el personaje sube un poquito
   - click / toque: el personaje da un saltito
   - mover el mouse: la cámara se desplaza suavemente
   - botón "Celebrar": cae confeti
   ===================================================================== */
const rayo = new THREE.Raycaster();
const puntero = new THREE.Vector2();
const mouse = { x: 0 };
let enHover = null;

function personajeBajo(ev) {
  const r = renderer.domElement.getBoundingClientRect();
  puntero.x = ((ev.clientX - r.left) / r.width) * 2 - 1;
  puntero.y = -((ev.clientY - r.top) / r.height) * 2 + 1;
  rayo.setFromCamera(puntero, camara);
  const hit = rayo.intersectObjects(piezas, false)[0];
  return hit ? hit.object.userData.grupo : null;
}

renderer.domElement.addEventListener('pointermove', (ev) => {
  mouse.x = (ev.clientX / window.innerWidth) * 2 - 1;
  enHover = personajeBajo(ev);
  renderer.domElement.style.cursor = enHover ? 'pointer' : 'default';
});

renderer.domElement.addEventListener('click', (ev) => {
  const g = personajeBajo(ev);
  if (g) g.userData.salto = reloj.getElapsedTime();   // marca el momento del salto
});

/* Confeti */
const confeti = [];
const geoConfeti = new THREE.BoxGeometry(0.14, 0.14, 0.02);
const coloresConfeti = [0xe07a5f, 0x3d85c6, 0xf2b134, 0x6a994e, 0xa06cd5, 0x2ec4b6, 0xd62828];

document.getElementById('celebrar').addEventListener('click', () => {
  for (let i = 0; i < 160; i++) {
    const c = new THREE.Mesh(
      geoConfeti,
      new THREE.MeshBasicMaterial({ color: coloresConfeti[i % coloresConfeti.length], side: THREE.DoubleSide })
    );
    c.position.set((Math.random() - 0.5) * 14, 9 + Math.random() * 4, (Math.random() - 0.5) * 8);
    c.userData.caida = 0.04 + Math.random() * 0.04;
    c.userData.giro = (Math.random() - 0.5) * 0.2;
    escena.add(c);
    confeti.push(c);
  }
});
