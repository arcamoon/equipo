/* =====================================================================
   CREAR A TODOS Y SUS ETIQUETAS
   ===================================================================== */
const personajes = [];
const etiquetas = [];
const piezas = [];   // todas las mallas "clickeables"

equipo.forEach((p) => {
  const g = crearPersonaje(p);
  escena.add(g);
  personajes.push(g);
  g.traverse(o => { if (o.isMesh) piezas.push(o); });

  const et = document.createElement('div');
  et.className = 'etiqueta';
  et.innerHTML = `<b>${p.nombre}</b>`;
  contEtiquetas.appendChild(et);
  etiquetas.push(et);
});

/* =====================================================================
   POSICIONES (cambian si la pantalla es angosta, como un celular)
   ===================================================================== */
let angosto = false;
const vista = { y: 5.5, z: 13, mirarY: 1.5, mirarZ: 0 };

function colocar() {
  equipo.forEach((p, i) => {
    const g = personajes[i];
    if (p.ceo) {
      const z = angosto ? -4.6 : -2.4;
      const x = angosto ? 0 : -0.8;   // detrás del hueco entre dos personas
      g.position.set(x, 0.3, z);
      g.userData.baseY = 0.3;
      pedestal.position.set(x, 0.15, z);
      return;
    }
    let x, z;
    if (!angosto) {
      x = (i - 4) * 1.6;             // 9 personas en una curva suave
      z = Math.pow(x / 6, 2) * 1.8;
    } else {
      const fila = i < 5 ? 0 : 1;    // 5 al frente y 4 atrás (el CEO queda en el hueco central)
      x = fila === 0 ? (i - 2) * 1.7 : ((i - 5) - 1.5) * 1.7;
      z = fila === 0 ? 1.4 : -1.8;
    }
    g.position.set(x, 0, z);
    g.rotation.y = -x * 0.06;        // miran un poco hacia el centro
    g.userData.baseY = 0;
  });
}

function ajustar() {
  const w = escenario.clientWidth, h = escenario.clientHeight;
  renderer.setSize(w, h);
  camara.aspect = w / h;
  angosto = camara.aspect < 0.9;
  if (angosto) {
    vista.y = 9; vista.z = Math.max(14, 2 + 11.5 / camara.aspect); vista.mirarY = 0.8; vista.mirarZ = -1;
  } else {
    vista.y = 5.5; vista.z = Math.max(13.5, 2.5 + 19.5 / camara.aspect); vista.mirarY = 1.5; vista.mirarZ = 0;
  }
  camara.position.set(0, vista.y, vista.z);
  camara.updateProjectionMatrix();
  colocar();
  colocarLogos();
}
window.addEventListener('resize', ajustar);
ajustar();
