/* ============================================================
   EDITA AQUÍ tus proyectos. Es el único sitio donde hace falta
   tocar: la portada y las subpáginas se generan desde esta lista.

   id      → nombre corto sin espacios ni tildes (va en la URL)
   t       → título
   c       → cfx | fx | 3d | diseno | juegos
   y       → año
   d       → frase corta que sale al girar la carta
   tools   → herramientas
   img     → imagen redonda de la carta (ej. "assets/proyectos/groom.jpg"); vacío = mago
   intro   → frase destacada de la subpágina
   text    → párrafos de la subpágina
   gallery → imágenes: [{src:"assets/proyectos/groom-1.jpg", cap:"Pie de foto"}]
   vimeo   → id numérico de un vídeo de Vimeo (opcional), ej. "1241983054"
   ============================================================ */
const CATS={cfx:"CFX",fx:"FX","3d":"Animación 3D",diseno:"Diseño gráfico",juegos:"Juegos de mesa"};

const P=[
 {id:"groom-criatura",t:"Groom de criatura",c:"cfx",y:2025,
  d:"Pelo largo con guías, clumping y viento.",tools:"Houdini · Karma",img:"",
  intro:"Un groom completo, desde las guías hasta el render final.",
  text:["Aquí explica de qué va el proyecto: el encargo, el diseño del personaje y qué tenía de especial el pelo.","Cuenta tu proceso: guías, clumping, ruido, simulación con viento y cómo lo integraste en el pipeline."],
  gallery:[],vimeo:"1241983054"},
 {id:"capa-movimiento",t:"Capa en movimiento",c:"cfx",y:2025,
  d:"Simulación de ropa con arrugas y colisiones.",tools:"Houdini Vellum",img:"",
  intro:"Tela que se comporta como tela, plano tras plano.",
  text:["Describe el plano, el personaje y el reto de la simulación.","Explica los ajustes de Vellum, las colisiones y cómo controlaste las arrugas."],
  gallery:[{src:"assets/proyectos/cover.png", cap:"Pie de foto"}],vimeo:""},
 {id:"hechizo-fuego",t:"Hechizo de fuego",c:"fx",y:2024,
  d:"Fuego estilizado con control artístico.",tools:"Houdini · Solaris",img:"",
  intro:"Un hechizo con carácter propio, pensado para dirigirse a mano.",
  text:["Cuenta la referencia visual y la intención del efecto.","Explica la simulación, el look y el render por capas hasta la composición."],
  gallery:[],vimeo:""},
 {id:"tormenta-agua",t:"Tormenta de agua",c:"fx",y:2024,
  d:"Océano, espuma y salpicaduras en plano.",tools:"Houdini FLIP",img:"",
  intro:"Agua a gran escala integrada con la acción.",
  text:["Describe el plano y la escala del efecto.","Explica el flujo de trabajo: océano base, FLIP, espuma, spray y composición en Nuke."],
  gallery:[],vimeo:""},
 {id:"ciclo-caminar",t:"Ciclo de caminar",c:"3d",y:2024,
  d:"Animación de personaje con peso e intención.",tools:"Maya · Blender",img:"",
  intro:"Un paseo que cuenta quién es el personaje.",
  text:["Cuenta el personaje y qué querías transmitir con el movimiento.","Explica tu proceso: referencias, bloqueo, spline y pulido."],
  gallery:[],vimeo:""},
 {id:"identidad-visual",t:"Identidad visual",c:"diseno",y:2025,
  d:"Cartelería, tipografía y sistema gráfico.",tools:"Photoshop · Illustrator",img:"",
  intro:"Un sistema gráfico coherente de principio a fin.",
  text:["Describe el cliente o proyecto y los objetivos del diseño.","Explica las decisiones de color, tipografía y composición."],
  gallery:[],vimeo:""},
 {id:"cartas-sabotaje",t:"Cartas de sabotaje",c:"juegos",y:2026,
  d:"Diseño de cartas, iconografía y mecánicas.",tools:"Ilustración · Diseño",img:"assets/frame.png",
  intro:"Las cartas de un juego donde hacer trampas forma parte de las reglas.",
  text:["Explica de qué va el juego y cuál es el papel de estas cartas.","Cuenta el proceso: mecánicas, ilustración, iconografía y pruebas con jugadores."],
  gallery:[{src:"assets/frame.png",cap:"Marco de carta de sabotaje"},{src:"assets/back.png",cap:"Reverso de las cartas"}],vimeo:""},
 {id:"manual-juego",t:"Manual del juego",c:"juegos",y:2026,
  d:"Maquetación del manual y portada.",tools:"InDesign · Photoshop",img:"assets/cover.png",
  intro:"Del primer prototipo en papel al manual listo para imprenta.",
  text:["Describe cómo se organiza el manual y qué querías que entendiera un jugador nuevo.","Cuenta el diseño de la portada y la maquetación para impresión."],
  gallery:[{src:"assets/cover.png",cap:"Portada del manual"}],vimeo:""}
];

const esc=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
