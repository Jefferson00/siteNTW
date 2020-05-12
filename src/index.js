import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

let time = 5000,
currentImageIndex = 0,
images = document.querySelectorAll(".img-slide img"),
max = images.length;

function nextImage(){

    
    images[currentImageIndex].classList.remove("selected")
    currentImageIndex ++
    if(currentImageIndex >= max){
        currentImageIndex = 0
    }
    images[currentImageIndex].classList.add("selected")
}

 function start(){
    setInterval(() =>{
        nextImage()
    }, time)
}

window.addEventListener("load", start)
