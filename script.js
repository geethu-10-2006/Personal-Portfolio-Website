// Scroll To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if(window.pageYOffset > 300){
    topBtn.style.display = "block";
}
else{
    topBtn.style.display = "none";
}

});

topBtn.addEventListener("click", () => {

window.scrollTo({
    top:0,
    behavior:"smooth"
});

});

// Active Navbar Links

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 120;
const sectionHeight = section.clientHeight;

if(pageYOffset >= sectionTop){
    current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href").includes(current)){
    link.classList.add("active");
}

});

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(
this.getAttribute("href")
).scrollIntoView({
behavior:"smooth"
});

});

});

// Fade In Animation

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
    entry.target.classList.add("show");
}

});

});

const hiddenElements = document.querySelectorAll(
".about-card,.skills-card,.project-card,.contact-box"
);

hiddenElements.forEach(el => {

el.classList.add("hidden");
observer.observe(el);

});

// Mobile Menu (future support)

const menuBtn = document.querySelector(".menu-btn");

if(menuBtn){

menuBtn.addEventListener("click", () => {

document
.querySelector(".nav-links")
.classList.toggle("mobile");

});

}
