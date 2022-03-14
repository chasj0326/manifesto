const makeText = document.querySelector('.make');
const itText = document.querySelector('.it');
const naturalText = document.querySelector('.natural');
const firstEls = document.querySelectorAll('.frontend');


makeText.addEventListener('click', function(){
  makeText.classList.add('focus');
  firstEls.forEach(function(firstEl, index){
    gsap.to(firstEl, 1, {
      delay: (index+1)*.7,  
      opacity: 1
    });
  });
});

const colorEls = document.querySelectorAll('.itchange');

const aniEl1 = document.querySelector('.animate1');
const aniEl2 = document.querySelector('.animate2');

const aniEl3 = document.querySelector('.interaction');

let itClinkNum = 0;

const inter1Els = document.querySelectorAll('.inter1');
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY>500){
    // alert("scroll");
    itText.classList.add('sizechange');
    colorEls.forEach(function(colorEl, index){
      colorEl.classList.add('itcolor');
    })
    inter1Els.forEach(function(inter1El, index){
      gsap.to(inter1El, 1, {
        delay: (index+1)*.7,  
        opacity: 1
      });
    });
    aniEl1.classList.add('show');
    aniEl2.classList.add('show');
  }else{
    aniEl1.classList.remove('show');
    aniEl2.classList.remove('show');
    colorEls.forEach(function(colorEl, index){
      colorEl.classList.remove('itcolor');
    })
    aniEl3.classList.remove('show2');
    itClinkNum = 0;
    itText.classList.remove('sizechange');
  }
}, 300));
// _.throttle(함수, 시간) 함수가 몇 초에 한번씩 실행되는지!
// window.scrollY = 몇 픽셀 까지 내려갔는지 !


const inter2Els = document.querySelectorAll('.inter2');

itText.addEventListener('click', function(){
  
  if(itClinkNum%2==0){
    aniEl3.classList.add('show2');
    itClinkNum = itClinkNum+1;
  }else{
    aniEl3.classList.remove('show2');
    itClinkNum = itClinkNum+1;
  }
  inter2Els.forEach(function(inter2El, index){
    gsap.to(inter2El, 1, {
      delay: (index+1)*.7,  
      opacity: 1
    });
  });
})


const lastEls = document.querySelectorAll('.last');
// naturalText.addEventListener('click', function(){
//   naturalText.classList.add('focus');
//   lastEls.forEach(function(lastEl, index){
//     gsap.to(lastEl, 1, {
//       delay: (index+1)*.7,  
//       opacity: 1
//     });
//   });
// })
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY>1000){
    // alert("scroll");
    lastEls.forEach(function(lastEl, index){
      gsap.to(lastEl, 1, {
        delay: (index+1)*.7,  
        opacity: 1
      });
    });
    naturalText.classList.add('focus');
  }
  else{
    naturalText.classList.remove('focus');
  }
}, 300));




const fadeEls = document.querySelectorAll('.textitem');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index+1)*.7,  
    opacity: 1
  });
});


