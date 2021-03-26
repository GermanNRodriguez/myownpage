import React from "react";
import './styleCarousel.scss'

const Carousel = () => {
    const phrase1 = '"El éxito es la consecuencia ';
    const phrase1_2 = `directa de la perseverancia."`;
    const phrase2 = `"Solo podemos`;
    const phrase2_2 = `ver poco del futuro,`;
    const phrase2_3 = `pero lo suficiente para,`;
    const phrase2_4 = `darnos cuenta de que`;
    const phrase2_5 = `hay mucho que hacer."`;
    const phrase2_6 = `Alan Turing`;
    const phrase3 = `Mi meta siempre será ser el mejor`;
    const phrase3_2 = `en el área donde me ubico,` ;
    const phrase3_3 = `no importa donde me encuentre.`;


  return (
    <div
      id="carousel1"
      class="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <div class="carousel-inner carousel-margin ">
      <div class="carousel-item active">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
            width="400"
            height="350"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Tercer slide"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#ff3d00"></rect>
            
            <text x="18%" y="40%" fill="#eceff1" dy=".3em" className="myPhrase">
              {phrase3}
            </text>
            <text x="23%" y="52%" fill="#eceff1" dy=".3em" className="myPhrase">
              {phrase3_2}
            </text>
            <text x="19%" y="64%" fill="#eceff1" dy=".3em" className="myPhrase">
              {phrase3_3}
            </text>
            
          </svg>
        </div>
        <div class="carousel-item ">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg d-block w-100 svg"
            width="400"
            height="350"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Primer slide"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#2196f3"></rect>
            <text x="23%" y="45%" fill="#eceff1" dy=".3em" className="phrase1">
              {phrase1} 
            </text>
            <text x="23%" y="55%" fill="#eceff1" dy=".3em" className="phrase1">
              {phrase1_2}
            </text>
          </svg>
        </div>
        <div class="carousel-item turing-background" id="turing-background">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
            width="400"
            height="350"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Segundo slide"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#f50057"></rect>
            <text x="30%" y="25%" fill="#eceff1" dy=".3em" className="Turing">
              {phrase2}
            </text>
            <text x="25%" y="35%" fill="#eceff1" dy=".3em" className="Turing">
              {phrase2_2}
            </text>
            <text x="21%" y="45%" fill="#eceff1" dy=".3em" className="Turing">
              {phrase2_3}
            </text>
            <text x="22%" y="55%" fill="#eceff1" dy=".3em" className="Turing">
              {phrase2_4}
            </text>
            <text x="22%" y="65%" fill="#eceff1" dy=".3em" className="Turing">
              {phrase2_5}
            </text>
            <text x="22%" y="83%" fill="#eceff1" dy=".3em">
              {phrase2_6}
            </text>
          </svg>
        </div>
        
      </div>

      <a
        class="carousel-control-prev"
        href="#carousel1"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carousel1"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>

      <ol class="carousel-indicators">
        <li data-target="#carousel1" data-slide-to="0" class="active"></li>
        <li data-target="#carousel1" data-slide-to="1"></li>
        <li data-target="#carousel1" data-slide-to="2"></li>
      </ol>
    </div>
  );
};

export default Carousel;
