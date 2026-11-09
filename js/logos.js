/* =====================================================================
   LOGOS FLOTANTES DEL STACK
   Laravel, PHP, Blade, Flutter, HTML, jQuery y JavaScript.
   Cada logo es una baldosa 3D con la imagen dibujada en un <canvas>,
   así no hace falta cargar imágenes externas.
   ===================================================================== */

// pinta un cuadrado de un solo color (fondo del logo)
function fondo(ctx, color) { ctx.fillStyle = color; ctx.fillRect(0, 0, 256, 256); }

// escribe texto centrado
function escribir(ctx, texto, x, y, tam, color, peso = 800) {
  ctx.fillStyle = color;
  ctx.font = `${peso} ${tam}px "DM Sans", system-ui, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(texto, x, y);
}

// dibuja un polígono a partir de una lista de puntos [x, y]
function poligono(ctx, color, puntos) {
  ctx.fillStyle = color;
  ctx.beginPath();
  puntos.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
  ctx.closePath();
  ctx.fill();
}

// Marca de Laravel: los logos de marca se pueden dibujar con Path2D a partir de un path SVG
const PATH_LARAVEL = new Path2D('M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934c0 .135-.073.26-.189.326l-9.037 5.206a.355.355 0 01-.064.027c-.008.002-.016.007-.024.01a.364.364 0 01-.185 0c-.01-.003-.019-.008-.029-.012a.347.347 0 01-.06-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283l3.76-2.164zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325l8.272-4.76zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.039-.01-.012-.021-.023-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257-1.58-.908zm4.14-2.95L1.47 2.84l3.762 2.166 3.76-2.166-3.76-2.167zm1.96 13.516l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.31l1.58-.909zm11.076-9.86l-3.76 2.166 3.76 2.166 3.76-2.166-3.76-2.166zm-.376 5.47l-2.182-1.256-1.58-.909v4.283l2.182 1.256 1.58.909v-4.283zM9.93 22.027l7.82-4.502v-4.283l-6.162 3.517-1.658.946v4.322z');

function dibujarLaravel(ctx) {
  fondo(ctx, '#ffffff');
  ctx.save();
  ctx.translate(128 - 12 * 7, 14);   // centra el logo (el path mide unos 24 x 24)
  ctx.scale(7, 7);
  ctx.fillStyle = '#ff2d20';
  ctx.fill(PATH_LARAVEL, 'evenodd');
  ctx.restore();
  escribir(ctx, 'Laravel', 128, 226, 34, '#ff2d20', 700);
}

function dibujarPHP(ctx) {
  fondo(ctx, '#e9e9f4');
  ctx.fillStyle = '#777bb4';
  ctx.beginPath(); ctx.ellipse(128, 104, 100, 56, 0, 0, Math.PI * 2); ctx.fill();
  escribir(ctx, 'php', 128, 106, 84, '#111111');
  escribir(ctx, 'PHP', 128, 222, 34, '#4f5b93', 700);
}

function dibujarBlade(ctx) {
  fondo(ctx, '#1f2937');
  escribir(ctx, '{{ }}', 128, 104, 92, '#ff2d20');
  escribir(ctx, 'Blade', 128, 222, 34, '#ffffff', 700);
}

function dibujarFlutter(ctx) {
  fondo(ctx, '#f3f4f6');
  ctx.save();
  ctx.translate(128 - 12 * 6.4, 16);
  ctx.scale(6.4, 6.4);
  ctx.fillStyle = '#54c5f8';
  ctx.fill(new Path2D('M14.314 0L2.3 12 6 15.7 21.684.013h-7.357z'));            // ala grande
  ctx.fill(new Path2D('M14.328 11.072L21.7 11.072 15.24 17.532 7.857 17.53z'));   // brazo superior de la flecha
  ctx.fillStyle = '#01579b';
  ctx.fill(new Path2D('M7.857 17.53L15.24 17.532 21.7 24 14.327 24z'));           // brazo inferior (azul oscuro)
  ctx.restore();
  escribir(ctx, 'Flutter', 128, 228, 32, '#01579b', 700);
}

function dibujarHTML(ctx) {
  fondo(ctx, '#f3f4f6');
  ctx.save();
  ctx.translate(23, 0); ctx.scale(0.82, 0.82);          // escudo un poco más chico para dejar lugar al texto
  poligono(ctx, '#e34f26', [[56, 30], [200, 30], [184, 186], [128, 206], [72, 186]]);
  poligono(ctx, '#ef652a', [[128, 44], [186, 44], [172, 174], [128, 188]]);
  escribir(ctx, '5', 128, 120, 112, '#ffffff');
  ctx.restore();
  escribir(ctx, 'HTML', 128, 224, 32, '#e34f26', 700);
}

function dibujarJQuery(ctx) {
  fondo(ctx, '#0769ad');
  escribir(ctx, 'jQ', 128, 100, 120, '#ffffff');
  escribir(ctx, 'jQuery', 128, 222, 34, '#ffffff', 700);
}

function dibujarJS(ctx) {
  fondo(ctx, '#f7df1e');
  escribir(ctx, 'JS', 128, 108, 130, '#111111');
  escribir(ctx, 'JavaScript', 128, 222, 30, '#111111', 700);
}

// el orden define la posición: 4 a la izquierda y 3 a la derecha del CEO
const logosDef = [
  { dibujo: dibujarLaravel, lado: 0xcfd6dc },
  { dibujo: dibujarPHP,     lado: 0x5a5f94 },
  { dibujo: dibujarBlade,   lado: 0x111827 },
  { dibujo: dibujarFlutter, lado: 0x01579b },
  { dibujo: dibujarHTML,    lado: 0xb83a1b },
  { dibujo: dibujarJQuery,  lado: 0x054f82 },
  { dibujo: dibujarJS,      lado: 0xc9b400 }
];

const logos3d = logosDef.map((d) => {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 256;
  d.dibujo(canvas.getContext('2d'));

  const lado = mate(d.lado);
  const frente = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(canvas) });
  // orden de caras de la caja: +x, -x, +y, -y, +z (frente), -z (atrás)
  const m = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.1, 0.14), [lado, lado, lado, lado, frente, frente]);
  escena.add(m);
  return m;
});

const xsLogos = [-9.6, -7.2, -4.8, -2.4, 2.4, 4.8, 7.2];

function colocarLogos() {
  logos3d.forEach((l, i) => {
    const x = xsLogos[i] * (angosto ? 0.5 : 1);
    const z = angosto ? -9 : (i % 2 ? -9 : -7);
    const y = 2.9 + (Math.abs(xsLogos[i]) / 9.6) * 0.6 + (i % 2) * 0.3;
    l.position.set(x, y, z);
    l.userData.baseY = y;
    l.userData.escala = angosto ? 0.7 : 1;
  });
}
