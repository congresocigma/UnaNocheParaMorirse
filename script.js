const inicio = document.getElementById("inicio");
const invitacion = document.getElementById("invitacion");
const destino = document.getElementById("destino");

const entrar = document.getElementById("entrar");
const huir = document.getElementById("huir");

const mensajeHuir =
  document.getElementById("mensajeHuir");

const verDestino =
  document.getElementById("verDestino");

const otraVez =
  document.getElementById("otraVez");

const destinoIcono =
  document.getElementById("destinoIcono");

const destinoTitulo =
  document.getElementById("destinoTitulo");

const destinoTexto =
  document.getElementById("destinoTexto");


/* =========================
   POSIBLES DESTINOS
   ========================= */

const destinos = [

  {
    icono: "👑",
    titulo: "FINAL GIRL",
    texto:
      "Contra todo pronóstico, sobrevivís. " +
      "Vas a tener que explicar qué pasó... " +
      "aunque probablemente nadie te crea."
  },

  {
    icono: "🩸",
    titulo: "MORÍS PRIMERO",
    texto:
      "Alguien tenía que investigar ese ruido extraño. " +
      "Felicitaciones: fuiste vos."
  },

  {
    icono: "🔪",
    titulo: "VOS ERAS EL ASESINO",
    texto:
      "Plot twist. Nadie sospechó de vos. " +
      "O por lo menos eso querés creer."
  },

  {
    icono: "👻",
    titulo: "SOBREVIVÍS, PERO NADIE TE CREE",
    texto:
      "Viste todo. Escapaste. " +
      "El problema es que tu historia " +
      "suena completamente absurda."
  },

  {
    icono: "🧟",
    titulo: "TE CONVERTÍS EN ZOMBIE",
    texto:
      "Técnicamente no sobrevivís. " +
      "Pero tampoco podemos decir " +
      "que moriste del todo."
  },

  {
    icono: "🕵️",
    titulo: "SOS EL SOSPECHOSO PRINCIPAL",
    texto:
      "No sabemos qué hiciste, " +
      "pero estabas demasiado tranquilo " +
      "cuando desapareció el primero."
  },

  {
    icono: "🏃",
    titulo: "SOBREVIVÍS POR COBARDE",
    texto:
      "Mientras todos investigaban " +
      "el ruido del sótano, " +
      "vos ya estabas a seis cuadras. " +
      "Una decisión excelente."
  },

  {
    icono: "😈",
    titulo: "ESTABAS POSEÍDO",
    texto:
      "Esas cosas raras que hiciste " +
      "durante la noche ahora tienen explicación. " +
      "Más o menos."
  },

  {
    icono: "🧛",
    titulo: "TERMINÁS SIENDO VAMPIRO",
    texto:
      "La noche termina, pero para vos " +
      "parece que recién empieza. " +
      "Esperemos que nadie haya comido ajo."
  },

  {
    icono: "📞",
    titulo: "RECIBÍS LA LLAMADA",
    texto:
      "Suena el teléfono. " +
      "Atendés. Una voz pregunta " +
      "cuál es tu película de terror favorita. " +
      "Tal vez era mejor no responder."
  },

  {
    icono: "🪦",
    titulo: "VOLVÉS DE LA MUERTE",
    texto:
      "Todos estaban bastante seguros " +
      "de que habías muerto. " +
      "Evidentemente no vieron suficientes " +
      "películas de terror."
  },

  {
    icono: "😶",
    titulo: "DESAPARECÉS MISTERIOSAMENTE",
    texto:
      "Nadie vio qué pasó. " +
      "Nadie escuchó nada. " +
      "Solo quedó tu vaso sobre la mesa."
  }

];


/* =========================
   CAMBIAR PANTALLA
   ========================= */

function mostrarPantalla(pantalla) {

  document
    .querySelectorAll(".screen")
    .forEach(section => {
      section.classList.remove("active");
    });

  pantalla.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================
   ENTRAR
   ========================= */

entrar.addEventListener("click", () => {

  mostrarPantalla(invitacion);

});


/* =========================
   HUIR
   ========================= */

const mensajesEscape = [

  "Demasiado tarde. Ya sabemos que abriste la invitación.",

  "¿Huir? Interesante elección...",

  "No deberías haber tocado ese botón.",

  "La salida ya no está disponible.",

  "Podés intentarlo. Pero en las películas nunca funciona.",

  "Algo nos dice que vas a venir igual."

];

let intentosHuir = 0;

huir.addEventListener("click", () => {

  const mensaje =
    mensajesEscape[
      intentosHuir % mensajesEscape.length
    ];

  mensajeHuir.textContent = mensaje;

  intentosHuir++;

  huir.classList.remove("shake");

  void huir.offsetWidth;

  huir.classList.add("shake");


  /* Después de varios intentos cambia el botón */

  if (intentosHuir === 3) {

    huir.textContent = "🏃 SEGUIR INTENTANDO";

  }

  if (intentosHuir === 5) {

    huir.textContent = "💀 YA ES TARDE";

  }

});


/* =========================
   ELEGIR DESTINO
   ========================= */

function descubrirDestino() {

  const numero =
    Math.floor(
      Math.random() * destinos.length
    );

  const resultado =
    destinos[numero];

  destinoIcono.textContent =
    resultado.icono;

  destinoTitulo.textContent =
    resultado.titulo;

  destinoTexto.textContent =
    resultado.texto;

  mostrarPantalla(destino);

}


/* =========================
   BOTONES DESTINO
   ========================= */

verDestino.addEventListener(
  "click",
  descubrirDestino
);

otraVez.addEventListener(
  "click",
  descubrirDestino
);
