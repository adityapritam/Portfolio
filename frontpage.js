let github=document.getElementById("Github");
let instagram=document.getElementById("Instagram");
let linkedin=document.getElementById("LinkedIn");
github.addEventListener("click",function(){
    window.open("https://github.com/adityapritam", "_blank");
});
instagram.addEventListener("click",function(){
    window.open("www.google.com", "_blank");
});
linkedin.addEventListener("click",function(){
    window.open("https://www.linkedin.com/in/adityapritam/", "_blank");
});

let story=document.getElementById("hero2-story");
story.addEventListener("mousemove",function(c){
    cursor.style.height="35px";
    cursor.style.width="35px";
});
story.addEventListener("mouseleave",function(){
    cursor.style.height="15px";
    cursor.style.width="15px";
});

github.addEventListener("mousemove",function(c){
    cursor.style.height="35px";
    cursor.style.width="35px";
});
github.addEventListener("mouseleave",function(){
    cursor.style.height="15px";
    cursor.style.width="15px";
});
instagram.addEventListener("mousemove",function(c){
    cursor.style.height="35px";
    cursor.style.width="35px";
});
instagram.addEventListener("mouseleave",function(){
    cursor.style.height="15px";
    cursor.style.width="15px";
});

linkedin.addEventListener("mousemove",function(c){
    cursor.style.height="35px";
    cursor.style.width="35px";
});
linkedin.addEventListener("mouseleave",function(){
    cursor.style.height="15px";
    cursor.style.width="15px";
});


//scroll to the section.
const servicesNav = document.getElementById("services");
const servicesSection = document.getElementById("servicesection");

window.addEventListener("scroll", () => {
    const top = servicesSection.getBoundingClientRect().top;

    if (top <= 100) {
        servicesNav.classList.add("active");
    } else {
        servicesNav.classList.remove("active");
    }
});
window.addEventListener("scroll", () => {
    const rect = servicesSection.getBoundingClientRect();

    if (rect.top <= 100 && rect.bottom >= 100) {
        servicesNav.classList.add("active");
    } else {
        servicesNav.classList.remove("active");
    }
});


const worksNav = document.getElementById("works");
const worksSection = document.getElementById("workssection");

window.addEventListener("scroll", () => {
    const rect = worksSection.getBoundingClientRect();

    if (rect.top <= 100 && rect.bottom >= 100) {
        worksNav.classList.add("active");
    } else {
        worksNav.classList.remove("active");
    }
});
window.addEventListener("scroll", () => {
    const rect = worksSection.getBoundingClientRect();

    if (rect.top <= 100 && rect.bottom >= 100) {
        worksNav.classList.add("active");
    } else {
        worksNav.classList.remove("active");
    }
});

const blogNav = document.getElementById("blog");
const blogSection = document.getElementById("blogsection");

window.addEventListener("scroll", () => {
    const rect = blogSection.getBoundingClientRect();

    if (rect.top <= 100 && rect.bottom >= 100) {
        blogNav.classList.add("active");
    } else {
        blogNav.classList.remove("active");
    }
});
window.addEventListener("scroll", () => {
    const rect = blogSection.getBoundingClientRect();

    if (rect.top <= 100 && rect.bottom >= 100) {
        blogNav.classList.add("active");
    } else {
        blogNav.classList.remove("active");
    }
});