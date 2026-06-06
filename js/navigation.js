// Variables y lógica para el manejo de la navegación en la página
export function initNavigation() {
  const navLinks = document.querySelectorAll("header nav a");
  const logoLink = document.querySelector(".logo");
  const sections = document.querySelectorAll("section");
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector("header nav");

  // Manejador del icono del menú responsive
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  });

  // Manejador del cambio de sección y las animaciones correspondientes
  const activeSection = () => {
    const header = document.querySelector("header");
    const barsBox = document.querySelector(".bars-box");

    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    barsBox.classList.remove("active");
    header.classList.remove("active");

    setTimeout(() => {
      barsBox.classList.add("active");
      header.classList.add("active");
    }, 1000);

    sections.forEach((section) => {
      section.classList.remove("active");
    });

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  };

  navLinks.forEach((link, indexLink) => {
    link.addEventListener("click", () => {
      if (!link.classList.contains("active")) {
        activeSection();

        link.classList.add("active");

        setTimeout(() => {
          sections[indexLink].classList.add("active");
        }, 1000);
      }
    });
  });

  logoLink.addEventListener("click", () => {
    if (!navLinks[0].classList.contains("active")) {
      activeSection();

      navLinks[0].classList.add("active");

      setTimeout(() => {
        sections[0].classList.add("active");
      }, 1000);
    }
  });
}
