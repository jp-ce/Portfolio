import { works } from "./works.js";

AOS.init({ duration: 1000 });

//smooth scrolling

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 600,
});

window.onload = () => {
  document.querySelector(".home").setAttribute("id", "active");
};

const home = document.getElementById("home");
const about = document.getElementById("about");
const work = document.getElementById("work");
const contact = document.getElementById("contact");

// Nav-links
const homeLink = document.querySelector(".home");
const aboutLink = document.querySelector(".about-link");
const workLink = document.querySelector(".work");
const contactLink = document.querySelector(".contact");

const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
let container = document.querySelector(".container");

const workSection = document.querySelector(".cards-wrapper");

const scrollBtn = document.querySelector(".scroll");

//nav links active state
window.addEventListener("scroll", () => {
  const windo = window.pageYOffset;

  if (about.offsetTop <= windo && work.offsetTop > windo) {
    aboutLink.setAttribute("id", "active");
    [workLink, contactLink, homeLink].map((a) =>
      a.removeAttribute("id", "active")
    );
  } else if (work.offsetTop <= windo && contact.offsetTop > windo) {
    workLink.setAttribute("id", "active");
    [aboutLink, contactLink, homeLink].map((a) =>
      a.removeAttribute("id", "active")
    );
  } else if (contact.offsetTop <= windo) {
    contactLink.setAttribute("id", "active");
    [workLink, aboutLink, homeLink].map((a) =>
      a.removeAttribute("id", "active")
    );
  } else {
    homeLink.setAttribute("id", "active");
    [workLink, contactLink, aboutLink].map((a) =>
      a.removeAttribute("id", "active")
    );
  }
});

window.addEventListener("scroll", () => {
  const windo = window.pageYOffset;

  about.offsetTop < windo
    ? scrollBtn.classList.add("appear")
    : scrollBtn.classList.remove("appear");
});

//Menu burger

menuBtn.addEventListener("click", () => {
  toggleMenu();
});

const toggleMenu = () => {
  !menuOpen ? menuBtn.classList.add("open") : menuBtn.classList.remove("open");
  menuBtn.classList.contains("open") ? (menuOpen = true) : (menuOpen = false);
};

// menu collapsing when a link is clicked
document.querySelector(".menu-btn").addEventListener("click", () => {
  if (container.classList.contains("change")) {
    container.classList.remove("change");
    menuOpen = false;
  } else {
    container.classList.add("change");

    // OOnly applies when yoou click a link/ targets only the first child
    document
      .querySelectorAll(".menu-link, .social-media-link")
      .forEach((el) => {
        el.addEventListener("click", () => {
          menuBtn.classList.remove("open");
          container.classList.remove("change");
          menuOpen = false;
        });
      });
  }
});

//works section
workSection.innerHTML = works
  .map((item) => {
    const { id, image, title, type, description, link } = item;

    return `
  <div class="card" data-tilt>
            <div class="card-img-wrapper">
              <img src=${image} alt=${title} />
            </div>
            <div class="card-info">
              <h2>${title}</h2>
              <p>${type} <br />${description}</p>
              <a id=${id} class="work-showcase-item" target="_blank"
                ><button>View More</button></a
              >
            </div>
          </div>
  `;
  })
  .join("");

const workItems = document.querySelectorAll(".work-showcase-item");
const modal = document.querySelector(".modal-overlay");
const modalContainer = document.querySelector(".modal-container");

let currentClickedItem;

[...workItems].forEach((x) =>
  x.addEventListener("click", () => {
    currentClickedItem = works.filter((currItem) => currItem.id === x.id);

    modal.classList.add("open-modal");

    modalContainer.innerHTML = currentClickedItem
      .map((currentClicked) => {
        const {
          image,
          title,
          link,
          webTechnologies,
          about,
          repoLink,
        } = currentClicked;

        return `
          <div class="modal-img-container">
            <img src=${image} alt=${title} />
          </div>

          <div class="right-content">
            <h3 class="title">${title}</h3>
            <div class="web-technologies">
          ${webTechnologies.map((w) => `<p>${w}</p>`).join("")}
            </div>
            <div class="about-showcase">
              <h3 class="about-heading">About</h3>
              <p class="about-description">
                ${about
                  .map((sentences) => {
                    return `<p>${sentences}</p>`;
                  })
                  .join("")}
              </p>
            </div>
            <div class="item-links">
              <a href=${link} class="demo"target="_blank"><button>Demo</button></a>
              <a href=${repoLink} class= "repo" target="_blank"><button>Repository</button></a>
            </div>
          </div>
      
    `;
      })
      .join("");
  })
);

const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});

const copyrightDate = document.querySelector(".copyright-date");
const year = new Date().getFullYear();
copyrightDate.textContent = `${year}`;
