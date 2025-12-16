<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Para Ti 💜</title>

<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&display=swap" rel="stylesheet">

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  height:100vh;
  background:radial-gradient(circle at top,#4a0c82,#12001f);
  font-family:'Dancing Script', cursive;
  color:#fff;
  overflow:hidden;
}

/* ===== CANVAS ===== */
canvas{
  position:fixed;
  inset:0;
  z-index:1;
}

/* ===== FLORES ===== */
.flower{
  position:fixed;
  font-size:1.6rem;
  animation: float linear infinite;
  opacity:.85;
  z-index:2;
}

@keyframes float{
  from{ transform:translateY(110vh) rotate(0deg);}
  to{ transform:translateY(-10vh) rotate(360deg);}
}

/* ===== CONTENEDOR ===== */
.container{
  position:relative;
  z-index:3;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:20px;
}

/* ===== SOBRE ===== */
.envelope{
  width:360px;
  height:230px;
  background:#fff;
  position:relative;
  border-radius:10px;
  cursor:pointer;
  box-shadow:0 20px 40px rgba(0,0,0,.4);
}

.envelope::before{
  content:"";
  position:absolute;
  inset:0;
  background:linear-gradient(135deg,#f3c6ff,#d59cff);
  clip-path:polygon(0 0,50% 55%,100% 0,100% 100%,0 100%);
}

.envelope span{
  position:absolute;
  inset:0;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:1.8rem;
  color:#6b007b;
  font-weight:bold;
}

/* ===== CARTA ===== */
.card{
  display:none;
  background:rgba(255,255,255,.15);
  backdrop-filter:blur(18px);
  border-radius:25px;
  padding:35px;
  max-width:520px;
  text-align:center;
  box-shadow:0 0 45px rgba(255,105,180,.6);
  animation:appear 1.4s ease;
}

@keyframes appear{
  from{opacity:0; transform:scale(.7);}
  to{opacity:1; transform:scale(1);}
}

h1{
  color:#ffd1ff;
  margin-bottom:10px;
}

p{
  color:#fff;
  line-height:1.8;
  font-size:1.15rem;
}

button{
  margin-top:20px;
  padding:12px 28px;
  border:none;
  border-radius:30px;
  font-size:1.1rem;
  cursor:pointer;
  background:linear-gradient(45deg,#ff5ac8,#9d4cff);
  color:white;
  box-shadow:0 0 18px rgba(255,120,200,.7);
  transition:.3s;
}

button:hover{
  transform:scale(1.12);
}

/* ===== FOTO ===== */
.photo{
  margin:20px auto;
  width:140px;
  height:140px;
  border-radius:50%;
  background:url("https://i.imgur.com/8QZ7QZL.png") center/cover;
  box-shadow:0 0 25px rgba(255,200,255,.8);
}

/* ===== FINAL ===== */
.final{
  display:none;
  animation:glow 3s infinite alternate;
}

@keyframes glow{
  from{text-shadow:0 0 10px #ff7ad9;}
  to{text-shadow:0 0 40px #c77dff;}
}
</style>
</head>

<body>

<canvas id="particles"></canvas>
<div id="flowers"></div>

<div class="container">

  <!-- SOBRE -->
  <div class="envelope" id="envelope" onclick="openLetter()">
    <span>Para Lina 💜</span>
  </div>

  <!-- CARTA -->
  <div class="card" id="card">

    <h1>Mi amor 💜</h1>
    <div class="photo"></div>

    <p id="text"></p>

    <button id="nextBtn" onclick="next()">Siguiente 🌸</button>

    <div class="final" id="final">
      <h1>¿Quieres ser mi novia? 💖</h1>
      <button onclick="yes()">Sí, quiero 💜</button>
    </div>

  </div>
</div>

<audio id="music" loop>
  <source src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_5b6f8e7f06.mp3">
</audio>

<audio id="typeSound">
  <source src="https://cdn.pixabay.com/download/audio/2022/02/23/audio_4a5f7c4d6b.mp3">
</audio>

<script>
/* ===== PARTICULAS ===== */
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");
canvas.width=innerWidth;
canvas.height=innerHeight;

let particles=[];
for(let i=0;i<120;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*2+1,
    dx:(Math.random()-.5)*0.6,
    dy:(Math.random()-.5)*0.6
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="rgba(255,190,255,.8)";
    ctx.fill();
    p.x+=p.dx; p.y+=p.dy;
    if(p.x<0||p.x>canvas.width) p.dx*=-1;
    if(p.y<0||p.y>canvas.height) p.dy*=-1;
  });
  requestAnimationFrame(animate);
}
animate();

/* ===== FLORES ===== */
const icons=["🌸","🌷","💜","🌹"];
for(let i=0;i<35;i++){
  let f=document.createElement("div");
  f.className="flower";
  f.textContent=icons[Math.floor(Math.random()*icons.length)];
  f.style.left=Math.random()*100+"vw";
  f.style.animationDuration=10+Math.random()*14+"s";
  document.getElementById("flowers").appendChild(f);
}

/* ===== CARTA ===== */
const texts=[
  "Desde que llegaste, mi mundo se volvió más tranquilo.",
  "Me haces sentir en casa, incluso en silencio.",
  "Esto no es solo una carta… es una promesa sincera.",
  "Por eso quiero caminar contigo, sin miedo."
];

let idx=0;
let char=0;
const textEl=document.getElementById("text");
const typeSound=document.getElementById("typeSound");

function openLetter(){
  envelope.style.display="none";
  card.style.display="block";
  music.play();
  type();
}

function type(){
  if(char<texts[idx].length){
    textEl.textContent+=texts[idx].charAt(char);
    typeSound.currentTime=0;
    typeSound.play();
    char++;
    setTimeout(type,45);
  }
}

function next(){
  idx++;
  char=0;
  if(idx<texts.length){
    textEl.textContent="";
    type();
  }else{
    nextBtn.style.display="none";
    final.style.display="block";
  }
}

function yes(){
  final.innerHTML=`
    <h1>💜 Gracias por decir sí 💜</h1>
    <p>
      Prometo cuidarte, escucharte y elegirte todos los días.<br><br>
      Este es solo el inicio de algo hermoso 🌸
    </p>
  `;

  for(let i=0;i<40;i++){
    let f=document.createElement("div");
    f.className="flower";
    f.textContent="💜";
    f.style.left=Math.random()*100+"vw";
    f.style.fontSize="2rem";
    document.body.appendChild(f);
  }
}
</script>

</body>
</html>
