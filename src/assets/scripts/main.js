// Scripts del sitio.

// Bootstrap JS: menú colapsable, modal y accordion. La variable bootstrap abre la modal del formulario
import * as bootstrap from "bootstrap";

import Typed from "typed.js";

// Rellena la modal con la biografía de la tarjeta que la abre: así basta una modal para todas las ponentes
const speakerModal = document.getElementById("speaker-modal");

if (speakerModal) {
  speakerModal.addEventListener("show.bs.modal", (event) => {
    const card = event.relatedTarget.closest(".speaker-card");
    speakerModal.querySelector(".modal-title").textContent = card.querySelector(
      ".speaker-card__name",
    ).textContent;
    speakerModal
      .querySelector(".modal-body")
      .replaceChildren(
        card.querySelector(".speaker-card__bio").content.cloneNode(true),
      );
  });
}

// Efecto máquina de escribir. Si el usuario ha pedido reducir
// el movimiento, no se anima y se queda el texto fijo del HTML
const typedElement = document.getElementById("typed");
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (typedElement && !reduceMotion) {
  new Typed(typedElement, {
    strings: [
      "las reinas del misterio",
      "las grandes escritoras",
      "las que te faltan por leer",
    ],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1500,
    loop: false,
  });
}

// Formulario de inscripción: el sitio es ficticio y no envía datos.
// El navegador valida los campos (required, type="email") antes de lanzar submit,
// así que este evento solo llega con el formulario correcto: se muestra el aviso y se vacía.
const signupForm = document.getElementById("signup-form");

if (signupForm) {
  const signupModal = new bootstrap.Modal("#signup-modal");

  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    signupModal.show();
    signupForm.reset();
  });
}
