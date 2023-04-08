let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style= "color: #7b147b;">Soy ingeniera en sistemas y técnica en mantenimiento en equipos de oficina.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
