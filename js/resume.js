// Variables y lógica para el manejo de los bótones de la sección resume
export function initResume() {
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
}
