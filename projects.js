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
   frame   → (opcional) marco propio para la cara delantera de ESA carta
   back    → (opcional) reverso propio para ESA carta
   ============================================================ */
/* ENLACES de las especialidades (tarjetas de la sección Especialidades).
   Cámbialos por tus reels y portfolios. */
const LINKS={
  cfx:"https://vimeo.com/1241983054",      // reel de CFX
  fx:"https://vimeo.com/1241983054",       // reel de FX
  "3d":"https://vimeo.com/1241983054",     // reel de animación 3D
  diseno:"https://www.behance.net/tuusuario",        // portfolio de diseño gráfico
  juegos:"https://www.behance.net/tuusuario/juegos"  // portfolio de juegos de mesa
};
/*
   ============================================================ */
const CATS={cfx:"CFX",fx:"FX","3d":"3D Animation",diseno:"Graphic design",juegos:"Board games"};

const P=[
 {id:"groom-criatura",t:"Creature groom",c:"cfx",y:2025,
  d:"Long hair with guides, clumping and wind.",tools:"Houdini · Karma",img:"",
  intro:"A complete groom, from guides to the final render.",
  text:["Explain here what the project is about: the brief, the character design and what made the hair special.","Describe your process: guides, clumping, noise, wind simulation and how you integrated it into the pipeline."],
  gallery:[],vimeo:""},
 {id:"capa-movimiento",t:"Cape in motion",c:"cfx",y:2025,
  d:"Cloth simulation with wrinkles and collisions.",tools:"Houdini Vellum",img:"",
  intro:"Cloth that behaves like cloth, shot after shot.",
  text:["Describe the shot, the character and the challenge of the simulation.","Explain the Vellum setup, the collisions and how you controlled the wrinkles."],
  gallery:[],vimeo:""},
 {id:"hechizo-fuego",t:"Fire spell",c:"fx",y:2024,
  d:"Stylized fire with artistic control.",tools:"Houdini · Solaris",img:"",
  intro:"A spell with its own character, designed to be art-directed by hand.",
  text:["Describe the visual reference and the intention of the effect.","Explain the simulation, the look and the layered render through to compositing."],
  gallery:[],vimeo:""},
 {id:"tormenta-agua",t:"Water storm",c:"fx",y:2024,
  d:"Ocean, foam and splashes in shot.",tools:"Houdini FLIP",img:"",
  intro:"Large-scale water integrated with the action.",
  text:["Describe the shot and the scale of the effect.","Explain the workflow: base ocean, FLIP, foam, spray and compositing in Nuke."],
  gallery:[],vimeo:""},
 {id:"ciclo-caminar",t:"Walk cycle",c:"3d",y:2024,
  d:"Character animation with weight and intention.",tools:"Maya · Blender",img:"",
  intro:"A walk that tells you who the character is.",
  text:["Describe the character and what you wanted to convey through the movement.","Explain your process: references, blocking, spline and polish."],
  gallery:[],vimeo:""},
 {id:"identidad-visual",t:"Visual identity",c:"diseno",y:2025,
  d:"Posters, typography and graphic system.",tools:"Photoshop · Illustrator",img:"",
  intro:"A coherent graphic system from start to finish.",
  text:["Describe the client or project and the design goals.","Explain the decisions on color, typography and composition."],
  gallery:[],vimeo:""},
 {id:"cartas-sabotaje",t:"Sabotage cards",c:"juegos",y:2026,
  d:"Card design, iconography and mechanics.",tools:"Illustration · Design",img:"assets/frame.png",
  intro:"The cards of a game where cheating is part of the rules.",
  text:["Explain what the game is about and the role of these cards.","Describe the process: mechanics, illustration, iconography and playtesting."],
  gallery:[{src:"assets/frame.png",cap:"Sabotage card frame"},{src:"assets/back.png",cap:"Card back"}],vimeo:""},
 {id:"manual-juego",t:"Game manual",c:"juegos",y:2026,
  d:"Manual layout and cover.",tools:"InDesign · Photoshop",img:"assets/cover.png",
  intro:"From the first paper prototype to a print-ready manual.",
  text:["Describe how the manual is organized and what you wanted a new player to understand.","Describe the cover design and the print layout."],
  gallery:[{src:"assets/cover.png",cap:"Manual cover"}],vimeo:""}
];

const esc=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
