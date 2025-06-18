// Variables y lógica para el manejo de la navegación en la página
const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('header nav');

// Manejador del icono del menú responsive
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

// Manejador del cambio de sección y las animaciones correspondientes
const activeSection = () => {
  const header = document.querySelector('header');
  const barsBox = document.querySelector('.bars-box');

  navLinks.forEach((link) => {
    link.classList.remove('active');
  });

  barsBox.classList.remove('active');
  header.classList.remove('active');

  setTimeout(() => {
    barsBox.classList.add('active');
    header.classList.add('active');
  }, 1000);

  sections.forEach((section) => {
    section.classList.remove('active');
  });

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

navLinks.forEach((link, indexLink) => {
  link.addEventListener('click', () => {
    if(!link.classList.contains('active')) {
      activeSection();

      link.classList.add('active');

      setTimeout(() => {
        sections[indexLink].classList.add('active');
      }, 1000);
    }
  });
});

logoLink.addEventListener('click', () => {
  if(!navLinks[0].classList.contains('active')) {
    activeSection();

    navLinks[0].classList.add('active');

    setTimeout(() => {
      sections[0].classList.add('active');
    }, 1000);
  }
});

// Variables y lógica para el manejo de los bótones de la sección resume
const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const resumeDetail = document.querySelectorAll('.resume-detail');

    // Remover la clase active de los botones
    resumeBtns.forEach(btn => {
      btn.classList.remove('active');
    });

    // Remover la clase active de las tarjetas de detalle
    resumeDetail.forEach(detail => {
      detail.classList.remove('active');
    });

    // Agregar la clase active al botón presionado junto con el detalle correspondiente
    btn.classList.add('active');
    resumeDetail[index].classList.add('active');
  });
});

// Variables y lógica para el carrusel de las imagenes
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
let portfolioIndex = 0;

const activePortfolio = () => {
  const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
  const portfolioDetail = document.querySelectorAll('.portfolio-detail');

  imgSlide.style.transform = `translatex(calc(${portfolioIndex * -100}% - ${portfolioIndex * 2}rem))`;

  portfolioDetail.forEach((item) => {
    item.classList.remove('active');
  });

  portfolioDetail[portfolioIndex].classList.add('active')
};

arrowRight.addEventListener('click', () => {
  if(portfolioIndex < 2) {
    portfolioIndex++
    arrowLeft.classList.remove('disabled');
  } else {
    portfolioIndex = 3;
    arrowRight.classList.add('disabled');
  }

  activePortfolio();
});

arrowLeft.addEventListener('click', () => {
  if(portfolioIndex > 1) {
    portfolioIndex--
    arrowRight.classList.remove('disabled');
  } else {
    portfolioIndex = 0;
    arrowLeft.classList.add('disabled');
  }

  activePortfolio();
});

// Variables y lógica para consultar información dinámica
let servicesContainer = document.querySelector('.services-container');
let myExperienceContainer = document.getElementById('my-experience');
let myEducationContainer = document.getElementById('my-education');
let mySkillsContainer = document.getElementById('my-skills');

// Función para leer archivos JSON
const readJson = (urlFile) => {
  try {
    return fetch(urlFile)
      .then((resp) => {
        if(!resp.ok) {
          console.error('HTTP Error: ', error);
        }

        return resp.json();
      });
  } catch (error) {
    console.error(`Ha ocurrido un error al consultar el archivo '${urlFile}'. Error:`, error);
  }
};

// Consultar y organizar la información para la sección de servicios (Services)
readJson('../db/services.json')
.then((data) => {
  let htmlServices = ``;

  data.services.forEach((service) => {
    htmlServices += `
      <div class="services-box">
        <div class="icon">
          <i class='${service.icon}'></i>
          <!-- <a href="#"><i class='bx bx-left-arrow-alt'></i></a> -->
        </div>
        <h3>${service.title}</h3>
        <p>
          ${service.desc}
        </p>
      </div>
    `;
  });

  servicesContainer.innerHTML = htmlServices;
})
.catch(() => {
  const htmlServicesError = `
    <div class="services-box" style="text-align: center;">
      <div class="icon" style="display: block !important;">
        <i class='bx bx-window-close'></i>
      </div>
      <h3>404 Not Found</h3>
    </div>
  `;

  servicesContainer.innerHTML = htmlServicesError;
});

// Consultar y organizar la información para la sección de resumen (My Experience)
readJson('../db/myExperience.json')
.then((data) => {
  let htmlExperiences = ``;

  data.jobExperiences.forEach((exp) => {
    htmlExperiences += `
      <div class="resume-item">
        <p class="year">${exp.period}</p>
        <h3>${exp.title}</h3>
        <p class="company">${exp.company}</p>
        <p>
          ${exp.desc}
        </p>
      </div>
    `;
  });

  myExperienceContainer.innerHTML = htmlExperiences;
})
.catch(() => {
  const htmlExperiencesError = `
    <div class="resume-item">
      <p class="year">${new Date().getFullYear().toString()}</p>
      <h3>404 Not Found</h3>
      <p class="company">None</p>
    </div>
  `;

  myExperienceContainer.innerHTML = htmlExperiencesError;
});

// Consultar y organizar la información para la sección de resumen (My Education)
readJson('../db/myEducation.json')
.then((data) => {
  let htmlEducation = ``;

  data.myEducation.forEach((education) => {
    htmlEducation += `
      <div class="resume-item">
        <p class="year">${education.period}</p>
        <h3>${education.title}</h3>
        <p class="company">${education.company}</p>
      </div>
    `;
  });

  myEducationContainer.innerHTML = htmlEducation;
})
.catch(() => {
  const htmlEducationError = `
    <div class="resume-item">
      <p class="year">${new Date().getFullYear().toString()}</p>
      <h3>404 Not Found</h3>
      <p class="company">None</p>
    </div>
  `;

  myEducationContainer.innerHTML = htmlEducationError;
});

// Consultar y organizar la información para la sección de resumen (Skills)
readJson('../db/skills.json')
.then((data) => {
  let htmlSkills = ``;

  data.skills.forEach((skill) => {
    htmlSkills += `
      <div class="resume-item">
        <i class='${skill.icon}'></i>
        <span>${skill.title}</span>
      </div>
    `;
  });

  mySkillsContainer.innerHTML = htmlSkills;
})
.catch(() => {
  const htmlSkillsError = `
    <div class="resume-item">
      <i class='bx bx-window-close'></i>
      <span>404 Not Found</span>
    </div>
  `;

  mySkillsContainer.innerHTML = htmlSkillsError;
});