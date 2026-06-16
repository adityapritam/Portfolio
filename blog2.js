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


let pg1=document.getElementById("pg-1");
let pg2=document.getElementById("pg-2");
let pg3=document.getElementById("pg-3");
let pg4=document.getElementById("pg-4");
let pg5=document.getElementById("pg-5");
let pg6=document.getElementById("pg-6");

pg1.addEventListener("click", () => {
    document.querySelector(".cont-1").scrollIntoView({
        behavior: "smooth"
    });
    pg1.style.color="#F99C1A";
    pg2.style.color="white";
    pg3.style.color="white";
    pg4.style.color="white";
    pg5.style.color="white";
    pg6.style.color="white";
});
pg2.addEventListener("click", () => {
    document.querySelector(".cont-2").scrollIntoView({
        behavior: "smooth"
    });
    pg1.style.color="white";
    pg2.style.color="#F99C1A";
    pg3.style.color="white";
    pg4.style.color="white";
    pg5.style.color="white";
    pg6.style.color="white";
});
pg3.addEventListener("click", () => {
    document.querySelector(".cont-3").scrollIntoView({
        behavior: "smooth"
    });
    pg1.style.color="white";
    pg2.style.color="white";
    pg3.style.color="#F99C1A";
    pg4.style.color="white";
    pg5.style.color="white";
    pg6.style.color="white";
});
pg4.addEventListener("click", () => {
    document.querySelector(".cont-4").scrollIntoView({
        behavior: "smooth"
    });
    pg1.style.color="white";
    pg2.style.color="white";
    pg3.style.color="white";
    pg4.style.color="#F99C1A";
    pg5.style.color="white";
    pg6.style.color="white";
});
pg5.addEventListener("click", () => {
    document.querySelector(".cont-5").scrollIntoView({
        behavior: "smooth"
    });
    pg1.style.color="white";
    pg2.style.color="white";
    pg3.style.color="white";
    pg4.style.color="white";
    pg5.style.color="#F99C1A";
    pg6.style.color="white";
});
pg6.addEventListener("click", () => {
    document.querySelector(".cont-6").scrollIntoView({
        behavior: "smooth"
    });
    pg1.style.color="white";
    pg2.style.color="white";
    pg3.style.color="white";
    pg4.style.color="white";
    pg5.style.color="white";
    pg6.style.color="#F99C1A";
});