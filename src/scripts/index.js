import 'regenerator-runtime'; /* for async await transpile */
// import '../styles/main.css';
import '../styles/main.scss';
import DATA from "../DATA.json";

// console.log('Hello Coders! :)');



console.log(DATA.restaurants);

const topdiv = document.querySelector(".top-div");

const text_truncate = function(str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
};

const imgNavbar = document.querySelector("nav a img");
imgNavbar.setAttribute("src", "https://i.ibb.co/xh621tP/Ja-Food-putih.png");
const imgBanner = document.querySelector(".promo-banner img");
imgBanner.setAttribute("src", "https://i.ibb.co/Ld0VNMC/Ja-Food-I-item.png")
const imgFooter = document.querySelector(".footer-container-first img");
imgFooter.setAttribute("src", "https://i.ibb.co/xh621tP/Ja-Food-putih.png");

DATA.restaurants.map(data => {
    // console.log(data.id);
    const toplist = document.createElement("div");
    toplist.setAttribute("class", "top-list");
    toplist.setAttribute("tabindex", "0");
    toplist.innerHTML = `
        <img src="${data.pictureId}" alt="${data.name}" width="234" height="156">
        <div class="top-list-info">
            <div class="info-text">
                <h3>${data.name}</h3>
                <p class="city">${data.city}</p>
            </div>
            <p class="info-text info-text-desc">${text_truncate(data.description, 67,'...')}</p>
            <p class="info-text">⭐️ ${data.rating}</p>
        </div>
    `
    topdiv.appendChild(toplist);
})

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    // console.log(navLinks);
    burger.addEventListener('click', () => {
        
        nav.classList.toggle("nav-active");

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
                nav.style.display = "none";
            }else{
                nav.style.display = "flex";
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.3}s`
            }
        })

        burger.classList.toggle('toggle');
        
    })
}

navSlide();