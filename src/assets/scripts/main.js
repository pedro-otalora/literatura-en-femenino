// Scripts del sitio.

// Bootstrap JS: menú colapsable, modal y accordion. Sintaxis del módulo 4.1
import * as bootstrap from 'bootstrap';

import Typed from 'typed.js';

// Rellena la modal con la biografía de la tarjeta que la abre: así basta una modal para todos los ponentes
const speakerModal = document.getElementById('speaker-modal');

if (speakerModal) {
  speakerModal.addEventListener('show.bs.modal', (event) => {
    const card = event.relatedTarget.closest('.speaker-card');
    speakerModal.querySelector('.modal-title').textContent = card.querySelector('.speaker-card__name').textContent;
    speakerModal.querySelector('.modal-body').replaceChildren(card.querySelector('.speaker-card__bio').content.cloneNode(true));
  });
}

// Efecto máquina de escribir. Si el usuario ha pedido reducir
// el movimiento, no se anima y se queda el texto fijo del HTML
const typedElement = document.getElementById('typed');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (typedElement && !reduceMotion) {
  new Typed(typedElement, {
        strings: ['las reinas del misterio', 'las que firmaron como hombres', 'las escritoras que te faltan por leer'],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1500,
    loop: false,
  });
}