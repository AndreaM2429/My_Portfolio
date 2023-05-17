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
  name: ['Tonic', 'Multi-post Stories', 'Tonic', 'Multi-post Stories'],
  namedesk: ['Facebook 360', 'Uber Navigation', 'Tonic', 'Multi-post Stories'],
  list: ['Canopy', 'Back End Dev', '2015'],
  imag: ['Img/SnapshootPortfolio.png', 'Img/SnapshootPortfolio2.png', 'Img/SnapshootPortfolio3.png', 'Img/SnapshootPortfolio4.png', 'Img/icon-close.png', 'Img/iconExport.png', 'Img/github.svg', 'Img/Counter.png'],
  imagdesk: ['Img/SnapshootPortfolio.png', 'Img/SnapshootPortfolio2.png', 'Img/SnapshootPortfoliodesk.png', 'Img/SnapshootPortfolio4.png'],
  desciption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.',
  tech: ['HTML', 'CSS', 'JavaScript'],
  live: 'https://andream2429.github.io/Portfolio_setup_and_mobile_first/',
  source: 'https://github.com/AndreaM2429/Portfolio_setup_and_mobile_first/',
};

function loadwindos(wprk, index) {
  const index1 = 7;
  const index4 = 4;
  const index5 = 5;
  const index6 = 6;

  const unlis = document.createElement('ul');
  const divtul = document.createElement('div');
  divtul.className = 'padingul';
  const lilis1 = document.createElement('li');
  lilis1.className = 'li1';
  lilis1.appendChild(document.createTextNode(projects.list[0]));
  unlis.appendChild(lilis1);
  const liscont = document.createElement('li');
  const counter = document.createElement('img');
  counter.src = projects.imag[index1];
  liscont.appendChild(counter);
  unlis.appendChild(liscont);
  const lilissec = document.createElement('li');
  lilissec.className = 'lisec';
  lilissec.appendChild(document.createTextNode(projects.list[1]));
  unlis.appendChild(lilissec);
  const liscont2 = document.createElement('li');
  const counter2 = document.createElement('img');
  counter2.src = projects.imag[index1];
  liscont2.appendChild(counter2);
  unlis.appendChild(liscont2);
  const lilissec2 = document.createElement('li');
  lilissec2.className = 'lisec';
  lilissec2.appendChild(document.createTextNode(projects.list[2]));
  unlis.appendChild(lilissec2);
  divtul.appendChild(unlis);

  const divtitins = document.createElement('div');
  divtitins.className = 'pop padingul';
  const tit = document.createElement('h4');
  tit.className = 'c1dp mobim';
  tit.textContent = projects.name[index];
  const titdesk = document.createElement('h4');
  titdesk.className = 'c1dp deskim';
  titdesk.textContent = projects.namedesk[index];
  const closebut = document.createElement('a');
  closebut.className = 'closepop botonclose efecbot';
  const imgclose = document.createElement('img');
  imgclose.src = projects.imag[index4];
  closebut.append(imgclose);
  divtitins.appendChild(tit);
  divtitins.appendChild(titdesk);
  divtitins.appendChild(closebut);

  const divdesk = document.createElement('div');
  divdesk.classList = 'flexdesk';
  const descont = document.createElement('div');
  descont.className = 'pdes';
  const desc = document.createElement('p');
  desc.textContent = projects.desciption;
  desc.className = 'ca1p padingul';
  const desc2 = document.createElement('p');
  desc2.textContent = projects.desciption;
  desc2.className = 'ca1p padingul deskim';

  descont.appendChild(desc);
  descont.appendChild(desc2);
  divdesk.appendChild(descont);

  const divtagbut = document.createElement('div');
  divtagbut.className = 'columdesk';
  const divtags = document.createElement('div');
  divtags.className = 'tags';
  const ultags = document.createElement('ul');
  ultags.className = 'padingul';
  for (let i = 0; i < 2; i += 1) {
    const litags = document.createElement('li');
    litags.className = 'norm';
    litags.appendChild(document.createTextNode(projects.tech[i]));
    ultags.appendChild(litags);
  }
  const litags = document.createElement('li');
  litags.className = 'special';
  litags.appendChild(document.createTextNode(projects.tech[2]));
  ultags.appendChild(litags);
  divtags.appendChild(ultags);

  divtagbut.appendChild(divtags);

  const divtit = document.createElement('div');
  divtit.className = 'c1desc';
  divtit.className = 'c1desc';
  divtit.appendChild(divtitins);
  divtit.appendChild(divtul);

  const divbut = document.createElement('div');
  divbut.className = 'divbot';
  const butlive = document.createElement('a');
  butlive.className = 'boton efecbot';
  butlive.append(document.createTextNode('See live'));
  const imglive = document.createElement('img');
  imglive.src = projects.imag[index5];
  butlive.href = projects.live;
  butlive.appendChild(imglive);
  const butsour = document.createElement('a');
  butsour.className = 'boton efecbot';
  butsour.append(document.createTextNode('See source'));
  butsour.href = projects.source;
  const imgsour = document.createElement('img');
  imgsour.src = projects.imag[index6];
  butsour.appendChild(imgsour);
  divbut.appendChild(butlive);
  divbut.appendChild(butsour);

  divtagbut.appendChild(divbut);
  divdesk.appendChild(divtagbut);

  const div = document.createElement('div');
  div.className = 'popup';
  const img = document.createElement('img');
  img.src = projects.imag[index];
  img.className = 'mobim';
  const imgvdes = document.createElement('img');
  imgvdes.src = projects.imagdesk[index];
  imgvdes.className = 'deskim d2';
  div.appendChild(divtit);
  div.appendChild(img);
  div.appendChild(imgvdes);
  div.appendChild(divdesk);

  const barra = document.createElement('img');
  barra.src = 'Img/Shape.png';
  barra.id = 'barrita2';

  const contenedor = document.createElement('div');
  contenedor.className = 'contenpop';
  contenedor.appendChild(div);
  contenedor.appendChild(barra);
  document.body.appendChild(contenedor);
}

const works = document.querySelectorAll('.cg');
for (let i = 0; i < works.length; i += 1) {
  loadwindos(works[i], i);
}

function showwindow(window, index) {
  window.addEventListener('click', () => {
    const popwind = document.getElementsByClassName('contenpop');
    popwind[index].classList.add('showpop');
  });
}

const showwind = document.getElementsByClassName('showpop');
for (let i = 0; i < showwind.length; i += 1) {
  showwindow(showwind[i], i);
}

function closewindow(hide, index) {
  hide.addEventListener('click', () => {
    const popwind = document.getElementsByClassName('contenpop');
    popwind[index].classList.remove('showpop');
  });
}
const hidepop = document.getElementsByClassName('closepop');
for (let i = 0; i < hidepop.length; i += 1) {
  closewindow(hidepop[i], i);
}
