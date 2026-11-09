/* =====================================================================
   CÓMO SE ARMA UN PERSONAJE (cuerpo, cabeza, pelo, ojos + su objeto)
   ===================================================================== */
function crearPersonaje(p) {
  const g = new THREE.Group();

  // cuerpo
  const cuerpo = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.5, 1.1, 24), mate(p.ropa));
  cuerpo.position.y = 0.85;
  g.add(cuerpo);

  // piernas y brazos
  g.add(cilindro(0.14, 0.35, 0x333344, -0.2, 0.175, 0));
  g.add(cilindro(0.14, 0.35, 0x333344, 0.2, 0.175, 0));
  const brazoI = cilindro(0.11, 0.8, p.ropa, -0.56, 0.9, 0); brazoI.rotation.z = 0.12;
  const brazoD = cilindro(0.11, 0.8, p.ropa, 0.56, 0.9, 0);  brazoD.rotation.z = -0.12;
  g.add(brazoI, brazoD);

  // cabeza
  g.add(esfera(0.4, p.piel, 0, 1.8, 0));

  // pelo: media esfera inclinada hacia atrás para dejar la cara libre
  const pelo = new THREE.Mesh(
    new THREE.SphereGeometry(0.43, 24, 24, 0, Math.PI * 2, 0, Math.PI * 0.55),
    mate(p.pelo)
  );
  pelo.position.y = 1.83;
  pelo.rotation.x = -0.5;
  g.add(pelo);

  if (p.largo) {
    const largo = esfera(0.42, p.pelo, 0, 1.62, -0.14);
    largo.scale.set(1, 1.3, 0.8);
    g.add(largo);
  }

  // pelo recogido: chongo (moño alto) sobre la cabeza
  if (p.recogido) {
    g.add(esfera(0.19, p.pelo, 0, 2.22, -0.1));
  }

  // ojos
  g.add(esfera(0.045, 0x222222, -0.14, 1.82, 0.37));
  g.add(esfera(0.045, 0x222222, 0.14, 1.82, 0.37));

  // lentes: dos aros + puente + patillas
  if (p.lentes) {
    const marco = 0x222222;
    [-0.14, 0.14].forEach(x => {
      const aro = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.018, 8, 24), mate(marco));
      aro.position.set(x, 1.82, 0.385);
      g.add(aro);
    });
    g.add(caja(0.08, 0.02, 0.02, marco, 0, 1.83, 0.385));
    g.add(caja(0.015, 0.015, 0.3, marco, -0.32, 1.83, 0.24));
    g.add(caja(0.015, 0.015, 0.3, marco, 0.32, 1.83, 0.24));
  }

  // objeto del rol
  g.add(props[p.prop]());

  // sombras y "a quién pertenece" cada pieza (para detectar el mouse)
  g.traverse(o => {
    if (o.isMesh) { o.castShadow = true; o.userData.grupo = g; }
  });

  g.userData.datos = p;
  g.userData.estrella = g.getObjectByName('estrella') || null;
  g.userData.baseY = 0;
  g.userData.escala = p.escala || 1;
  return g;
}
