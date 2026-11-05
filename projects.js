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
  diseno:"assets/RoiMaynar_Portfolio.pdf",   // portfolio de diseño gráfico (PDF dentro de la web)
  juegos:"assets/RoiMaynar_Portfolio.pdf"    // portfolio de juegos de mesa (mismo PDF)
};
/*
   ============================================================ */
const CATS={cfx:"CFX",fx:"FX","3d":"3D Animation",diseno:"Graphic design",juegos:"Board games"};

const P=[
 {id:"groom-criatura",t:"No Life Shortfilm",c:["cfx","fx"],y:2026,
  d:"Cfx, fx and Script lead. 3D Animator and compositer.",tools:"Houdini · Karma",img:"assets/proyectos/NoLife_portada.webp",
  intro:"Sci-fi 3D animated shortfilm abou 2 astronauts in conflict about his job searching life in outer planets.",
  text:["Cfx, fx and Script lead. Also 3D Animator, storyboard and layout artist, and comp artist.","Created and writed the most parte of the world and story of the shortfilm. Used Houdini for grooming and fx, created a grooming cards workflow using feathers. Used maya for 3D animation and Nuke for compositing.."],
  gallery:[],vimeo:""},
 {id:"capa-movimiento",t:"Small World Stories",c:"diseno",y:2025,
  d:"Illustrated infographics abou climate change.",tools:"Houdini Vellum",img:"assets/proyectos/Climate_portada.webp",
  intro:"Developement of 4 illustrated infographics for the Climate Communications Resource Hub",
  text:["Describe the shot, the character and the challenge of the simulation.","Explain the Vellum setup, the collisions and how you controlled the wrinkles."],
  gallery:[],vimeo:""},
 {id:"hechizo-fuego",t:"Stigma Shortfilm",c:"3d",y:2026,
  d:"3D animator for the Award Winning shortfilm",tools:"Autodesk Maya",img:"assets/proyectos/Stigma_portada.webp",
  intro:"Three different scenes from the shortfilm. Only 2 can be of public access at the moment",
  text:["Describe the visual reference and the intention of the effect.","Explain the simulation, the look and the layered render through to compositing."],
  gallery:[],vimeo:""},
 {id:"tormenta-agua",t:"LMSHT",c:["juegos","3d"],y:2025,
  d:"Shortfilm and playing cards game.",tools:"Blender",img:"assets/proyectos/Magos_portada.webp",
  intro:"Los Magos Siempre Hacen Trampas. A hibrid porject that combines de the creation of a card game and a 3D animated shorfilm based in the game.",
  text:["Describe the shot and the scale of the effect.","Explain the workflow: base ocean, FLIP, foam, spray and compositing in Nuke."],
  gallery:[],vimeo:""},
 {id:"ciclo-caminar",t:"Los Titanes de la Tamarita",c:["juegos","diseno"],y:2023,
  d:"Board game",tools:"Indesign · Blender · Pixel Studio",img:"assets/proyectos/Tamarita_portada.webp",
  intro:"Family oriented board game about a group of tiny adventurers in a fantasy world park full of titans.",
  text:["Describe the character and what you wanted to convey through the movement.","Explain your process: references, blocking, spline and polish."],
  gallery:[{src:"assets/proyectos/Tamarita_portada.webp", cap:"Componentes del juego"}],vimeo:""},
 {id:"identidad-visual",t:"Sexteto Sempronio",c:["fx","diseno"],y:2026,
  d:"Music band poster.",tools:"Houdini · Blender · Indesign",img:"assets/proyectos/Sempronio_portada.webp",
  intro:"A poster for the galician music band Sexteto Sempronio",
  text:["I used houdini to create a destruction of 3 greek temples and blender to compose all the 3D scene. It was used in the may 2026 concert in Nigrán, Galicia, Spain"],
  gallery:[],vimeo:""},
];

const esc=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
