// Project's information
const projectInfo = [
  {
    name: 'API Dishes',
    list: ['Self-employed', 'Front End Dev', '2023'],
    image: 'Img/projects/api_dishes.png',
    popImg: 'Img/projects/api_dishes_2.png',
    resume: 'A web application based on an external API. The project is a web app that revolves around a selected API, providing data about vegetarian dishes.',
    desciption: 'In this app, you can see different vegetarian recipes taken from an external API. </br> It allows one to see a brief description of the recipe, and an image and also allows the user to leave a comment or like in their favorite ones.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'RESTFUL API'],
    live: 'https://andream2429.github.io/JavaScriptCapstone/',
    source: 'https://github.com/AndreaM2429/JavaScriptCapstone',
  },
  {
    name: "Space Traveler's Hub",
    list: ['Self-employed', 'Front End Dev', '2023'],
    image: 'Img/projects/space_travelers.png',
    popImg: 'Img/projects/space_travelers_2.png',
    resume: 'Web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    desciption: "The app doesn't require a login, the data is erased when the app closes or the page is reloaded. </br> There is a list of different missions and rockets that you can join or reserve. </br> Was a group project where I contributed to the Rockets sections.",
    tech: ['React JS', 'Redux', 'CSS', 'RESTFUL API'],
    live: 'https://github.com/AndreaM2429/Space_Travelers_Hub',
    source: 'https://github.com/AndreaM2429/Space_Travelers_Hub',
  },
  {
    name: 'Covid19 Global Rates',
    list: ['Self-employed', 'Front End Dev', '2023'],
    image: 'Img/projects/covid19.png',
    popImg: 'Img/projects/covid19-2.png',
    resume: 'A web application that allows the user to see the Covid-19 statistics from different countries around the world.',
    desciption: 'The app count with: </br> ↬ The home page: where you can see a list of the continents with their respective image, name, and total cases. Also, there is a search input where you can type the country’s name and go directly to its detailed information. </br> ↬ The countries page: when you click on any continent, the countries pages display a list of all the countries of that continent. Each country counts with its name, flag, and total cases. </br> ↬ The details page: when you click on any country the details page displays the population, total cases, deaths, and recovered. </br> ↬ A search navbar: allows filtering of the countries that match the name provided.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Ruby on Rails'],
    live: 'https://covid19-global-rates.onrender.com/',
    source: 'https://github.com/AndreaM2429/react-capstone',
  },
  {
    name: 'Catalog app',
    list: ['Self-employed', 'Back End Dev', '2023'],
    image: 'Img/projects/catalog_app.png',
    popImg: 'Img/projects/catalog_app.png',
    resume: 'A console app that will help you keep a record of different types of things you own: books, music albums, and games.',
    desciption: 'This console app was developed by 3 member team and it allows one to manage a catalog of music albums, books, games, and their authors and genres. </br> The data is stored in JSON files but it also counts with a database tables structure that could be implemented.',
    tech: ['HTML', 'CSS', 'Ruby', 'Ruby on Rails'],
    live: 'https://github.com/AndreaM2429/Catalog_App',
    source: 'https://github.com/AndreaM2429/Catalog_App',
  },
  {
    name: 'Recipe App',
    list: ['Self-employed', 'Back End Dev', '2023'],
    image: 'Img/projects/recipe_app.png',
    popImg: 'Img/projects/recipe_app_2.png',
    resume: 'A Ruby on Rails-based application designed to simplify your recipe management process, this application allows users to save and organize ingredients, manage their inventory, create new recipes, and generate shopping lists based on available ingredients and missing items.',
    desciption: 'This application allows users to save and organize ingredients, manage their inventory, create new recipes, and generate shopping lists based on available ingredients and missing items. Additionally, the app supports recipe sharing, enabling users to make their culinary creations public for others to discover.',
    tech: ['Bootstap', 'Ruby', 'Ruby on Rails'],
    live: 'https://github.com/PabloBona/recipe-app',
    source: 'https://github.com/PabloBona/recipe-app',
  },
  {
    name: 'GeldSpar',
    list: ['Self-employed', 'Back End Dev', '2023'],
    image: 'Img/projects/geldspar.png',
    popImg: 'Img/projects/geldspar_2.png',
    resume: 'GeldSpar is a Ruby on Rails mobile web application where you can manage your bills and group them by categories.',
    desciption: 'You can manage your budget, you have a list of transactions associated with a category, it is a way you can see how much money have you spent and on what. To use it you need to log in so the data maintain private. </br> In this project the original author of the design is Gregoire Vella which was taken from Behance.',
    tech: ['PostgreSQL', 'Ruby', 'Ruby on Rails'],
    live: 'https://github.com/AndreaM2429/budget_app',
    source: 'https://github.com/AndreaM2429/budget_app',
  },
  {
    name: 'Gourmet Experiences',
    list: ['Self-employed', 'Full Stack Dev', '2023'],
    image: 'Img/projects/gourmet_experiences.png',
    popImg: 'Img/projects/gourmet_experiences_2.png',
    resume: 'This project consists of a web application built with ReactJS and Redux Toolkit that allows users to book gourmet experiences that they can give to others, in a quick and easy way.',
    desciption: 'This application connects to the GourmetExperience API created on Ruby on Rails and obtains all the information of registered users, the list of available gastronomic experiences, the list of reservations made by a selected user, and allows new users to be registered, authenticates existing users, create new reservations and delete them. Likewise, the app is completely responsive and has been built following the best practices of software development. It has robust validations, efficient data management, and a set of unit and integration tests that allow for validating the operation of the entire application.',
    tech: ['PostgreSQL', 'Ruby', 'Ruby on Rails', 'React/Redux'],
    live: 'https://gourmet-experiences-app.onrender.com',
    source: 'https://github.com/HFG43/final_capstone_back_end',
  },
  {
    name: 'App The Truck Savers',
    list: ['The Truck Savers', 'Full Stack Dev', '2022'],
    image: 'Img/projects/truck_savers.jpeg',
    popImg: 'Img/projects/truck_savers.jpeg',
    resume: 'A waiting list app that requires registration, it allows the user to notify the workshop he is about to arrive at his appointment.',
    desciption: 'The app counts with a registration form that gets the data for the user and his trucks. The main purpose is to notify the workshop that the client is about to arrive and reduce the waiting time at the workshop, additionally, the user can manage his trucks by updating their information and deleting or adding more',
    tech: ['php', 'HTML', 'JavaScript'],
    live: 'https://github.com/Dachrono/App-truck',
    source: 'https://github.com/Dachrono/App-truck',
  },
];

function showwindow(window, button) {
  button.addEventListener('click', () => {
    window.classList.add('show-popup');
    document.body.classList.add('block-scroll');
  });
}

function closewindow(window, button) {
  button.addEventListener('click', () => {
    window.classList.remove('show-popup');
    document.body.classList.remove('block-scroll');
  });
}

// Create pop up windows for each project
const container = document.querySelector('.cardContainer');

for (let i = 0; i < projectInfo.length; i += 1) {
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
    <div class="popup">
      <div class="w-100">
        <div class="d-flex pop-header p-10">
          <h2 class="card-title pop-title">${projectInfo[i].name}</h2>
          <span class="close-icon">&#10005</span>
        </div>
        <ul class="d-flex gap p-10 m0">
          ${projectInfo[i].list.map((item) => `<li class="list">${item}</li>`).join('&#9827')}
        </ul>
      </div>
      <img src="${projectInfo[i].popImg}" alt="${projectInfo[i].name} preview" class="popup-img">
      <div class="p-10 popup-info">
        <div class="description">
          ${projectInfo[i].desciption}
        </div>
        <div class="w-40">
          <ul class="d-flex gap p0">
            ${projectInfo[i].tech.map((item) => `<li class="tech-list">${item}</li>`).join('')}
          </ul>
          <div class="d-flex gap button-container">
            <a href="${projectInfo[i].live}" target="_blank" class="see-project-btn button-aspect gap">
              See Live
              <span class="material-symbols-outlined">
                open_in_new
              </span>
            </a>
            <a href="${projectInfo[i].source}" target="_blank" class="see-project-btn button-aspect gap">
              See Source
              <img src="Img/github.svg" >
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(popup);
  container.appendChild(projectCard);

  const showpop = projectCard.querySelector('.see-project-btn');
  showwindow(popup, showpop);

  const closepop = popup.querySelector('.close-icon');
  closewindow(popup, closepop);
}

/// validation form
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

// Show/Hide mobile menu
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
