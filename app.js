
import {planets} from './planets.js';

 console.log(planets) 
const slider = document.querySelector('.slider'),
      sliderCards =Array.from( document.querySelectorAll('.planet-card')),
      planetName = Array.from(document.querySelectorAll('.planet-name')),
      planetDetails = Array.from(document.querySelectorAll('.planet-details')),
      planetsDescription = Array.from(document.querySelectorAll('.planet-info article'))
      let currentSlide= 0;
     
     for(let i = 1; i <= sliderCards.length; i++){ 
       document.querySelector('.bullets').innerHTML +=`
        <div class="bullet" order="${i}"> 
        <img src="./images/icon${i}.png"/>
        </div>`;
     }
     
       const  bullets =Array.from( document.querySelectorAll('.bullet'))
      function sliding(){
        slider.style.left = `-${sliderCards[currentSlide].offsetLeft}px`;
        removeAllActives(sliderCards)
        removeAllActives(bullets)
        sliderCards[currentSlide].classList.add('active');
        bullets[currentSlide].classList.add('active');
      }
      sliding();
      function removeAllActives(sliderWraper){
      sliderWraper.map(el => el.classList.remove('active')
      )
      }
      let autoSliding = setInterval(() => {
        currentSlide++;
        if(currentSlide >= sliderCards.length){
          currentSlide = 0;
        }
        sliding();
      
      },9500)

      bullets.map(el =>{
        el.addEventListener("click", () => {
          clearInterval(autoSliding);
          currentSlide = el.getAttribute('order')-1
          sliding();
          autoSliding = setInterval(() => {
            currentSlide++;
            if(currentSlide >= sliderCards.length){
              currentSlide = 0;
            }
            sliding();
          },9500)
        })
      })
   
      for(let i in planetName ) {
      const planet = Object.values(planets);
       // planetName[i].textContent = planet[i].name;
          planetDetails[i].innerHTML =`
       <tr>
        <td>name:</td>
        <td>${planet[i].name}</td>
       </tr>
       <tr>
        <td>rotation:</td> 
        <td>${planet[i].rotation}</td>
       </tr>
        <tr>
        <td>day:</td>
        <td>${planet[i].day}</td>
       </tr>
        <tr>
        <td>distance:</td> 
        <td>${planet[i].distance}</td>
       </tr> 
        <tr>
        <td>moons:</td>
        <td>${planet[i].moons}</td>
       </tr>
        <tr>
        <td>gravity:</td>
        <td>${planet[i].gravity}</td>
       </tr>
        `
        planetsDescription[i].textContent = planet[i].description
      }
      
     
       let start,
           end
      slider.addEventListener('touchstart', (e) => start = e.changedTouches[0].pageX )
      slider.addEventListener('touchend', (e) =>{ end = e.changedTouches[0].pageX 
        if (start-end > 0){
          console.log(currentSlide)
          if(currentSlide = sliderCards.length){
              currentSlide = 0;}
          currentSlide++;
          sliding()
        }else if(start-end < 0){
          console.log(currentSlide)
          if(currentSlide <= 0){
              currentSlide = sliderCards.length;}
          currentSlide--;
          sliding();
          }
      })
        
      
       
       
       
     
     