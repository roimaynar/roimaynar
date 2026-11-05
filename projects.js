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
 {id:"groom-criatura",t:"No Life Shortfilm",c:["cfx","fx"],y:2026,
  d:"Cfx, fx and Script lead. 3D Animator and compositer.",tools:"Houdini · Karma",img:"NoLife_portada.webp",
  intro:"Cfx, fx and Script lead. Also 3D Animator, storyboard and layout artist, and comp artist.",
  text:["Explain here what the project is about: the brief, the character design and what made the hair special.","Describe your process: guides, clumping, noise, wind simulation and how you integrated it into the pipeline."],
  gallery:[],vimeo:""},
 {id:"capa-movimiento",t:"Small World Stories",c:"diseno",y:2025,
  d:"Illustrated infographics abou climate change.",tools:"Houdini Vellum",img:"",
  intro:"Developement of 4 illustrated infographics for the Climate Communications Resource Hub",
  text:["Describe the shot, the character and the challenge of the simulation.","Explain the Vellum setup, the collisions and how you controlled the wrinkles."],
  gallery:[],vimeo:""},
 {id:"hechizo-fuego",t:"Stigma Shortfilm",c:"3d",y:2026,
  d:"3D animator for the Award Winning shortfilm",tools:"Autodesk Maya",img:"",
  intro:"Three different scenes from the shortfilm. Only 2 can be of public access at the moment",
  text:["Describe the visual reference and the intention of the effect.","Explain the simulation, the look and the layered render through to compositing."],
  gallery:[],vimeo:""},
 {id:"tormenta-agua",t:"Magos Siempre Hacen Trampas",c:["juegos","3d"],y:2025,
  d:"Shortfilm and playing cards game.",tools:"Blender",img:"",
  intro:"Large-scale water integrated with the action.",
  text:["Describe the shot and the scale of the effect.","Explain the workflow: base ocean, FLIP, foam, spray and compositing in Nuke."],
  gallery:[],vimeo:""},
 {id:"ciclo-caminar",t:"Los Titanes de la Tamarita",c:["juegos","diseno"],y:2023,
  d:"Board game.",tools:"Indesign · Blender · Pixel Studio",img:"",
  intro:"A walk that tells you who the character is.",
  text:["Describe the character and what you wanted to convey through the movement.","Explain your process: references, blocking, spline and polish."],
  gallery:[],vimeo:""},
 {id:"identidad-visual",t:"O'Paraiso Teaser Trailer",c:"3d",y:2026,
  d:"Posters, typography and graphic system.",tools:"Photoshop · Illustrator",img:"",
  intro:"A coherent graphic system from start to finish.",
  text:["Describe the client or project and the design goals.","Explain the decisions on color, typography and composition."],
  gallery:[],vimeo:""},
];

const esc=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
