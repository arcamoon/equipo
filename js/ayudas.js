/* =====================================================================
   HELPERS PARA DIBUJAR FORMAS SIMPLES
   ===================================================================== */
const mate = (color) => new THREE.MeshStandardMaterial({ color, roughness: 0.65 });

function caja(w, h, d, color, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mate(color));
  m.position.set(x, y, z);
  return m;
}
function cilindro(radio, alto, color, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(radio, radio, alto, 24), mate(color));
  m.position.set(x, y, z);
  return m;
}
function esfera(radio, color, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(radio, 24, 24), mate(color));
  m.position.set(x, y, z);
  return m;
}
