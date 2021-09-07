window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
          modal = require('./modules/modal'),
          timer = require('./modules/timer'),
          cards = require('./modules/cards'),
          calc = require('./modules/calc'),
          forms = require('./modules/forms'),
          carusel = require('./modules/carusel');
    tabs();
    modal();
    timer();
    cards();
    calc();
    forms();
    carusel();
}); 