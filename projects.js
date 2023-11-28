const projectInfo = [
  {
    name: 'Conference Page',
    list: ['Microverse', 'Front End Dev', '2023'],
    image: 'Img/Conference_Home.png',
    popImg: 'Img/Conference_Home.png',
    resume: 'This resume first',
    desciption: 'Is a project made with HTML, CSS and JS which purpose is to demonstrate my abilities mastering those development tools in a real case. This time the case is a conference page about comics and Superheros, the page count with two main sections that are Home and About page.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://andream2429.github.io/Capstone_project_Conference_page/',
    source: 'https://github.com/AndreaM2429/Capstone_project_Conference_page',
  },
  {
    name: 'To Do List',
    list: ['Microverse', 'Front End Dev', '2023'],
    image: 'Img/Conference_Home.png',
    popImg: 'Img/Conference_Home.png',
    resume: 'This resume second',
    desciption: 'Is a project made with HTML, CSS and JS which purpose is to demonstrate my abilities mastering those development tools in a real case. This time the case is a conference page about comics and Superheros, the page count with two main sections that are Home and About page.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Ruby on Rails'],
    live: 'https://andream2429.github.io/Capstone_project_Conference_page/',
    source: 'https://github.com/AndreaM2429/Capstone_project_Conference_page',
  },
];

function showwindow(window, index, button) {
  button.addEventListener('click', () => {
    window.classList.add('show-popup');
  });
}

const container = document.querySelector('.cardContainer');

for (let i = 0; i <= projectInfo.length; i += 1) {
  const projectCard = document.createElement('div');
  projectCard.className = 'card flex-direction d-flex-row';
  projectCard.innerHTML = `
    <img src="${projectInfo[i].image}" alt="${projectInfo[i].name} preview" class="projectImg">
    <div class="info-container">
      <h2 class="card-title">${projectInfo[i].name}</h2>
      <ul class="d-flex gap p0">
        ${projectInfo[i].list.map((item) => `<li class="list">${item}</li>`).join('&#10026')}
      </ul>
      <span class="project-resume">${projectInfo[i].resume}</span>
      <div>
      <ul class="d-flex gap p0">
        ${projectInfo[i].tech.map((item) => `<li class="tech-list">${item}</li>`).join('')}
      </ul>
      <button id="show-popup" class="see-project-btn">See project</button>
      </div>
    </div>
  `;
  const popup = document.createElement('div');
  popup.className = 'popup-window';
  popup.innerHTML = `
    <div>
      hola ${i}
    </div>
  `;
  document.body.appendChild(popup);
  container.appendChild(projectCard);

  const showpop = projectCard.querySelector('.see-project-btn');
  showwindow(popup, i, showpop);
}
