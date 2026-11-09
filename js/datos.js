/* =====================================================================
   DATOS DEL EQUIPO
   Para cambiar a alguien (nombre, colores, rol) solo se edita esta lista.
   - ropa / piel / pelo: colores en hexadecimal
   - largo: true = pelo largo
   - lentes: true = usa lentes
   - recogido: true = pelo recogido (chongo)
   - prop: el objeto que lo identifica (se define en props.js)
   - corto / rol: solo referencia, no se muestran en pantalla
   ===================================================================== */
const PIEL = 0xd9a577;   // mismo tono de piel para todos

const equipo = [
  { nombre: 'Lenny',        corto: 'Inventarios',    rol: 'Inventarios · Desarrolladora',
    ropa: 0xe07a5f, piel: PIEL, pelo: 0x2a1c14, largo: true,  prop: 'cajas' },

  { nombre: 'Dani',         corto: 'Órdenes',        rol: 'Órdenes de venta y compra · Desarrollador',
    ropa: 0x3d85c6, piel: PIEL, pelo: 0x222222, largo: false, prop: 'ordenes' },

  { nombre: 'Rob',          corto: 'QA · GitLab',    rol: 'QA, tester y encargado de los repositorios de GitLab',
    ropa: 0x6a994e, piel: PIEL, pelo: 0x2a1c14, largo: false, lentes: true, prop: 'lupa' },

  { nombre: 'Elias',        corto: 'Reportes CMMS',  rol: 'Reportes de CMMS',
    ropa: 0xf2b134, piel: PIEL, pelo: 0x1a1a1a, largo: false, lentes: true, prop: 'reportes' },

  { nombre: 'Mariel',       corto: 'Diseño gráfico', rol: 'Diseñadora gráfica',
    ropa: 0xa06cd5, piel: PIEL, pelo: 0x2a1c14, largo: true,  lentes: true, prop: 'paleta' },

  { nombre: 'Yos',          corto: 'Dev senior',     rol: 'Desarrollador senior · Aficionado a los Lego',
    ropa: 0xd62828, piel: PIEL, pelo: 0x4a3728, largo: true,  lentes: true, prop: 'legos' },

  { nombre: 'Benja',        corto: 'Dev · Flutter',  rol: 'Desarrollador · también trabaja con Flutter',
    ropa: 0x2ec4b6, piel: PIEL, pelo: 0x2b2118, largo: false, lentes: true, prop: 'celular' },

  { nombre: 'Anibal',       corto: 'Desarrollador',  rol: 'Desarrollador',
    ropa: 0x4361ee, piel: PIEL, pelo: 0x111111, largo: false, prop: 'laptop' },

  { nombre: 'Carla',        corto: 'Pasante',        rol: 'Pasante de la empresa de software',
    ropa: 0x1c1c1c, piel: PIEL, pelo: 0x111111, largo: false, recogido: true, prop: 'laptop' },

  // El CEO va siempre al final: se coloca en el centro, sobre una base.
  { nombre: 'Lic. Marcelo', corto: 'CEO',            rol: 'CEO · Jefe de la empresa',
    ropa: 0x2b2d42, piel: PIEL, pelo: 0x111111, largo: false, lentes: true, prop: 'ceo',
    ceo: true, escala: 1.2 }
];
