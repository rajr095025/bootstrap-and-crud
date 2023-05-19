getAll();
function getAll(){
  fetch("http://localhost:3000/user")
    // Converting received data to JSON
    .then((response) => response.json())
    .then((json) => {
      // Create a variable to store HTML
      let li = ``;
      console.log(json);
      // Loop through each data and add a table row
      json.forEach((user) => {
        li += `
              <tr class="table-light" >
                <td >${user._id} </td>
                <td>${user.email}</td>        
                <td>${user.firstName}</td>        
                <td>${user.lastName}</td>        
                <td>${user.phone}</td>  
                <td>
                    <div class="options" style = "display: flex; justify-content: space-evenly;">
                        <i onClick="editPost(this)" class="fas fa-edit" data-bs-toggle="modal" data-bs-target="#form" style="color:black;" id = "${user._id}"></i>
                        <i onClick="deletePost(this)" class="fas fa-trash-alt" style="color:black; " id = "${user._id}"></i>
                    </div>
                </td>
              </tr>`;
      })
      // Display result
      document.getElementById("users").innerHTML = li;
  });
}

let deletePost = (e) => {
    console.log(e.getAttribute('id'));
    deleteUser(e.getAttribute('id'));
    getAll();
};



let myModal = document.getElementById("my-modal");
let editPost = (e) => {
    console.log(e.getAttribute('id'));
    let userID = e.getAttribute('id');
    let myModal = document.getElementById("my-modal");
    myModal.style.display = "block";

    let email = document.getElementById("update-email");
    let firstName = document.getElementById("update-first-name");
    let lastName = document.getElementById("update-last-name");
    let phone = document.getElementById("update-phone");
    console.log(userID);
    fetch(`http://localhost:3000/user/${userID}`)
      // Converting received data to JSON
      .then((response) => response.json())
      .then((json) => {
        // Create a variable to store HTML
        console.log(json);
        userid = json._id;
        email.value = json.email;
        firstName.value = json.firstName;
        lastName.value = json.lastName;
        phone.value = json.phone;
      });
};

// When the user clicks on <span> (x), close the modal
let modalCloseButton1 = document.getElementById("modal-close-btn");
modalCloseButton1.onclick = function() {
    myModal.style.display = "none";
  }


let modalCloseButton2 = document.getElementById("btn-close");
modalCloseButton2.onclick = function() {
    myModal.style.display = "none";
  }


function deleteUser(inputValue) {
    fetch(`http://localhost:3000/user/${inputValue}`, { method: 'DELETE' })
      // Converting received data to JSON
      .then((response) => response.json())
      .then((json) => {
        // Create a variable to store HTML
        console.log(json.message);
        //deletedMessage.innerHTML = `<p>${json.message}<p>`;
      });
  }


  let updateForm = document.getElementById("update-form");
  const getUserEmail = document.getElementById("update-email");
   updateForm.addEventListener("submit", (e) => {
     e.preventDefault();
     console.log("button clicked");
     console.log(getUserEmail.value);
     let inputValue = getUserEmail.value;
     fetch(`http://localhost:3000/user/email/${inputValue}`)
      // Converting received data to JSON
      .then((response) => response.json())
      .then((json) => {
        // Create a variable to store HTML
        /*
        console.log(`present ${json}`);
        if(json.length() == 0){
            console.log(`empty ${json}`);
        }
        if(json != null){
            console.log(JSON.stringify(json) === "{}")
            document.getElementById("update-form-message").innerHTML = `<p>Email is wrong<p>`;
        }
        else{
        */
          userid = json[0]._id;
          console.log(userid);
          updateUser(userid);
          console.log(`userid ${userid} was printed`);
        });
   });






// updating existing user
function updateUser(userID){
    console.log(`${userID} please print this`);
    let userId = userID;
    let email = document.getElementById("update-email");
    let firstName = document.getElementById("update-first-name");
    let lastName = document.getElementById("update-last-name");
    let phone = document.getElementById("update-phone");
    let updateMessage = document.getElementById("update-form-message");
    if (userId.value == "" || email.value == "") {
      updateMessage.innerHTML = 'User Id and email cannot be null';
      // throw error
    } else {
      // perform operation with form input
      console.log(userId +" "+ email.value+" "+ firstName.value+" "+lastName.value+" "+phone.value+" ");
      updateUser();
      function updateUser() {
        fetch(`http://localhost:3000/user/${userId}`, {
          method: 'PATCH',
          body: JSON.stringify({
            email: `${email.value}`,
            firstName : `${firstName.value}`,
            lastName : `${lastName.value}`,
            phone : `${phone.value}`
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          // Converting received data to JSON
          .then((response) => response.json())
          .then((json) => {
            // Create a variable to store HTML
            console.log(json.message);
            updateMessage.innerHTML = `<p>${json.message}<p>`;
            getAll();
          });
      }
    }
};




/*
// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
*/
