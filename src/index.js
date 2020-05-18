import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*SLIDER*/

const slider = document.querySelector('.slider');
const carousel = document.querySelector('.carousel');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

var direction;

window.addEventListener('load', function(){
  
  this.setInterval(() =>{
    direction = -1;

    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = 'translate(-33.4%)';
  }, 3000)
})

prev.addEventListener('click', function(){
    if(direction === -1){
        slider.appendChild(slider.firstElementChild);
        direction = 1;
    }
    
    slider.style.transform = 'translate(33.4%)';
    carousel.style.justifyContent = 'flex-end';
});

next.addEventListener('click', function(){
    direction = -1;

    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = 'translate(-33.4%)';
});

slider.addEventListener('transitionend', function(){
    if(direction === -1){
        slider.appendChild(slider.firstElementChild);
    } else if (direction === 1){
        slider.prepend(slider.lastElementChild);
    }
    

    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(function(){
        slider.style.transition = 'all 0.8s';
    })
})

/*ANIMAÇÕES*/

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset +  ((window.innerHeight * 3)/4);
    target.forEach(function(element){
      if((windowTop) > element.offsetTop){
        element.classList.add(animationClass);
      }
    })
}

window.addEventListener('scroll', function(){
  animeScroll();
})
