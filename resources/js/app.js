require('./bootstrap');

import Alpine from 'alpinejs';

import MicroModal from 'micromodal';  // es6 module
MicroModal.init({
  disableScroll: true
});

window.Alpine = Alpine;

Alpine.start();
