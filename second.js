// LOADER FOR YEARS OF EXPERIENCE
let loading = document.getElementById("count1");

let value = 0;
let finalvalue=1;

let interval = setInterval(() => {
    loading.textContent = value;
    value++;

    if (value > finalvalue) {
        clearInterval(interval);
    }
}, 50);

// LOADER FOR NO. OF PROJECTS
let loader = document.getElementById("count2");

let val = 0;
let fval=10;

let interval1 = setInterval(() => {
    loader.textContent = val+"+";
    val++;

    if (val > fval) {
        clearInterval(interval1);
    }
}, 50);

let email=document.getElementById("queries-email");
email.addEventListener("mousemove",function(c){
    cursor.style.height="35px";
    cursor.style.width="35px";
});
email.addEventListener("mouseleave",function(){
    cursor.style.height="15px";
    cursor.style.width="15px";
});