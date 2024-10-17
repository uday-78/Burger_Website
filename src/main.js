const hamburger = document.querySelector('#hamburger-icon');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav-link');

navLink.forEach((link)=>{
    link.addEventListener("click", (e)=>{
        navMenu.classList.add('hidden');
    })
})

hamburger.addEventListener("click", (e)=>{
  navMenu.classList.remove('hidden');
})

navClose.addEventListener("click", (e)=>{
  navMenu.classList.add('hidden');
});


/* ----------------------------  DARK LIGHT THEME ----------------------------*/
 const html = document.querySelector('html');
 const themeBtn = document.querySelector('#theme-toggle');

 if(localStorage.getItem('mode') == 'dark'){
     darkMode();
 } else{
   lightMode();
 }

 themeBtn.addEventListener("click", ()=>{

   themeBtn.classList.add("rotate"); // Add rotation effect when clicked
   setTimeout(() => themeBtn.classList.remove("rotate"), 500);


   if(localStorage.getItem('mode') == 'light'){
     darkMode();
   } else{
    lightMode();
   }
 })

 function darkMode(){
   html.classList.add("dark");
   themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
   themeBtn.classList.add("rotate"); // Add rotate class
   localStorage.setItem("mode", "dark");


   setTimeout(() => {
     themeBtn.classList.remove("rotate");
   }, 500);
 }

  function lightMode(){
    html.classList.remove("dark");
    themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
    themeBtn.classList.add("rotate");
    localStorage.setItem("mode", "light");


    setTimeout(() => {
      themeBtn.classList.remove("rotate");
    }, 500);
  };


/* ----------------------------  TABS ----------------------------*/

const tabs = document.querySelectorAll('.tabs_wrap ul li');
const all = document.querySelectorAll('.item_wrap');
const foods = document.querySelectorAll('.food');
const snacks = document.querySelectorAll('.snack');
const beverages = document.querySelectorAll('.beverage')

tabs.forEach(tab =>{
  tab.addEventListener("click",()=>{
    tabs.forEach( tab =>{
      tab.classList.remove("active");
    })

    tab.classList.add("active");

    const tabval = tab.getAttribute("data-tabs");
    
    all.forEach( item =>{
       item.style.display = 'none';
    })

     if(tabval == 'food'){
      foods.forEach((item) => {
        item.style.display = "block";
      });
     }

     else if(tabval == 'snack'){
      snacks.forEach((item) => {
        item.style.display = "block";
      });
     }

     else if(tabval == 'beverage'){
      beverages.forEach((item) => {
        item.style.display = "block";
      });
     }

     else{
      all.forEach((item) => {
        item.style.display = "block";
      });
     }
  })
})


/* ----------------------------  SHOW SCROLL UP ----------------------------*/

const scrollUp = () =>{
  const scrollUpBtn = document.getElementById('scroll-up');

  if(this.scrollY >= 250){
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } 
  
  else{
     scrollUpBtn.classList.add("-bottom-1/2");
     scrollUpBtn.classList.remove("bottom-4");
  }
}

window.addEventListener('scroll' ,scrollUp)

/* ----------------------------  CHANGE BACKGROUND HEADER ----------------------------*/

const scrollHeader_function = () => {
  const scrollHeader = document.getElementById("header");

  if (this.scrollY >= 50) {
    scrollHeader.classList.add("border-b", "border-secondaryColor");
  } else {
    scrollHeader.classList.remove("border-b", "border-secondaryColor");
  }
};

window.addEventListener("scroll", scrollHeader_function);


/* ----------------------------  SCROLL SECTIONS ACTIVE LINK ----------------------------*/
const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = 'home';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if(this.scrollY >= sectionTop - 60){
      current = section.getAttribute("id");

    }
  })

  navLinks.forEach(item =>{
    item.classList.remove('text-secondaryColor');

    if(item.href.includes(current)){
      item.classList.add("text-secondaryColor");
    }
  });
};

window.addEventListener('scroll' ,activeLink);

/* ----------------------------  SCROLL REVEAL ANIMATION ----------------------------*/

const SR = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400
})

SR.reveal(".home__image");
SR.reveal(".home__content" ,{origin:"bottom"});
SR.reveal(".category__card", { interval:250 });

SR.reveal(".promo__card-1", { origin: "left" });
SR.reveal(".promo__card-2", { origin: "right" });

SR.reveal(".about__image", { origin: "bottom" });
SR.reveal(".about__content", { origin: "top" });

SR.reveal(".menu__items", { origin:"left"});
SR.reveal(".customer__review", { origin:"right"});


SR.reveal(".customer__review");


