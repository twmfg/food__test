const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('ul');

hamburger.onclick = function () {
      ul.classList.toggle('active');
};