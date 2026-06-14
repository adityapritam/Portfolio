let message_email=document.getElementById("message-email");
message_email.addEventListener("mousemove",function(){
    cursor.style.height="35px";
    cursor.style.width="35px";
});
message_email.addEventListener("mouseleave",function(){
    cursor.style.height="15px";
    cursor.style.width="15px";
});

let submit=document.getElementById("submit");
submit.addEventListener("mousemove",function(){
    cursor.style.height="35px";
    cursor.style.width="35px";
    submit.style.backgroundColor="#F5A623";
    submit.style.color="white";
});
submit.addEventListener("mouseleave",function(){
    cursor.style.height="15px";
    cursor.style.width="15px";
    submit.style.backgroundColor="transparent";
    submit.style.color="#8B8FA8";
});

// send email to me
emailjs.init("AAbbLcH2-A6s5Bj3B");

document.getElementById("contact-form")
.addEventListener("submit", function(e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_vdghfig",
        "template_4ksit6q",
        this
    )
    .then(() => {
        alert("Message sent successfully!");
        this.reset();
    })
    .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
    });

});


//footer icons working

let git2=document.getElementById("git2");
let insta2=document.getElementById("insta2");
let linked2=document.getElementById("linked2");
git2.addEventListener("click",function(){
    window.open("https://github.com/adityapritam", "_blank");
});
insta2.addEventListener("click",function(){
    window.open("www.google.com", "_blank");
});
linked2.addEventListener("click",function(){
    window.open("https://www.linkedin.com/in/adityapritam/", "_blank");
});

git2.addEventListener("mousemove",function(c){
    cursor.style.height="35px";
    cursor.style.width="35px";
});
git2.addEventListener("mouseleave",function(){
    cursor.style.height="15px";
    cursor.style.width="15px";
});
insta2.addEventListener("mousemove",function(c){
    cursor.style.height="35px";
    cursor.style.width="35px";
});
insta2.addEventListener("mouseleave",function(){
    cursor.style.height="15px";
    cursor.style.width="15px";
});

linked2.addEventListener("mousemove",function(c){
    cursor.style.height="35px";
    cursor.style.width="35px";
});
linked2.addEventListener("mouseleave",function(){
    cursor.style.height="15px";
    cursor.style.width="15px";
});