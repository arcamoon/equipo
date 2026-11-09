/* =====================================================================
   OBJETOS DE CADA ROL
   Cada función devuelve un grupo de formas ya posicionado junto al personaje.
   ===================================================================== */
const props = {
  // Lenny: cajas apiladas (inventario)
  cajas() {
    const g = new THREE.Group();
    g.add(caja(0.5, 0.5, 0.5, 0xc8955a, 0, 0.25, 0));
    const arriba = caja(0.42, 0.42, 0.42, 0xd9a86c, 0, 0.71, 0);
    arriba.rotation.y = 0.35;
    g.add(arriba);
    g.position.set(1.05, 0, 0.2);
    return g;
  },

  // Dani: portapapeles con la orden
  ordenes() {
    const g = new THREE.Group();
    g.add(caja(0.5, 0.65, 0.05, 0xf5f5f0));
    g.add(caja(0.2, 0.08, 0.07, 0x555555, 0, 0.3, 0.02));
    [0.1, 0, -0.1, -0.2].forEach(y => g.add(caja(0.3, 0.03, 0.01, 0x9aa3ab, 0, y, 0.03)));
    g.position.set(0.8, 1.05, 0.4);
    g.rotation.y = -0.4;
    return g;
  },

  // Rob: lupa (QA)
  lupa() {
    const g = new THREE.Group();
    const aro = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.04, 12, 32), mate(0x333333));
    aro.position.y = 0.25;
    g.add(aro);
    const vidrio = new THREE.Mesh(
      new THREE.CircleGeometry(0.2, 32),
      new THREE.MeshStandardMaterial({ color: 0x9be3ff, transparent: true, opacity: 0.4 })
    );
    vidrio.position.y = 0.25;
    g.add(vidrio);
    g.add(cilindro(0.035, 0.45, 0x333333, 0, -0.08, 0));
    g.position.set(0.8, 1.1, 0.4);
    g.rotation.z = -0.45;
    return g;
  },

  // Elias: gráfico de barras (reportes)
  reportes() {
    const g = new THREE.Group();
    g.add(caja(1, 0.05, 0.5, 0xdde3e8, 0, 0.025, 0));
    g.add(caja(0.2, 0.35, 0.2, 0xe07a5f, -0.28, 0.225, 0));
    g.add(caja(0.2, 0.6, 0.2, 0x3d85c6, 0, 0.35, 0));
    g.add(caja(0.2, 0.9, 0.2, 0x6a994e, 0.28, 0.5, 0));
    g.position.set(1.25, 0, 0.1);
    return g;
  },

  // Mariel: paleta de colores (diseño gráfico)
  paleta() {
    const g = new THREE.Group();
    g.add(cilindro(0.38, 0.05, 0xe8c99b));
    [[-0.17, -0.08, 0xe63946], [0.02, -0.17, 0xf4d35e], [0.2, -0.05, 0x2a9d8f], [0.1, 0.15, 0x4361ee]]
      .forEach(([x, z, color]) => g.add(cilindro(0.065, 0.06, color, x, 0.04, z)));
    g.position.set(0.85, 1.1, 0.35);
    g.rotation.x = Math.PI / 2;   // se pone "de pie" para que se vea de frente
    return g;
  },

  // Yos: ladrillos Lego
  legos() {
    const g = new THREE.Group();
    const ladrillo = (color, x, y, rotY) => {
      const l = new THREE.Group();
      l.add(caja(0.7, 0.35, 0.45, color));
      [[-0.18, -0.11], [0.18, -0.11], [-0.18, 0.11], [0.18, 0.11]]
        .forEach(([sx, sz]) => l.add(cilindro(0.09, 0.08, color, sx, 0.215, sz)));
      l.position.set(x, y, 0);
      l.rotation.y = rotY;
      return l;
    };
    g.add(ladrillo(0xd62828, 0, 0.175, 0));
    g.add(ladrillo(0x1d4ed8, 0.04, 0.525, 0.25));
    g.add(ladrillo(0xf2b134, -0.02, 0.875, -0.15));
    g.position.set(1.2, 0, 0.1);
    return g;
  },

  // Benja: celular (Flutter)
  celular() {
    const g = new THREE.Group();
    g.add(caja(0.32, 0.58, 0.04, 0x1d1d1d));
    g.add(caja(0.28, 0.52, 0.01, 0x54c5f8, 0, 0, 0.025));
    const rombo = caja(0.1, 0.1, 0.012, 0x01579b, 0, 0, 0.033);
    rombo.rotation.z = Math.PI / 4;
    g.add(rombo);
    g.position.set(0.8, 1.15, 0.4);
    g.rotation.y = -0.35;
    return g;
  },

  // Anibal: laptop sobre una mesita
  laptop() {
    const g = new THREE.Group();
    g.add(cilindro(0.05, 0.6, 0x888888, 0, 0.3, 0));
    g.add(cilindro(0.4, 0.04, 0xdde3e8, 0, 0.62, 0));
    g.add(caja(0.6, 0.03, 0.42, 0x9aa0a6, 0, 0.665, 0));
    const pantalla = new THREE.Group();          // bisagra de la laptop
    pantalla.position.set(0, 0.68, -0.2);
    pantalla.rotation.x = -0.25;
    pantalla.add(caja(0.6, 0.4, 0.03, 0x9aa0a6, 0, 0.2, 0));
    pantalla.add(caja(0.54, 0.34, 0.01, 0x1e293b, 0, 0.2, 0.02));
    // líneas de "código" con los colores del stack:
    // Laravel, PHP, jQuery, JavaScript, HTML/Blade, Flutter
    pantalla.add(caja(0.30, 0.025, 0.005, 0xff2d20, -0.08, 0.340, 0.03));
    pantalla.add(caja(0.22, 0.025, 0.005, 0x8892bf, -0.12, 0.285, 0.03));
    pantalla.add(caja(0.34, 0.025, 0.005, 0x4aa3df, -0.06, 0.230, 0.03));
    pantalla.add(caja(0.26, 0.025, 0.005, 0xf7df1e, -0.10, 0.175, 0.03));
    pantalla.add(caja(0.32, 0.025, 0.005, 0xe34f26, -0.07, 0.120, 0.03));
    pantalla.add(caja(0.18, 0.025, 0.005, 0x54c5f8, -0.14, 0.065, 0.03));
    g.add(pantalla);
    g.position.set(1.2, 0, 0.15);
    return g;
  },

  // Lic. Marcelo: corbata + estrella dorada que gira sobre su cabeza
  ceo() {
    const g = new THREE.Group();
    g.add(caja(0.14, 0.5, 0.04, 0xc1121f, 0, 0.92, 0.47));
    g.add(caja(0.17, 0.1, 0.05, 0xc1121f, 0, 1.28, 0.44));
    const estrella = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.22),
      new THREE.MeshStandardMaterial({ color: 0xf5b700, roughness: 0.3, metalness: 0.5 })
    );
    estrella.position.y = 2.75;
    estrella.name = 'estrella';
    g.add(estrella);
    return g;
  }
};
