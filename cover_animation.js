let webapp=document.getElementById("web");
let problemtile=document.getElementById("problem");
let full_stack=document.getElementById("fullstack");
    webapp.style.cursor="pointer";
    problemtile.style.cursor="pointer";
    full_stack.style.cursor="pointer";
webapp.addEventListener("click",function(){
    webapp.style.backgroundColor="#F5A623";
    problemtile.style.backgroundColor="#333650";
    full_stack.style.backgroundColor="#333650";
    webapp.style.color="black";
    problemtile.style.color="white";
    full_stack.style.color="white";
});
problemtile.addEventListener("click",function(){
    webapp.style.backgroundColor="#333650";
    problemtile.style.backgroundColor="#F5A623";
    full_stack.style.backgroundColor="#333650";
    webapp.style.color="white";
    problemtile.style.color="black";
    full_stack.style.color="white";
});
full_stack.addEventListener("click",function(){
    webapp.style.backgroundColor="#333650";
    problemtile.style.backgroundColor="#333650";
    full_stack.style.backgroundColor="#F5A623"; 
    webapp.style.color="white";
    problemtile.style.color="white";
    full_stack.style.color="black";   
});