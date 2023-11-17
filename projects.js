const projectInfo = [
  {
    name: 'Conference Page',
    list: ['Canopy', 'Front End Dev', '2023'],
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
    list: ['Canopy', 'Front End Dev', '2023'],
    image: 'Img/Conference_Home.png',
    popImg: 'Img/Conference_Home.png',
    resume: 'This resume second',
    desciption: 'Is a project made with HTML, CSS and JS which purpose is to demonstrate my abilities mastering those development tools in a real case. This time the case is a conference page about comics and Superheros, the page count with two main sections that are Home and About page.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://andream2429.github.io/Capstone_project_Conference_page/',
    source: 'https://github.com/AndreaM2429/Capstone_project_Conference_page',
  },
];

const container = document.querySelector('.cardContainer');

for (let i = 0; i <= projectInfo.length; i += 1) {
  const projectCard = document.createElement('div');
  projectCard.className = 'card flex-direction';
  projectCard.innerHTML = `
    <img src="${projectInfo[i].image}" alt="${projectInfo[i].name} preview" class="projectImg">
    <div>
      <h2>${projectInfo[i].name}</h2>
      <ul>
        ${projectInfo[i].list.map((item) => `<li>${item}</li>`).join('')}
      </ul>
      <span>${projectInfo[i].resume}</span>
      <div>
      <ul>
        ${projectInfo[i].tech.map((item) => `<li>${item}</li>`).join('')}
      </ul>
      <button>See project</button>
      </div>
    </div>
  `;
  container.appendChild(projectCard);
}
