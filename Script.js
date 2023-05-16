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

const projects = {
  name: ['Tonic','Multi-post','Tonic','Multi-post'],
  list: ['Canopy', 'Back End Dev', '2015'],
  imag: ['Img/SnapshootPortfolio.png', '', '', '', '', ''],
  desciption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  tech: ['HTML', 'CSS', 'JavaScript'],
  live: 'https://andream2429.github.io/Portfolio_setup_and_mobile_first/',
  source: 'https://github.com/AndreaM2429/Portfolio_setup_and_mobile_first/'
};