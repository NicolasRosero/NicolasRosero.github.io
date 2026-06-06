// Variables y lógica para el carrusel de las imagenes
export function initPortfolio() {
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
}
