'use strict'

const p = document.querySelector('.paragraph');

console.log(p);

p.style.color = '#fff';

p.innerHTML = 'Ja sam sad neki drugi tekst';

p.addEventListener('click', e => {
  alert('Nesto se desilo');
});

const f = function(a) {
  alert('Nesto se desilo');
};

console.log('Nesto novo')

console.log('Evo zavrsio sam')