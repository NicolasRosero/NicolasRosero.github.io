import { setLanguage, getLanguage } from "./dataLoader.js";

const translations = {
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_resume: "Resume",
    nav_portfolio: "Portfolio",
    nav_contact: "Contact",
    i_am: "I'm a",
    i_am_coder: "Coder",
    i_am_sd: "Software Designer",
    i_am_ps: "Problem Solver",
    i_am_te: "Lover of Reading",
    my_intro: "As an experienced Junior Software Developer, I bring a robust knowledge of both Back-End and Front-End technologies. My professional journey includes significant contributions to the development and maintenance of applications using Angular JS, SharePoint, HTML, jQuery, JS, CSS, Bootstrap,  React Native and Nodejs. I am highly skilled in integrating advanced features, such as the OpenAI API, into projects , and have a proven track record of maintaining and fixing complex systems.",
    download_cv: "Download CV",
    mys: "My",
    my: "My",
    services: "Services",
    experience: "Experience",
    why_hire_me: "Why Hire Me?",
    answer_hire_me: "As a dedicated Technologist in Analysis and Development of Information Systems, I bring a unique blend of technical expertise in both Back-End and Front-End development, coupled with a strong desire for continuous learning and skill enhancement. My proven track record in developing and maintaining web and mobile applications using diverse technologies such as Angular JS and React Native demonstrates my ability to deliver effective solutions. My commitment to improving professionally and delivering high-quality work makes me a valuable asset to any team.",
    education: "Education",
    skills: "Skills",
    about_me: "About Me",
    exp_desc: "I've actively contributed to the development and maintenance of web and mobile applications using key technologies including Angular JS, SharePoint, HTML, jQuery, JS, TS, CSS, Bootstrap, Angular Ionic, React Native and Nodejs.",
    edu_desc: "My education includes a Technologist in Analysis and Development of Information Systems (SENA) , an academic bachelor's degree with an emphasis in programming , and I am currently pursuing Software Engineering.",
    skills_desc: "My technical proficiencies encompass a broad range of front-end and back-end technologies, like:",
    about: "About",
    me: "Me",
    about_me_desc: "Hi, I am Nicolas Rosero Correal, a dedicated programmer with a strong foundation as a Junior Software Developer. My expertise spans in Full-Stack technologies, allowing me to craft robust and user-friendly applications. I am a responsible, punctual, honest, and open-minded individual, driven by a passion for continuous learning and skill enhancement. I actively seek opportunities to improve professionally and gain experience in diverse technology topics, always striving to deliver assigned tasks effectively. Beyond my professional life, I dedicate time to learning new topics related to my career and my interest in music and reading.",
    name: "Name:",
    gender: "Gender:",
    male: "Male",
    age: "Age:",
    age_desc: "years old",
    status: "Status:",
    single: "Single",
    city: "City:",
    nationality: "Nationality",
    colombian: "Colombian",
    exp_time: "3+ Years",
    full_time_job: "Full Time Job:",
    available: "Available",
    not_available: "Not Available",
    phone: "Phone:",
    languages: "Languages:",
    lang_desc: "Spanish (Native), English (B2)",
    latest: "Latest",
    projects: "Projects",
    projectup_desc: "Training project developed while studying at SENA. It is an information system to ensure the control of the student's evidence, record notes and give some comments.",
    github_repo: "GitHub Repository",
    beat_desc: "Practical project developed at the university. It is a mobile application for the promotion and sale of official products of musical artists and promotion of events and concerts.",
    logixpense_desc: "It is a mobile application, being a simpler version than the web version. It is used to manage the control of money requests and legalization of expenses.",
    belongs_to: "Belongs to",
    live_project: "Live Project",
    realbot_desc: "Realbot is a mobile app that integrates advanced artificial intelligence to give intelligent and contextual responses directly to WhatsApp notifications.",
    work_together: "Let's Work Together",
    contact_desc: "I am eager to collaborate on innovative projects and contribute my expertise to your team. Please feel free to reach out through any of the following channels to discuss how my skills can benefit your goals. I look forward to connecting with you and exploring potential opportunities for partnership and growth.",
    address: "Address:",
    contact_from_desc: "Contact form available",
    soon_with_symbol: "soon!",
    contact_me: "Contact Me ;)",
  },
  es: {
    nav_home: "Inicio",
    nav_services: "Servicios",
    nav_resume: "Currículum",
    nav_portfolio: "Portafolio",
    nav_contact: "Contacto",
    i_am: "Soy un",
    i_am_coder: "Programador",
    i_am_sd: "Diseñador de Software",
    i_am_ps: "Solucionador de Problemas",
    i_am_te: "Amante de la lectura",
    my_intro: "Como desarrollador de software junior con experiencia, aporto un sólido conocimiento tanto de las tecnologías de back-end como de front-end. Mi trayectoria profesional incluye contribuciones significativas al desarrollo y mantenimiento de aplicaciones utilizando Angular JS, SharePoint, HTML, jQuery, JS, CSS, Bootstrap, React Native y Nodejs. Soy muy hábil en integrar características avanzadas, como la API de OpenAI, en proyectos y tengo un historial comprobado de mantenimiento y reparación de sistemas complejos.",
    download_cv: "Descargar CV",
    mys: "Mis",
    my: "Mi",
    services: "Servicios",
    experience: "Experiencia",
    why_hire_me: "¿Por qué contratarme?",
    answer_hire_me: "Como tecnólogo dedicado al análisis y desarrollo de sistemas de información, aporto una combinación única de experiencia técnica tanto en el desarrollo back-end como front-end, junto con un fuerte deseo de aprendizaje continuo y mejora de habilidades. Mi historial comprobado en el desarrollo y mantenimiento de aplicaciones web y móviles utilizando diversas tecnologías como Angular JS y React Native demuestra mi capacidad para ofrecer soluciones efectivas. Mi compromiso de mejorar profesionalmente y ofrecer un trabajo de alta calidad me convierte en un activo valioso para cualquier equipo.",
    education: "Educación",
    skills: "Habilidades",
    about_me: "Sobre Mí",
    exp_desc: "He contribuido activamente al desarrollo y mantenimiento de aplicaciones web y móviles utilizando tecnologías clave como Angular JS, SharePoint, HTML, jQuery, JS, TS, CSS, Bootstrap, Angular Ionic, React Native y Nodejs.",
    edu_desc: "Mi formación incluye un Tecnólogo en Análisis y Desarrollo de Sistemas de Información (SENA), una licenciatura académica con énfasis en programación, y actualmente estoy cursando Ingeniería de Software.",
    skills_desc: "Mis habilidades técnicas abarcan una amplia gama de tecnologías front-end y back-end, como:",
    about: "Sobre",
    me: "Mí",
    about_me_desc: "Hola, soy Nicolas Rosero Correal, un programador dedicado con una base sólida como desarrollador de software junior. Mi experiencia se extiende a las tecnologías full-stack, lo que me permite crear aplicaciones robustas y fáciles de usar. Soy una persona responsable, puntual, honesta y de mente abierta, impulsada por la pasión por el aprendizaje continuo y el desarrollo de habilidades. Busco activamente oportunidades para mejorar profesionalmente y adquirir experiencia en diversos temas de tecnología, siempre esforzándome por cumplir las tareas asignadas de manera efectiva. Más allá de mi vida profesional, dedico tiempo a aprender nuevos temas relacionados con mi carrera y mi interés en la música y la lectura.",
    name: "Nombre:",
    gender: "Genero:",
    male: "Masculino",
    age: "Edad:",
    age_desc: "años",
    status: "Estado:",
    single: "Soltero",
    city: "Ciudad:",
    nationality: "Nacionalidad",
    colombian: "Colombiano",
    exp_time: "Más de 3 años",
    full_time_job: "Trabajo de tiempo completo:",
    available: "Disponible",
    not_available: "No disponible",
    phone: "Celular:",
    languages: "Idiomas:",
    lang_desc: "Español (Nativo), Inglés (B2)",
    latest: "Últimos",
    projects: "Proyectos",
    projectup_desc: "Proyecto de formación desarrollado mientras estudiaba en el SENA. Es un sistema de información para asegurar el control de la evidencia del estudiante, registrar notas y dar algunos comentarios.",
    github_repo: "Repositorio GitHub",
    beat_desc: "Proyecto práctico desarrollado en la universidad. Es una aplicación móvil para la promoción y venta de productos oficiales de artistas musicales y promoción de eventos y conciertos.",
    logixpense_desc: "Es una aplicación móvil, siendo una versión más sencilla que la web. Se utiliza para gestionar el control de las solicitudes de dinero y la legalización de los gastos.",
    belongs_to: "Propiedad de",
    live_project: "Ir al proyecto",
    realbot_desc: "Realbot es una aplicación móvil que integra inteligencia artificial avanzada para dar respuestas inteligentes y contextuales directamente a las notificaciones de WhatsApp.",
    work_together: "Trabajemos juntos",
    contact_desc: "Estoy ansioso por colaborar en proyectos innovadores y aportar mi experiencia a su equipo. Por favor, no dude en ponerse en contacto a través de cualquiera de los siguientes canales para discutir cómo mis habilidades pueden beneficiar sus objetivos. Estoy deseando conectarme contigo y explorar potenciales oportunidades de colaboración y crecimiento.",
    address: "Ubicación:",
    contact_from_desc: "Formulario de contacto",
    soon_with_symbol: "pronto!",
    contact_me: "Contáctame ;)",
  },
};

function applyStaticTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const text = translations[lang][key];

    if (text) {
      el.textContent = text;
      if (el.hasAttribute("data-text")) {
        el.setAttribute("data-text", text);
      }
    }
  });
}

export function initLanguageToggle() {
  const btns = document.querySelectorAll(".lang-btn");

  // Aplicar traducciones iniciales (por si se agrega localStorage en el futuro)
  applyStaticTranslations(getLanguage());

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      if (lang === getLanguage()) return;

      btns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      setLanguage(lang);
      applyStaticTranslations(lang);
    });
  });

  // Establecer edad
  const birthYear = 2003;
  const birthMonth = 10;
  const birthDay = 23;

  const todayBogota = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'America/Bogota' })
  );

  let age = todayBogota.getFullYear() - birthYear;
  const monthDiff = todayBogota.getMonth() + 1 - birthMonth;

  if (monthDiff < 0 || (monthDiff === 0 && todayBogota.getDate() < birthDay)) {
    age--;
  }

  const ageText = document.getElementById("age-text");
  ageText.textContent = `${age}`;
}
