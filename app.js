const items = [
  { nombre: "😘 Besos", id: "besos" },
  { nombre: "🤗 Abrazos", id: "abrazos" },
  { nombre: "🥰 Caricias", id: "caricias" },
  { nombre: "🍔 Salidas a comer", id: "comidas" },
  { nombre: "🎬 Cine", id: "cine" },
  { nombre: "🌹 Flores", id: "flores" },
  { nombre: "🍦 Helados", id: "helados" },
  { nombre: "☕  Cafecitos", id: "cafecitos" },
  { nombre: "🚗 Paseos", id: "paseos" },
  { nombre: "💌 Cartitas", id: "cartitas" },
  { nombre: "🛍️ Compritas", id: "compritas" },
  { nombre: "🌙 Dormir juntos", id: "dormir" },
  { nombre: "📸 Fotos juntos", id: "fotos" },
  { nombre: "🎵 Serenatas", id: "serenatas" },
];

setInterval(() => {
  const heart = document.createElement("div");

  heart.className = "heart-bg";

  const emojis = ["❤️", "💕", "💖", "💗", "💘"];

  heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = 15 + Math.random() * 25 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 15000);
}, 1200);

const frases = [
  "❤️ Todo lo que estoy dispuesto a hacer por ti, mi amor ❤️",
  "🥰 Mi lugar favorito siempre será a tu lado.",
  "💞 Gracias por llegar a mi vida.",
  "🌹 Eres mi casualidad favorita.",
  "💕 Si volviera a nacer, volvería a elegirte.",
  "😘 Mi plan favorito siempre eres tú.",
  "✨ Eres lo mejor que me ha pasado.",
  "💖 Te quiero más de lo que las palabras pueden explicar.",
  "🌙 Cada día contigo vale la pena.",
  "❤️ Eres mi persona favorita.",
];

const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

document.getElementById("fraseAmor").innerHTML = fraseAleatoria;

const lista = document.getElementById("lista");

function renderizar() {
  lista.innerHTML = "";

  let total = 0;

  items.forEach((item) => {
    let valor = parseInt(localStorage.getItem(item.id) || 0);

    total += valor;

    lista.innerHTML += `
            <div class="item">

                <div class="top">

                    <div class="emoji">
                        ${item.nombre.split(" ")[0]}
                    </div>

                    <div class="titulo">
                        ${item.nombre.substring(3)}
                    </div>

                </div>

                <div class="contador" id="${item.id}">
                    ${valor}
                </div>

                <div class="acciones">

                    <button
                        class="sumar"
                        onclick="sumar('${item.id}')"
                    >
                        ➕ Agregar
                    </button>

                    <button
                        class="restar"
                        onclick="restar('${item.id}')"
                    >
                        💋 Pagado
                    </button>

                </div>

            </div>
        `;
  });

  document.getElementById("totalGeneral").innerText = total;
  actualizarLogros(total);
}

function sumar(id) {
  let actual = parseInt(localStorage.getItem(id) || 0);

  actual++;

  localStorage.setItem(id, actual);

  crearCorazon();

  renderizar();
}

function restar(id) {
  let actual = parseInt(localStorage.getItem(id) || 0);

  if (actual > 0) {
    actual--;
  }

  localStorage.setItem(id, actual);

  renderizar();
}

function crearCorazon() {
  const heart = document.createElement("div");

  heart.className = "floating-heart";

  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

renderizar();

const fechaInicio = new Date("2025-12-26");

const hoy = new Date();

const diferencia = hoy - fechaInicio;

const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

document.getElementById("diasJuntos").innerHTML =
  `💞 Llevamos ${dias} días juntos 💞`;

const razones = [
  "Tu sonrisa ilumina mis días.",
  "Siempre sabes cómo hacerme sentir mejor.",
  "Tus abrazos son mi lugar favorito.",
  "Tu voz me da tranquilidad.",
  "Eres increíblemente hermosa.",
  "Me encanta tu forma de reír.",
  "Eres mi persona favorita.",
  "Siempre me apoyas.",
  "Tu forma de cuidarme es única.",
  "Me haces feliz incluso en los días difíciles.",
  "Tus ojos me enamoran.",
  "Contigo todo es más bonito.",
  "Porque haces que cualquier momento sea especial.",
  "Porque eres mi mejor compañía.",
  "Porque me inspiras a ser mejor cada día.",
  "Porque amo cómo me miras.",
  "Porque contigo siento paz.",
  "Porque eres mi casualidad favorita.",
  "Porque haces que mi corazón sonría.",
  "Porque simplemente eres tú ❤️",
];

const hoyNumero = new Date().getDate();

const razon = razones[hoyNumero % razones.length];

document.getElementById("razonDia").innerHTML = razon;

function actualizarLogros(total) {
  let html = "";

  if (total >= 1) {
    html += `
        <div class="logro">
            💖 Primer gesto de amor
        </div>`;
  }

  if (total >= 10) {
    html += `
        <div class="logro">
            🤗 10 muestras de cariño acumuladas
        </div>`;
  }

  if (total >= 25) {
    html += `
        <div class="logro">
            🌹 Novio en entrenamiento
        </div>`;
  }

  if (total >= 50) {
    html += `
        <div class="logro">
            💞 Experto en consentir
        </div>`;
  }

  if (total >= 100) {
    html += `
        <div class="logro">
            👑 Rey oficial del amor
        </div>`;
  }

  if (total >= 200) {
    html += `
        <div class="logro">
            ❤️ Amor infinito desbloqueado
        </div>`;
  }

  document.getElementById("logros").innerHTML = html;
}

let clicksSecretos = 0;

document
.getElementById("fotoPrincipal")
.addEventListener("click", () => {

    clicksSecretos++;

    if(clicksSecretos >= 3){

        document
        .getElementById("secretModal")
        .style.display = "flex";

        clicksSecretos = 0;
    }

});

document
.getElementById("cerrarCarta")
.addEventListener("click", () => {

    document
    .getElementById("secretModal")
    .style.display = "none";

});

document
  .getElementById("cerrarCarta")
  .addEventListener("click", () => {

    document
      .getElementById("secretModal")
      .style.display = "none";

});