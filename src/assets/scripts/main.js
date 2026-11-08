// Scripts del sitio.

// Bootstrap JS: necesario para los componentes interactivos (menú colapsable, modal, accordion).
import * as bootstrap from 'bootstrap';

// Rellena la modal con la biografía de la tarjeta que la abre: así basta una modal para todos los ponentes
const speakerModal = document.getElementById('speaker-modal');

if (speakerModal) {
  speakerModal.addEventListener('show.bs.modal', (event) => {
    const card = event.relatedTarget.closest('.speaker-card');
    speakerModal.querySelector('.modal-title').textContent = card.querySelector('.speaker-card__name').textContent;
    speakerModal.querySelector('.modal-body').replaceChildren(card.querySelector('.speaker-card__bio').content.cloneNode(true));
  });
}