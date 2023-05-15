const menu = document.getElementById('hambur');
const navWrapper = document.getElementById('navmob');
menu.addEventListener('click', () => {
  navWrapper.classList.add('show');
  menu.style.display = 'none';
});

const close = document.getElementById('close');
close.addEventListener('click', () => {
  navWrapper.classList.remove('show');
  menu.style.display = 'inline-block';
});

function moveon(link) {
  link.addEventListener('click', () => {
    navWrapper.classList.remove('show');
    menu.style.display = 'inline-block';
  });
}

const move = document.getElementsByClassName('move');
for (let i = 0; i < move.length; i += 1) {
  moveon(move[i]);
}
