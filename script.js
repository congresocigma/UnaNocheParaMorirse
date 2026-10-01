const inicio =
  document.getElementById("inicio");

const invitacion =
  document.getElementById("invitacion");

const destino =
  document.getElementById("destino");

const entrar =
  document.getElementById("entrar");

const huir =
  document.getElementById("huir");

const mensajeHuir =
  document.getElementById("mensajeHuir");

const ghostEscape =
  document.getElementById("ghostEscape");

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


/* ========================================
   DESTINOS
   ======================================== */

const destinos = [

  {
    icono: "👑",

    titulo:
      "FINAL GIRL",

    texto:
      "Contra todo pronóstico, sobrevivís. " +
      "Viste cosas que nadie debería haber visto " +
      "y ahora vas a tener que explicar qué pasó. " +
      "El problema es que probablemente nadie te crea."
  },


  {
    icono: "🩸",

    titulo:
      "MORÍS PRIMERO",

    texto:
      "Alguien escuchó un ruido extraño " +
      "y decidió ir a investigar. " +
      "Felicitaciones: ese alguien eras vos."
  },


  {
    icono: "🔪",

    titulo:
      "VOS ERAS EL ASESINO",

    texto:
      "Plot twist. " +
      "Mientras todos intentaban descubrir " +
      "qué estaba pasando, vos ya sabías la respuesta."
  },


  {
    icono: "👻",

    titulo:
      "SOBREVIVÍS, PERO NADIE TE CREE",

    texto:
      "Viste todo. Escapaste. " +
      "Tenés la historia completa. " +
      "Lástima que suena absolutamente imposible."
  },


  {
    icono: "🧟",

    titulo:
      "TE CONVERTÍS EN ZOMBIE",

    texto:
      "Técnicamente no sobrevivís. " +
      "Pero tampoco podemos afirmar " +
      "que hayas muerto del todo. " +
      "Lo consideraremos un empate."
  },


  {
    icono: "🕵️",

    titulo:
      "SOS EL SOSPECHOSO PRINCIPAL",

    texto:
      "No tenemos pruebas. " +
      "Pero estabas demasiado tranquilo " +
      "cuando desapareció el primero. " +
      "Eso no ayuda."
  },


  {
    icono: "🏃",

    titulo:
      "SOBREVIVÍS POR COBARDE",

    texto:
      "Mientras todos investigaban " +
      "el ruido que venía del sótano, " +
      "vos ya estabas a seis cuadras. " +
      "La cobardía también salva vidas."
  },


  {
    icono: "😈",

    titulo:
      "ESTABAS POSEÍDO",

    texto:
      "Esas cosas extrañas que hiciste " +
      "durante la noche finalmente tienen explicación. " +
      "Bueno... algunas."
  },


  {
    icono: "🧛",

    titulo:
      "TERMINÁS SIENDO VAMPIRO",

    texto:
      "Para todos los demás la noche termina. " +
      "Para vos parece que recién empieza. " +
      "Esperemos que nadie haya comido ajo."
  },


  {
    icono: "📞",

    titulo:
      "RECIBÍS LA LLAMADA",

    texto:
      "Suena el teléfono. " +
      "Atendés. Una voz pregunta cuál es " +
      "tu película de terror favorita. " +
      "Tal vez era mejor dejarlo sonar."
  },


  {
    icono: "🪦",

    titulo:
      "VOLVÉS DE LA MUERTE",

    texto:
      "Todos estaban bastante seguros " +
      "de que habías muerto. " +
      "Evidentemente no vieron " +
      "suficientes películas de terror."
  },


  {
    icono: "✨",

    titulo:
      "SOS QUIEN ROMPE LA MALDICIÓN",

    texto:
      "Nadie sabe muy bien cómo lo hiciste. " +
      "Quizás fue valentía. Quizás suerte. " +
      "Quizás simplemente tocaste " +
      "el botón correcto."
  },


  {
    icono: "🐈‍⬛",

    titulo:
      "TENÉS NUEVE VIDAS",

    texto:
      "Todo indicaba que no llegabas " +
      "al final de la noche. " +
      "Pero de alguna manera siempre volvés. " +
      "Sos prácticamente imposible de eliminar."
  },


  {
    icono: "🧙",

    titulo:
      "ERAS LA BRUJA TODO ESTE TIEMPO",

    texto:
      "Todos buscaban una explicación paranormal. " +
      "Resulta que la explicación eras vos. " +
      "Esperemos que uses tus poderes responsablemente."
  }

];


/* ========================================
   CAMBIAR PANTALLA
   ======================================== */

function mostrarPantalla(
  pantalla
) {

  document
    .querySelectorAll(
      ".screen"
    )
    .forEach(
      section => {

        section
          .classList
          .remove(
            "active"
          );

      }
    );


  pantalla
    .classList
    .add(
      "active"
    );


  document
    .body
    .classList
    .add(
      "flash"
    );


  setTimeout(
    () => {

      document
        .body
        .classList
        .remove(
          "flash"
        );

    },
    450
  );


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* ========================================
   ENTRAR
   ======================================== */

entrar.addEventListener(
  "click",
  () => {

    mostrarPantalla(
      invitacion
    );

  }
);


/* ========================================
   HUIR
   ======================================== */

const mensajesEscape = [

  "¿Huir? Qué idea tan adorable... 👻",

  "La salida acaba de desaparecer. Qué raro.",

  "Un fantasma desaprueba tu decisión.",

  "Podés seguir intentando. Nos entretiene.",

  "Bueno, basta. Vas a venir igual. 🎃",

  "Tu nombre ya está en la lista. No hay vuelta atrás."

];

let intentosHuir = 0;


huir.addEventListener(
  "click",
  () => {

    const mensaje =
      mensajesEscape[
        intentosHuir %
        mensajesEscape.length
      ];


    mensajeHuir.textContent =
      mensaje;


    intentosHuir++;


    /* SACUDIR BOTÓN */

    huir
      .classList
      .remove(
        "shake"
      );

    void huir.offsetWidth;

    huir
      .classList
      .add(
        "shake"
      );


    /* FANTASMA */

    ghostEscape
      .classList
      .remove(
        "show"
      );

    void ghostEscape.offsetWidth;

    ghostEscape
      .classList
      .add(
        "show"
      );


    /* CAMBIAR TEXTO */

    if (
      intentosHuir === 3
    ) {

      huir.textContent =
        "👻 ¿SEGUÍS INTENTANDO?";

    }


    if (
      intentosHuir === 5
    ) {

      huir.textContent =
        "🎃 VAS A VENIR IGUAL";

    }

  }
);


/* ========================================
   DESCUBRIR DESTINO
   ======================================== */

let ultimoDestino = -1;


function descubrirDestino() {

  let numero;


  /*
    Evita que salga exactamente
    el mismo resultado dos veces
    seguidas.
  */

  do {

    numero =
      Math.floor(
        Math.random() *
        destinos.length
      );

  }

  while (
    numero ===
    ultimoDestino &&
    destinos.length > 1
  );


  ultimoDestino =
    numero;


  const resultado =
    destinos[numero];


  destinoIcono.textContent =
    resultado.icono;

  destinoTitulo.textContent =
    resultado.titulo;

  destinoTexto.textContent =
    resultado.texto;


  mostrarPantalla(
    destino
  );

}


/* ========================================
   BOTONES DESTINO
   ======================================== */

verDestino.addEventListener(
  "click",
  descubrirDestino
);


otraVez.addEventListener(
  "click",
  descubrirDestino
);

