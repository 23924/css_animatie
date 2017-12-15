// javascript voor de logica, css voor de animatie
const knop = document.getElementById('knop');
let vlak = document.querySelector('.vlakje');


const schuif = () => {
  vlak.classList.toggle('vlakje--schuif-uit');
}

knop.addEventListener('click', schuif);
