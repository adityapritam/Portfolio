let cursor=document.getElementById("cursor");
// let main=document.querySelector(".main");
document.addEventListener("mousemove",function(c){
    cursor.style.left=`${c.x-5}px`;
    cursor.style.top=`${c.y-8}px`;
});

//navbar increase size on hover
let services=document.getElementById("services");
services.addEventListener("mousemove",function(){
    cursor.style.height="30px";
    cursor.style.width="30px";
});
services.addEventListener("mouseleave",function(){
    cursor.style.height="15px";
    cursor.style.width="15px";
});

services.addEventListener("click", () => {
    document.querySelector(".thirdpage").scrollIntoView({
        behavior: "smooth"
    });
});

let works=document.getElementById("works");
works.addEventListener("mousemove",function(){
    cursor.style.height="30px";
    cursor.style.width="30px";
});
works.addEventListener("mouseleave",function(){
    cursor.style.height="15px";
    cursor.style.width="15px";
});

works.addEventListener("click", () => {
    document.querySelector(".fourth-page").scrollIntoView({
        behavior: "smooth"
    });
});

let blog=document.getElementById("blog");
blog.addEventListener("mousemove",function(){
    cursor.style.height="30px";
    cursor.style.width="30px";
});
blog.addEventListener("mouseleave",function(){
    cursor.style.height="15px";
    cursor.style.width="15px";
});

blog.addEventListener("click", () => {
    document.querySelector(".blog").scrollIntoView({
        behavior: "smooth"
    });
});