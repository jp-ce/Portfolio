

AOS.init({ duration: 1000 });

  window.onload = () =>{
    document.querySelector(".home").setAttribute("id", "active");
    
  }

  let home = document.querySelector("#home");
  let about = document.querySelector("#about");
  let work = document.querySelector("#work");
  let contact = document.querySelector("#contact");

  window.addEventListener("scroll", () => {
    var windo = window.pageYOffset;

    if ((about.offsetTop < windo || about.offsetTop == windo) && work.offsetTop > windo) {
      
      document.querySelector(".about-link").setAttribute("id", "active");
      document.querySelector(".work").removeAttribute("id", "active");
      document.querySelector(".contact").removeAttribute("id", "active");
      document.querySelector(".home").removeAttribute("id", "active");
    } else if (work.offsetTop <= windo && contact.offsetTop >= windo) {
      
      document.querySelector(".work").setAttribute("id", "active");
      document.querySelector(".about-link").removeAttribute("id", "active");
      document.querySelector(".contact").removeAttribute("id", "active");
      document.querySelector(".home").removeAttribute("id", "active");
    } else if (contact.offsetTop <= windo) {
      
      document.querySelector(".contact").setAttribute("id", "active");
      document.querySelector(".work").removeAttribute("id", "active");
      document.querySelector(".about-link").removeAttribute("id", "active");
      document.querySelector(".home").removeAttribute("id", "active");
    } else {
      document.querySelector(".home").setAttribute("id", "active");
      document.querySelector(".work").removeAttribute("id", "active");
      document.querySelector(".contact").removeAttribute("id", "active");
      document.querySelector(".about-link").removeAttribute("id", "active");
    }
  });

 

  window.addEventListener("scroll", () => {
    var windo = window.pageYOffset;

    if (about.offsetTop < windo ) {
      
      document.querySelector(".scroll").classList.add("appear");
     
    }else{
      document.querySelector(".scroll").classList.remove("appear");

    }
  });


  //smooth scrolling

  const scroll = new SmoothScroll('a[href*="#"]',{
    speed:600
  });


  //Menu burger 

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
let container = document.querySelector(".container");

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

// menu collapsing when a link is clicked
document.querySelector(".menu-btn").addEventListener("click", () => {
  if (container.classList.contains("change"))
  {
    container.classList.remove("change");
    menuOpen = false;
  } else{
    container.classList.add("change");

    // OOnly applies when yoou click a link/ targets only the first child
  document.querySelectorAll(".menu-link, .social-media-link" ).forEach(el => {
    el.addEventListener("click", () => {
      menuBtn.classList.remove('open');
      container.classList.remove("change");
      menuOpen = false;
    });
  })
  }
});






