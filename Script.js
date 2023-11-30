const menu = document.getElementById('hambur');
const navWrapper = document.getElementById('navmob');
menu.addEventListener('click', () => {
  navWrapper.classList.add('show');
  menu.style.display = 'none';
  document.body.classList.add('block-scroll');
});

const close = document.getElementById('close');
close.addEventListener('click', () => {
  navWrapper.classList.remove('show');
  menu.style.display = 'inline-block';
  document.body.classList.remove('block-scroll');
});

function moveon(link) {
  link.addEventListener('click', () => {
    navWrapper.classList.remove('show');
    menu.style.display = 'inline-block';
    document.body.classList.remove('block-scroll');
  });
}

const move = document.getElementsByClassName('move');
for (let i = 0; i < move.length; i += 1) {
  moveon(move[i]);
}

const projects = {
  name: ['Conference Page', 'To Do List'],
  namedesk: ['Conference Page', 'To Do List'],
  list: ['Canopy', 'Front End Dev', '2023'],
  imag: ['Img/Conference_Home.png', 'Img/icon-close.png', 'Img/iconExport.png', 'Img/github.svg', 'Img/Counter.png'],
  imagdesk: ['Img/Conference_Home.png', 'Img/SnapshootPortfolio2.png', 'Img/SnapshootPortfoliodesk.png', 'Img/SnapshootPortfolio4.png'],
  desciption: 'Is a project made with HTML, CSS and JS which purpose is to demonstrate my abilities mastering those development tools in a real case. This time the case is a conference page about comics and Superheros, the page count with two main sections that are Home and About page.',
  tech: ['HTML', 'CSS', 'JavaScript'],
  live: 'https://andream2429.github.io/Capstone_project_Conference_page/',
  source: 'https://github.com/AndreaM2429/Capstone_project_Conference_page',
};

function loadwindos(index) {
  // FUNCIONES PARA CREACION
  function imagen(index) {
    const imgcard = document.createElement('img');
    imgcard.src = projects.imag[index];
    imgcard.alt = 'Conference project';
    imgcard.className = 'mobim d2';
    return imgcard;
  }
  function imagendesk(index) {
    const imgvdes = document.createElement('img');
    imgvdes.src = projects.imagdesk[index];
    imgvdes.alt = 'Conference project';
    imgvdes.className = 'deskim d2';
    return imgvdes;
  }
  function titulo(index) {
    const tit = document.createElement('h4');
    tit.className = 'c1dp mobim';
    tit.textContent = projects.name[index];
    return tit;
  }
  function titulodesk(index) {
    const titdesk = document.createElement('h4');
    titdesk.className = 'c1dp deskim';
    titdesk.textContent = projects.namedesk[index];
    return titdesk;
  }
  function listacards(index1 = 4) {
    const unlis = document.createElement('ul');
    const lilis1 = document.createElement('li');
    lilis1.className = 'li1';
    lilis1.appendChild(document.createTextNode(projects.list[0]));
    unlis.appendChild(lilis1);
    const liscont = document.createElement('li');
    const counter = document.createElement('img');
    counter.src = projects.imag[index1];
    counter.alt = 'point';
    liscont.appendChild(counter);
    unlis.appendChild(liscont);
    const lilissec = document.createElement('li');
    lilissec.className = 'lisec';
    lilissec.appendChild(document.createTextNode(projects.list[1]));
    unlis.appendChild(lilissec);
    const liscont2 = document.createElement('li');
    const counter2 = document.createElement('img');
    counter2.src = projects.imag[index1];
    counter2.alt = 'point';
    liscont2.appendChild(counter2);
    unlis.appendChild(liscont2);
    const lilissec2 = document.createElement('li');
    lilissec2.className = 'lisec';
    lilissec2.appendChild(document.createTextNode(projects.list[2]));
    unlis.appendChild(lilissec2);
    return unlis;
  }
  function listtech() {
    const ultags = document.createElement('ul');
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
    const litagsd1 = document.createElement('li');
    litagsd1.className = 'norm deskim';
    litagsd1.appendChild(document.createTextNode(projects.tech[3]));
    ultags.appendChild(litagsd1);
    return ultags;
  }

  // EVENTO PARA CARDSJOB
  window.addEventListener('load', () => {
    const divcg = document.getElementsByClassName('cg');

    const div1 = document.getElementsByClassName('deskdisp');
    const divc1desc = document.getElementsByClassName('c1desc');
    divc1desc[index].appendChild(titulo(index));
    divc1desc[index].appendChild(titulodesk(index));
    divc1desc[index].appendChild(listacards());
    div1[index].appendChild(divc1desc[index]);

    const pcard = document.getElementsByClassName('ca1p');
    div1[index].appendChild(pcard[index]);

    const divtagscard = document.getElementsByClassName('tags');
    divtagscard[index].appendChild(listtech());
    div1[index].appendChild(divtagscard[index]);

    const botoncard = document.getElementsByClassName('showpop');
    div1[index].appendChild(botoncard[index]);

    divcg[index].appendChild(imagen(index));
    divcg[index].appendChild(imagendesk(index));
    divcg[index].appendChild(div1[index]);
  });

  // POPUP WINDOW

  const index4 = 1;
  const index5 = 2;
  const index6 = 3;

  const divtul = document.createElement('div');
  divtul.className = 'padingul';

  divtul.appendChild(listacards());

  const divtitins = document.createElement('div');
  divtitins.className = 'pop padingul';

  const closebut = document.createElement('a');
  closebut.className = 'closepop botonclose efecbot';
  const imgclose = document.createElement('img');
  imgclose.src = projects.imag[index4];
  imgclose.alt = "close";
  closebut.append(imgclose);
  divtitins.appendChild(titulo(index));
  divtitins.appendChild(titulodesk(index));
  divtitins.appendChild(closebut);

  const divdesk = document.createElement('div');
  divdesk.classList = 'flexdesk';
  const descont = document.createElement('div');
  descont.className = 'pdes';
  const desc = document.createElement('p');
  desc.textContent = projects.desciption;
  desc.className = 'ca1p padingul';

  descont.appendChild(desc);
  divdesk.appendChild(descont);

  const divtagbut = document.createElement('div');
  divtagbut.className = 'columdesk';
  const divtags = document.createElement('div');
  divtags.className = 'tags2';

  divtags.appendChild(listtech());

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
  imglive.alt = "Live";
  butlive.href = projects.live;
  butlive.target = '_blank';
  butlive.appendChild(imglive);
  const butsour = document.createElement('a');
  butsour.className = 'boton efecbot';
  butsour.append(document.createTextNode('See source'));
  butsour.href = projects.source;
  butsour.target = '_blank';
  const imgsour = document.createElement('img');
  imgsour.src = projects.imag[index6];
  imgsour.alt = 'GitHub';
  butsour.appendChild(imgsour);
  divbut.appendChild(butlive);
  divbut.appendChild(butsour);

  divtagbut.appendChild(divbut);
  divdesk.appendChild(divtagbut);

  const div = document.createElement('div');
  div.className = 'popup';

  div.appendChild(divtit);
  div.appendChild(imagen(index));
  div.appendChild(imagendesk(index));
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
  loadwindos(i);
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

/// validation
let timeout;
const formval = document.getElementById('formcont');
formval[1].addEventListener('keydown', () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    clearTimeout(timeout);
  }, 1000);
});
formval.addEventListener('submit', (event) => {
  function mostrar(value) {
    const message = document.getElementById('error');
    const emailadd = value;
    const check = {
      lower: /^[a-z0-9._-]+@[a-z0-9.-]+\.([a-z]{2,4})+$/,
    };
    if (check.lower.test(emailadd) === false) {
      event.preventDefault();
      message.style.display = 'flex';
    } else {
      message.style.display = 'none';
    }
  }
  mostrar(formval[1].value);
});