let menuIcons = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');


menuIcons.Onclick = () =>{
menuIcons.classList.toggle('bx-x');
nav.classList.toggle('active');
};

document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const nav = document.querySelector('.nav');

  menuIcon.addEventListener('click', function () {
      nav.classList.toggle('show');
  });
});



let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('.header nav a');

window.onscroll = () =>{
    section.forEach(sec =>{
        let top=window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height){
        navlinks.forEach(link => {
            link.classList.remove('active');
            document.querySelector('header nav a[href*=' + id  + ']').classList.add('active');
        });
       
        };
    });
         /*==========emove toggle icon amd navbar when click nav bar when scrol==========*/
        menuIcons.classList.remove('bx-x');
        nav.classList.remove('active');


    };
    // =====submit btn=====

    let contbtn = document.querySelector(".contbtn");
    contbtn.addEventListener("click", (event) => {
        event.preventDefault();

        contbtn.classList.add("submiting");
        contbtn.innerHTML = "";
            setTimeout(() => {
                contbtn.classList.remove("submiting");
                contbtn .innerHTML = "Done!";
            },3000)
        });

    let submitbtn = document.getElementById('submitbtn');
    submitbtn.addEventListener("click", function(e){
      e.preventDefault();
      var name = document.getElementById("fullname").value;
      var email = document.getElementById("email").value;
      var emailsubject = document.getElementById("emailsubject").value;
      var number = document.getElementById("number").value;
      var textarea = document.getElementById("textarea").value;
      var body = 'name: ' + name + '<br> email: ' + email + '<br> number: ' + number + '<br> textarea: ' + textarea;
      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "olsenfischer08@gmail.com",
        Password : "AF8CF0061BF1C2B3E8D1C4CD40501AADD27C",
        To : 'olsenfischer08@gmail.com',
        From : email,
        Subject : emailsubject,
        Body : body
    }).then(
      message => alert(message)
    );
    })
    
    // ====typed js=====

 var typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
     loop: true
     });                       

    //  ====Swiper====

    var swiper = new Swiper(".slider-content", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      // loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,

      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        336:{
          slidesPerView: 1,
        },
        576:{
          slidesPerView: 1,
        },

        768:{
          slidesPerView: 2,
        },
        968:{
          slidesPerView: 3,
        },
      }
    });


    // =========Circles Animation Skills Section =========
    
function animateCircularProgress(circle, valueElement, targetValue, speed) {
  let startValue = 0;
  
  const progress = setInterval(() => {
      startValue++;
      valueElement.textContent = `${startValue}%`;
      circle.style.background = `conic-gradient(var(--main-color)${startValue * 3.6}deg, var(--bg-color)0deg)`;

      if (startValue === targetValue) {
          clearInterval(progress);
      }
  }, speed);
}

// Select all progress boxes
const progressBoxes = document.querySelectorAll('.box');

// Iterate through each box and initiate the animation
progressBoxes.forEach((box) => {
  const circleProgress = box.querySelector('.circle');
  const circleValue = box.querySelector('.big');
  const progressValue = parseInt(box.getAttribute('data-percent'));
  const animationSpeed = 45;

  animateCircularProgress(circleProgress, circleValue, progressValue, animationSpeed);
});


//================Loader=============
var loader = document.getElementById("pre-loader");
window.addEventListener("load", function(){
  loader.style.display="none";
});


// ==========CURSOR CUSTOM==========
new kursor ({
  type: 4,
  removeDefaultCursor: false,
  color: "#fff"
});

// ==========CUSTOME THEME==========

let theme = document.getElementById("bxMoon");

theme.onclick = function () {
  document.body.classList.toggle("dark-Mode");
}
