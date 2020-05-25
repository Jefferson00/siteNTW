import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/* MENU DE ATAS */

const itens = document.querySelectorAll('.itens >div')
const itensProd = document.querySelectorAll('.card-item')

let teste = []
let coiso = []

function ver(){
  for(var i=0; i< itens.length; i++){
        if(itens[i].classList.contains('item-selected')){
            teste[i] = [itens[i].id , true]
        }else{
            teste[i] = [itens[i].id , false]
        }
      }
  for(var x=0;x<itensProd.length;x++){
      for(var r=0;r< teste.length;r++){
          if(teste[r][0] === 'todos' && teste[r][1] === true){
            if (coiso.indexOf(teste[r][0]) == -1){
              coiso.push(teste[r][0])
            }
          }
          else if(itensProd[x].id === teste[r][0] && teste[r][1] === true){
              if (coiso.indexOf(teste[r][0]) == -1){
                  coiso.push(teste[r][0])
                    var postodos = coiso.indexOf('todos')
                    if(postodos != -1){
                        coiso.splice(postodos,1)
                    }
              }
          }
          else if(itensProd[x].id === teste[r][0] && teste[r][1] === false){
                  var pos = coiso.indexOf(teste[r][0])
                  if(pos != -1){
                      coiso.splice(pos, 1)
                  }
          }
      }
  }

  for(var x=0;x<itensProd.length;x++){
    (function(x){
      if(coiso.length == 0){
        itensProd[x].style.opacity = 0
        itensProd[x].style.maxWidth = 0
        itensProd[x].style.margin = 0
        setTimeout(()=>{itensProd[x].style.display = "none"},500)
        
      }
      else if(coiso[0] === "todos"){
        
        itensProd[x].style.display = "block"
              
              setTimeout(()=>{
                itensProd[x].style.maxWidth = "350px"
                itensProd[x].style.margin = "20px"
                itensProd[x].style.opacity = 1
              },300)
      }
      else{
        for(var i =0; i< coiso.length;i++){
          var pos1 = coiso.indexOf(itensProd[x].id)
          
          if(pos1 != -1){
              itensProd[x].style.display = "block"
              
              setTimeout(()=>{
                itensProd[x].style.maxWidth = "350px"
                itensProd[x].style.margin = "20px"
                itensProd[x].style.opacity = 1
              },300)
          }else{
               itensProd[x].style.opacity = 0
               itensProd[x].style.maxWidth = 0
               itensProd[x].style.margin = 0
               setTimeout(()=>{itensProd[x].style.display = "none"},500)
          }
        }
      }
    })(x)
     
  }
}

window.addEventListener('load', function(){
      ver()
})

for(var i=0; i< itens.length; i++){
  (function(i){
    itens[i].addEventListener('click', function(){
      if(itens[i].id === 'todos'){
        for(var y=1; y< itens.length; y++){
          itens[y].classList.remove('item-selected')
        }
        itens[i].classList.add('item-selected')
      }else{
        if(itens[i].classList.contains('item-selected')){
          itens[i].classList.remove('item-selected')
        }else{
          itens[i].classList.add('item-selected')
          itens[0].classList.remove('item-selected')
        }
      }
      ver();
    })
  })(i);
}

/* MENU DOWN */ 

const menu = document.getElementById('menu');

function menuDown(){

  const windowTop = window.pageYOffset +  ((window.innerHeight * 3)/4);
      target.forEach(function(element){
          if((windowTop) > element.offsetTop){
            menu.classList.add('menu-down')
          }
      })
}

function menuUp(){
        menu.classList.remove('menu-down') 
}

if(menu != null){
  window.addEventListener('scroll', function(){
    menuDown();
    if(window.scrollY==0&&window.scrollX==0){
          menuUp();
    }
  })
}

/*SLIDER*/

const slider = document.querySelector('.slider');
const carousel = document.querySelector('.carousel');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

var direction;
if(slider != null){
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
}


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
