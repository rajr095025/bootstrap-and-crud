//  Delete by email request using fetch() 
let formDelete = document.getElementById("delete-form");
const deletedMessage = document.getElementById("delete-message")
const deleteEmail = document.getElementById("delete-email")
const deleteSubmitButton = document.getElementById("delete-button");
 formDelete.addEventListener("submit", (e) => {
   e.preventDefault();
   console.log("button clicked");
   console.log(deleteEmail.value);
   let inputValue = deleteEmail.value;
   fetch(`http://localhost:3000/user/email/${inputValue}`)
    // Converting received data to JSON
    .then((response) => response.json())
    .then((json) => {
      // Create a variable to store HTML
        userid = json[0]._id;
        console.log(userid);
        deleteUser(userid);
        console.log(`userid ${userid} was deleted`)
      });
 });

 function deleteUser(inputValue) {
    fetch(`http://localhost:3000/user/${inputValue}`, { method: 'DELETE' })
      // Converting received data to JSON
      .then((response) => response.json())
      .then((json) => {
        // Create a variable to store HTML
        console.log(json.message);
        deletedMessage.innerHTML=`<p>Deleted successfully<p>`
        //deletedMessage.innerHTML = `<p>${json.message}<p>`;
      });
  }