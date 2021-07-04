const slider = document.querySelector('main'),
            sliderCards =Array.from( document.querySelectorAll('.planet-card'));
      let currentSlide= 0;
      
     for(let i = 1; i <= sliderCards.length; i++){ 
       /* document.querySelector('.bullets').innerHTML +=`
        <span class="bullet" order="${i}"> 
        </span>`;*/
        console.log(i)
     }
       const  bullets =Array.from( document.querySelectorAll('.bullet'))
     console.log(bullets)
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
      setInterval(() => {
        currentSlide++;
        if(currentSlide >= sliderCards.length){
          currentSlide = 0;
        }
        sliding();
      console.log(parseFloat(sliderCards[currentSlide].offsetLeft))
      },4500)
      console.log(document.querySelector('.bullets').children)