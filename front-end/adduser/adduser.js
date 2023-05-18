// post user
let postbutton = document.getElementById("post-button");
let formMessage = document.getElementById("form-message");
postbutton.addEventListener('click',()=>{
    console.log("button clicked");
    formMessage.innerHTML=`<p>Added successfully<p>`
});