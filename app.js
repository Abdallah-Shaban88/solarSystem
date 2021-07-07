const slider = document.querySelector('.slider'),
            sliderCards =Array.from( document.querySelectorAll('.planet-card'));
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
      
      },4500)

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
          },4500)
        })
      })