let explore=document.getElementById("explore");
explore.addEventListener("mousemove",function(){
    cursor.style.height="35px";
    cursor.style.width="35px";
});
explore.addEventListener("mouseleave",function(){
    cursor.style.height="15px";
    cursor.style.width="15px";
});

let text1=document.getElementById("pro1-title");
let text2=document.getElementById("pro1-text");
let project1=document.getElementById("project-1");
project1.addEventListener("mousemove",function(){
    text1.style.visibility="visible";
    text2.style.visibility="visible";
    cursor.style.height="35px";
    cursor.style.width="35px";
    project1.style.boxShadow="inset 0 0 30px rgba(0,0,0,0.3)";
});
project1.addEventListener("mouseleave",function(){
    text1.style.visibility="hidden";
    text2.style.visibility="hidden";
    cursor.style.height="15px";
    cursor.style.width="15px"; 
    project1.style.boxShadow="none";
});

let text12=document.getElementById("pro2-title");
let text22=document.getElementById("pro2-text");
let project12=document.getElementById("linepro-1");
project12.addEventListener("mousemove",function(){
    text12.style.visibility="visible";
    text22.style.visibility="visible";
    cursor.style.height="35px";
    cursor.style.width="35px";
    project12.style.boxShadow="inset 0 0 30px rgba(0,0,0,0.3)";
});
project12.addEventListener("mouseleave",function(){
    text12.style.visibility="hidden";
    text22.style.visibility="hidden";
    cursor.style.height="15px";
    cursor.style.width="15px"; 
    project12.style.boxShadow="none";
});

let text13=document.getElementById("pro3-title");
let text23=document.getElementById("pro3-text");
let project13=document.getElementById("linepro-2");
project13.addEventListener("mousemove",function(){
    text13.style.visibility="visible";
    text23.style.visibility="visible";
    cursor.style.height="35px";
    cursor.style.width="35px";
    project13.style.boxShadow="inset 0 0 30px rgba(0,0,0,0.3)";
});
project13.addEventListener("mouseleave",function(){
    text13.style.visibility="hidden";
    text23.style.visibility="hidden";
    cursor.style.height="15px";
    cursor.style.width="15px"; 
    project13.style.boxShadow="none";
});

let text14=document.getElementById("pro4-title");
let text24=document.getElementById("pro4-text");
let project14=document.getElementById("proline-1");
project14.addEventListener("mousemove",function(){
    text14.style.visibility="visible";
    text24.style.visibility="visible";
    cursor.style.height="35px";
    cursor.style.width="35px";
    project14.style.boxShadow="inset 0 0 30px rgba(0,0,0,0.3)";
});
project14.addEventListener("mouseleave",function(){
    text14.style.visibility="hidden";
    text24.style.visibility="hidden";
    cursor.style.height="15px";
    cursor.style.width="15px"; 
    project14.style.boxShadow="none";
});

let exp2=document.getElementById("explore");
exp2.addEventListener("click", () => {
    document.querySelector("#frontpage").scrollIntoView({
        behavior: "smooth"
    });
});