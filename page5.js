let blogb=document.querySelectorAll(".blog-box");
let animation1=document.querySelectorAll(".forward-animation");
blogb[0].addEventListener("mouseenter",function(){
    animation1[0].style.animation="moveforward 0.3s ease forwards";
    cursor.style.height="35px";
    cursor.style.width="35px";
});
blogb[0].addEventListener("mouseleave", function() {
    animation1[0].style.animation = "moveback 0.3s ease forwards";
    cursor.style.height="15px";
    cursor.style.width="15px";
});
blogb[1].addEventListener("mouseenter",function(){
    animation1[1].style.animation="moveforward 0.3s ease forwards";
    cursor.style.height="35px";
    cursor.style.width="35px";
});
blogb[1].addEventListener("mouseleave", function() {
    animation1[1].style.animation = "moveback 0.3s ease forwards";
    cursor.style.height="15px";
    cursor.style.width="15px";
});
blogb[2].addEventListener("mouseenter",function(){
    animation1[2].style.animation="moveforward 0.3s ease forwards";
    cursor.style.height="35px";
    cursor.style.width="35px";
});
blogb[2].addEventListener("mouseleave", function() {
    animation1[2].style.animation = "moveback 0.3s ease forwards";
    cursor.style.height="15px";
    cursor.style.width="15px";
});
blogb[3].addEventListener("mouseenter",function(){
    animation1[3].style.animation="moveforward 0.3s ease forwards";
    cursor.style.height="35px";
    cursor.style.width="35px";
});
blogb[3].addEventListener("mouseleave", function() {
    animation1[3].style.animation = "moveback 0.3s ease forwards";
    cursor.style.height="15px";
    cursor.style.width="15px";
});
blogb[0].addEventListener("click",function(){
    window.location.href = "#";
});
blogb[1].addEventListener("click",function(){
    window.location.href = "#";
});
blogb[2].addEventListener("click",function(){
    window.location.href = "#";
});
blogb[3].addEventListener("click",function(){
    window.location.href = "#";
});