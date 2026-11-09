/* =====================================================================
   ANIMACIÓN (se repite ~60 veces por segundo)
   ===================================================================== */
const reloj = new THREE.Clock();
const v = new THREE.Vector3();

function animar() {
  requestAnimationFrame(animar);
  const t = reloj.getElapsedTime();

  personajes.forEach((g, i) => {
    // aparición uno por uno al cargar
    const s = Math.min(Math.max((t - i * 0.12) * 2, 0), 1);
    const ease = 1 - Math.pow(1 - s, 3);
    g.scale.setScalar(g.userData.escala * Math.max(ease, 0.001));

    // sube un poco si el cursor está encima + balanceo suave
    const dt = t - (g.userData.salto ?? -10);
    const brinco = dt < 0.6 ? Math.sin((dt / 0.6) * Math.PI) * 0.7 : 0;
    const objetivo = g.userData.baseY + (g === enHover ? 0.35 : 0) + brinco;
    g.position.y += (objetivo - g.position.y) * 0.15;
    g.rotation.z = Math.sin(t * 1.6 + i) * 0.03;

    if (g.userData.estrella) g.userData.estrella.rotation.y = t * 2;

    // la etiqueta sigue al personaje en pantalla
    g.getWorldPosition(v);
    v.y += (g.userData.datos.ceo ? 3.4 : 2.75) * g.userData.escala;
    v.project(camara);
    const x = (v.x * 0.5 + 0.5) * escenario.clientWidth;
    const y = (-v.y * 0.5 + 0.5) * escenario.clientHeight;
    etiquetas[i].style.left = x + 'px';
    etiquetas[i].style.top = y + 'px';
    etiquetas[i].style.opacity = ease;
  });

  // los logos del stack flotan y se balancean suavemente
  logos3d.forEach((l, i) => {
    const s = Math.min(Math.max((t - 1.2 - i * 0.12) * 2, 0), 1);   // aparecen después del equipo
    l.scale.setScalar(l.userData.escala * Math.max(1 - Math.pow(1 - s, 3), 0.001));
    l.position.y = l.userData.baseY + Math.sin(t * 1.1 + i) * 0.15;
    l.rotation.y = Math.sin(t * 0.7 + i * 1.3) * 0.5;
    l.rotation.x = Math.sin(t * 0.9 + i) * 0.08;
  });

  // la cámara se mueve un poquito con el mouse
  camara.position.x += (mouse.x * 1.2 - camara.position.x) * 0.05;
  camara.lookAt(0, vista.mirarY, vista.mirarZ);

  // confeti
  for (let i = confeti.length - 1; i >= 0; i--) {
    const c = confeti[i];
    c.position.y -= c.userData.caida;
    c.rotation.x += c.userData.giro;
    c.rotation.y += c.userData.giro;
    if (c.position.y < 0) { escena.remove(c); c.material.dispose(); confeti.splice(i, 1); }
  }

  renderer.render(escena, camara);
}
animar();
