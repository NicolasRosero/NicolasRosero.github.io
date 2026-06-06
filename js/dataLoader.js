// Función para leer archivos JSON
const readJson = (urlFile) => {
  try {
    return fetch(urlFile).then((resp) => {
      if (!resp.ok) {
        console.error("HTTP Error: ", resp.status);
      }

      return resp.json();
    });
  } catch (error) {
    console.error(
      `Ha ocurrido un error al consultar el archivo '${urlFile}'. Error:`,
      error,
    );
  }
};

let currentLang = "en";

export function setLanguage(lang) {
  currentLang = lang;
  loadAllData();
}

export function getLanguage() {
  return currentLang;
}

export function loadAllData() {
  const servicesContainer = document.querySelector(".services-container");
  const myExperienceContainer = document.getElementById("my-experience");
  const myEducationContainer = document.getElementById("my-education");
  const mySkillsContainer = document.getElementById("my-skills");

  const suffix = `_${currentLang}`;

  // Consultar y organizar la información para la sección de servicios (Services)
  readJson(`../db/services${suffix}.json`)
    .then((data) => {
      let htmlServices = ``;

      data.services.forEach((service) => {
        htmlServices += `
        <div class="services-box">
          <div class="icon">
            <i class='${service.icon}'></i>
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
  readJson(`../db/myExperience${suffix}.json`)
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
  readJson(`../db/myEducation${suffix}.json`)
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
  readJson(`../db/skills${suffix}.json`)
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
}
